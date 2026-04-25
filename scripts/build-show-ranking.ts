/**
 * Build a ranked editorial backlog of Grateful Dead shows from Archive.org.
 *
 * - Hits archive.org/advancedsearch.php with collection:GratefulDead
 * - Paginates until exhausted
 * - Groups recordings by date (one show → many uploads)
 * - Per-date aggregate: total_reviews, weighted_score (Σ avg_rating × num_reviews),
 *   best_recording_id (prefer SBD, fallback to highest-rated)
 * - Writes /data/top-shows-archive-ranked.json — top 300 unique shows,
 *   excluding dates already in lib/concierge/catalog.ts
 *
 * Run: npx tsx scripts/build-show-ranking.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { CATALOG } from "../lib/concierge/catalog";

type ArchiveDoc = {
  identifier: string;
  date?: string;
  venue?: string;
  coverage?: string;
  avg_rating?: number | string;
  num_reviews?: number | string;
  downloads?: number | string;
};

type ScrapeResponse = {
  items: ArchiveDoc[];
  count: number;
  total: number;
  cursor?: string;
};

type RankedShow = {
  date: string;
  venue: string;
  total_reviews: number;
  weighted_score: number;
  best_recording_id: string;
  archive_url: string;
};

// Use the scrape API — designed for exhaustive cursor-based scanning.
// advancedsearch.php has a deep-pagination limit that breaks past ~10k.
const API = "https://archive.org/services/search/v1/scrape";
const FIELDS = [
  "identifier",
  "date",
  "venue",
  "coverage",
  "avg_rating",
  "num_reviews",
  "downloads",
].join(",");
const PAGE_SIZE = 1000;

function toNumber(v: unknown): number {
  if (v === undefined || v === null || v === "") return 0;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : 0;
}

function normalizeDate(raw: string | undefined): string | null {
  // Archive.org returns dates like "1977-05-08T00:00:00Z"
  if (!raw) return null;
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  return m ? m[1] : null;
}

function isSbd(identifier: string): boolean {
  const lower = identifier.toLowerCase();
  // sbd = soundboard, mtx = matrix (often soundboard-based). Treat mtx as SBD-tier.
  return lower.includes(".sbd.") || lower.includes(".mtx.");
}

async function fetchPage(cursor?: string): Promise<ScrapeResponse> {
  const params = new URLSearchParams();
  params.set("q", "collection:GratefulDead");
  params.set("fields", FIELDS);
  params.set("count", String(PAGE_SIZE));
  if (cursor) params.set("cursor", cursor);

  const url = `${API}?${params.toString()}`;

  // Retry up to 3 times on transient errors (empty bodies / 5xx)
  let lastErr: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "deadhead-ranker" } });
      if (!res.ok) throw new Error(`archive.org returned ${res.status}`);
      const json = (await res.json()) as ScrapeResponse;
      if (!json || !Array.isArray(json.items)) {
        throw new Error("malformed scrape response");
      }
      return json;
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
  throw lastErr;
}

type Checkpoint = {
  docs: ArchiveDoc[];
  cursor: string | null;
  done: boolean;
};

const CHECKPOINT_PATH = path.join(__dirname, "..", "data", ".ranking-checkpoint.json");

function loadCheckpoint(): Checkpoint | null {
  if (!fs.existsSync(CHECKPOINT_PATH)) return null;
  try {
    return JSON.parse(fs.readFileSync(CHECKPOINT_PATH, "utf8")) as Checkpoint;
  } catch {
    return null;
  }
}

function saveCheckpoint(cp: Checkpoint) {
  fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify(cp));
}

async function fetchAllDocs(): Promise<ArchiveDoc[]> {
  const existing = loadCheckpoint();
  const allDocs: ArchiveDoc[] = existing?.docs ?? [];
  let cursor: string | null | undefined = existing?.cursor;
  let pageNum = 1 + Math.floor(allDocs.length / PAGE_SIZE);

  if (existing?.done) {
    console.log(`Resumed: checkpoint marks fetch complete (${allDocs.length} docs).`);
    return allDocs;
  }

  if (existing) {
    console.log(`Resuming from checkpoint: ${allDocs.length} docs already fetched.`);
  } else {
    console.log("Fetching collection:GratefulDead from Archive.org (scrape API)...");
  }

  while (true) {
    const resp = await fetchPage(cursor ?? undefined);
    const docs = resp.items;
    if (docs.length === 0) {
      cursor = null;
      break;
    }
    allDocs.push(...docs);
    console.log(
      `  page ${pageNum}: +${docs.length}  (total so far ${allDocs.length} / ${resp.total})`,
    );
    pageNum++;
    cursor = resp.cursor ?? null;

    // Persist progress after every page so we can resume.
    saveCheckpoint({ docs: allDocs, cursor, done: !cursor });

    if (!cursor) break;
    await new Promise((r) => setTimeout(r, 250));
  }

  saveCheckpoint({ docs: allDocs, cursor: null, done: true });
  return allDocs;
}

async function main() {
  const allDocs = await fetchAllDocs();

  console.log(`Fetched ${allDocs.length} recordings total.`);

  // Group by normalized date
  const byDate = new Map<string, ArchiveDoc[]>();
  let dateParseFailures = 0;

  for (const doc of allDocs) {
    const d = normalizeDate(doc.date);
    if (!d) {
      dateParseFailures++;
      continue;
    }
    if (!byDate.has(d)) byDate.set(d, []);
    byDate.get(d)!.push(doc);
  }

  console.log(`Grouped into ${byDate.size} unique dates. ${dateParseFailures} records had unparseable dates.`);

  // Build per-date aggregate
  const ranked: RankedShow[] = [];
  for (const [date, docs] of byDate.entries()) {
    let totalReviews = 0;
    let weightedScore = 0;

    for (const d of docs) {
      const nr = toNumber(d.num_reviews);
      const ar = toNumber(d.avg_rating);
      totalReviews += nr;
      weightedScore += ar * nr;
    }

    if (totalReviews === 0) continue; // nothing to rank

    // Pick best recording: SBD first, then highest avg_rating * ln(reviews+1)
    const scoredDocs = docs
      .map((d) => ({
        doc: d,
        sbd: isSbd(d.identifier),
        rating: toNumber(d.avg_rating),
        reviews: toNumber(d.num_reviews),
        downloads: toNumber(d.downloads),
      }))
      .sort((a, b) => {
        if (a.sbd !== b.sbd) return a.sbd ? -1 : 1;
        // Both same source tier → higher rating × log(reviews) wins
        const aScore = a.rating * Math.log(1 + a.reviews);
        const bScore = b.rating * Math.log(1 + b.reviews);
        if (aScore !== bScore) return bScore - aScore;
        return b.downloads - a.downloads;
      });

    const best = scoredDocs[0].doc;
    const venue = [best.venue, best.coverage].filter(Boolean).join(" — ") || "Unknown venue";

    ranked.push({
      date,
      venue,
      total_reviews: totalReviews,
      weighted_score: Number(weightedScore.toFixed(2)),
      best_recording_id: best.identifier,
      archive_url: `https://archive.org/details/${best.identifier}`,
    });
  }

  // Exclude dates already in catalog
  const catalogDates = new Set(CATALOG.map((s) => s.date));
  const filtered = ranked.filter((r) => !catalogDates.has(r.date));

  // Sort by weighted_score desc
  filtered.sort((a, b) => b.weighted_score - a.weighted_score);

  const top300 = filtered.slice(0, 300);

  const outPath = path.join(__dirname, "..", "data", "top-shows-archive-ranked.json");
  fs.writeFileSync(outPath, JSON.stringify(top300, null, 2));

  console.log(`\nDone.`);
  console.log(`  Unique dates with reviews: ${ranked.length}`);
  console.log(`  After excluding ${catalogDates.size} catalog dates: ${filtered.length}`);
  console.log(`  Wrote top ${top300.length} → ${outPath}`);
  console.log(`  Date parse failures: ${dateParseFailures}`);

  console.log(`\nTop 20:`);
  for (let i = 0; i < Math.min(20, top300.length); i++) {
    const r = top300[i];
    console.log(
      `  ${String(i + 1).padStart(2)}. ${r.date}  score=${r.weighted_score.toFixed(0).padStart(5)}  reviews=${String(r.total_reviews).padStart(3)}  ${r.venue}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
