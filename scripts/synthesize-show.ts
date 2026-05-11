/**
 * Synthesize a citation-grounded catalog entry from a research brief.
 *
 * Usage: npm run synthesize -- 1977-05-08
 *
 * Pipeline:
 *   1. Load data/research/<date>.json (produced by `npm run research`).
 *   2. Load the existing catalog entry for <date> from lib/concierge/catalog.ts
 *      (Phase 5 reruns the existing 55 shows). The catalog supplies setlist,
 *      releasedAs, era — facts that don't need inline citations.
 *   3. Send to Claude with a strict prompt: every concrete claim ends with
 *      [source: '<verbatim substring of a review body>']. The downstream
 *      verifier (scripts/verify-citations.ts, in development) string-matches
 *      every citation against the review bodies and fails the build if any
 *      don't resolve.
 *   4. Write data/synthesis/<date>.json with citations intact.
 *
 * The citations get stripped (and the editorial copy stored in catalog.ts)
 * only after verification passes. This script does not touch catalog.ts.
 *
 * Requires ANTHROPIC_API_KEY in env.
 */
import Anthropic from "@anthropic-ai/sdk";
import * as fs from "node:fs";
import * as path from "node:path";
import { CATALOG } from "../lib/concierge/catalog";
import type { ConciergeShow } from "../lib/concierge/types";
import type { ResearchBrief } from "./research-show";

const MODEL = "claude-sonnet-4-6";
const MAX_TOKENS = 4000;

