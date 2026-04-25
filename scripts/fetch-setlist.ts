/**
 * Fetch a Grateful Dead setlist from gdshowsdb and emit a ConciergeShow stub.
 *
 * Usage: npm run setlist -- 1977-05-08
 *
 * - Hits https://raw.githubusercontent.com/jefmsmit/gdshowsdb/main/data/gdshowsdb/<year>.yaml
 * - Finds the show by date
 * - Collapses segued runs into single " > " joined strings
 * - Looks up archive_url in /data/top-shows-archive-ranked.json if present,
 *   else falls back to /api/archive/<date>
 * - Prints a ConciergeShow stub with editorial fields set to 'TODO'
 *
 * Paste the output into lib/concierge/catalog.ts and write the editorial yourself.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import * as yaml from "js-yaml";

type YamlSong = {
  ":uuid"?: string;
  ":name": string;
  ":segued": boolean;
};

type YamlSet = {
  ":uuid"?: string;
  ":songs": YamlSong[];
};

type YamlShow = {
  ":uuid"?: string;
  ":venue"?: string;
  ":city"?: string;
  ":state"?: string;
  ":country"?: string;
  ":sets"?: YamlSet[];
};

type YamlYear = Record<string, YamlShow>;

type RankedShow = {
  date: string;
  venue: string;
  total_reviews: number;
  weighted_score: number;
  best_recording_id: string;
  archive_url: string;
};

function usage(): never {
  console.error("Usage: npm run setlist -- YYYY-MM-DD");
  process.exit(1);
}

function validateDate(raw: string): { iso: string; year: string; slash: string } {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if (!m) usage();
  const [, y, mo, d] = m;
  return { iso: raw, year: y, slash: `${y}/${mo}/${d}` };
}

/**
 * Collapse sequential segued songs into " > " joined strings.
 * A song with segued=true flows INTO the next one.
 */
function collapseSegues(sets: YamlSet[]): string[] {
  const songs: { name: string; segued: boolean }[] = [];
  for (const set of sets) {
    for (const s of set[":songs"] ?? []) {
      songs.push({ name: (s[":name"] ?? "").trim(), segued: !!s[":segued"] });
    }
  }

  const out: string[] = [];
  let chain: string[] = [];
  for (const s of songs) {
    if (!s.name) continue;
    chain.push(s.name);
    if (!s.segued) {
      out.push(chain.join(" > "));
      chain = [];
    }
  }
  // Flush any dangling chain (last song with segued=true but nothing after)
  if (chain.length > 0) out.push(chain.join(" > "));
  return out;
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

function slugIdFromDate(date: string): string {
  return `gd-${date}`;
}

function tsString(s: string): string {
  // Escape for a double-quoted TS literal
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  const arg = process.argv[2];
  if (!arg) usage();
  const { iso, year, slash } = validateDate(arg);

  const url = `https://raw.githubusercontent.com/jefmsmit/gdshowsdb/main/data/gdshowsdb/${year}.yaml`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch ${url}: ${res.status}`);
    process.exit(1);
  }
  const text = await res.text();
  const parsed = yaml.load(text) as YamlYear | null;
  if (!parsed || typeof parsed !== "object") {
    console.error("Failed to parse YAML");
    process.exit(1);
  }

  const show = parsed[slash];
  if (!show) {
    console.error(`Date ${iso} not found in ${year}.yaml`);
    process.exit(1);
  }

  const venue = show[":venue"] ?? "TODO";
  const city = show[":city"] ?? "TODO";
  const state = show[":state"] ?? "";
  const setlist = collapseSegues(show[":sets"] ?? []);

  // Pull archive_url from ranking if available
  const ranking = loadRanking();
  const ranked = ranking.find((r) => r.date === iso);
  const archiveUrl = ranked ? ranked.archive_url : `/api/archive/${iso}`;

  const id = slugIdFromDate(iso);

  const setlistLines = setlist
    .map((line) => `      "${tsString(line)}",`)
    .join("\n");

  const stub = `  // ── TODO: one-line headline for ${iso} ────────────────────────
  {
    id: "${id}",
    date: "${iso}",
    venue: "${tsString(venue)}",
    city: "${tsString(city)}",
    state: "${tsString(state)}",
    setlist: [
${setlistLines}
    ],
    archiveUrl: "${tsString(archiveUrl)}",
    era: 'TODO' as any,
    moods: [],
    styles: [],
    audioQuality: 'TODO' as any,
    significance: 'TODO' as any,
    bestFor: [],
    headline: 'TODO',
    whyThisShow: 'TODO',
    listenFor: 'TODO',
    context: 'TODO',
    funFact: 'TODO',
  },`;

  // Emit stub only to stdout. Any diagnostics go to stderr.
  console.error(`\n// Source: gdshowsdb ${year}.yaml  |  ${venue}, ${city}${state ? ", " + state : ""}`);
  console.error(`// Archive URL resolved from: ${ranked ? "top-shows-archive-ranked.json" : "fallback /api/archive/<date>"}`);
  console.error(`// Songs: ${setlist.length} items (segues collapsed)`);
  console.error("");

  process.stdout.write(stub + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
