import type { ConciergeShow, MoodTag, StyleTag } from "./types";
import { CATALOG } from "./catalog";
import { KEYWORD_MAP } from "./keywords";

/**
 * Recommendation engine for the Dead Concierge.
 *
 * MVP: keyword matching against mood/style tags.
 * Architecture is designed so this can be swapped for an AI-powered
 * interpretation layer later — just replace extractTagsFromText()
 * with an LLM call that returns the same { moods, styles } shape.
 */

type TagSet = {
  moods: MoodTag[];
  styles: StyleTag[];
  wantsDeepCuts: boolean;
  wantsFirstTimer: boolean;
};

/**
 * Extract mood/style tags from free text by matching against known keywords.
 * This is the MVP approach — designed to be replaced with AI interpretation.
 */
export function extractTagsFromText(text: string): TagSet {
  const lower = text.toLowerCase();
  const moods: MoodTag[] = [];
  const styles: StyleTag[] = [];
  let wantsDeepCuts = false;
  let wantsFirstTimer = false;

  // Direct keyword matching
  for (const [keyword, tags] of Object.entries(KEYWORD_MAP)) {
    if (lower.includes(keyword)) {
      moods.push(...tags.moods);
      styles.push(...tags.styles);
    }
  }

  // Catch common natural-language phrases
  const phraseMap: Record<string, { moods: MoodTag[]; styles: StyleTag[] }> = {
    "long drive":     { moods: ["road-trip", "mellow"],            styles: [] },
    "road trip":      { moods: ["road-trip", "joyful"],            styles: [] },
    "cooking dinner": { moods: ["mellow", "joyful"],               styles: [] },
    "friday night":   { moods: ["party", "high-energy"],           styles: ["rock"] },
    "saturday night": { moods: ["party", "high-energy"],           styles: ["rock"] },
    "stoned":         { moods: ["psychedelic", "mellow"],          styles: ["jam"] },
    "sunset":         { moods: ["mellow", "meditative"],           styles: [] },
    "sunrise":        { moods: ["mellow", "introspective"],        styles: [] },
    "can't sleep":    { moods: ["late-night", "introspective"],    styles: [] },
    "never listened": { moods: ["joyful"],                         styles: ["rock"] },
    "new to":         { moods: ["joyful"],                         styles: ["rock"] },
    "first time":     { moods: ["joyful"],                         styles: ["rock"] },
    "where do i start": { moods: ["joyful"],                       styles: ["rock"] },
    "where to start": { moods: ["joyful"],                         styles: ["rock"] },
    "beginner":       { moods: ["joyful"],                         styles: ["rock"] },
    "weird":          { moods: ["psychedelic", "dark"],            styles: ["experimental"] },
    "weirdest":       { moods: ["psychedelic", "dark"],            styles: ["experimental"] },
    "dance":          { moods: ["high-energy", "joyful", "party"], styles: ["rock"] },
    "groove":         { moods: ["high-energy", "joyful"],          styles: ["rock", "jam"] },
    "chill":          { moods: ["mellow", "introspective"],        styles: [] },
    "relax":          { moods: ["mellow", "meditative"],           styles: [] },
    "pumped":         { moods: ["high-energy", "triumphant"],      styles: ["rock"] },
    "fired up":       { moods: ["high-energy", "triumphant"],      styles: ["rock"] },
    "heartbreak":     { moods: ["emotional", "introspective"],     styles: [] },
    "dumped":         { moods: ["emotional", "dark"],              styles: [] },
    "miss":           { moods: ["emotional", "introspective"],     styles: [] },
    "cry":            { moods: ["emotional", "introspective"],     styles: [] },
    "happy":          { moods: ["joyful", "high-energy"],          styles: [] },
    "celebrate":      { moods: ["party", "triumphant", "joyful"],  styles: ["rock"] },
    "jazz":           { moods: ["introspective"],                  styles: ["jazz-space"] },
    "blues":          { moods: ["emotional"],                      styles: ["blues"] },
    "acoustic":       { moods: ["mellow"],                         styles: ["acoustic", "country-folk"] },
    "country":        { moods: [],                                 styles: ["country-folk"] },
    "folk":           { moods: ["mellow"],                         styles: ["country-folk", "acoustic"] },
    "heavy":          { moods: ["dark", "psychedelic"],            styles: ["experimental", "jam"] },
    "deep":           { moods: ["psychedelic", "introspective"],   styles: ["jam"] },
    "meditation":     { moods: ["meditative", "mellow"],           styles: [] },
    "space":          { moods: ["psychedelic", "late-night"],      styles: ["experimental", "jazz-space"] },
  };

  for (const [phrase, tags] of Object.entries(phraseMap)) {
    if (lower.includes(phrase)) {
      moods.push(...tags.moods);
      styles.push(...tags.styles);
    }
  }

  // Check for special filters
  if (lower.includes("deep cut") || lower.includes("hidden gem") || lower.includes("obscure")) {
    wantsDeepCuts = true;
  }
  if (
    lower.includes("first time") || lower.includes("never listened") ||
    lower.includes("new to") || lower.includes("where do i start") ||
    lower.includes("where to start") || lower.includes("beginner") ||
    lower.includes("first timer")
  ) {
    wantsFirstTimer = true;
  }

  // Deduplicate
  return {
    moods: [...new Set(moods)],
    styles: [...new Set(styles)],
    wantsDeepCuts,
    wantsFirstTimer,
  };
}