const SYSTEM_PROMPT = `You are the curator of a community-sourced Grateful Dead show catalog.

Your job is to synthesize what the community actually said about THIS tape — not to perform Deadhead expertise, not to invent atmosphere, not to write a press release. The voice is a knowledgeable friend who has read the reviews, handing someone the right tape for what they asked for.

EVERY CONCRETE CLAIM ENDS WITH A CITATION
A "concrete claim" is any sentence asserting something specific about the music, room, recording quality, a song, a player, fan reaction, or perception.

Format: end the sentence with a single space, then [source: '<verbatim quoted substring of one of the review bodies provided>'].

The quoted string MUST be a copy-paste substring of one of the review bodies in the input. SUBSTRING, NOT PARAPHRASE. A downstream verifier mechanically string-matches and rejects citations that don't appear in the source data.

CRITICAL — PROSE MUST READ AS COMPLETE SENTENCES WITHOUT THE SOURCE TAGS
The [source: '...'] tags get STRIPPED before the prose is shown to readers. Your prose must read as complete, well-formed sentences AFTER the tags are removed.

This means: when you quote a reviewer, write the quote INLINE in the prose using "double quotes," then duplicate that quote in the source tag for verification.

GOOD (inline quote in prose, duplicated in source tag):
  One reviewer called the Dancin' "almost not human" [source: 'The Dancin In The Streets is almost not human'].
  After stripping: One reviewer called the Dancin' "almost not human".  ✓ readable

BAD (content lives only in the source tag, prose ends with orphan colon):
  One listener describes the experience: [source: 'A free outdoor concert on a scorching day, children playing everywhere'].
  After stripping: One listener describes the experience: .  ✗ broken prose

NEVER write a sentence that ends in ":" before a [source:] tag. NEVER use the source tag as the carrier of the actual content. The prose must stand on its own.

If you can't cite a claim, cut the sentence. No "the band locked in," "every song lands," "the crowd was electric" without a real citation.

ONE QUOTE IS NOT CONSENSUS
If a single reviewer praised the Sugaree, write: "One listener singled out the Sugaree [source: '...']" — NOT "Reviewers point to the Sugaree."
Use plural framing ("reviewers," "listeners," "voters") only when multiple reviews say the same thing AND you can cite at least two of them in adjacent sentences.

DO NOT INVENT
- Audience reactions ("the crowd erupted," "the room held its breath")
- Stage events ("Jerry leaned into the mic," "Phil stepped forward")
- Player mood, intent, or chemistry not stated in a review
- Specific musical moments (jam character, segues, vocal details) not described in a review
- Consensus framing not present in the reviews

SURFACE DISAGREEMENT — BUT WEIGHT IT CORRECTLY
If reviewers disagree — one calls it transcendent, another says the energy isn't there — name the disagreement in whyThisShow or listenFor. Don't smooth it into fake consensus.

CRITICAL CALIBRATION: the 5 reviews provided are a SAMPLE selected for length and substance, NOT a representative cross-section of community opinion. A single articulate dissenter in the sample does NOT mean the community is split.

Use the catalog metadata to weight the framing:
- significance: "legendary" or "classic" → the show is broadly canonical. The headline and the OPENING of whyThisShow should reflect canonical status. Dissent goes in the body as a minority view, NEVER as the framing.
- significance: "deep-cut" or "hidden-gem" → the show is loved by heads but not in the popular canon. Frame as a real recommendation; surface what makes it specific.
- releasedAs is non-empty → the band's organization endorsed this tape. Treat as canonical.

For Cornell '77 (significance: legendary, officially released), the broad community position is reverence. The headline reflects that. Mid-maine's "ain't no holy grail" pushback is interesting flavor for the body, NOT the framing of the show.

BANNED PHRASES (rewrite if you used them)
"defined," "definitive," "undeniable," "crown jewel," "supernatural peak," "tapestry of," "delve into," "moreover," "in conclusion," "transcendent," "every song locked in," "you'll understand immediately," "the show that defined [anything]."
The words "devastating" and "pristine" may appear ONLY if a review uses them — and the sentence using them must cite that review.

INTERCHANGEABILITY TEST
If a sentence could be moved verbatim onto another show's catalog entry, rewrite it. Specificity is the work.

VOICE ANCHORS
- Concierge: handing someone the right tape for what they asked for.
- Open source: surfacing what the community said, not editorializing past it.
- Local: a friend's recommendation, not a museum label, not a press release.

HEADLINE
The headline is the CURATOR'S plainspoken recommendation. Simple. Dead heady. Sounds like an old friend saying one sentence about the tape — not a critic, not a database tag, not a museum plaque, not a quote from a reviewer.

WHAT "SIMPLE AND DEAD HEADY" MEANS
- Casual register. Lived-in. Confident without trying.
- Concrete: name a place, a song, a season, a setting, a year, a lineup detail.
- Direct. Plainspoken. The kind of thing a head would say in a bar.
- NOT clever. NOT poetic. NOT a list of three things stacked together.
- NOT a reference to what reviewers said. The headline is the curator's voice; reviewer voices live in communityVoices and inline citations, never in the headline.

WORK ORDER (internally — don't write candidates in the JSON)
1. Pick the most distinctive concrete anchor for this show: a specific song, venue, setting, season, year, lineup detail, or release fact.
2. Draft 2–3 plainspoken candidates around that anchor.
3. Reject any candidate that:
   • Quotes or paraphrases a reviewer.
   • Could describe another famous show (interchangeability test).
   • Leads with status language.
   • Sounds clever, poetic, or list-y.
4. Output the strongest candidate as "headline."

REQUIREMENTS
- 5–9 words. Tighter is better.
- Concrete nouns. Plainspoken verbs.
- CONFIDENT, not hedged. Dissent lives in whyThisShow, NOT the headline.
- No citation required. No reviewer references.

GOOD HEADLINES
- "The easy answer that earned the argument." (Cornell — confident, knowing, has a wink)
- "Oregon sunshine with the edges showing." (Veneta — sensory, simple)
- "Veneta in the August heat." (sensory, plainspoken)
- "Pigpen at the Capitol, last bow." (concrete anchor: lineup + venue)
- "Phil's bass, wide open at Winterland." (concrete anchor: player + venue)
- "Cornell, May '77, in plain English." (confident, plainspoken, accessible)

BAD HEADLINES
- "The reference tape for May '77." → audiophile/database language.
- "The Oregon field show that keeps pulling people into the Dead." → generic, interchangeable.
- "The show everyone owns and one voice says check Binghamton." → references reviewer voice in the headline.
- "Fender Strat, scorching Oregon sun, and a Dark Star that earns the hype." → list-y, three anchors stacked.
- "The most-hyped tape in the lot — with at least one dissenter." → puts dissent in the headline.
- "The show that defined a generation." → vague superlative.
- "The tape that became the front door." → banned metaphor.

BANNED HEADLINE PHRASES (no exceptions)
"reference tape," "canonical," "essential," "legendary," "gateway," "keeps pulling people in," "front door," "doorway," "first listen," "definitive," "undeniable," "crown jewel," "supernatural," "devastating," "pristine," "tapestry," "delve," "the night that...," "the show that became X," "everyone owns and argues about," "defined a generation," "changed everything," "one voice says," "one reviewer," "reviewers say," "according to."

WORK ORDER (FOLLOW THIS)
1. Read the reviews. Pick the 5 strongest QUOTABLE lines — the ones a real fan would screenshot. These become "communityVoices."
2. Then draft the editorial fields (whyThisShow, listenFor, context, funFact). When you cite within those fields, prefer different snippets from the same reviews — don't burn your strongest community-voice quotes inside the prose.
3. Then write the headline. The headline is informed by everything else, so it goes last.

COMMUNITY VOICES — RULES (HARD)
- Exactly 5 entries.
- Each quote is a verbatim substring of one of the review bodies provided.
- HARD RULE: no two entries may share the same reviewer. After drafting your 5 voices, scan the attribution field — if any reviewer appears twice, REPLACE the weaker entry with a quote from a different reviewer. This rule is non-negotiable.
- "job" describes what the quote is doing on the page:
    praise           — generic positive reaction
    dissent          — pushback against the consensus
    song-specific    — calls out a specific song or sequence
    release-history  — about official release, tape circulation, lineage
    mood             — about feeling, room, vibe (only if the reviewer said it)
    context          — era / tour / personnel
    weirdness        — color, oddity, something a fan would smile at
- If ANY of the supplied reviews push back on the show, ONE of the 5 entries MUST be a dissent.

OUTPUT — JSON ONLY, NO PROSE WRAPPER

{
  "id": "<the show id from the catalog entry>",
  "date": "<YYYY-MM-DD>",
  "communityVoices": [
    {
      "quote": "<verbatim substring of a review body, ≤140 chars>",
      "attribution": "<reviewer name> [, on <song or topic>]",
      "source": "Archive.org review",
      "job": "<praise|dissent|song-specific|release-history|mood|context|weirdness>"
    }
  ],
  "whyThisShow": "<3–5 sentences; citations on concrete claims>",
  "listenFor": "<3–5 sentences; citations on concrete claims; prefer concrete listening guidance over praise>",
  "context": "<2–4 sentences. Era / tour / release-history / recording-source facts drawn from the catalog entry (releasedAs, era, archive identifier with .sbd. or .aud.) DO NOT require citations. Fan-perception claims DO require citations.>",
  "funFact": "<one cited sentence, OR null if you can't cite it>",
  "headline": "<one short sentence, curator voice>"
}

Output the JSON object and nothing else.`;

