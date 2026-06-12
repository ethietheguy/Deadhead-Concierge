import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { CATALOG } from "@/lib/concierge/catalog";
import type { ConciergeShow } from "@/lib/concierge/types";

// Run on the Edge for snappier responses. The Anthropic SDK is fetch-based
// and runs on the edge runtime fine.
export const runtime = "edge";

type RequestBody = {
  text?: string;
  chips?: string[];
  previousIds?: string[];
};

// Compact catalog representation we send to Claude. Trimmed down to the
// fields the model actually needs to *pick* a show — full editorial copy
// (listenFor, context, funFact, full setlist) stays on the server
// and gets joined back in after the model responds.
function compactCatalog() {
  return CATALOG.map((s) => ({
    id: s.id,
    date: s.date,
    venue: `${s.venue}, ${s.city}${s.state ? ", " + s.state : ""}`,
    era: s.era,
    moods: s.moods,
    styles: s.styles,
    audioQuality: s.audioQuality,
    significance: s.significance,
    bestFor: s.bestFor,
    headline: s.headline,
    listenFor: s.listenFor,
    setlistHighlights: s.setlist.slice(0, 8),
  }));
}

// The catalog is identical on every request, so we build it ONCE at module
// load and send it as a cached prompt prefix. With prompt caching, Anthropic
// reuses this ~10k-token block at ~10% of the input cost on repeat calls
// within a 5-minute window — exactly what happens during a traffic spike.
// Byte-for-byte stability is what makes the cache hit, so this string must
// never be rebuilt per request.
const CATALOG_BLOCK =
  "Catalog (pick exactly one id from this list):\n" +
  JSON.stringify(compactCatalog(), null, 2);

const SYSTEM_PROMPT = `You are the Dead Concierge — a trusted older Deadhead handing someone the right tape. Not a hype writer.

PICK
- Exactly ONE show from the catalog. The id must match an id in the catalog. Never invent.
- Avoid ids in "previously recommended." Only reuse one if the alternatives genuinely don't fit.

WRITE
A 3–5 sentence "whyThisShow" paragraph that:
- Quotes or paraphrases a specific word, phrase, or feeling from what the user said.
- Names at least one concrete musical detail. Source it from the catalog: paraphrase from the show's listenFor field (don't quote it — the user sees listenFor rendered separately), or reference setlistHighlights, audioQuality, or era. Do NOT invent jam character, vocal details, recording details, or moments that aren't in the catalog data.
- Does NOT attribute claims to "Deadheads," "tape collectors," "reviewers," or "many fans" unless the catalog data already makes that claim.
- Does NOT repeat the date or venue (shown elsewhere).
- Reads warm, specific, confident — like a friend who's actually heard this tape.

VOICE
"Lightly mythic" means grounded folklore you can back up. It does NOT mean inventing atmosphere or vibes. If you can't tie a sentence to a specific detail in the catalog data, cut it.

NEVER WRITE
- "supernatural peak," "every song locked in," "you'll understand immediately"
- "the show that defined [anything]"
- "the greatest [X] in history," "the most [X] of all time," "crown jewel," "transcendent"
- "tapestry of," "delve into," "in conclusion," "moreover"
- Universal directives: "the only place to start," "if you listen to one show, this is it"

DOORWAY, NOT VERDICT
The recommendation is a doorway for this person right now, not a ranking of the band's catalog. Frame as "a clean first listen," "the version that holds up," "where I'd start if you're [their words]."

NEWCOMER GUIDANCE
If the user reads as new to the Dead, lean toward bestFor:newcomer + significance:legendary — but if their mood is introspective or anxious, prefer a quieter, more inviting show over the obvious legend.

DEEP CUTS
If they want weird, obscure, or deeper, lean into significance:deep-cut or hidden-gem and earn the detour with specifics.

EXAMPLE OF THE VOICE

User said: "I want something to listen to on a long drive."

Good whyThisShow:
"You said long drive, so I'm steering you toward this one. The Help on the Way > Slipknot! > Franklin's Tower opener is one of those sequences that does its own work — patient enough to live with for a while, urgent enough to keep you awake at the wheel. The mix is a clean soundboard, so you won't be straining over road noise. By the time Eyes of the World arrives in set two, you'll be glad the drive isn't over yet."

Why this is the voice:
- Quotes the user ("long drive").
- All concrete details paraphrased from the catalog (Help > Slip > Franklin's, soundboard mix, Eyes of the World) — nothing invented.
- No superlatives, no fake attribution.
- Warm and confident without overclaiming.

Return your selection by calling the recommend_show tool.`;

