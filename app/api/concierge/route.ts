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

export async function POST(req: Request) {
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const text = body.text?.trim();
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

  const userMessage = [
    `The user said: "${text}"`,
    chips.length > 0 ? `They also picked these vibes: ${chips.join(", ")}` : null,
    previousIds.length > 0
      ? `Previously recommended in this session (try to avoid unless perfect fit): ${previousIds.join(", ")}`
      : null,
    "",
    "Catalog:",
    JSON.stringify(compactCatalog(), null, 2),
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools: [TOOL_SCHEMA],
      tool_choice: { type: "tool", name: "recommend_show" },
      messages: [{ role: "user", content: userMessage }],
    });

    // Find the tool_use block
    const toolUse = response.content.find(
      (block): block is Anthropic.ToolUseBlock => block.type === "tool_use",
    );

    if (!toolUse) {
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