function usage(): never {
  console.error("Usage: npm run synthesize -- YYYY-MM-DD");
  process.exit(1);
}

function validateDate(raw: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) usage();
  return raw;
}

function loadResearch(date: string): ResearchBrief {
  const p = path.join(__dirname, "..", "data", "research", `${date}.json`);
  if (!fs.existsSync(p)) {
    console.error(`Missing research brief: ${p}`);
    console.error(`Run \`npm run research -- ${date}\` first.`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(p, "utf8")) as ResearchBrief;
}

function loadCatalogEntry(date: string): ConciergeShow {
  const entry = CATALOG.find((s) => s.date === date);
  if (!entry) {
    console.error(`No catalog entry for ${date}.`);
    console.error(`Phase 5 reruns existing entries — add the show to lib/concierge/catalog.ts first, or wait for Phase 6 (new-show pipeline).`);
    process.exit(1);
  }
  return entry;
}

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

// "xonix, on the setlist" → "xonix"
// "Mr. Charlie - Lambertville, on Keith Godchaux" → "Mr. Charlie - Lambertville"
function normalizeAttribution(attr: string): string {
  const idx = attr.indexOf(", on");
  return (idx === -1 ? attr : attr.slice(0, idx)).trim();
}

function findDuplicateReviewers(
  voices: SynthesisOutput["communityVoices"],
): string[] {
  const counts = new Map<string, number>();
  for (const v of voices) {
    const key = normalizeAttribution(v.attribution);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].filter(([, n]) => n > 1).map(([k]) => k);
}

// Headline phrases overplayed across the catalog or that read as database
// labels rather than listening invitations. Substring match, case-insensitive.
// Keep in sync with the BANNED HEADLINE PHRASES list in SYSTEM_PROMPT.
const BANNED_HEADLINE_PHRASES = [
  "reference tape",
  "canonical",
  "essential",
  "legendary",
  "gateway",
  "keeps pulling people in",
  "pulling people in",
  "front door",
  "doorway",
  "first listen",
  "definitive",
  "undeniable",
  "crown jewel",
  "supernatural",
  "devastating",
  "pristine",
  "tapestry",
  "delve",
  "the night that",
  "everyone owns and argues about",
  "defined a generation",
  "changed everything",
  // Reviewer references — headline is curator voice, not attribution.
  "one voice says",
  "one reviewer",
  "reviewers say",
  "according to",
];

function findBannedHeadlinePhrases(headline: string): string[] {
  const lower = headline.toLowerCase();
  return BANNED_HEADLINE_PHRASES.filter((p) => lower.includes(p.toLowerCase()));
}

type ValidationIssue =
  | { kind: "duplicate-reviewers"; reviewers: string[] }
  | { kind: "banned-headline-phrase"; phrases: string[] };

function validateSynthesis(parsed: SynthesisOutput): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const dupes = findDuplicateReviewers(parsed.communityVoices);
  if (dupes.length > 0) {
    issues.push({ kind: "duplicate-reviewers", reviewers: dupes });
  }
  const banned = findBannedHeadlinePhrases(parsed.headline);
  if (banned.length > 0) {
    issues.push({ kind: "banned-headline-phrase", phrases: banned });
  }
  return issues;
}

