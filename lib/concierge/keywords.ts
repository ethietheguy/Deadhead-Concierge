import type { MoodTag, StyleTag } from "./types";

/**
 * Maps user-facing keyword chips to internal mood/style tags.
 * Used by both the chip-based UI and the free-text keyword extraction.
 */
export const KEYWORD_MAP: Record<string, { moods: MoodTag[]; styles: StyleTag[] }> = {
  "mellow":        { moods: ["mellow", "introspective"],           styles: [] },
  "spacey":        { moods: ["psychedelic", "late-night"],         styles: ["jazz-space"] },
  "dancey":        { moods: ["high-energy", "joyful"],             styles: ["rock"] },
  "road trip":     { moods: ["road-trip"],                         styles: [] },
  "energized":     { moods: ["high-energy", "triumphant"],         styles: ["rock"] },
  "sad":           { moods: ["emotional", "introspective"],        styles: [] },
  "triumphant":    { moods: ["triumphant", "joyful"],              styles: ["rock", "jam"] },
  "psychedelic":   { moods: ["psychedelic", "late-night"],         styles: ["experimental", "jam"] },
  "bluegrass":     { moods: [],                                    styles: ["acoustic", "country-folk"] },
  "jazzy":         { moods: ["introspective"],                     styles: ["jazz-space"] },
  "introspective": { moods: ["introspective", "meditative"],       styles: [] },
  "late night":    { moods: ["late-night", "psychedelic"],          styles: ["jam", "jazz-space"] },
  "party":         { moods: ["party", "high-energy", "joyful"],    styles: ["rock"] },
  "first timer":   { moods: ["joyful"],                            styles: ["rock", "jam"] },
  "deep cuts":     { moods: [],                                    styles: [] },
  "Jerry ballads": { moods: ["emotional", "introspective"],        styles: ["acoustic"] },
  "Phil bombs":    { moods: ["high-energy", "psychedelic"],         styles: ["jam", "experimental"] },
  "dark":          { moods: ["dark", "psychedelic", "late-night"],  styles: ["experimental"] },
  "emotional":     { moods: ["emotional", "introspective"],        styles: [] },
  "groove":        { moods: ["high-energy", "joyful", "party"],    styles: ["rock", "jam"] },
};

/** The keyword labels shown as tappable chips in the UI */
export const CHIP_KEYWORDS = [
  "mellow", "spacey", "dancey", "road trip", "energized",
  "sad", "triumphant", "psychedelic", "jazzy", "introspective",
  "late night", "party", "dark", "emotional", "groove",
  "first timer", "deep cuts",
] as const;
