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

export type AudioQuality = "pristine" | "good" | "fair" | "rough";
export type Significance = "legendary" | "classic" | "deep-cut" | "hidden-gem";
export type ListenerLevel = "newcomer" | "exploring" | "head";

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

  // Editorial content
  headline: string;
  whyThisShow: string;
  listenFor: string;
  context: string;
  funFact?: string;
  tryNext?: {
    showId: string;
    hook: string;
  };
};