function buildRetryMessage(
  issues: ValidationIssue[],
  parsed: SynthesisOutput,
  brief: ResearchBrief,
): string {
  const parts: string[] = [];
  for (const issue of issues) {
    if (issue.kind === "duplicate-reviewers") {
      const usedReviewers = new Set(
        parsed.communityVoices.map((v) => normalizeAttribution(v.attribution)),
      );
      const allReviewers = brief.reviews.map((r) => r.reviewer);
      const unused = allReviewers.filter((r) => !usedReviewers.has(r));
      parts.push(
        `Your communityVoices array contains duplicate reviewers: ${issue.reviewers.join(", ")}. ` +
          `This violates the no-duplicate-reviewer rule. ` +
          (unused.length > 0
            ? `Replace the weaker quote from each duplicated reviewer with a quote from one of these unused reviewers: ${unused.join(", ")}.`
            : `Output exactly ${allReviewers.length} entries (one per reviewer) instead of 5.`),
      );
    } else if (issue.kind === "banned-headline-phrase") {
      parts.push(
        `Your headline "${parsed.headline}" contains BANNED phrase(s): ${issue.phrases.map((p) => `"${p}"`).join(", ")}. ` +
          `You must rewrite the headline using ENTIRELY different language. ` +
          `Re-read the HEADLINE rules: a listening invitation, not a summary label. ` +
          `Identify the show's tension (the gap between how the community talks about the show and what's on the tape), then pair one side of that tension with a concrete anchor — a specific song, venue, setting, lineup, release controversy, or community argument.`,
      );
    }
  }
  parts.push(
    `Keep all other fields unchanged unless they need to change to fix the issue above. Output the corrected complete JSON object — JSON only, no prose wrapper.`,
  );
  return parts.join("\n\n");
}

function extractText(response: Anthropic.Message): string {
  return response.content
    .map((b) => (b.type === "text" ? b.text : ""))
    .join("");
}

function stripFences(s: string): string {
  return s.trim().replace(/^```(?:json)?\s*/i, "").replace(/```$/, "").trim();
}

function buildUserPrompt(brief: ResearchBrief, entry: ConciergeShow): string {
  const reviewsBlock = brief.reviews
    .map((r, i) => {
      const stars = "★".repeat(Math.max(0, Math.min(5, Math.round(r.stars))));
      const head = `--- REVIEW ${i + 1} (${stars}) by ${r.reviewer}${r.reviewDate ? `, ${r.reviewDate}` : ""} ---`;
      const title = r.title ? `Title: ${r.title}` : "";
      return [head, title, "", r.body].filter(Boolean).join("\n");
    })
    .join("\n\n");

  return `SHOW METADATA (from catalog)
id:           ${entry.id}
date:         ${entry.date}
venue:        ${entry.venue}, ${entry.city}${entry.state ? `, ${entry.state}` : ""}
era:          ${entry.era}
significance: ${entry.significance}    ← USE THIS to weight canonical vs. dissent framing
releasedAs:   ${entry.releasedAs?.length ? entry.releasedAs.join(" / ") : "(unreleased — itself a community signal)"}
setlist:      ${entry.setlist.join(", ")}

BEST RECORDING (Archive.org)
identifier:   ${brief.bestRecording.identifier}
url:          ${brief.bestRecording.archiveUrl}
source type:  ${brief.bestRecording.isSbd ? "SBD (soundboard)" : "AUD / other"}
total reviews on Archive: ${brief.bestRecording.totalReviews}

REVIEWS (citation source — every [source: '...'] must substring-match one of these)

${reviewsBlock}

Synthesize the catalog entry per the system prompt. JSON only.`;
}

