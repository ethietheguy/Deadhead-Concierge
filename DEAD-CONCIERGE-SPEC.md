# Dead Concierge — Feature Spec

**Status:** Draft v2 — pivoted to AI-first mood input
**Feature:** "Tell us how you're feeling. We'll tell you what Dead show to listen to."
**Stack:** Next.js 14 / TypeScript / Tailwind / Claude API (or similar LLM)

---

## The Product

One text input. You type how you're feeling. You get one perfect Grateful Dead show recommendation with everything you need to understand why it's the right one and what to listen for.

That's it. That's the product.

No catalog to browse. No quiz to fill out. No list of 10 shows to choose from. You tell the concierge where you're at, and it tells you what to listen to — with the knowledge and personality of the most obsessive Deadhead you've ever met.

**Hero line:** "Tell us how you're feeling. We'll tell you what Dead show to listen to."

---

## How It Works

### Primary Input: Free-Text, AI-Powered

The main experience is a single text field, front and center. The user types whatever they want:

- "I'm on a long drive through the desert and feeling introspective"
- "I just got dumped and I need something that understands"
- "It's Friday night, I'm cooking dinner, and I want to groove"
- "I'm stoned on my porch watching the sunset"
- "Show me the weirdest thing they ever played"
- "I've never listened to the Dead — where do I start?"

The AI interprets mood, energy, context, experience level, and style preferences from the natural language input. It selects a show from the curated catalog and generates a personalized recommendation — not generic, but specifically tied to what the user said.

**Why this is the right call:** The structured quiz felt like a form. This feels like talking to someone. The best recommendations in real life come from saying "I'm in the mood for something like X" and having a knowledgeable friend just *know*. That's what this replicates.

### Secondary Input: Keyword Tags (No-API Fallback)

Below or alongside the text input, a set of tappable keyword chips:

```
mellow · spacey · dancey · road trip · energized · sad · triumphant
psychedelic · bluegrass · jazzy · introspective · late night · party
first time · deep cuts · Jerry ballads · Phil bombs · drums/space
```

Each keyword maps directly to show tags in the catalog. When tapped, the app runs a local filter + score against the catalog — no API call needed. Fast, deterministic, works offline.

This serves three purposes:
1. **Fallback** when the AI API is unavailable or slow
2. **Faster path** for users who don't want to type
3. **Inspiration** for users who don't know what to say ("oh, 'late night' — yeah, that's my vibe")

Keywords can be combined. Tapping "mellow" + "jazzy" narrows the pool. The recommendation still returns one show with full context.

### Buried Option: "Help Me Narrow It Down"

A small link below the main input — "Not sure what you're in the mood for?" — opens a short guided flow (3–4 questions: energy level, style, experience with the Dead, how much time you have). This is the old quiz, stripped down and repositioned as a helper, not the main path. It feeds the same recommendation engine.

---

## The Recommendation

After the user submits their mood (text or keywords), one recommendation appears. Not a list. One show, presented with authority and personality.

### Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│  Based on what you told us...               │
│                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  March 29, 1990                             │
│  Nassau Coliseum — Uniondale, NY            │
│  Grateful Dead                              │
│                                             │
│  "The night Branford Marsalis walked        │
│   onstage and everything changed."          │
│                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  WHY THIS SHOW                              │
│                                             │
│  You said you're feeling introspective      │
│  and want something jazzy. This is the      │
│  gold standard. Branford Marsalis sits      │
│  in on saxophone and the band plays like    │
│  they have something to prove. The Eyes     │
│  of the World is 20+ minutes of pure        │
│  telepathy — the kind of music that         │
│  makes you pull the car over and just       │
│  sit there.                                 │
│                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  WHAT TO LISTEN FOR                         │
│                                             │
│  The moment Branford enters on Eyes —       │
│  you'll hear the band's energy shift        │
│  like someone opened a window. Dark Star    │
│  in Set 2 is rare for 1990 and absolutely   │
│  dripping with texture. And Jerry's tone    │
│  all night — crystalline.                   │
│                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  THE CONTEXT                                │
│                                             │
│  By 1990, the Dead were deep into their     │
│  late period — huge crowds, uneven nights.  │
│  Then Branford showed up. This was the      │
│  only Dark Star played all year. Mickey     │
│  Hart invited Branford, and the band        │
│  responded by playing like it was 1974.     │
│  This show converted more new Deadheads     │
│  than almost any other late-era recording.  │
│                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  [Listen on Archive.org]                    │
│                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  IF YOU DIG THIS, TRY NEXT                  │
│  6/18/74 — Freedom Hall                     │
│  "Wall of Sound jazz at its absolute peak"  │
│                                             │
│  [Tell me something else]                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Recommendation Sections

