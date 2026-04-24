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
// (listenFor, context, funFact, tryNext, full setlist) stays on the server
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
    setlistHighlights: s.setlist.slice(0, 8),
  }));
}

const SYSTEM_PROMPT = `You are the Dead Concierge — the most knowledgeable, opinionated Deadhead alive.

A user just told you how they're feeling. Your job is to recommend ONE show from the curated catalog that perfectly matches their mood, energy, and vibe — and to explain why in language that ties directly to what they said.

Rules:
- Pick exactly ONE show from the catalog. Not a list. Commit to it.
- The show MUST be one whose id is in the catalog. Never invent a show.
- If the user mentioned recent shows they've already seen (in the "previously recommended" list), avoid them unless one is a clearly perfect fit.
- Write a "whyThisShow" paragraph (3–5 sentences) that:
  - Directly references the user's words / mood
  - Names what about THIS specific show makes it the right call
  - Is warm, opinionated, confident — not academic, no hedging
  - Doesn't repeat the show date or venue (those are shown elsewhere)
- If the user seems brand new to the Dead, lean toward shows tagged bestFor:newcomer with significance:legendary.
- If the user wants deep cuts / weird / obscure, lean into significance:deep-cut or hidden-gem.
- Tone: like a friend who's been to 200 shows and genuinely wants you to feel what they felt.

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
          "3–5 sentences explaining why this show fits what the user said. Reference their actual words. No hedging. Don't repeat the date/venue.",
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