async function main() {
  const arg = process.argv[2];
  if (!arg) usage();
  const date = validateDate(arg);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY not set in env.");
    process.exit(1);
  }

  const brief = loadResearch(date);
  const entry = loadCatalogEntry(date);

  if (brief.reviews.length === 0) {
    console.error(`Research brief for ${date} has zero reviews. Skipping — nothing to cite against.`);
    process.exit(1);
  }

  console.error(`Synthesizing ${date} — ${entry.venue}`);
  console.error(`  ${brief.reviews.length} reviews available as citation sources.`);

  const client = new Anthropic({ apiKey });
  const synthesis = await synthesizeWithRetry(client, brief, entry);

  const outDir = path.join(__dirname, "..", "data", "synthesis");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${date}.json`);
  fs.writeFileSync(outPath, JSON.stringify(synthesis, null, 2) + "\n", "utf8");

  console.error(`\n  Wrote synthesis → ${path.relative(process.cwd(), outPath)}`);
  console.error(`  Next: run the citation verifier (in development) before merging into catalog.`);
}

const MAX_RETRIES = 2;

async function synthesizeWithRetry(
  client: Anthropic,
  brief: ResearchBrief,
  entry: ConciergeShow,
): Promise<SynthesisOutput> {
  // Conversation history — we accumulate turns across retries so the model
  // sees its own previous (broken) output and the targeted fix instructions.
  const messages: Array<{ role: "user" | "assistant"; content: string }> = [
    { role: "user", content: buildUserPrompt(brief, entry) },
  ];

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      messages,
    });

    const rawText = extractText(response);
    let parsed: SynthesisOutput;
    try {
      // The model sometimes emits invalid JSON escape sequences inside string
      // values — most commonly `\'` (escaped apostrophe), which JSON forbids
      // (only \", \\, \/, \n, \r, \t, \b, \f, \uXXXX are legal). We strip
      // those before parsing. The negative-lookbehind ensures we don't munge
      // a legitimate `\\` + `'` sequence (literal backslash followed by an
      // apostrophe inside a string).
      const cleaned = stripFences(rawText).replace(/(?<!\\)\\'/g, "'");
      parsed = JSON.parse(cleaned) as SynthesisOutput;
    } catch (err) {
      // Most common cause: unescaped double quotes inside a string value
      // (e.g. context: "...released as "May 1977: Get Shown the Light"."
      // breaks JSON.parse). Retryable — ask for proper escaping.
      if (attempt === MAX_RETRIES) {
        console.error(
          `After ${MAX_RETRIES + 1} attempts JSON still won't parse: ${err instanceof Error ? err.message : err}`,
        );
        console.error(`Raw output:\n${rawText}`);
        process.exit(1);
      }
      console.error(
        `  Attempt ${attempt + 1}: JSON parse failed (${err instanceof Error ? err.message : "unknown"}). Retrying with escape-quote instructions.`,
      );
      messages.push({ role: "assistant", content: rawText });
      messages.push({
        role: "user",
        content:
          `Your previous output was not valid JSON. The most common cause is unescaped double quotes inside a string value. ` +
          `Example of the bug: "context": "released as "May 1977: Get Shown the Light"." ` +
          `Example of the fix: "context": "released as \\"May 1977: Get Shown the Light\\"." ` +
          `Inside a JSON string value, every internal double quote must be escaped as \\". ` +
          `Re-output the corrected complete JSON object — JSON only, no prose wrapper.`,
      });
      continue;
    }

    const issues = validateSynthesis(parsed);
    if (issues.length === 0) {
      if (attempt > 0) {
        console.error(`  Validation passed on retry ${attempt}.`);
      }
      return parsed;
    }

    const summary = issues
      .map((i) =>
        i.kind === "duplicate-reviewers"
          ? `duplicate reviewers (${i.reviewers.join(", ")})`
          : `banned headline phrase(s): ${i.phrases.join(", ")}`,
      )
      .join("; ");

    if (attempt === MAX_RETRIES) {
      console.error(
        `  After ${MAX_RETRIES + 1} attempts the output still has issues: ${summary}.`,
      );
      console.error(`  Refusing to write. Inspect the model output and tighten the prompt or add another constraint.`);
      process.exit(1);
    }

    console.error(
      `  Attempt ${attempt + 1}: ${summary}. Retrying with explicit fix instructions.`,
    );

    messages.push({ role: "assistant", content: rawText });
    messages.push({
      role: "user",
      content: buildRetryMessage(issues, parsed, brief),
    });
  }

  // Unreachable, but TS needs it.
  throw new Error("Synthesis loop ended without resolution.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
