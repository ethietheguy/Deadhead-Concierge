/**
 * Verify a synthesis output against its research brief, then emit a
 * catalog-ready finalized JSON with citation tags stripped.
 *
 * Usage: npm run verify -- 1977-05-08
 *
 * Reads:
 *   data/synthesis/<date>.json  (citation-grounded draft from synthesize-show.ts)
 *   data/research/<date>.json   (review bodies — the citation source)
 *
 * Checks:
 *   1. Every [source: '...'] tag in editorial fields (whyThisShow, listenFor,
 *      context, funFact) — the quoted string must be a substring of some
 *      review body in the research brief.
 *   2. Every communityVoices[].quote — must be a substring of some review body.
 *
 * Citation strings are matched after light normalization (whitespace
 * collapsed, smart quotes folded to ASCII) so that the model's prose
 * formatting doesn't break legitimate matches.
 *
 * If any check fails, exits non-zero with a human-readable list of failures.
 *
 * On success, strips the [source: '...'] tags from the editorial fields and
 * writes data/finalized/<date>.json — the version meant to be spliced into
 * lib/concierge/catalog.ts.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import type { ResearchBrief } from "./research-show";

type SynthesisOutput = {
  id: string;
  date: string;
  communityVoices: Array<{
    quote: string;
    attribution: string;
    source: string;
    job: string;
  }>;
  whyThisShow: string;
  listenFor: string;
  context: string;
  funFact: string | null;
  headline: string;
};

type FinalizedOutput = Omit<
  SynthesisOutput,
  "whyThisShow" | "listenFor" | "context" | "funFact"
> & {
  whyThisShow: string;
  listenFor: string;
  context: string;
  funFact: string | null;
};

function usage(): never {
  console.error("Usage: npm run verify -- YYYY-MM-DD");
  process.exit(1);
}

// Normalize text for substring matching. The model:
// - escapes inner apostrophes/quotes inside [source: '...'] tags as \' / \"
//   to keep its own regex from breaking, so we unescape those.
// - sometimes uses curly quotes; fold to ASCII.
// - re-formats whitespace, so collapse runs of whitespace.
function normalize(s: string): string {
  // We compare citations to review bodies by reducing both to a punctuation-
  // and whitespace-free lowercase form. Fan reviews are wildly inconsistent
  // about quotation marks, ellipses, em-dashes, and spacing — but the content
  // is what we care about. As long as the synthesizer doesn't *change words*,
  // the citation should match. (If words change, the substring fails — which
  // is the actual hallucination we want to catch.)
  return s
    .replace(/<[^>]+>/g, "") // strip HTML tags — Archive review bodies contain <b>, <i>, <a href=...>, etc.
    .replace(/&[a-z]+;/gi, "") // strip HTML entities like &amp; &nbsp; &quot;
    .replace(/\\'/g, "'") // unescape \' → '
    .replace(/\\"/g, '"') // unescape \" → "
    .replace(/[^a-z0-9]/gi, "") // strip every non-alphanumeric (whitespace, punctuation, smart quotes, etc.)
    .toLowerCase();
}

// Pull every citation string from a piece of editorial prose.
// Matches: [source: '...'] OR [source: "..."]
function extractCitations(text: string): string[] {
  const citations: string[] = [];
  const re = /\[source:\s*(['"])(.*?)\1\s*\]/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    citations.push(match[2]);
  }
  return citations;
}

function stripCitations(text: string): string {
  // Remove [source: '...'] tags and any preceding space.
  return text
    .replace(/\s*\[source:\s*(['"])(.*?)\1\s*\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isSubstringOfAnyReview(
  needle: string,
  reviewBodies: string[],
): boolean {
  const n = normalize(needle);
  if (n.length === 0) return false;
  return reviewBodies.some((body) => normalize(body).includes(n));
}

type Failure = {
  field: string;
  citation: string;
};

function verify(
  synthesis: SynthesisOutput,
  brief: ResearchBrief,
): Failure[] {
  const reviewBodies = brief.reviews.map((r) => r.body);
  const failures: Failure[] = [];

  const fields: Array<{ key: keyof SynthesisOutput; label: string }> = [
    { key: "whyThisShow", label: "whyThisShow" },
    { key: "listenFor", label: "listenFor" },
    { key: "context", label: "context" },
    { key: "funFact", label: "funFact" },
  ];

  for (const { key, label } of fields) {
    const text = synthesis[key];
    if (typeof text !== "string") continue;
    const citations = extractCitations(text);
    for (const c of citations) {
      if (!isSubstringOfAnyReview(c, reviewBodies)) {
        failures.push({ field: label, citation: c });
      }
    }
  }

  // Community voice quotes are themselves citations — they must substring-match.
  synthesis.communityVoices.forEach((voice, i) => {
    if (!isSubstringOfAnyReview(voice.quote, reviewBodies)) {
      failures.push({
        field: `communityVoices[${i}] (${voice.attribution})`,
        citation: voice.quote,
      });
    }
  });

  return failures;
}

function main() {
  const arg = process.argv[2];
  if (!arg) usage();
  const date = arg;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) usage();

  const synthPath = path.join(__dirname, "..", "data", "synthesis", `${date}.json`);
  const briefPath = path.join(__dirname, "..", "data", "research", `${date}.json`);

  if (!fs.existsSync(synthPath)) {
    console.error(`Missing synthesis: ${synthPath}`);
    console.error(`Run \`npm run synthesize -- ${date}\` first.`);
    process.exit(1);
  }
  if (!fs.existsSync(briefPath)) {
    console.error(`Missing research brief: ${briefPath}`);
    console.error(`Run \`npm run research -- ${date}\` first.`);
    process.exit(1);
  }

  const synthesis = JSON.parse(fs.readFileSync(synthPath, "utf8")) as SynthesisOutput;
  const brief = JSON.parse(fs.readFileSync(briefPath, "utf8")) as ResearchBrief;

  console.error(`Verifying ${date} — ${brief.venue}`);
  console.error(`  ${brief.reviews.length} reviews available as citation sources.`);

  const failures = verify(synthesis, brief);
  if (failures.length > 0) {
    console.error(`\n  ${failures.length} citation(s) FAILED to match any review body:\n`);
    for (const f of failures) {
      console.error(`  ✗ ${f.field}`);
      console.error(`      "${f.citation}"`);
    }
    console.error(
      `\n  Refusing to finalize. The model invented or paraphrased these claims; they should be removed or rewritten.`,
    );
    process.exit(1);
  }

  console.error(`  All citations verified.`);

  const finalized: FinalizedOutput = {
    ...synthesis,
    whyThisShow: stripCitations(synthesis.whyThisShow),
    listenFor: stripCitations(synthesis.listenFor),
    context: stripCitations(synthesis.context),
    funFact: synthesis.funFact === null ? null : stripCitations(synthesis.funFact),
  };

  const outDir = path.join(__dirname, "..", "data", "finalized");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${date}.json`);
  fs.writeFileSync(outPath, JSON.stringify(finalized, null, 2) + "\n", "utf8");

  console.error(`  Wrote finalized → ${path.relative(process.cwd(), outPath)}`);
  console.error(`  Ready to splice into lib/concierge/catalog.ts.`);
}

main();
