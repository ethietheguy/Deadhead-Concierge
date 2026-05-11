/**
 * Pull a research brief for a Grateful Dead show: top Archive.org reviews,
 * search URLs across community sources, and a structured JSON dump suitable
 * for the synthesis stage (scripts/synthesize-show.ts).
 *
 * Usage: npm run research -- 1977-05-08
 *
 * - Resolves the best Archive recording for the date (prefers SBD, then
 *   highest rating × log(reviews)). Uses /data/top-shows-archive-ranked.json
 *   when present, falls back to the Archive scrape API.
 * - Hits https://archive.org/metadata/<id> for full review text.
 * - Ranks reviews by stars × log(length), filters out one-line junk.
 * - Builds search URLs for: r/gratefuldead, Headyversion, Lostlivedead /
 *   deadessays, Jerrybase, general Google.
 *
 * Outputs:
 *   - stderr: diagnostics
 *   - stdout: paste-ready TS comment block (legacy hand-curation flow)
 *   - data/research/<date>.json: structured ResearchBrief (synthesis input)
 *
 * The JSON is the synthesizer's input. Review bodies are stored full-length
 * (cleaned of mojibake) so the citation verifier can substring-match.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { execFileSync } from "node:child_process";

type RankedShow = {
  date: string;
  venue: string;
  total_reviews: number;
  weighted_score: number;
  best_recording_id: string;
  archive_url: string;
};

type ArchiveReview = {
  reviewtitle?: string;
  reviewbody?: string;
  reviewer?: string;
  reviewdate?: string;
  stars?: string | number;
};

type ArchiveMetadataResponse = {
  metadata?: {
    title?: string;
    venue?: string;
    coverage?: string;
    date?: string;
  };
  reviews?: ArchiveReview[];
};

type ArchiveSearchDoc = {
  identifier: string;
  avg_rating?: number | string;
  num_reviews?: number | string;
  venue?: string;
  coverage?: string;
};

type ArchiveAdvancedSearchResponse = {
  response: {
    docs: ArchiveSearchDoc[];
    numFound: number;
  };
};

// Structured output consumed by scripts/synthesize-show.ts.
// Review bodies are full-length (no truncation) so the citation verifier
// can substring-match. Search URLs are for the human curator to enrich the
// brief — the synthesizer can't follow them, but a human can paste back
// quotes from Reddit, Headyversion, etc. into the reviews array.
export type ResearchBrief = {
  date: string;
  venue: string;
  bestRecording: {
    identifier: string;
    archiveUrl: string;
    isSbd: boolean;
    totalReviews: number;
  };
  reviews: Array<{
    title: string;
    body: string;            // full text, cleaned
    reviewer: string;
    reviewDate: string;      // YYYY-MM-DD or ""
    stars: number;
  }>;
  searchUrls: {
    redditGratefulDead: string;
    headyversion: string;
    blogs: string;           // lostlivedead + deadessays site search
    jerrybase: string;       // direct guess at /events/YYYYMMDD-01
    google: string;
  };
  generatedAt: string;       // ISO timestamp
};

const TOP_REVIEWS = 5;
const MIN_REVIEW_LEN = 80;
const MAX_REVIEW_LEN = 700;
// Archive.org appears to cache or rate-limit aggressively against short
// bot-pattern user-agents (we saw repeated requests for different dates
// return the previous query's response). Use something more realistic.
const USER_AGENT =
  "Mozilla/5.0 (Deadhead catalog research; +https://github.com/ethanleichter/deadhead)";

function usage(): never {
  console.error("Usage: npm run research -- YYYY-MM-DD");
  process.exit(1);
}

function validateDate(raw: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) usage();
  return raw;
}

function loadRanking(): RankedShow[] {
  const p = path.join(__dirname, "..", "data", "top-shows-archive-ranked.json");
  if (!fs.existsSync(p)) return [];
  try {
    return JSON.parse(fs.readFileSync(p, "utf8")) as RankedShow[];
  } catch {
    return [];
  }
}

function isSbd(identifier: string): boolean {
  const lower = identifier.toLowerCase();
  return lower.includes(".sbd.") || lower.includes(".mtx.");
}

function toNumber(v: unknown): number {
  if (v === undefined || v === null || v === "") return 0;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : 0;
}

async function fetchJson<T>(url: string): Promise<T | null> {
  // Node's built-in fetch (undici) was returning the previous request's
  // payload for batch runs against archive.org/services/search — almost
  // certainly undici connection-pool reuse colliding with an Archive CDN
  // cache. Cache-Control / Connection: close / cache buster query params
  // all failed to break it. curl from the same machine works reliably,
  // so we shell out. Slower per call but correct under batch use.
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const stdout = execFileSync(
        "curl",
        ["-s", "-S", "--fail", "-A", USER_AGENT, url],
        { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 },
      );
      return JSON.parse(stdout) as T;
    } catch (err) {
      if (attempt === 3) {
        console.error(`fetch failed after 3 attempts: ${url}\n  ${err}`);
        return null;
      }
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
  return null;
}

type Best = {
  id: string;
  url: string;
  venue: string;
  numReviews: number;
};

async function findBestRecording(date: string): Promise<Best | null> {
  // First try the prebuilt ranking file (one row per date, already best-recording)
  const ranking = loadRanking();
  const ranked = ranking.find((r) => r.date === date);
  if (ranked) {
    return {
      id: ranked.best_recording_id,
      url: ranked.archive_url,
      venue: ranked.venue,
      numReviews: ranked.total_reviews,
    };
  }

  // Fallback: query Archive directly for that date.
  //
  // Earlier this used /services/search/v1/scrape, which works one-off but is
  // aggressively cached at the CDN layer in a way that returns the previous
  // request's payload across a batch. (Confirmed by curling the same path
  // with two different date queries — second response = first response.)
  // /advancedsearch.php?output=json appears to use a different cache key and
  // returns correct per-query results under serial batch use.
  const params = new URLSearchParams();
  params.set("q", `collection:GratefulDead AND date:${date}`);
  params.set("fl", "identifier,avg_rating,num_reviews,venue,coverage");
  params.set("rows", "200");
  params.set("output", "json");

  const url = `https://archive.org/advancedsearch.php?${params.toString()}`;
  const json = await fetchJson<ArchiveAdvancedSearchResponse>(url);
  const docs = json?.response?.docs ?? [];
  if (docs.length === 0) {
    console.error(`No Archive recordings found for ${date}.`);
    return null;
  }

  const scored = docs
    .map((d) => ({
      id: d.identifier,
      sbd: isSbd(d.identifier),
      rating: toNumber(d.avg_rating),
      reviews: toNumber(d.num_reviews),
      venue: [d.venue, d.coverage].filter(Boolean).join(" — "),
    }))
    .sort((a, b) => {
      if (a.sbd !== b.sbd) return a.sbd ? -1 : 1;
      const aS = a.rating * Math.log(1 + a.reviews);
      const bS = b.rating * Math.log(1 + b.reviews);
      return bS - aS;
    });

  const best = scored[0];

  // Sanity guardrail: every Grateful Dead Archive identifier embeds the date
  // as `gdYY-MM-DD` or `gdYYYY-MM-DD`. If the picked recording's id doesn't
  // match the requested date, something went wrong (bad cache, rate limit
  // returning wrong items, etc.) — fail loud instead of writing bad data.
  const [yyyy, mm, dd] = date.split("-");
  const yy = yyyy.slice(2);
  const expectedShortId = `gd${yy}-${mm}-${dd}`;
  const expectedLongId = `gd${yyyy}-${mm}-${dd}`;
  if (
    !best.id.toLowerCase().startsWith(expectedShortId) &&
    !best.id.toLowerCase().startsWith(expectedLongId)
  ) {
    console.error(
      `\nERROR: Archive returned a recording whose id (${best.id}) doesn't match the requested date (${date}).`,
    );
    console.error(
      `Expected the id to start with "${expectedShortId}" or "${expectedLongId}". Bailing rather than write bad data.`,
    );
    return null;
  }

  return {
    id: best.id,
    url: `https://archive.org/details/${best.id}`,
    venue: best.venue || "Unknown venue",
    numReviews: best.reviews,
  };
}

function rankReviews(reviews: ArchiveReview[]): ArchiveReview[] {
  return [...reviews]
    .filter((r) => (r.reviewbody ?? "").trim().length >= MIN_REVIEW_LEN)
    .sort((a, b) => {
      const aLen = (a.reviewbody ?? "").length;
      const bLen = (b.reviewbody ?? "").length;
      const aScore = (toNumber(a.stars) || 3) * Math.log(1 + aLen);
      const bScore = (toNumber(b.stars) || 3) * Math.log(1 + bLen);
      return bScore - aScore;
    });
}

function cleanText(s: string): string {
  // Strip mojibake: runs of 3+ non-ASCII chars (a signature of double-encoded
  // Latin-1/UTF-8 from old Archive reviews), plus stray Ã / Â artifacts.
  // Single accented chars in names (José, Müller) survive.
  return s
    .replace(/[^\x00-\x7F]{3,}/g, "")
    .replace(/[ÀÂÃ][-¿]?/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function squish(s: string, n: number): string {
  const cleaned = cleanText(s);
  return cleaned.length > n ? cleaned.slice(0, n - 1).trimEnd() + "…" : cleaned;
}

function starString(n: number): string {
  const filled = Math.max(0, Math.min(5, Math.round(n)));
  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

function googleSearch(q: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}

function commentLines(lines: string[]): string {
  return lines.map((l) => (l === "" ? "//" : `// ${l}`)).join("\n");
}

// e.g. "May 8, 1977" — the format Headyversion uses on its version pages.
function longDate(date: string): string {
  const [y, m, d] = date.split("-").map((s) => parseInt(s, 10));
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

function buildSearchUrls(date: string, venue: string): ResearchBrief["searchUrls"] {
  const ymd = date.replace(/-/g, "");
  return {
    redditGratefulDead: googleSearch(`site:reddit.com/r/gratefuldead "${date}"`),
    headyversion: googleSearch(`site:headyversion.com "${longDate(date)}"`),
    blogs: googleSearch(
      `(site:lostlivedead.blogspot.com OR site:deadessays.blogspot.com) "${date}"`,
    ),
    jerrybase: `https://jerrybase.com/events/${ymd}-01`,
    google: googleSearch(`"${date}" Grateful Dead ${venue}`),
  };
}

async function main() {
  const arg = process.argv[2];
  if (!arg) usage();
  const date = validateDate(arg);

  console.error(`\nResearching ${date}…`);

  const best = await findBestRecording(date);
  if (!best) {
    console.error(`No recording found. Aborting.`);
    process.exit(1);
  }

  console.error(`  Best recording: ${best.id} ${isSbd(best.id) ? "(SBD)" : "(AUD/other)"}`);
  console.error(`  Venue: ${best.venue}`);
  console.error(`  Fetching reviews…`);

  const meta = await fetchJson<ArchiveMetadataResponse>(
    `https://archive.org/metadata/${best.id}`,
  );
  const reviews = meta?.reviews ?? [];
  const top = rankReviews(reviews).slice(0, TOP_REVIEWS);
  const venueClean = meta?.metadata?.venue || best.venue;

  console.error(
    `  ${reviews.length} reviews on this recording — keeping top ${top.length} after filtering.\n`,
  );

  const searchUrls = buildSearchUrls(date, venueClean);

  // Build paste-ready brief
  const lines: string[] = [];
  lines.push("─".repeat(70));
  lines.push(`Research brief: ${date}`);
  lines.push(`Venue: ${venueClean}`);
  lines.push(`Best Archive recording: ${best.id}  ${isSbd(best.id) ? "(SBD)" : "(AUD/other)"}`);
  lines.push(`Total reviews on Archive: ${best.numReviews}`);
  lines.push(`Listen: ${best.url}`);
  lines.push("");
  lines.push("Community sources to enrich:");
  lines.push(`  Reddit:       ${searchUrls.redditGratefulDead}`);
  lines.push(`  Headyversion: ${searchUrls.headyversion}`);
  lines.push(`  Blogs:        ${searchUrls.blogs}`);
  lines.push(`  Jerrybase:    ${searchUrls.jerrybase}`);
  lines.push(`  General:      ${searchUrls.google}`);
  lines.push("─".repeat(70));
  lines.push("");

  if (top.length === 0) {
    lines.push("NO SUBSTANTIVE REVIEWS on this recording.");
    lines.push("Try another source or skip this date until reviews show up.");
  } else {
    lines.push(`TOP ${top.length} REVIEWS (ranked by stars × length):`);
    lines.push("");
    for (const r of top) {
      const s = starString(toNumber(r.stars));
      const title = squish(r.reviewtitle ?? "(untitled)", 80);
      const reviewer = (r.reviewer ?? "anonymous").trim();
      const reviewDate = (r.reviewdate ?? "").slice(0, 10);
      const body = squish(r.reviewbody ?? "", MAX_REVIEW_LEN);
      lines.push(`${s}  "${title}"`);
      lines.push(`        — ${reviewer}${reviewDate ? `, ${reviewDate}` : ""}`);
      lines.push(`  ${body}`);
      lines.push("");
    }
  }

  lines.push("─".repeat(70));
  lines.push("WRITING RULES (for this entry)");
  lines.push("");
  lines.push("listenFor:");
  lines.push("  • Every concrete claim (jam character, vocal moment, segue, etc.)");
  lines.push("    must trace to a review above OR to your own listening session.");
  lines.push("  • If you can't anchor it, cut it. No \"every song lands\" filler.");
  lines.push("");
  lines.push("context:");
  lines.push("  • Era / tour-level facts can come from established Dead lore");
  lines.push("    (e.g. \"May '77 northeastern run\", \"Pigpen's last shows\").");
  lines.push("  • Recording-specific claims (source quality, lineage) come from");
  lines.push("    the Archive identifier itself — SBD vs AUD is in the ID.");
  lines.push("");
  lines.push("funFact:");
  lines.push("  • Must be verifiable. If you can't source it from the reviews,");
  lines.push("    Reddit, or established lore, leave it empty.");
  lines.push("─".repeat(70));

  process.stdout.write(commentLines(lines) + "\n");

  // Structured JSON output for the synthesis stage. Reviews keep their
  // FULL cleaned bodies (no truncation) so the citation verifier can
  // substring-match against them.
  const brief: ResearchBrief = {
    date,
    venue: venueClean,
    bestRecording: {
      identifier: best.id,
      archiveUrl: best.url,
      isSbd: isSbd(best.id),
      totalReviews: best.numReviews,
    },
    reviews: top.map((r) => ({
      title: cleanText(r.reviewtitle ?? ""),
      body: cleanText(r.reviewbody ?? ""),
      reviewer: (r.reviewer ?? "anonymous").trim(),
      reviewDate: (r.reviewdate ?? "").slice(0, 10),
      stars: toNumber(r.stars),
    })),
    searchUrls,
    generatedAt: new Date().toISOString(),
  };

  const outDir = path.join(__dirname, "..", "data", "research");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${date}.json`);
  fs.writeFileSync(outPath, JSON.stringify(brief, null, 2) + "\n", "utf8");
  console.error(`\n  Wrote structured brief → ${path.relative(process.cwd(), outPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