/**
 * Extract tags from chip selections.
 */
export function extractTagsFromChips(chips: string[]): TagSet {
  const moods: MoodTag[] = [];
  const styles: StyleTag[] = [];
  let wantsDeepCuts = false;
  let wantsFirstTimer = false;

  for (const chip of chips) {
    const mapped = KEYWORD_MAP[chip];
    if (mapped) {
      moods.push(...mapped.moods);
      styles.push(...mapped.styles);
    }
    if (chip === "deep cuts") wantsDeepCuts = true;
    if (chip === "first timer") wantsFirstTimer = true;
  }

  return {
    moods: [...new Set(moods)],
    styles: [...new Set(styles)],
    wantsDeepCuts,
    wantsFirstTimer,
  };
}

/**
 * Score and rank shows against a tag set.
 * Returns the best match.
 */
export function recommend(tags: TagSet, excludeIds: string[] = []): ConciergeShow {
  const candidates = CATALOG.filter((s) => !excludeIds.includes(s.id));

  if (candidates.length === 0) {
    // Fallback: return a random show from full catalog
    return CATALOG[Math.floor(Math.random() * CATALOG.length)];
  }

  // If no tags were extracted, return a good default for newcomers
  if (tags.moods.length === 0 && tags.styles.length === 0) {
    // Default: Cornell '77 for newcomers, random legendary for others
    const legendary = candidates.filter((s) => s.significance === "legendary");
    if (legendary.length > 0) {
      return legendary[Math.floor(Math.random() * legendary.length)];
    }
    return candidates[0];
  }

  const scored = candidates.map((show) => {
    let score = 0;

    // Mood matches: +30 each
    for (const mood of tags.moods) {
      if (show.moods.includes(mood)) score += 30;
    }

    // Style matches: +25 each
    for (const style of tags.styles) {
      if (show.styles.includes(style)) score += 25;
    }

    // Audio quality bonus (favor pristine unless seeking deep cuts)
    if (!tags.wantsDeepCuts) {
      if (show.audioQuality === "pristine") score += 15;
      else if (show.audioQuality === "good") score += 8;
    }

    // Significance filter
    if (tags.wantsFirstTimer) {
      if (show.bestFor.includes("newcomer")) score += 25;
      if (show.significance === "legendary") score += 15;
    }
    if (tags.wantsDeepCuts) {
      if (show.significance === "deep-cut" || show.significance === "hidden-gem") score += 30;
    }

    // Small random factor to avoid always returning the same show
    score += Math.random() * 10;

    return { show, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0].show;
}

/**
 * Main entry point: takes user text or chip selections and returns a recommendation.
 */
export function getRecommendation(
  input: { text?: string; chips?: string[] },
  excludeIds: string[] = [],
): ConciergeShow {
  let tags: TagSet;

  if (input.chips && input.chips.length > 0) {
    tags = extractTagsFromChips(input.chips);
  } else if (input.text) {
    tags = extractTagsFromText(input.text);
  } else {
    tags = { moods: [], styles: [], wantsDeepCuts: false, wantsFirstTimer: false };
  }

  return recommend(tags, excludeIds);
}
