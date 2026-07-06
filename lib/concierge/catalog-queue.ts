import type { ConciergeShow } from "./types";

/**
 * Queue of older catalog entries pending the citation-grounded synthesis
 * pipeline. These entries pre-date the community-voices workflow and are
 * kept here so they can be re-run through the pipeline rather than
 * deleted. They are not exposed on the live site.
 */
export const CATALOG_QUEUE: ConciergeShow[] = [

  // ── 29. 9/21/93 MSG — Vince-era late-fire ────────────────────
  {
    id: "gd-1993-09-21",
    date: "1993-09-21",
    venue: "Madison Square Garden",
    city: "New York",
    state: "NY",
    setlist: [
      "Here Comes Sunshine", "Walkin' Blues", "Lazy River Road",
      "Queen Jane Approximately", "Loose Lucy",
      "Me and My Uncle", "Big River",
      "Tennessee Jed", "The Music Never Stopped",
      "Eyes of the World", "Estimated Prophet",
      "He's Gone", "Drums", "Space",
      "The Other One", "Stella Blue",
      "One More Saturday Night", "Liberty",
    ],
    archiveUrl: "https://archive.org/details/gd93-09-21.sbd.miller.94955.flac16",
    era: "final-years",
    moods: ["joyful", "mellow", "emotional", "triumphant"],
    styles: ["rock", "jam", "country-folk"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Vince-era Dead — the late fire nobody expected.",
    whyThisShow:
      "By 1993 the conventional wisdom was that the Dead were in decline — Jerry's health was failing, Vince Welnick wasn't Brent, and the crowds were rowdier than the music. This MSG show is the counterargument. A particularly strong Vince-era night: Jerry engaged, songs crisp, jams taking real chances. For anyone who wrote off the '90s Dead, this is the rebuttal.",
    listenFor:
      "Here Comes Sunshine opens the show — a classic Dead song revived in 1992 after a two-decade absence, and played here with real affection. Eyes of the World is extended and exploratory. Stella Blue is sung with feeling. Liberty in the encore is a late-era sleeper that deserves more love.",
    context:
      "Vince Welnick joined in 1990 after Brent's death, and he was a divisive figure — less soulful than Brent, his vocals uneven. But he brought a rock-solid keyboardist's support and patience. By 1993 the band had developed a workable late-era identity around him. Jerry would die less than two years later. These are the quiet valuable moments.",
    funFact: "Vince Welnick had been keyboardist for The Tubes (of 'She's a Beauty' fame) before joining the Dead. He thought the Dead gig was temporary. It turned out to be the last five years of the band.",
  },

  // ── 30. 8/24/68 Shrine — primal Anthem-era ───────────────────
  {
    id: "gd-1968-08-24",
    date: "1968-08-24",
    venue: "Shrine Auditorium",
    city: "Los Angeles",
    state: "CA",
    setlist: [
      "That's It for the Other One", "New Potato Caboose",
      "Cryptical Envelopment", "Alligator",
      "Drums", "Caution (Do Not Stop on Tracks)",
      "Feedback", "And We Bid You Goodnight",
    ],
    archiveUrl: "https://archive.org/details/GratefulDead?query=date%3A1968-08-24",
    era: "primal",
    moods: ["psychedelic", "dark", "late-night", "meditative"],
    styles: ["experimental", "jam"],
    audioQuality: "fair",
    significance: "deep-cut",
    bestFor: ["head"],
    releasedAs: ["Two from the Vault"],
    headline: "Primal 1968 — before the songs, before the structure, just the sound.",
    whyThisShow:
      "This is the Dead at their most embryonic. The Shrine Auditorium shows from 1968 capture the band mid-mutation — the Anthem of the Sun era, before Live/Dead, before songs like Uncle John's Band even existed. Long, dissonant, searching. If you want to hear where the psychedelic Dead came from, start here. This is not background music. It's a document.",
    listenFor:
      "The Alligator → Drums → Caution sequence is classic primal Dead — proto-jam, motorik, Jerry's guitar still partially distorted and wild. That's It for the Other One is a multi-part suite the band was still figuring out how to play. The whole show has an untrained, exploratory quality — young musicians inventing a genre in real time.",
    context:
      "In 1968 the Dead had just added Mickey Hart as a second drummer, were writing Anthem of the Sun in the studio with avant-garde composer Tom Constanten, and were the house band of the San Francisco psychedelic scene. Bill Graham was booking them regularly on both coasts. They'd only just decided they were a real rock band, not just an Acid Test ballroom crew.",
    funFact: "The Dead played the Shrine Auditorium multiple times in 1968 and 1969 — it was one of their key LA venues in the primal era.",
  },

  // ── 42. 3/5/72 Winterland — Pigpen's last Bay Area show ────
  {
    id: "gd-1972-03-05",
    date: "1972-03-05",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Truckin'", "Sugaree", "Mr. Charlie",
      "Black Throated Wind", "China Cat Sunflower",
      "I Know You Rider", "You Win Again",
      "Tennessee Jed", "Mexicali Blues",
      "Casey Jones", "Cumberland Blues",
      "Big Railroad Blues", "Playing in the Band",
      "Brown-Eyed Women", "Good Lovin'",
      "Comes a Time", "Dark Star",
      "Sugar Magnolia", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1972-03-05.sbd.miller.103282.flac16",
    era: "europe-72",
    moods: ["high-energy", "joyful", "emotional"],
    styles: ["rock", "blues", "jam"],
    audioQuality: "good",
    significance: "deep-cut",
    bestFor: ["head"],
    headline: "The first Black Throated Wind. The first Mind Left Body Jam. Pigpen's last Bay Area night.",
    whyThisShow:
      "This is a transition document. Pigpen was already sick — he'd play Europe '72, then disappear from the band by summer. This was his last Bay Area show, and you can hear him giving everything he had on Good Lovin'. It also features the first-ever Black Throated Wind and the first true Mind Left Body Jam (buried inside Good Lovin'). For Pigpen completists and Europe '72 prequel diggers, this one matters even though it isn't a Cornell.",
    listenFor:
      "The Good Lovin' is the moment — Pigpen leading the band into what would become the Mind Left Body Jam two years later. Black Throated Wind makes its debut and feels brand-new. Tennessee Jed is also early. The whole show is messy in the best way — a band on the cusp of one of the greatest tours in rock history, working out the kinks.",
    context:
      "March 1972 — five weeks before the Dead would board a plane for Europe. The band added Keith Godchaux on piano in October '71 and his wife Donna on backing vocals shortly after. Pigpen's liver was failing from years of hard drinking. This Winterland night was a benefit for Yogi Phlegm (formerly Sons of Champlin) and the New Riders, with the Dead headlining. Charlie Miller's transfer is the best available.",
    funFact: "Pigpen's actual last show was Hollywood Bowl on 6/17/72, after the Academy of Music run and all of Europe '72 — but 3/5/72 was the last time Bay Area Deadheads ever saw him onstage. He died nine months later at age 27, joining Hendrix, Joplin, and Brian Jones.",
  },

  // ── 49. 4/2/89 Pittsburgh — Shakedown gates and a riot ─────
  {
    id: "gd-1989-04-02",
    date: "1989-04-02",
    venue: "Civic Arena",
    city: "Pittsburgh",
    state: "PA",
    setlist: [
      "Hell in a Bucket", "Sugaree",
      "Walkin' Blues", "Brown-Eyed Women",
      "When I Paint My Masterpiece", "Tennessee Jed",
      "The Music Never Stopped",
      "Shakedown Street",
      "Looks Like Rain", "He's Gone",
      "Drums", "Space",
      "I Need a Miracle", "Black Peter",
      "Goin' Down the Road Feeling Bad",
      "Turn On Your Lovelight",
      "Knockin' on Heaven's Door",
    ],
    archiveUrl: "https://archive.org/details/gd89-04-02.sbd-matrix.mattman.17177.sbeok.shnf",
    era: "80s",
    moods: ["high-energy", "triumphant", "joyful", "party"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: ["Download Series Vol. 9 (4/2-3/89)"],
    headline: "Brent at peak — a Shakedown that doesn't slow down until Baby Blue.",
    whyThisShow:
      "Spring 1989 was Brent Mydland's absolute peak — vocals strong, organ work pushing the band, songs like Foolish Heart and We Can Run hitting their stride. This Pittsburgh show is the standout of that tour. Archive reviewers call it 'probably the best of this tour' — the Shakedown opens the second set hot and the band 'didn't slow down until Baby Blue.' The GDTRFB > Lovelight closing is one of the best of the late '80s.",
    listenFor:
      "Shakedown Street opening the second set is the sustained highlight — long, funky, Brent and Jerry trading lead. Tennessee Jed in the first set is described by one reviewer as 'a clinic in fine musicianship — the final two minutes are just so reassuring.' The GDTRFB > Lovelight closer brings the house down. Knockin' on Heaven's Door encore is tender.",
    context:
      "April 1989 — six months before the Hampton 'Formerly the Warlocks' run, the band was tightening up after years of Touch of Grey-era mainstream chaos. Pittsburgh's Civic Arena (the Igloo) had a retractable dome. The shows were marred by gate-crashing and fights outside — the late-'80s Touch of Grey crowd had brought a lot of new attention but also a lot of trouble. The music inside, on this night, was the answer to that.",
    funFact: "The Pittsburgh Civic Arena was the first major sports/concert venue in the world with a retractable roof. The Dead reportedly asked if they could open it during the show; the answer was no. (It was 40 degrees outside.)",
  },

  // ── 53. 9/24/88 MSG — rainforest benefit, surreal star turn ──
  {
    id: "gd-1988-09-24",
    date: "1988-09-24",
    venue: "Madison Square Garden",
    city: "New York",
    state: "NY",
    setlist: [
      "Iko Iko", "Neighborhood Girls",
      "Feel Like a Stranger",
      "West L.A. Fadeaway",
      "Little Red Rooster",
      "Box of Rain",
      "Ramble On Rose",
      "When I Paint My Masterpiece",
      "Don't Ease Me In",
      "Chinese Bones",
      "Crazy Fingers",
      "Man Smart, Woman Smarter",
      "Every Time You Go Away",
      "What's Going On",
      "Drums", "Space", "The Wheel",
      "Throwing Stones", "Not Fade Away",
    ],
    archiveUrl: "https://archive.org/details/gd88-09-24.sbd.rich.425.sbeok.shnf",
    era: "80s",
    moods: ["mellow", "introspective", "emotional"],
    styles: ["rock", "blues", "jam"],
    audioQuality: "good",
    significance: "deep-cut",
    bestFor: ["head"],
    headline: "The rainforest benefit. Hall & Oates, Suzanne Vega, Mick Taylor all sit in.",
    whyThisShow:
      "This is one of the strangest Dead nights ever — a benefit for the rainforest with a guest list that reads like a 1988 SNL cold-open: Suzanne Vega, Hall & Oates, Mick Taylor (Rolling Stones), Bruce Hornsby, Jack Casady (Jefferson Airplane). Suzanne Vega singing Robyn Hitchcock's 'Chinese Bones' is, in one Archive reviewer's words, 'worth the download alone' — a song that 'seems SO perfect for the Dead.' Hall & Oates singing 'Every Time You Go Away.' Mick Taylor wailing on Little Red Rooster. It's not the band's best playing — Jerry's voice is rough, and reviewer 'rojimmy' calls the Dead-only stretches 'uninspiring' — but the curio value is enormous.",
    listenFor:
      "Suzanne Vega singing Robyn Hitchcock's 'Chinese Bones' is the highlight — she sings, the Dead back her, and the cover actually works. Mick Taylor's Little Red Rooster is filthy in the best way — Archive reviewers single it out as 'smoking hot Rooster with some choice Mick Taylor work.' Hall & Oates on 'Every Time You Go Away' is genuinely strange and good. The 'What's Going On' (Marvin Gaye) into Drums > Space is the rainforest theme made literal. The Box of Rain in the first set continues the post-Hampton revival.",
    context:
      "September 24, 1988 — the seventh night of a nine-show MSG run. The benefit raised over $600,000 for rainforest preservation; Jerry, Bobby, Mickey, and Phil all spoke between sets about the cause. The whole concept was Mickey Hart's — he'd become deeply involved in environmental and indigenous-music causes through his work with the Smithsonian. The show was broadcast live on WNEW-FM. Soundboard via Tom Rich (the canonical 425 seed).",
    funFact: "The 1988 Rainforest Benefit raised so much money for indigenous-rights and rainforest groups that the band repeated the format multiple times. Mickey Hart's interest in non-Western music — the work that produced 'Planet Drum' and his Grammy-winning solo records — directly traces back to these years.",
  },

];
