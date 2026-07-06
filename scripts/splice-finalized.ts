/**
 * Splice a finalized editorial JSON into the live catalog.
 *
 * Usage: npm run splice -- 1977-05-22   (or: tsx scripts/splice-finalized.ts 1977-05-22)
 *
 * Moves the show's entry from lib/concierge/catalog-queue.ts to
 * lib/concierge/catalog.ts:
 *   - Keeps the queue entry's metadata exactly (id, date, venue, city, state,
 *     setlist, archiveUrl, era, moods, styles, audioQuality, significance,
 *     bestFor, releasedAs).
 *   - Replaces headline, whyThisShow, listenFor, context, funFact with the
 *     verified versions from data/finalized/<date>.json, and adds
 *     communityVoices (dropping the pipeline-internal "job" field).
 *   - Inserts into CATALOG preserving the numeric comment-order convention
 *     (`// ── N. …`), before the unnumbered tail entries.
 *
 * Text-based on purpose: catalog files carry per-entry comments that an
 * AST round-trip would mangle.
 */
import * as fs from "node:fs";
import * as path from "node:path";

const CATALOG_PATH = path.join(__dirname, "..", "lib", "concierge", "catalog.ts");
const QUEUE_PATH = path.join(__dirname, "..", "lib", "concierge", "catalog-queue.ts");

type Finalized = {
  id: string;
  date: string;
  communityVoices: Array<{
    quote: string;
    attribution: string;
    source: string;
    job?: string;
  }>;
  whyThisShow: string;
  listenFor: string;
  context: string;
  funFact: string | null;
  headline: string;
};

function fail(msg: string): never {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// Wrap prose into the catalog's backtick-concatenation style:
//   whyThisShow:
//     `first chunk of text ` +
//     `second chunk of text.`,
function formatProse(key: string, text: string): string {
  const escaped = text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  const words = escaped.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if (cur.length > 0 && cur.length + 1 + w.length > 92) {
      lines.push(cur);
      cur = w;
    } else {
      cur = cur.length === 0 ? w : `${cur} ${w}`;
    }
  }
  if (cur.length > 0) lines.push(cur);
  const body = lines
    .map((l, i) => (i < lines.length - 1 ? `      \`${l} \` +` : `      \`${l}\`,`))
    .join("\n");
  return `    ${key}:\n${body}`;
}

type Block = {
  start: number; // index of the comment line
  end: number;   // index one past the last line of the block (after trailing blank lines)
  comment: string;
  lines: string[];
};

// Split a catalog-style file into entry blocks, each starting at a
// `  // ── …` comment line and running until the next one (or `];`).
function findBlocks(lines: string[]): Block[] {
  const commentIdx: number[] = [];
  let endOfArray = lines.length;
  lines.forEach((l, i) => {
    if (/^  \/\/ ── /.test(l)) commentIdx.push(i);
    if (/^\];/.test(l) && i < endOfArray) endOfArray = i;
  });
  return commentIdx.map((start, k) => {
    const end = k + 1 < commentIdx.length ? commentIdx[k + 1] : endOfArray;
    return { start, end, comment: lines[start], lines: lines.slice(start, end) };
  });
}

function blockNumber(comment: string): number {
  const m = comment.match(/\/\/ ── (\d+)\./);
  return m ? parseInt(m[1], 10) : Number.POSITIVE_INFINITY;
}

function main() {
  const date = process.argv[2];
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.error("Usage: tsx scripts/splice-finalized.ts YYYY-MM-DD");
    process.exit(1);
  }

  const finalizedPath = path.join(__dirname, "..", "data", "finalized", `${date}.json`);
  if (!fs.existsSync(finalizedPath)) fail(`Missing ${finalizedPath} — run the pipeline first.`);
  const fin = JSON.parse(fs.readFileSync(finalizedPath, "utf8")) as Finalized;

  const queueSrc = fs.readFileSync(QUEUE_PATH, "utf8");
  const queueLines = queueSrc.split("\n");
  const queueBlocks = findBlocks(queueLines);
  const target = queueBlocks.find((b) => b.lines.some((l) => l.includes(`date: "${date}"`)));
  if (!target) fail(`No queue entry for ${date} in catalog-queue.ts.`);

  // Keep everything up to the first editorial field; regenerate the rest.
  const headlineIdx = target.lines.findIndex((l) => /^    headline:/.test(l));
  if (headlineIdx === -1) fail(`Queue entry for ${date} has no headline field.`);
  const metaLines = target.lines.slice(0, headlineIdx);

  // Sanity: metadata must be complete and editorial-free.
  for (const key of ["id:", "date:", "venue:", "city:", "setlist:", "archiveUrl:", "era:", "moods:", "styles:", "audioQuality:", "significance:", "bestFor:"]) {
    if (!metaLines.some((l) => l.trimStart().startsWith(key))) {
      fail(`Queue entry for ${date}: metadata field ${key} not found before headline — refusing to splice.`);
    }
  }
  const tail = target.lines.slice(headlineIdx).join("\n");
  for (const key of ["setlist:", "archiveUrl:", "moods:", "releasedAs:"]) {
    if (tail.includes(`    ${key}`)) {
      fail(`Queue entry for ${date}: ${key} appears after headline — refusing to splice.`);
    }
  }

  // Build the new entry block.
  const editorial: string[] = [];
  editorial.push(`    headline: ${JSON.stringify(fin.headline)},`);
  editorial.push(formatProse("whyThisShow", fin.whyThisShow));
  editorial.push(formatProse("listenFor", fin.listenFor));
  editorial.push(formatProse("context", fin.context));
  if (fin.funFact) editorial.push(formatProse("funFact", fin.funFact));
  editorial.push(`    communityVoices: [`);
  for (const v of fin.communityVoices) {
    editorial.push(
      `      { quote: ${JSON.stringify(v.quote)}, attribution: ${JSON.stringify(v.attribution)}, source: ${JSON.stringify(v.source)} },`,
    );
  }
  editorial.push(`    ],`);
  editorial.push(`    headyversionRanks: [],`);
  editorial.push(`  },`);

  const newBlock = [...metaLines, ...editorial, ""];

  // Insert into catalog.ts by numeric comment order.
  const catalogSrc = fs.readFileSync(CATALOG_PATH, "utf8");
  if (catalogSrc.includes(`date: "${date}"`)) fail(`catalog.ts already has an entry for ${date}.`);
  const catalogLines = catalogSrc.split("\n");
  const catalogBlocks = findBlocks(catalogLines);
  const n = blockNumber(target.comment);
  const after = catalogBlocks.find((b) => blockNumber(b.comment) > n);
  const insertAt = after ? after.start : catalogBlocks[catalogBlocks.length - 1].end;
  const newCatalogLines = [
    ...catalogLines.slice(0, insertAt),
    ...newBlock,
    ...catalogLines.slice(insertAt),
  ];

  // Remove the block from the queue.
  const newQueueLines = [
    ...queueLines.slice(0, target.start),
    ...queueLines.slice(target.end),
  ];

  fs.writeFileSync(CATALOG_PATH, newCatalogLines.join("\n"), "utf8");
  fs.writeFileSync(QUEUE_PATH, newQueueLines.join("\n"), "utf8");
  console.error(`✓ Spliced ${date} into catalog.ts (queue entry removed).`);
}

main();