const TOOL_SCHEMA = {
  name: "recommend_show",
  description: "Select one show from the catalog and write a personalized 'why this show' paragraph.",
  input_schema: {
    type: "object" as const,
    properties: {
      showId: {
        type: "string",
        description: "The id of the chosen show — must match an id from the catalog exactly.",
      },
      whyThisShow: {
        type: "string",
        description:
          "3–5 sentences. Must quote or paraphrase the user's words. Must include at least one concrete musical detail paraphrased from the catalog (listenFor, setlistHighlights, audioQuality, or era) — never invent jam character, vocal details, or community attributions. Don't repeat the date or venue. No superlatives, no hedging.",
      },
    },
    required: ["showId", "whyThisShow"],
  },
};

// ── Rate limiting ───────────────────────────────────────────────
// Simple in-memory sliding window, keyed by IP. Each serverless instance
// keeps its own map, so this is a blunt instrument rather than a hard
// guarantee — but it stops casual scripted abuse from burning API credits.
const RATE_LIMIT = 10; // requests
const RATE_WINDOW_MS = 60_000; // per minute
const MAX_TEXT_LENGTH = 500;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Keep the map from growing unbounded on long-lived instances.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Take a breath — try again in a minute." },
      { status: 429 },
    );
  }

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const text = body.text?.trim().slice(0, MAX_TEXT_LENGTH);
  const chips = body.chips ?? [];
  const previousIds = body.previousIds ?? [];

  // No free text → no AI work needed. Client should use the local engine.
  if (!text) {
    return NextResponse.json({ error: "Text required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 503 },
    );
  }

  const client = new Anthropic({ apiKey });

  // Only the variable, per-request parts go in the user message. The catalog
  // lives in the cached system prefix (CATALOG_BLOCK) below.
  const userMessage = [
    `The user said: "${text}"`,
    chips.length > 0 ? `They also picked these vibes: ${chips.join(", ")}` : null,
    previousIds.length > 0
      ? `Previously recommended in this session (try to avoid unless perfect fit): ${previousIds.join(", ")}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await client.beta.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      betas: ["prompt-caching-2024-07-31"],
      // The static prefix (instructions + full catalog) is cached. The
      // cache_control breakpoint sits on the catalog block, so everything up
      // to and including it — tools, system prompt, catalog — gets reused on
      // repeat calls within ~5 minutes at ~10% of the input cost.
      system: [
        { type: "text", text: SYSTEM_PROMPT },
        {
          type: "text",
          text: CATALOG_BLOCK,
          cache_control: { type: "ephemeral" },
        },
      ],
      tools: [TOOL_SCHEMA],
      tool_choice: { type: "tool", name: "recommend_show" },
      messages: [{ role: "user", content: userMessage }],
    });

    // Find the tool_use block. (Beta client returns beta block types, so we
    // narrow by the discriminant rather than asserting a specific SDK type.)
    const toolUse = response.content.find((block) => block.type === "tool_use");

    if (!toolUse || toolUse.type !== "tool_use") {
      return NextResponse.json(
        { error: "Model did not return a tool call" },
        { status: 502 },
      );
    }

    const { showId, whyThisShow } = toolUse.input as {
      showId: string;
      whyThisShow: string;
    };

    const show = CATALOG.find((s) => s.id === showId);
    if (!show) {
      // Model invented an id. Bail and let the client fall back.
      return NextResponse.json(
        { error: `Unknown showId: ${showId}` },
        { status: 502 },
      );
    }

    // Splice the personalized copy into the canonical show object.
    const personalized: ConciergeShow = {
      ...show,
      whyThisShow,
    };

    return NextResponse.json({ show: personalized, source: "ai" as const });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