1. **The headline** — A one-line hook. Not a description, a *pull*. "The night Branford Marsalis walked onstage and everything changed."

2. **Why this show** — Directly tied to what the user said. If they said "introspective and jazzy," the copy explains why *this* show matches *that* feeling. Personalized, not boilerplate.

3. **What to listen for** — Specific, opinionated guidance. Song moments, transitions, tonal qualities, timestamps if possible. This is the teaching layer — it gives the listener ears they didn't have before.

4. **The context** — What was happening with the band, why this show matters historically, any notable circumstances. This is what separates a recommendation from a link.

5. **Listen link** — Archive.org URL. One click to start listening.

6. **If you dig this, try next** — One follow-up show. Not a list. Just the natural next step if this one lands.

7. **"Tell me something else"** — Returns to the input. The previous mood text is still there so the user can tweak it or start fresh.

### Voice and Tone

Warm, opinionated, casual but knowledgeable. Like a friend who's been to 200 shows and genuinely wants you to have the experience they've had. Not academic. Not hedging. Not "many fans consider this to be..." — more like "this is the one. Trust me."

Specific over vague. "Listen for Phil's bass dropping into half-time at minute 8 of Eyes" beats "this show features excellent musicianship."

---

## Data Architecture

### Show Catalog (Internal, Not User-Facing)

The catalog is the backend brain of the concierge. Users never browse it — it exists to power recommendations.

```typescript
export type ConciergeShow = {
  // Identity (matches existing Show type)
  id: string;
  date: string;
  venue: string;
  city: string;
  state?: string;
  band: Band;
  setlist: string[];
  archiveUrl?: string;

  // Recommendation metadata
  era: Era;
  moods: MoodTag[];
  styles: StyleTag[];
  audioQuality: "pristine" | "good" | "fair" | "rough";
  significance: "legendary" | "classic" | "deep-cut" | "hidden-gem";
  bestFor: ("newcomer" | "exploring" | "head")[];

  // Editorial content (the soul of the product)
  headline: string;           // One-line hook
  whyThisShow: string;        // Template with {{mood}} placeholder for personalization
  listenFor: string;          // Specific listening guidance
  context: string;            // Historical/band context
  tryNext: {                  // One follow-up recommendation
    showId: string;
    hook: string;             // "Wall of Sound jazz at its absolute peak"
  };
};

export type Era =
  | "primal"         // 1966–1969
  | "early-70s"      // 1970–1971
  | "europe-72"      // 1972
  | "wall-of-sound"  // 1973–1974
  | "77-peak"        // 1976–1978
  | "late-70s"       // 1979–1980
  | "80s"            // 1981–1990
  | "final-years"    // 1991–1995
  | "dead-co";       // 2015–2024

export type MoodTag =
  | "high-energy" | "mellow" | "psychedelic" | "emotional"
  | "introspective" | "triumphant" | "dark" | "joyful"
  | "late-night" | "road-trip" | "party" | "meditative";

export type StyleTag =
  | "rock" | "jam" | "acoustic" | "jazz-space"
  | "blues" | "country-folk" | "experimental";
```

### Keyword-to-Tag Mapping (For Fallback Path)

