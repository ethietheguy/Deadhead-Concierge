export type Era =
  | "primal"         // 1966–1969
  | "early-70s"      // 1970–1971
  | "europe-72"      // 1972
  | "wall-of-sound"  // 1973–1974
  | "hiatus"         // 1975 — only four shows, all Bay Area
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

export type AudioQuality = "pristine" | "good" | "fair" | "rough";
export type Significance = "legendary" | "classic" | "deep-cut" | "hidden-gem";
export type ListenerLevel = "newcomer" | "exploring" | "head";

// A verbatim attributed quote pulled from a community source (Archive.org review,
// r/gratefuldead thread, etc.). Used for the "From the community" UI surface.
// Quote text must be byte-for-byte verbatim from the named source — the verifier
// (scripts/verify-citations.ts, in development) checks substring presence.
export type CommunityVoice = {
  quote: string;
  attribution: string;       // e.g. "JasW" or "shipofthesun, on the Box of Rain encore"
  source: string;            // e.g. "Archive.org review", "r/gratefuldead"
};

// Headyversion community-vote ranking for one song from this show's setlist.
// Empty array means the show has no notable Heady placements (also a real signal).
export type HeadyversionRank = {
  song: string;
  rank: number;
  votes: number;
  topVersionDate?: string;   // e.g. "Feb. 5, 1978" — verbatim from Headyversion
  topVersionVotes?: number;
};

export type ConciergeShow = {
  id: string;
  date: string;
  venue: string;
  city: string;
  state?: string;
  setlist: string[];
  archiveUrl: string;

  // Recommendation metadata
  era: Era;
  moods: MoodTag[];
  styles: StyleTag[];
  audioQuality: AudioQuality;
  significance: Significance;
  bestFor: ListenerLevel[];

  // Official-release info, e.g. ["Dick's Picks Vol 26"] or ["May 1977: Get Shown the Light", "Cornell 5/8/77"].
  // Empty/undefined = unreleased (also a community signal — heads sometimes seek those out).
  releasedAs?: string[];

  // Editorial content (curator voice, no inline citations)
  headline: string;
  whyThisShow: string;
  listenFor: string;
  context: string;
  funFact?: string;

  // Community voices + Headyversion ranks (the open-source proof surface)
  communityVoices?: CommunityVoice[];
  headyversionRanks?: HeadyversionRank[];
};