```typescript
export const KEYWORD_MAP: Record<string, { moods: MoodTag[], styles: StyleTag[] }> = {
  "mellow":        { moods: ["mellow", "introspective"], styles: [] },
  "spacey":        { moods: ["psychedelic", "late-night"], styles: ["jazz-space"] },
  "dancey":        { moods: ["high-energy", "joyful"], styles: ["rock"] },
  "road trip":     { moods: ["road-trip"], styles: [] },
  "energized":     { moods: ["high-energy", "triumphant"], styles: ["rock"] },
  "sad":           { moods: ["emotional", "introspective"], styles: [] },
  "triumphant":    { moods: ["triumphant", "joyful"], styles: ["rock", "jam"] },
  "psychedelic":   { moods: ["psychedelic", "late-night"], styles: ["experimental", "jam"] },
  "bluegrass":     { moods: [], styles: ["acoustic", "country-folk"] },
  "jazzy":         { moods: [], styles: ["jazz-space"] },
  "introspective": { moods: ["introspective", "meditative"], styles: [] },
  "late night":    { moods: ["late-night", "psychedelic"], styles: ["jam", "jazz-space"] },
  "party":         { moods: ["party", "high-energy", "joyful"], styles: ["rock"] },
  "first time":    { moods: ["joyful"], styles: ["rock", "jam"] },
  "deep cuts":     { moods: [], styles: [] },  // Triggers significance filter: hidden-gem/deep-cut
  "Jerry ballads": { moods: ["emotional", "introspective"], styles: ["acoustic"] },
  "Phil bombs":    { moods: ["high-energy", "psychedelic"], styles: ["jam", "experimental"] },
  "drums/space":   { moods: ["psychedelic", "late-night"], styles: ["experimental"] },
};
```

---

## Two Recommendation Paths

### Path 1: AI-Powered (Primary)

```
User types free text
       ↓
Send to LLM API with:
  - User's mood text
  - Full show catalog (as context or embeddings)
  - System prompt: "You are the Dead Concierge..."
       ↓
LLM selects a show from the catalog and generates:
  - Personalized "why this show" copy tied to user's words
  - Listening guidance
  - Context paragraph
       ↓
Render recommendation card
```

**System prompt concept:**

> You are the Dead Concierge — the most knowledgeable, opinionated Deadhead alive.
> A user just told you how they're feeling. Your job is to recommend ONE show
> from the catalog that perfectly matches their mood, energy, and vibe.
>
> You have access to a curated catalog of Grateful Dead and Dead & Company shows
> with mood tags, style tags, editorial notes, and listening guidance.
>
> Rules:
> - Pick ONE show. Not a list. Commit to it.
> - Explain why this show matches what they said, using their own words.
> - Be specific about what to listen for — song names, moments, transitions.
> - Give historical context — what was happening with the band, why this matters.
> - Be warm, opinionated, and confident. No hedging.
> - If the user seems new to the Dead, give more context. If they seem experienced, skip the basics.
> - Always include the archive.org link if available.
> - Suggest one follow-up show at the end.

**API choice:** Claude API is the natural fit. Could also work with OpenAI. The catalog is small enough to fit in context — no embeddings needed for MVP.

### Path 2: Keyword Fallback (Local)

```
User taps keyword chips
       ↓
Map keywords to mood/style tags
       ↓
Filter catalog by tag match
       ↓
Score remaining shows:
  - +30 per mood tag match
  - +25 per style tag match
  - +15 audio quality bonus (if no "deep cuts" keyword → favor pristine)
  - +10 significance bonus (if "first time" → legendary; if "deep cuts" → hidden-gem)
  - -20 variety penalty (recently shown, stored in localStorage)
       ↓
Pick top-scoring show
       ↓
Render recommendation card using pre-written editorial content
```

The fallback path uses the pre-written `headline`, `whyThisShow`, `listenFor`, and `context` fields from the catalog. No API call. Instant. The "why this show" section is less personalized — it can't reference the user's exact words — but the editorial quality is the same.

---

## UX Spec

### Page: `/concierge`

**Nav entry:** "Concierge" — add to existing Nav component alongside Add Shows and Dashboard.

**Layout (top to bottom):**

1. **Header area**
   - Steal Your Face icon (small, matches existing branding)
   - "Deadhead" wordmark

2. **Hero section**
   - Headline: "Tell us how you're feeling."
   - Subhead: "We'll tell you what Dead show to listen to."
   - Text input: large, centered, placeholder text rotates through examples:
     - "I'm on a long drive and feeling introspective..."
     - "It's Friday night and I want to dance..."
     - "Show me something I've never heard..."
     - "I'm brand new — where do I start?"
   - Submit button: "Find my show" (terracotta, matches existing CTA style)

3. **Keyword chips** (below input)
   - Horizontal scrollable row on mobile, wrapped grid on desktop
   - Tappable, toggle-able, subtle styling (outlined, fill on select)
   - Small label above: "or pick a vibe"

4. **Helper link**
   - "Not sure? Let us ask you a few questions →"
   - Opens the simplified quiz flow (modal or slide-in)

5. **Recommendation card** (appears after submission, replaces or pushes down the input)
   - Full layout as described in "The Recommendation" section above
   - "Tell me something else" button at bottom returns to input

### States

- **Empty:** Hero + input + keywords. Clean, inviting, not busy.
- **Loading:** Input collapses or dims, Steal Your Face spins gently, maybe a line like "Digging through the vault..."
- **Result:** Recommendation card slides in. Input moves to top of page (compressed) so user can quickly try again.
- **Error (API failure):** Silent fallback to keyword path. If user typed text, extract likely keywords and run the local engine. User shouldn't know the AI path failed — the recommendation just comes from the fallback.

### Mobile Behavior

- Text input takes full width
- Keyword chips scroll horizontally
- Recommendation card is full-width, sections stack vertically
- "Listen on Archive.org" button is large and thumb-friendly
- The whole flow should feel good on a phone — this is a "lying on the couch" or "in the car" use case

---

## File Structure

```
app/
  concierge/
    page.tsx                 # Main concierge page
lib/
  concierge/
    types.ts                 # ConciergeShow, MoodTag, StyleTag, etc.
    catalog.ts               # Curated show catalog with editorial content
    keywords.ts              # KEYWORD_MAP and local scoring logic
    engine.ts                # Local recommendation engine (filter + score)
    prompt.ts                # System prompt and API call logic for AI path
components/
  concierge/
    MoodInput.tsx            # Text input + submit
    KeywordChips.tsx         # Tappable keyword tags
    RecommendationCard.tsx   # The main result display
    TryNextCard.tsx          # Follow-up suggestion
    NarrowItDown.tsx         # Optional quiz flow (buried helper)
    LoadingState.tsx         # Vault-digging animation
```

---

## MVP Scope — What Ships First

1. **The text input + AI recommendation path.** User types mood, gets one show with full editorial context. This is the product.

2. **Keyword chips as fallback.** Tappable mood keywords that run the local scoring engine. Works without API.

3. **Curated catalog of ~30 tagged shows.** The existing mock data, extended with mood/style tags and hand-written editorial content (headline, why, listen-for, context, try-next). 30 well-curated shows is better than 100 thin ones.

4. **One recommendation per request.** Not a list. One show, one follow-up suggestion. Commit to the recommendation.

5. **Archive.org listen link.** For shows that have it (most of the catalog does).

### Not in MVP

- Full catalog browse (killed)
- Structured quiz as primary path (buried behind "help me narrow it down")
- Song-level or set-level recommendations (show-level only)
- Recommendation history / "don't repeat" logic
- Share functionality
- "Save to listen later" list
- Playback integration
- User accounts or persistence beyond localStorage

---

## Open Questions

1. **API key management for AI path.** For a public-facing app, the Claude API key can't live client-side. Options: (a) Next.js API route that proxies the call, (b) edge function, (c) make the keyword path good enough that AI is a nice-to-have. The API route is the simplest for MVP.

2. **How much editorial to write for MVP?** The AI path can generate personalized copy on the fly, but the fallback path needs pre-written content for every show in the catalog. Proposal: write full editorial for the 15 most recommendable shows, lighter content for the remaining 15.

3. **Cost per recommendation.** Each AI-powered recommendation is one Claude API call with the full catalog in context (~30 shows). At current pricing this is pennies per request, but worth tracking if usage grows.

4. **Rotating placeholder text in the input** — animation details. Fade? Type-writer effect? Static with just one example? Small detail but it sets the tone.
