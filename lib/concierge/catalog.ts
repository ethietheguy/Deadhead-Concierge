import type { ConciergeShow } from "./types";

/**
 * Curated show catalog for the Dead Concierge.
 *
 * Every show here is hand-curated with rich editorial content
 * (headline, whyThisShow, listenFor, context, funFact).
 * Quality over quantity — better to have 25 shows that tell a
 * real story than 200 thin entries.
 *
 * To add a show: add another object to CATALOG below. All fields
 * are documented in types.ts. The transform script / research
 * dataset is kept separately (extended-catalog.ts) as reference
 * material for writing future editorial, but is not imported here.
 */
export const CATALOG: ConciergeShow[] = [
  // ── 1. Cornell '77 — the tape that became the front door ─────
  // Synthesized 2026-04-26 from Archive.org reviews + Jerrybase + Headyversion
  // + r/gratefuldead. Editorial = curator voice (no inline citations);
  // community voices + Heady ranks live in their own rendered section.
  {
    id: "gd-1977-05-08",
    date: "1977-05-08",
    venue: "Barton Hall, Cornell University",
    city: "Ithaca",
    state: "NY",
    setlist: [
      "New Minglewood Blues", "Loser", "El Paso", "They Love Each Other",
      "Jack Straw", "Deal", "Lazy Lightning", "Supplication",
      "Brown-Eyed Women", "Mama Tried", "Row Jimmy",
      "Dancin' In The Streets", "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "St. Stephen", "Not Fade Away",
      "St. Stephen (reprise)", "Morning Dew", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1977-05-08.sbd.hicks.4982.sbeok.shnf",
    era: "77-peak",
    moods: ["high-energy", "joyful", "triumphant", "road-trip"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    releasedAs: ["May 1977: Get Shown the Light", "Cornell 5/8/77"],
    headline: "The tape that became the front door.",
    whyThisShow:
      `Cornell is less a final answer than a shared language. It's the show that became famous before ` +
      `it was officially released — passed around for forty years until even the argument over whether ` +
      `it's actually overrated became part of the lore. The pitch is that it's approachable without ` +
      `becoming tame: the jams breathe, but the songs stay readable. One of the easiest doors into ` +
      `the band, and one most people end up walking back through.`,
    listenFor:
      `Start with Scarlet Begonias > Fire on the Mountain — the obvious centerpiece, and for good reason. ` +
      `Phil's bass gives the opening jam its footing, and the whole twenty-five minutes unfolds with the ` +
      `patience that makes '77 feel so welcoming. Dancin' in the Streets is the first-set sleeper: ` +
      `springy, funky, tighter than a song that loose has any right to be. The late sequence — St. Stephen ` +
      `> Not Fade Away > St. Stephen > Morning Dew — is where the night gathers its weight. Cornell isn't ` +
      `every-version-the-best — heads will argue about that forever. It just feels unusually legible: ` +
      `the songs, the room, the myth, and the invitation all at once.`,
    context:
      `Spring 1977, college tour, Barton Hall. The tape circulated through the trader network for forty ` +
      `years before the band finally put it out — first in May 1977: Get Shown the Light (2017), then as ` +
      `the standalone Cornell 5/8/77. By the time it was official, it was already canon.`,
    funFact:
      `It was Mother's Day. Somehow a Cornell field house became one of the most argued-over rooms in ` +
      `Dead listening history.`,
    communityVoices: [
      { quote: "the night was pure magic", attribution: "charlierat, who was at the show", source: "Archive.org review" },
      { quote: "I just don't see the sustained energy that others see", attribution: "RiPHRaPH", source: "Archive.org review" },
      { quote: "25 minutes of pure orgasmic paradise", attribution: "GoodOlGratefulDead, on Scarlet > Fire", source: "Archive.org review" },
      { quote: "Dancing in the streets is hands down, THE BEST version the Dead have ever pulled off", attribution: "chinacatsunflower420, on Dancin' In The Streets", source: "Archive.org review" },
      { quote: "Because everyone had killer tapes already.", attribution: "toiletsnakeATX, on why Cornell wasn't released until 2017", source: "r/gratefuldead" },
    ],
    headyversionRanks: [
      { song: "Scarlet Begonias > Fire On The Mountain", rank: 1, votes: 660, topVersionDate: "May 8, 1977", topVersionVotes: 660 },
      { song: "Morning Dew", rank: 1, votes: 249, topVersionDate: "May 8, 1977", topVersionVotes: 249 },
      { song: "Dancin' In The Streets", rank: 1, votes: 153, topVersionDate: "May 8, 1977", topVersionVotes: 153 },
      { song: "Jack Straw", rank: 4, votes: 105, topVersionDate: "Jan. 11, 1979", topVersionVotes: 162 },
      { song: "St. Stephen", rank: 3, votes: 66, topVersionDate: "Jan. 22, 1978", topVersionVotes: 131 },
    ],
  },

  // ── 2. Veneta '72 — sunshine daydream ─────────────────────────
  {
    id: "gd-1972-08-27",
    date: "1972-08-27",
    venue: "Old Renaissance Faire Grounds",
    city: "Veneta",
    state: "OR",
    setlist: [
      "Promised Land", "Sugaree", "Mr. Charlie", "Black-Throated Wind",
      "China Cat Sunflower", "I Know You Rider", "Beat It On Down the Line",
      "He's Gone", "Jack Straw", "Bertha", "Playing in the Band",
      "Bird Song", "Greatest Story Ever Told", "Dark Star",
      "El Paso", "Sing Me Back Home", "Sugar Magnolia",
      "Casey Jones", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1972-08-27.sbd.orf.gems.97.sbeok.shnf",
    era: "europe-72",
    moods: ["psychedelic", "joyful", "high-energy", "road-trip"],
    styles: ["jam", "experimental", "rock"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Sunshine Daydream"],
    headline: "Jerry's Fender Strat in the Oregon heat.",
    whyThisShow:
      `One of the broadly loved shows from the stretch right after Europe '72, and the setting is ` +
      `half the story. It was a free outdoor benefit on a scorching Oregon afternoon — kids running ` +
      `up onto the stage, the whole thing closer to a family gathering than a concert. Plenty of heads ` +
      `name it as the show that pulled them into the band for good. The Dark Star is the most-cited ` +
      `performance, jazzy and loose in a way that points more toward Brubeck than rock, and the ` +
      `recording has been a known quantity in the community for decades.`,
    listenFor:
      `The Dark Star is the one everyone talks about — it opens relaxed and low-key and builds, ` +
      `without ever losing its footing, to a climax that's chaotic and somehow still ordered. The ` +
      `Playing in the Band stretches past seventeen minutes. Bird Song is one of the prettiest of the ` +
      `run, and the He's Gone has the kind of warmth that makes listeners reach for color to describe ` +
      `it. Jerry's Fender Strat is the tonal signature of the day — bright and clean, a perfect fit ` +
      `for the country-leaning songs in the setlist. The soundboard also catches the between-song ` +
      `banter, which is part of the charm.`,
    context:
      `A late-summer benefit show in Veneta, Oregon, recorded a few months after the band came home ` +
      `from the spring 1972 European tour. The recording most reviewers evaluate is a soundboard. The ` +
      `show was filmed and eventually released as the Sunshine Daydream documentary, but the audio ` +
      `circulated on its own for decades before that — and the West Coast scene's tie to the room ` +
      `gives it a hometown, reunion feeling.`,
    funFact:
      `For at least one taper, the whole day distilled to a single image: people sprawled in the heat, ` +
      `eating ice cream, dancing in the sun with not much on.`,
    communityVoices: [
      { quote: "The Dark Star performed on this show while not my favourite ever (that would have to go to Live/Dead), is my favourite excluding 1969.", attribution: "xonix, on Dark Star", source: "Archive.org review" },
      { quote: "Dark Star is so jazzy (almost Dave Brubeckish) and integrated. I have to say it is one of my favorite versions too.", attribution: "Tie-Dyed Tom, on Dark Star", source: "Archive.org review" },
      { quote: "Veneta was like a family reunion.", attribution: "dreatimeland, on the room", source: "Archive.org review" },
      { quote: "They set us on fire for sure on this day", attribution: "sailler", source: "Archive.org review" },
      { quote: "30 Thousand plus downloads says it all...", attribution: "oh_uh_um_ah", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 3. Europe '72 — the Lyceum ────────────────────────────────
  {
    id: "gd-1972-05-26",
    date: "1972-05-26",
    venue: "Lyceum Theatre",
    city: "London",
    state: "UK",
    setlist: [
      "Truckin'", "Sugaree", "Mr. Charlie", "Tennessee Jed",
      "Jack Straw", "China Cat Sunflower", "I Know You Rider",
      "Playing in the Band", "Ramble On Rose", "Sugar Magnolia",
      "It Hurts Me Too", "Dark Star", "Brokedown Palace",
      "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1972-05-26.sbd.hollister.174.shnf",
    era: "europe-72",
    moods: ["joyful", "high-energy", "triumphant", "party"],
    styles: ["rock", "jam", "country-folk"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    releasedAs: ["Europe '72: The Complete Recordings"],
    headline: "Pigpen's last real night, Lyceum, London, May '72.",
    whyThisShow:
      `The final night of the Europe '72 tour, and the community treats it as the canonical send-off — ` +
      `for many reviewers, three and a half hours of the band at the top of what it was doing that ` +
      `spring. It carries extra weight as Pigpen's effective farewell; this was close to the last ` +
      `time the early band sounded like itself. There's a minority view that ranks it behind the ` +
      `Düsseldorf, Rotterdam, and Frankfurt nights, but the broader position is that the closing ` +
      `sequence alone earns its standing. A few heads will tell you the first set is the stronger half.`,
    listenFor:
      `The second-set suite is what listeners come back to — a Truckin' that dissolves into The Other ` +
      `One, reprised twice, with Morning Dew set in the middle. The Truckin'-into-Other One handoff is ` +
      `so smooth it's hard to hear where one ends and the next begins; Jerry and Keith are locked that ` +
      `tightly. The Morning Dew is the single most-cited moment of the night, the kind of version whose ` +
      `solos land somewhere emotional rather than just technical. Earlier, the Playing in the Band is ` +
      `genuinely exploratory, with a jam that takes off as Jerry threads through it. Listen too for a ` +
      `brief, lovely Pigpen-and-Keith duet near the end of the second Other One reprise.`,
    context:
      `The last night of the May 1972 European run, at the Lyceum Theatre in London. The performance ` +
      `has never had a standalone release, but the Europe '72 box set brought a version of it to far ` +
      `wider ears — and reviewers say the box brings out the full color of the recording. The ` +
      `soundboard mix draws steady praise for its balance, with Phil's bass sitting as prominent as ` +
      `the vocals.`,
    funFact:
      `Before Me and My Uncle, by one account, Billy Kreutzmann staged a small revolt — he didn't ` +
      `want to play the song, and got overruled.`,
    communityVoices: [
      { quote: "This is the last show where Pigpen is really a participatory member of the band. His next show would be his last, and he would not sing (or play really) at that show.", attribution: "Dylan M, on Pigpen's role", source: "Archive.org review" },
      { quote: `The following ten minute post-verse "Prelude" to Morning Dew is one of the most compelling passages that the band has ever played.`, attribution: "Cliff Hucker, on the Other One/Morning Dew sequence", source: "Archive.org review" },
      { quote: "This version of MD has made me cry, quite literally. This is no doubt the BEST version of this song EVER.", attribution: "MorninDew, on Morning Dew", source: "Archive.org review" },
      { quote: "Not as good as Dusseldorf 4/24, Rotterdam 5/11, or the most underrated show of the tour Frankfurt 4/26.", attribution: "Jimi @ Holy Grail Studios", source: "Archive.org review" },
      { quote: "The playing is consistently tight, nuanced and trippy. The second set meat sequence actually suffers from slowness at a few points, but the set is strong.", attribution: "kochman, on the overall performance", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 4. Branford Marsalis show — jazzy late-era peak ───────────
  {
    id: "gd-1990-03-29",
    date: "1990-03-29",
    venue: "Nassau Coliseum",
    city: "Uniondale",
    state: "NY",
    setlist: [
      "Bird Song", "Walkin' Blues", "Althea", "Black Throated Wind",
      "Brown-Eyed Women", "Cassidy", "Deal", "Eyes of the World",
      "Estimated Prophet", "Dark Star", "Drums", "Space",
      "The Wheel", "Gimme Some Lovin'", "Stella Blue",
      "Turn On Your Lovelight",
    ],
    archiveUrl: "https://archive.org/details/gd90-03-29.sbd.gardner.3345.sbeok.shnf",
    era: "80s",
    moods: ["introspective", "mellow", "late-night", "emotional"],
    styles: ["jazz-space", "jam", "experimental"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Wake Up to Find Out: Nassau Coliseum, Uniondale, NY 3/29/1990"],
    headline: "Branford on saxophone, all night long.",
    whyThisShow:
      `This is the night people mean when they talk about the spring 1990 Nassau run: Branford ` +
      `Marsalis walked on and stayed for nearly the entire show. It lands near the top of a lot of ` +
      `personal lists, and the reason heads give is Branford — his presence pushed the band up a ` +
      `level, and the Eyes of the World is the moment most point to as where it all locked in. There's ` +
      `real dissent worth knowing going in: some hear Jerry as the most reserved voice in the mix, ` +
      `making room for the guest rather than burning the show down himself. Either way, it's one of ` +
      `the most distinctive late-era nights the band has.`,
    listenFor:
      `The Eyes of the World is the center of gravity — long, patient, the whole band breathing ` +
      `together. Branford's first entrance comes earlier, on Bird Song, and it's one of the prettiest ` +
      `versions of the run; the story goes that people backstage caught his sax warming up before ` +
      `anyone knew a guest was coming. The Dark Star is where Jerry leans into his MIDI rig, and ` +
      `Branford nudged him to flick on a futuristic horn effect — the two of them trading sounds. The ` +
      `overall texture is jazzier than a typical Dead show, with Brent's bright keyboards sitting ` +
      `cleanly underneath.`,
    context:
      `One night of a four-show stand at Nassau Coliseum in late March 1990. Branford Marsalis was ` +
      `the guest — Mickey Hart had brought him in — and he played most of the night. The performance ` +
      `was officially released as Wake Up to Find Out, and reviewers who've heard both tend to prefer ` +
      `that mix to the circulating soundboard.`,
    funFact:
      `One bandstand moment made the rounds: Jerry fumbled a line in Dark Star, and Weir got annoyed ` +
      `enough to sit down on a road case for the rest of the song.`,
    communityVoices: [
      { quote: "to me it was the damn 'Eyes'. it set the whole thing off and put it in stone.", attribution: "reesey, on Eyes of the World", source: "Archive.org review" },
      { quote: "He just doesn't burn it up like he could.", attribution: "TheBrownAcid, on Jerry", source: "Archive.org review" },
      { quote: "The second set was ATOMIC!", attribution: "Scobard", source: "Archive.org review" },
      { quote: "Branford just kept that whole New Orleans vibe going", attribution: "JourneyHome, on Branford", source: "Archive.org review" },
      { quote: "This was one of THOSE shows. Start downloading one before you finish this. Not just b/c of Branford, but that helped for sure.", attribution: "Deadhead225", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 5. 10/9/89 Hampton — the comeback ─────────────────────────
  {
    id: "gd-1989-10-09",
    date: "1989-10-09",
    venue: "Hampton Coliseum",
    city: "Hampton",
    state: "VA",
    setlist: [
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Cassidy", "Bird Song", "Promised Land",
      "Playing in the Band", "Uncle John's Band",
      "Terrapin Station", "Drums", "Space",
      "I Will Take You Home", "Dear Mr. Fantasy",
      "Hey Jude", "Dark Star", "Attics of My Life",
      "Not Fade Away",
    ],
    archiveUrl: "https://archive.org/details/gd89-10-09.sbd.walker-scotton.13402.sbeok.shnf",
    era: "80s",
    moods: ["triumphant", "emotional", "high-energy", "joyful"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Hampton, October '89, Warlocks on the ticket, Dark Star in the air.",
    whyThisShow:
      `The second of two stealth Hampton shows the band billed under the old Warlocks name — and the ` +
      `one where they pulled Dark Star back out for the first time in years and closed with Attics of ` +
      `My Life, a song still unreleased on any studio album. Reviewers put it among the best the late ` +
      `'80s had to offer. The second set opens Help on the Way > Slipknot! > Franklin's Tower and ` +
      `rolls into a Playing in the Band that goes from funky to genuinely psychedelic before snapping ` +
      `back to the reprise. One fair caveat from longtime heads: the tape may not fully carry what the ` +
      `room felt like, since the energy in the building that night was its own thing.`,
    listenFor:
      `The Dark Star is the obvious anchor — its return after years away is the whole reason this tape ` +
      `gets passed around, and more than one head dates a lasting Dark Star obsession to this night. ` +
      `Listen for Garcia quoting a riff from the Live/Dead version before the song breaks fully open ` +
      `around the ten-and-a-half-minute mark. The encore Attics of My Life is the other breakout: word ` +
      `had spread that the band was soundchecking it out west, and reviewers single it out as Hunter ` +
      `and Garcia at their most poetic, with the band nailing it.`,
    context:
      `These two October 1989 Hampton Coliseum shows were billed as the Warlocks — a deliberately ` +
      `quiet announcement that tore through the Deadhead network anyway. Tickets were lime green with ` +
      `The Warlocks spelled out in gold foil, sold by mail order and, as at least one attendee found ` +
      `out, out of the back seat of a police car in the lot. The show is officially unreleased, which ` +
      `has kept community discussion anchored on the soundboard for decades. The Attics of My Life ` +
      `hadn't been played in over seventeen years — a gap some heads argue is as significant as the ` +
      `Dark Star return.`,
    funFact:
      `Tickets for the run came back from the printer lime green with "The Warlocks" in gold foil. ` +
      `At least one attendee scored his out of the back seat of a police car in the lot.`,
    communityVoices: [
      { quote: "I have seen the Band 500 times and this was the best Combined audience band experienced I have ever had.", attribution: "entourage1", source: "Archive.org review" },
      { quote: "When the opening notes rang out, I was peaking. My friend and I just jumped in unison, while holding each other, for several minutes.", attribution: "superfoodman, on Dark Star", source: "Archive.org review" },
      { quote: `afterwards, people were hugging each other and crying tears of joy. On the way out, the phones were packed with people - I remember one guy saying "Dark Star, man, Dark Star! I can't believe this just happened!"`, attribution: "piggriver", source: "Archive.org review" },
      { quote: "if you are seeking 10-9-89 with any question in your mind, well then, it may not have been for you in the first place.", attribution: "mid-maine", source: "Archive.org review" },
      { quote: `those lime green beauties with the "Warlocks" in gold embossed lettering were a joy to behold`, attribution: "Project J.A.M., on the tickets", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 6. Closing of Winterland — New Year's '78 ─────────────────
  {
    id: "gd-1978-12-31",
    date: "1978-12-31",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Sugar Magnolia", "Scarlet Begonias", "Fire on the Mountain",
      "Me and My Uncle", "Big River", "Friend of the Devil",
      "It's All Over Now", "Stagger Lee", "From the Heart of Me",
      "Sunrise", "Casey Jones", "I Need a Miracle",
      "Shakedown Street", "Bertha", "Good Lovin'",
      "Drums", "Not Fade Away", "Around and Around",
      "Dark Star", "The Other One", "Wharf Rat",
      "St. Stephen", "Good Lovin' (reprise)",
    ],
    archiveUrl: "https://archive.org/details/gd1978-12-31.sbd.hicks.4982.sbeok.shnf",
    era: "77-peak",
    moods: ["party", "high-energy", "joyful", "triumphant"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    releasedAs: ["The Closing of Winterland (DVD)"],
    headline: "New Year's Eve 1978, Winterland's last night.",
    whyThisShow:
      `The final night at Winterland, the band's longtime San Francisco home, played out over ` +
      `four-plus hours to close the building down. The midnight opening is an event in itself — Sugar ` +
      `Magnolia into Scarlet > Fire, with transition licks into Fire on the Mountain that reviewers ` +
      `hold up as a two-minute demonstration of what made Jerry's playing matter. The real weight ` +
      `lands in the third set, a sustained run through Dark Star, The Other One, Wharf Rat, St. ` +
      `Stephen, and Good Lovin' that some call close to forty-five minutes of pure flow — and the ` +
      `Wharf Rat a candidate for the best the band ever played. There's almost no dissent in the ` +
      `reviews; this one reads as broadly canonical.`,
    listenFor:
      `Lock onto the Scarlet > Fire transition first — the moment Jerry's guitar leads into Fire on ` +
      `the Mountain is the clearest demonstration of his playing on the whole tape. In the second set, ` +
      `the Terrapin Station is an outlier in feel: gentle and tender rather than bombastic, one of the ` +
      `most heartfelt versions around. The third set takes patience to reach, but the Dark Star into ` +
      `The Other One handoff is so smooth you can miss it if you're not tracking it. Listen too for ` +
      `the Miracle jam, which goes unusually bluesy and loose — there's a harp player in the mix, and ` +
      `it's the kind of jam the band rarely chased out of that song later on.`,
    context:
      `Winterland Arena closed for good this night, with the Dead as the final act — a fact that ` +
      `charged the whole evening. The soundboard captures the full four-set night in clean fidelity. ` +
      `There's never been an official audio release, but a DVD of the New Year's broadcast has ` +
      `circulated widely, and several reviewers reference watching that rather than the audio alone. ` +
      `It sits right at the tail end of what many heads consider the band's strongest sustained stretch.`,
    funFact:
      `John Belushi and Dan Aykroyd opened as the Blues Brothers, five weeks after Briefcase Full of ` +
      `Blues hit the shelves. Bill Graham served the crowd a hot champagne breakfast at sunrise.`,
    communityVoices: [
      { quote: "The transition from Dark Star into The Other One is so smooth, you could easily miss it.", attribution: "gphishmon, on the third set", source: "Archive.org review" },
      { quote: "If you actually survive Terrapin-Playing and make it through the 47 min aural ecstasy of Dark Star-Other One-Dark Star-Wharf Rat-St. Stephen-Good Lovin', then you can lay yourself down and die a peaceful death.", attribution: "DJPeebs, on the third set", source: "Archive.org review" },
      { quote: `Jerry during Scarlet/Fire was on FIRE, but we had one of those moments where Jerry looks at me cause I am pointing at him with two arms and I say to myself, "Jerry knows I am frying" and he just smiles.`, attribution: "sfdead, on Scarlet/Fire", source: "Archive.org review" },
      { quote: "It flows into Terrapin... one of THE most faithful, tenderest renderings of it I've ever heard. Not bombastic, but gentle, and heartfelt", attribution: "skwimite, on Terrapin Station", source: "Archive.org review" },
      { quote: "2 weeks ago I had never listened to the DEAD and only knew Casey Jones and Truckin. I picked up the DVD for this show at my local library and have been changed forever.", attribution: "iamsean", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 7. 2/13/70 — Dark Star into The Other One (late show) ───
  {
    id: "gd-1970-02-13",
    date: "1970-02-13",
    venue: "Fillmore East",
    city: "New York",
    state: "NY",
    setlist: [
      "China Cat Sunflower", "I Know You Rider", "Me and My Uncle",
      "Dire Wolf", "Smokestack Lightning", "Monkey and the Engineer",
      "Little Sadie", "Wake Up Little Susie", "Black Peter",
      "Uncle John's Band", "Katie Mae", "Dark Star",
      "Cryptical Envelopment", "Drums", "The Other One",
      "Cryptical Envelopment (reprise)", "Turn On Your Lovelight",
      "And We Bid You Goodnight",
    ],
    archiveUrl: "https://archive.org/details/gd1970-02-13.sbd.miller.95929.flac16",
    era: "early-70s",
    moods: ["psychedelic", "dark", "late-night", "meditative"],
    styles: ["experimental", "jam", "jazz-space"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Dick's Picks Vol. 4 (with 2/14/70)"],
    headline: "Dark Star into The Other One, Fillmore East, February '70.",
    whyThisShow:
      `This is the show the Fillmore East run is remembered by, and the Dark Star at its center is ` +
      `the reason. One listener who was there described "the places they went, and the changes they ` +
      `went through during that time, were unlike anything I had ever seen or heard before, ` +
      `including the Allmans earlier that night or the Dead themselves earlier that year". Another ` +
      `reviewer described "an insanely inventive Dark Star that drops down to silence before ` +
      `charging back up into a monster Feeling Groovy jam and then Bob drives the band through the ` +
      `most high energy Other One I've ever heard". The sequence closes with Pigpen steering ` +
      `Lovelight back to earth, and that same reviewer noted the band "managed to make the ` +
      `connection" after the cosmic territory they had just covered. Dark Star, The Other One, and ` +
      `Lovelight were officially released on Dick's Picks Vol. 4, with the Archive source carrying ` +
      `a fuller picture of the night.`,
    listenFor:
      `The Dark Star is the main event — track the moment it drops to near-silence, which one ` +
      `attendee recalled so vividly: "at the points where the music is quiet, almost silent, the ` +
      `audience was also so quiet you could have heard a pin drop". When the Dead emerge from that ` +
      `stillness they do not go to St. Stephen as the crowd expected — one witness recalled that ` +
      `"when we all expected they would go into St. Stephen from DS, they went into The Other One, ` +
      `which drew a collective gasp from the audience". One reviewer singled out the continuous arc ` +
      `of the Dark Star through The Other One into Lovelight as "one of the best continuous jams ` +
      `ever". The recording itself is soundboard and one listener found it "STRAIGHT SOUND BOARD, ` +
      `STEREO MIX, AND SOUNDS ALBUM READY".`,
    context:
      `February 1970 was one of the Dead's densest runs at the Fillmore East, and this Friday-night ` +
      `late show came the night before another legendary performance on the 14th — both nights were ` +
      `eventually compiled for Dick's Picks Vol. 4. The Archive source ` +
      `(gd70-02-13.early-late.sbd.cotsman.18114.sbeok.shnf) is a soundboard and carries more of the ` +
      `full night than the official release, including an acoustic set, some of which one reviewer ` +
      `noted "can be heard on Bears' Choice". The Allman Brothers opened that night, and at least ` +
      `one attendee arrived already floored by what the Allmans had done, only to find himself ` +
      `reconsidering everything once the Dead took the stage.`,
    funFact:
      `One eyewitness recalled that "it was dawn when the concert let out and the sidewalk outside ` +
      `the Fillmore was filled with people, like me, who couldn't believe what we had just ` +
      `witnessed".`,
    communityVoices: [
      { quote: "the places they went, and the changes they went through during that time, were unlike anything I had ever seen or heard before", attribution: "klopez1253", source: "Archive.org review" },
      { quote: "it has everything that make the Grateful Dead what they are and showcases some of the finest playing of their career. It's easily in the top five.", attribution: "Darrylizer", source: "Archive.org review" },
      { quote: "the DS>TIFTOO>TOYL is one of the best continuous jams ever and should be allowed to be shared for all to hear", attribution: "WharfRatDude", source: "Archive.org review" },
      { quote: "the audio is STRAIGHT SOUND BOARD, STEREO MIX, AND SOUNDS ALBUM READY", attribution: "oh_uh_um_ah", source: "Archive.org review" },
      { quote: "some 38 years later this sounds as fresh and awsome as the first time I saw them", attribution: "oldhead21470", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 8. Red Rocks '78 — the mellow road trip show ──────────────
  {
    id: "gd-1978-07-08",
    date: "1978-07-08",
    venue: "Red Rocks Amphitheatre",
    city: "Morrison",
    state: "CO",
    setlist: [
      "Jack Straw", "They Love Each Other", "Me and My Uncle",
      "Row Jimmy", "Looks Like Rain", "Deal",
      "Lazy Lightning", "Supplication", "El Paso",
      "Ramble On Rose", "Let It Grow", "Bertha",
      "Good Lovin'", "Candyman", "Estimated Prophet",
      "Eyes of the World", "Drums", "Not Fade Away",
      "Wharf Rat", "Sugar Magnolia",
    ],
    archiveUrl: "https://archive.org/details/gd1978-07-08.sbd.hollister.174.shnf",
    era: "77-peak",
    moods: ["mellow", "road-trip", "introspective", "joyful"],
    styles: ["country-folk", "jam", "rock"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["newcomer", "exploring"],
    releasedAs: ["Red Rocks: 7/8/78"],
    headline: "Red Rocks, July '78, second set wide open.",
    whyThisShow:
      `This show is officially released as 'Red Rocks: 7/8/78' and sits at number 12 in Deadbase's ` +
      `tape rankings. The second set is the engine — one reviewer described the stretch from ` +
      `Estimated Prophet through Sugar Magnolia as "too good for words, honestly I can't even ` +
      `describe it". Jerry's guitar gets specific praise across multiple reviews: one listener ` +
      `noted that "Jerry's guitar lines dance in the Estimated> Other One> Eyes and soar during ` +
      `Wharf Rat". Keith Godchaux also draws notice — one reviewer who was still getting into the ` +
      `'78 period found him "sick on this show, really on fire". One dissenting voice points out ` +
      `that other '78 dates — 4/12 and 1/22 — may edge this one out, but the weight of community ` +
      `opinion puts this night firmly in the year's top tier.`,
    listenFor:
      `The Estimated Prophet into Other One into Eyes of the World sequence is the heart of the ` +
      `show — one reviewer described how Jerry "alternately transitions from chopping to floating ` +
      `in butterfly-like fashion during the lead jams" in the Eyes. The Wharf Rat is singled out ` +
      `repeatedly: one reviewer called it "unlike any other version of Wharf Rat that exists" and ` +
      `specifically flagged Jerry's quiet "Ssshhh" mid-song as "priceless". The Franklin's Tower ` +
      `that follows is rare post-drums placement, and one listener called it "a raging jam ` +
      `throughout". The encores go three deep — Terrapin into One More Saturday Night into ` +
      `Werewolves of London — and one reviewer noted "you can tell they are having a good time ` +
      `doing this tune" on the Zevon cover. The soundboard recording rewards the volume advice one ` +
      `reviewer repeated twice: "it demands to be played loud".`,
    context:
      `This is a soundboard recording (identifier: gd78-07-08.sbd.unknown.294.sbeok.shnf) from the ` +
      `era-77-peak classification, one of two consecutive Red Rocks nights that the community ` +
      `treats as a single run. The show was officially released by the band's organization as 'Red ` +
      `Rocks: 7/8/78,' confirming its canonical standing. Keith and Donna Godchaux were still in ` +
      `the lineup; the Godchaux era would end the following year. One reviewer noted that "the guys ` +
      `I hung around seemed to consist of quite a number of Dead Heads" who were circulating this ` +
      `tape as early as 1979, suggesting it traveled the lot quickly.`,
    funFact:
      `One listener reported that after three days at Red Rocks in 1985, he "started going to a lot ` +
      `of Rainbow Gatherings" because the venue itself had that kind of effect on him.`,
    communityVoices: [
      { quote: "starting with Estimated Prophet, the 2nd set of this show basically takes on a life of it's own. A high energy, rock & roll romp that really defies the senses.", attribution: "SkeetsHoo, on the second set", source: "Archive.org review" },
      { quote: "Donna Jean some pretty augghs during Estimated.", attribution: "c-freedom, on Donna", source: "Archive.org review" },
      { quote: "jerry is just redonkuluous this evening. His guitar just sings all night and even though his voice has sounded better on many a night, damn if he doesn't give it 110% on the vocals this night.", attribution: "gratefulvince, on Jerry", source: "Archive.org review" },
      { quote: "This show ranks #12 in Deadbase's tape ranking, and with very good reason (I'd give it extra stars for this review if I could). Recording quality is terrific, the set list is phenomenal, and Jerry is ON in a big way for both vocals and lead.", attribution: "matrixport, on overall quality", source: "Archive.org review" },
      { quote: "Though I can't say this show is my favorite of '78, that may be either be 4/12 or 1/22 and the Dick's Picks Vol. 18 pastiche of 2/03 and 2/05.", attribution: "Darrylizer, on ranking within '78", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 9. Jerry's last show — emotional weight ───────────────────
  {
    id: "gd-1995-07-09",
    date: "1995-07-09",
    venue: "Soldier Field",
    city: "Chicago",
    state: "IL",
    setlist: [
      "Touch of Grey", "Little Red Rooster", "Lazy River Road",
      "When I Paint My Masterpiece", "Friend of the Devil",
      "The Promised Land", "Shakedown Street",
      "Samson and Delilah", "So Many Roads",
      "Samba in the Rain", "Corrina", "Drums", "Space",
      "Unbroken Chain", "Sugar Magnolia",
      "Black Muddy River", "Box of Rain",
    ],
    archiveUrl: "https://archive.org/details/gd1995-07-09.sbd.unknown.6142.shnf",
    era: "final-years",
    moods: ["emotional", "dark", "introspective", "meditative"],
    styles: ["rock", "blues", "acoustic"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Soldier Field, July 9th — the last night.",
    whyThisShow:
      `This is the last Grateful Dead show ever played, and the community holds it that way — ` +
      `clear-eyed about both halves of that. Plenty of reviewers will tell you the performance itself ` +
      `doesn't hold up, and just as many argue that grading this particular night on musicianship or ` +
      `setlist misses the entire point. What the tape carries is the weight of what it is: the close ` +
      `of a thirty-year run, Jerry's last night on a stage. One person who was there described ` +
      `watching him slip in front of their eyes — and noticing that whatever else faded, the soul ` +
      `never left the singing. The double encore of Black Muddy River into Box of Rain, a pairing ` +
      `that happens nowhere else in the catalog, gives the night the shape of a goodbye.`,
    listenFor:
      `So Many Roads is the emotional center of the second set; for a lot of listeners it's the most ` +
      `powerful thing they ever saw Jerry do. Black Muddy River in the encore is the one most people ` +
      `circle back to — the way his voice catches on the line about the last bolt of sunshine. ` +
      `Unbroken Chain is a genuine rarity, rumored for the run and finally delivered, coming out of ` +
      `Space. The Corrina into Drums is singled out as one of the strongest jams of all of 1995, and ` +
      `Box of Rain closing the night has Phil pushing harder than almost any other version on tape.`,
    context:
      `July 9, 1995 at Soldier Field in Chicago — the final night of the summer tour and the last ` +
      `concert the Grateful Dead ever performed. Jerry Garcia died thirty-seven days later, on August ` +
      `9, 1995. The show has never had an official release, an absence the community reads as ` +
      `conspicuous given the date. The best-circulating recording is a soundboard, and it has drawn ` +
      `hundreds of reviews on Archive — a volume that says more about what the night meant than about ` +
      `the playing. One head who'd toured the whole summer called the run a disaster tour right up ` +
      `until it became, in their telling, the band's best show of the year.`,
    funFact:
      `Phil's Unbroken Chain, the great unicorn of the catalog, had been waiting twenty-one years ` +
      `for its first live performance. The band finally cracked it in March '95 and played it ` +
      `exactly ten times before the run ended in Chicago.`,
    communityVoices: [
      { quote: "So Many Roads was one of those moments, in fact the most powerful soul experience I ever witnessed from Jerry (in my 69 shows).", attribution: "santacruzer, on So Many Roads", source: "Archive.org review" },
      { quote: "Black Muddy River. Jerry's rendering of this tune makes me forget the sloppy guitar work and spotty vocals.", attribution: "jerrysongs, on Black Muddy River", source: "Archive.org review" },
      { quote: "to simply assign a good/bad value judgement to this show based on the musicianship of the band/and or setlist or sound of the recording is completely idiotic.", attribution: "samerca", source: "Archive.org review" },
      { quote: "It's a little hard to listen to the lyrical mistakes, but the places that they go otherwise, well, that's deserving.", attribution: "pinetop", source: "Archive.org review" },
      { quote: "Phil's double encore w Box of Rain!!! Come on! I dont think he ever did that song better, and I have heard many versions!!!", attribution: "17whenitoured, on Box of Rain", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 10. Barton Hall '77 cousin — the accessible rocker ────────
  {
    id: "gd-1977-05-09",
    date: "1977-05-09",
    venue: "Buffalo Memorial Auditorium",
    city: "Buffalo",
    state: "NY",
    setlist: [
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Cassidy", "Brown-Eyed Women", "Mexicali Blues",
      "Tennessee Jed", "Looks Like Rain", "Deal",
      "Samson and Delilah", "Sunrise", "Estimated Prophet",
      "Eyes of the World", "Drums", "The Wheel",
      "The Other One", "Stella Blue", "Around and Around",
      "Uncle John's Band",
    ],
    archiveUrl: "https://archive.org/details/gd1977-05-09.sbd.hicks.4982.sbeok.shnf",
    era: "77-peak",
    moods: ["high-energy", "joyful", "road-trip", "triumphant"],
    styles: ["rock", "jam", "country-folk"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["newcomer", "exploring"],
    releasedAs: [],
    headline: "Buffalo the night after Cornell — don't skip it.",
    whyThisShow:
      `Buffalo is the night after Cornell, and the running community argument is whether it gets ` +
      `unfairly buried in its famous neighbor's shadow — plenty of people who've heard both prefer ` +
      `it. The first set is the center of gravity, and the Help on the Way > Slipknot! > Franklin's ` +
      `Tower draws particular attention as maybe the best version of that suite all year. The ` +
      `recording is a clean soundboard with sharp balance and separation. One honest caveat: ` +
      `reviewers tend to feel the second set, good as it is, doesn't quite match the first — so this ` +
      `is a show that rewards front-loading your attention.`,
    listenFor:
      `Start at the top. The opening Help > Slipknot! > Franklin's Tower is the thing people keep ` +
      `coming back to, with Jerry's vocals and guitar on Franklin's at full strength. In the second ` +
      `set, the Estimated Prophet into The Other One is a hard, fast lurch in intensity. Listen for ` +
      `how loud and present Phil is throughout — reviewers note the rhythm section would rarely drive ` +
      `this hard again after '77. The Uncle John's Band encore is the right close, a fitting send-off ` +
      `to a three-night run.`,
    context:
      `This is the third night of a three-show run — Passaic on May 7, Cornell on May 8, Buffalo on ` +
      `May 9. The soundboard has never had an official release, which has made it a community-sustained ` +
      `tape with well over a hundred reviews on Archive. By this point, things with Keith and Donna ` +
      `were on the downslope and Jerry had recently been introduced to the substances that would later ` +
      `weigh on him — context that makes the quality of this run feel more remarkable in hindsight.`,
    funFact:
      `Most '77 first sets ease in with a Promised Land or a Mississippi Half-Step. Buffalo cold-opens ` +
      `with Help on the Way > Slipknot! > Franklin's Tower and hits the suite as hard as the band ` +
      `would all year.`,
    communityVoices: [
      { quote: "every note was purposeful", attribution: "zzzboxofrainzzz, on the show overall", source: "Archive.org review" },
      { quote: "Certainly my favorite Help Slip Franklins. Pair this set with the previous night's second and wow!", attribution: "gvtmule, on the first set", source: "Archive.org review" },
      { quote: "Unlike Cornell where I'll sometimes skip a tune to get to a highlight, I have never skipped a tune when streaming 5/9/77.", attribution: "zzzboxofrainzzz, comparing Buffalo to Cornell", source: "Archive.org review" },
      { quote: `absolutely perfect beautiful "SUBLIME" 1st set!`, attribution: "c-freedom, on the first set", source: "Archive.org review" },
      { quote: "Estimated Prophet Phil taking me inside out and sideways, Bobby straight ahead.", attribution: "mrnaturally, on Estimated Prophet", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 11. 2/27/69 Fillmore West — the Live/Dead template ────────
  {
    id: "gd-1969-02-27",
    date: "1969-02-27",
    venue: "Fillmore West",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Morning Dew", "Good Morning Little Schoolgirl", "Doin' That Rag",
      "St. Stephen", "The Eleven", "Turn On Your Lovelight",
      "Dark Star", "Death Don't Have No Mercy", "Lovelight (reprise)",
    ],
    archiveUrl: "https://archive.org/details/gd1969-02-27.sbd.miller.30535.sbeok.flac16",
    era: "primal",
    moods: ["psychedelic", "dark", "meditative", "late-night"],
    styles: ["experimental", "jam", "jazz-space", "blues"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Live/Dead (Dark Star, St. Stephen, The Eleven)"],
    headline: "The Live/Dead Dark Star, Thursday night at the Fillmore.",
    whyThisShow:
      `This is the night the Dark Star on Live/Dead was captured, and the community treats that ` +
      `recording as the benchmark every other version gets measured against. In 1969 almost every ` +
      `Dark Star was fiery and purposeful — an event unto itself — and this is the one many fans ` +
      `heard first, the measuring stick for everything that came after. Worth knowing: at least one ` +
      `reviewer ranking the four Fillmore nights that week puts this show third overall, even while ` +
      `calling its Dark Star the best of the run. The performance and the legend aren't quite the ` +
      `same thing, and heads enjoy arguing the gap.`,
    listenFor:
      `The transition out of Mountains of the Moon into Dark Star is a specific moment reviewers keep ` +
      `returning to — a beautiful handoff that sets up everything after it. Inside the Dark Star, ` +
      `listen for Jerry ripping off soaring leads and then scattering them into psychedelic blasts ` +
      `while Phil throws down enough low end to rattle the room. The St. Stephen is the other flagged ` +
      `peak, full of clean thematic motifs and counterpoint. Reviewers also rate this night's Other ` +
      `One section above the nearby March 2 show, even the ones who prefer March 2 overall for its ` +
      `Cryptical reprise.`,
    context:
      `One of four consecutive Fillmore West shows in late February and early March 1969, with ` +
      `Pentangle sharing the Thursday bill. The Dark Star, St. Stephen, and The Eleven from this ` +
      `recording went out on Live/Dead in 1969, which is why the tape circulates as a known quantity ` +
      `even though the full show is unreleased. The best source is a 16-track soundboard, putting the ` +
      `fidelity well above most 1969 recordings. At least one attendee who caught both this night and ` +
      `March 2 says the band played the best he ever saw them that weekend.`,
    funFact:
      `The Aoxomoxoa sessions were burning a hole through Warner Bros.'s money — the album would land ` +
      `$180,000 over budget. The Fillmore tapes from this week ran in parallel as the rescue plan, ` +
      `the live record they wouldn't have to pay studio time for. It came out as Live/Dead later that ` +
      `year.`,
    communityVoices: [
      { quote: "this version of Dark Star, which appears on Live Dead, coming out of a beautiful transition from Mountains on the Moon is THE quintesssential dark star", attribution: "Kola67, on Dark Star", source: "Archive.org review" },
      { quote: "the Live/Dead DS contained here is basically the measuring stick of all others. for many people, it was their first window into the improvisational possibilities of the greatest band on earth", attribution: "clementinescaboose, on Dark Star", source: "Archive.org review" },
      { quote: "flawless thematic motifs with counterpoint lines and rhythms...they even sang close to the proper harmonies", attribution: "jimtuht, on Dark Star and St. Stephen", source: "Archive.org review" },
      { quote: "music that can make one sob for joy", attribution: "WandrnShaman, on mood", source: "Archive.org review" },
      { quote: "This Dark Star truely is a cosmic voyage. You are sent spinning through Saturn's rings and past the outer plants; dodging meteors and hitching rides on comets till you are left floating in the endless void", attribution: "xonix, on Dark Star", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 12. 5/2/70 Harpur College — three shows in one night ──────
  {
    id: "gd-1970-05-02",
    date: "1970-05-02",
    venue: "Harpur College (SUNY Binghamton)",
    city: "Binghamton",
    state: "NY",
    setlist: [
      "Don't Ease Me In", "Friend of the Devil", "Silver Threads and Golden Needles",
      "Deep Elem Blues", "Candyman", "Cumberland Blues",
      "Cold Rain and Snow", "Dancing in the Street", "China Cat Sunflower",
      "I Know You Rider", "Dark Star", "St. Stephen",
      "Not Fade Away", "Mason's Children", "St. Stephen (reprise)",
      "Good Lovin'", "Morning Dew", "Uncle John's Band",
    ],
    archiveUrl: "https://archive.org/details/gd1970-05-02.sbd.miller.30466.sbeok.shnf",
    era: "early-70s",
    moods: ["psychedelic", "mellow", "emotional", "joyful"],
    styles: ["acoustic", "country-folk", "jam", "experimental"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Binghamton, May 1970 — acoustic and electric, all night.",
    whyThisShow:
      `Binghamton, May 2, is widely considered one of the essential early-Dead tapes still sitting ` +
      `outside the official catalog. The format is half the appeal: an acoustic opening set with the ` +
      `New Riders mixed in, then the electric band taking over for the rest of a long night — Garcia ` +
      `reportedly told the small crowd they had them all night. The intimate college room loosened the ` +
      `band up, and reviewers describe the result as relaxed, funny, cosmic, and funky. It lives on ` +
      `Charlie Miller's soundboard transfer, which the community treats as the only version worth having.`,
    listenFor:
      `The Dark Star into St. Stephen is the electric set's center of gravity, and some listeners ` +
      `flatly call it the best version of that pairing they've heard. The Dancing in the Street gets a ` +
      `similar nod, rated above the better-known MIT rendition that followed, and the Morning Dew is a ` +
      `real candidate for best-ever. The acoustic half is a genuine draw too — the New Riders material ` +
      `here comes from Miller's board rather than the radio broadcasts other circulating copies rely ` +
      `on, so it's in a different class for fidelity. The whole arc closes with Uncle John's Band after ` +
      `a long electric journey; it's worth the full sit.`,
    context:
      `May 1970 found the band deep in one of its most exploratory stretches, working the ` +
      `acoustic-electric split that would surface on American Beauty and Workingman's Dead later that ` +
      `year. This Harpur College show survives as a soundboard from Charlie Miller's transfer, ` +
      `regarded as the best-circulating version of the night. It's never had an official release, ` +
      `which makes the Miller board the community's default. The New Riders of the Purple Sage shared ` +
      `the bill and play the acoustic portion, adding a country-tinged opening before the electric set.`,
    funFact:
      `Jerry pulled triple duty that night — pedal steel with the New Riders, acoustic guitar in the ` +
      `middle, lead with the Dead. Three different jobs, one stage.`,
    communityVoices: [
      { quote: "you have managed to find one of those tapes which actually drip magic from it's timbre. You've done it, now sit back and enjoy", attribution: "Nick512", source: "Archive.org review" },
      { quote: "TIFTOO is the single best version I've ever heard, and so is Dancin' -- much better than the subsequent MIT rendition.", attribution: "grateful phishmon, on Dark Star and Dancing in the Street", source: "Archive.org review" },
      { quote: "Hard to match a room full of college aged acid freaks mind melting en masse!", attribution: "Boston_Marmaduke", source: "Archive.org review" },
      { quote: "If you wanted a time capsule of what it was like in 1970 tour this is the show to go to. Relaxed, funny, cosmic , and funky", attribution: "kboyxxx123", source: "Archive.org review" },
      { quote: "this is legitimately the best recording on the internet of it, doubly so for the new riders' segment", attribution: "Outlier Case, on recording quality", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 13. 4/29/71 Fillmore East — Pigpen's last peak ────────────
  {
    id: "gd-1971-04-29",
    date: "1971-04-29",
    venue: "Fillmore East",
    city: "New York",
    state: "NY",
    setlist: [
      "Bertha", "Me and Bobby McGee", "Next Time You See Me",
      "Loser", "Playing in the Band", "Sugar Magnolia",
      "Hard to Handle", "Big Railroad Blues", "Good Lovin'",
      "Dark Star", "Wharf Rat", "Sugar Magnolia (reprise)",
      "Johnny B. Goode",
    ],
    archiveUrl: "https://archive.org/details/gd1971-04-29.sbd.vernon.10436.sbeok.shnf",
    era: "early-70s",
    moods: ["high-energy", "joyful", "dark", "party"],
    styles: ["rock", "blues", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: ["Ladies and Gentlemen... the Grateful Dead (4/25-29/71 run)"],
    headline: "Closing night at the Fillmore East, Pigpen still in command.",
    whyThisShow:
      `This is the closing night of the April 1971 Fillmore East run, later officially released as ` +
      `'Ladies and Gentlemen... the Grateful Dead,' which puts it squarely in the canonical ` +
      `Pigpen-era record. One reviewer calls it "the final Fillmore East" and declares it ` +
      `"essential listening material". Another listener, who has been living with this run since ` +
      `the mid-eighties, holds the Alligator sequence and the Midnight Hour among "the best music I ` +
      `have ever heard". One reviewer with nearly four decades of listening places 1971 as "the ` +
      `peak of rock music as a 'genre'" and credits this recording with earning six stars. One ` +
      `voice does add a partial caveat — loving roughly half the setlist deeply while skipping the ` +
      `rest — so this is not a show everyone takes as a uniform peak from first note to last.`,
    listenFor:
      `The opening Truckin' is the first place to plant your ears: one listener hears Bobby's shout ` +
      `of "Hey man, go back to 1959!" after it and wonders aloud whether that was a reaction to ` +
      `Garcia's "throwback riffs throughout this Truckin'". The Hard to Handle draws specific ` +
      `attention from at least one listener who calls it "awesome" while noting the commercial ` +
      `release's choice to use this version over the April 22 performance. One listener points to ` +
      `Phil's bass on Sugar Magnolia as a standout moment. The Alligator sequence, described by one ` +
      `reviewer as a moment where the band was "clearly unwilling to play the tail end" and instead ` +
      `carved "new space out enroute to GDTRFB," is singled out as one of the era's high points.`,
    context:
      `This is the final night of a five-show Fillmore East stand in late April 1971, recorded from ` +
      `the soundboard and later officially released as 'Ladies and Gentlemen... the Grateful Dead.' ` +
      `The SBD source (identifier gd71-04-29.sbd.frisco.16782.sbeok.shnf) gives it clean separation ` +
      `across the full band. The era is the Pigpen-fronted early-70s lineup, and one reviewer ` +
      `argues this represents "Pigpen and the rest of the Dead at their best". The run as a whole ` +
      `was bookended each night by Truckin' as the opener, making the final night's version a ` +
      `deliberate send-off for the venue.`,
    funFact:
      `One listener notes that hearing "Bill's talk btw encores about stop asking for more more ` +
      `from the band, sounds a lot like record-bigwigs complaining about downloads" — a 1971 ` +
      `between-set moment that aged into something stranger.`,
    communityVoices: [
      { quote: "the final Fillmore East is essential listening material.", attribution: "rollandfin", source: "Archive.org review" },
      { quote: "This is just flat out great rock and roll at the peak of a bygone era.", attribution: "DREWFITZ", source: "Archive.org review" },
      { quote: "It's definitely in my top 10 for about 50% of the songs (the other half I skip over).", attribution: "newpotato11", source: "Archive.org review" },
      { quote: "You can feel the Earth crack open to expose the very roots of rock-'n-roll as Garcia settles into a celebration of old-school rock revue", attribution: "JonStorm716, on Truckin'", source: "Archive.org review" },
      { quote: "the Alligator and the Midnight Hour, I knew that this band would take up a lot of my listening time.", attribution: "phleshy", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 14. 4/8/72 Wembley — Europe '72 begins ────────────────────
  {
    id: "gd-1972-04-08",
    date: "1972-04-08",
    venue: "Wembley Empire Pool",
    city: "London",
    state: "UK",
    setlist: [
      "Bertha", "Mr. Charlie", "Me and My Uncle", "You Win Again",
      "Chinatown Shuffle", "Black-Throated Wind", "Sugaree",
      "El Paso", "China Cat Sunflower", "I Know You Rider",
      "Jack Straw", "Tennessee Jed", "Playing in the Band",
      "Good Lovin'", "Casey Jones",
      "Truckin'", "The Other One", "Me and Bobby McGee",
      "Sugar Magnolia", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1972-04-08.sbd.orf.974.sbeok.shnf",
    era: "europe-72",
    moods: ["joyful", "high-energy", "triumphant"],
    styles: ["rock", "country-folk", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Wembley, April '72: the Dark Star they keep arguing about.",
    whyThisShow:
      `The second night of the Europe '72 tour at Wembley Empire Pool, and the community comes back to ` +
      `it for one reason above all: the Dark Star. Reviewers reach for absolutes — among the single ` +
      `best ever, one of the most driven and intense the band played. It flows out into Sugar ` +
      `Magnolia and then Caution, a sequence heads rate at the very top. The Playing in the Band ` +
      `earlier in the show is no afterthought either, a raging Jerry-and-Phil workout. The soundboard ` +
      `holds up beautifully — for some listeners it's the most pleasant of the whole tour to actually ` +
      `sit with.`,
    listenFor:
      `Start with the Dark Star and don't skip ahead — the blast-off comes just before the ` +
      `eighteen-minute mark, after a stretch with an almost circus-like Pigpen buried in the ` +
      `background. Around twenty-eight minutes the jam starts tipping its hand toward the next song ` +
      `before Bobby locks into Sugar Magnolia. Back up the set for the Playing in the Band, where the ` +
      `band never stops generating new ideas. The Good Lovin' is worth a listen too — about ten ` +
      `minutes that keeps moving, with a sharp three-way blast from Jerry, Bob, and Phil a few minutes ` +
      `in.`,
    context:
      `The second show of the Europe '72 tour, recorded via soundboard at the Wembley Empire Pool in ` +
      `London on April 8, 1972. The tour produced the landmark Europe '72 album, and reviewers note ` +
      `this recording shares that record's sonic footprint. It's never had a standalone official ` +
      `release, though more than one head ranks April 8 among the best stops on the whole run.`,
    funFact:
      `The whole Europe '72 tour was conceived as a working vacation. The band brought wives, ` +
      `girlfriends, and crew — forty-three people in all, per the album's inside credits — and ` +
      `hauled a 16-track studio along to capture every show. Wembley was the second stop.`,
    communityVoices: [
      { quote: "Single Best Dark Star Ever Bar None", attribution: "gphishmon", source: "Archive.org review" },
      { quote: "one of the most driven, intense Dark Stars out there, it will always be in my tops! Billy drives the intensity and much as Jerry, and it doesn't let go.", attribution: "kochman, on the Dark Star", source: "Archive.org review" },
      { quote: "The Playin In The Band from this show is simply RAGING! This one is a Jerry/Phil smorgasbourg.", attribution: "bootleg43, on Playing in the Band", source: "Archive.org review" },
      { quote: "this is the tour where Bob Weir's rhythm guitar becomes god-like.", attribution: "Darrylizer, on the Europe '72 tour", source: "Archive.org review" },
      { quote: "I find this the most pleasant to listen to from an audiophile standpoint, really an excellent taping job and hghly recommended.", attribution: "Chadbang, on recording quality", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 15. 6/10/73 RFK — Dead + Allman Brothers ─────────────────
  {
    id: "gd-1973-06-10",
    date: "1973-06-10",
    venue: "RFK Stadium",
    city: "Washington",
    state: "DC",
    setlist: [
      "Morning Dew", "Beat It On Down the Line", "Mexicali Blues",
      "Sugaree", "Looks Like Rain", "Row Jimmy",
      "Jack Straw", "Deal", "Playing in the Band",
      "He's Gone", "Truckin'", "Eyes of the World",
      "Sugar Magnolia", "Not Fade Away", "Goin' Down the Road Feeling Bad",
      "Not Fade Away (reprise)",
    ],
    archiveUrl: "https://archive.org/details/gd1973-06-10.sbd.unknown.9778.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["joyful", "high-energy", "triumphant", "road-trip"],
    styles: ["rock", "jam", "country-folk"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "RFK in the summer heat, Phil wired to the sky.",
    whyThisShow:
      `A classic 1973 wall-of-sound show at a huge outdoor stadium, captured on a soundboard that ` +
      `listeners rate at the top across mix, performance, and transfer. Reviewers treat it as a great ` +
      `representation of the year — the band sliding fluidly from rock riffs to jazz grooves to ` +
      `spacey, surreal jams. The Eyes of the World draws particular attention: jazzy and upbeat, with ` +
      `crisp keys sitting so far forward they almost tip into ragtime. The show is officially ` +
      `unreleased, which makes this clean soundboard the community's main window into the night.`,
    listenFor:
      `Phil's bass is the recurring reference point — listeners single out the moment it leaps forward ` +
      `about ten minutes into He's Gone. The venue itself shapes the Playing in the Band: Phil ` +
      `reportedly played off the stadium echo coming back from speaker stacks set roughly seventy ` +
      `yards out from the stage. The closing Not Fade Away > Goin' Down the Road > Not Fade Away is ` +
      `the sequence to savor. Listen too for an odd recurring sound across the tape that one reviewer ` +
      `compared to slapstick or distant fireworks.`,
    context:
      `June 10, 1973 was the second of two consecutive RFK Stadium shows in Washington, D.C.; Archive ` +
      `holds the June 9 night as well. This is the wall-of-sound era, when Phil's bass rig was ` +
      `famously wired into massive speaker stacks positioned deep in the venue. The soundboard has ` +
      `never had an official release, making the Archive tape the community's standard source. The ` +
      `Allman Brothers were on hand and joined for a third set that reviewers count as a highlight.`,
    funFact:
      `The Allman Brothers joined for a third set that ran past midnight. Seven weeks later they'd ` +
      `all do it again together at Watkins Glen — for six hundred thousand people.`,
    communityVoices: [
      { quote: "Eyes is very jazzy and upbeat with crisp keys providing the perfect background for Jerry to play to. The keys are so prominent it's almost approaching ragtime.", attribution: "enjoy every (dead) sandwich, on Eyes of the World", source: "Archive.org review" },
      { quote: "Phil had his guitar wired each string to four huge stacks of speakers about 70 yards from the stage. He played with the stadium echo during Playing in the Band and I haven't been the same since.", attribution: "Sweetmd3, on Playing in the Band", source: "Archive.org review" },
      { quote: "Super 73' Soundboard! 5 stars for the mix, recording, performance & transfer.", attribution: "oh_uh_um_ah", source: "Archive.org review" },
      { quote: "i feel safe secured and whole for my land is a national park", attribution: "hunabkupakal", source: "Archive.org review" },
      { quote: "SHARE...SHARE...SHARE....that's what this is about...it's not about your hate for someone that is helping people enjoy life.", attribution: "back_from_the_DEAD", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 16. 7/28/73 Watkins Glen — largest concert ever ──────────
  {
    id: "gd-1973-07-28",
    date: "1973-07-28",
    venue: "Watkins Glen Grand Prix Raceway (Summer Jam)",
    city: "Watkins Glen",
    state: "NY",
    setlist: [
      "Bertha", "Promised Land", "Deal", "Looks Like Rain",
      "Row Jimmy", "Beat It On Down the Line",
      "China Cat Sunflower", "I Know You Rider",
      "Playing in the Band", "Wharf Rat", "Sugar Magnolia",
      "Eyes of the World", "Morning Dew", "Sugar Magnolia (reprise)",
      "Around and Around",
    ],
    archiveUrl: "https://archive.org/details/gd1973-07-28.sbd.miller.30572.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["joyful", "high-energy", "triumphant", "party"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "Watkins Glen, summer '73, half a million people and a soundboard.",
    whyThisShow:
      `This is the Grateful Dead's soundboard set from Summer Jam at Watkins Glen, July 1973 — an ` +
      `outdoor festival that drew an estimated 600,000 people, making it one of the largest ` +
      `gatherings in American history at the time. The Dead shared the bill with the Allman ` +
      `Brothers Band and The Band, and by multiple firsthand accounts the Dead played for close to ` +
      `two hours during the soundcheck-turned-performance on Friday. One reviewer who was there ` +
      `called it "one of the best concerts ever". The set remains officially unreleased, which the ` +
      `community treats as its own kind of signal about what's sitting in the vault.`,
    listenFor:
      `The China Cat Sunflower into I Know You Rider and the Playing in the Band are the sequences ` +
      `most cited by listeners as the heart of the set. Eyes of the World also draws specific ` +
      `attention. The encore featured a cross-band Mountain Jam with the Allmans; one reviewer ` +
      `strongly disagreed with Butch Trucks's own assessment that it was a disaster, calling it ` +
      `"DOPE" and recommending it specifically to fans of both bands. The source is a soundboard ` +
      `recording, so the mix is direct rather than a crowd capture.`,
    context:
      `July 1973 sits squarely in the Wall of Sound era, when the Dead were building toward the ` +
      `massive PA system that would debut in 1974. The Archive identifier ` +
      `(gd73-07-28.sbd.weiner.14196.sbeok.shnf) confirms a soundboard lineage. The show has never ` +
      `received an official release, which is notable given its historical scale. One attendee ` +
      `flagged that a commercially released album claiming to document Watkins Glen does not ` +
      `actually capture what happened that day.`,
    funFact:
      `One reviewer who hitched to the show recalled that their last ride — about 35 miles out — ` +
      `came from a girl who lived just a few blocks from them back in Oxford, Ohio.`,
    communityVoices: [
      { quote: "woke up the next morning to Jerry's soulful guitar. The next few hours were filled with the most amazing live music I've ever heard.", attribution: "irkulyen", source: "Archive.org review" },
      { quote: "the China>Rider, Playin', and Eyes - as an ABB fan, the Mountain Jam is what caught my eye first, and I think that Trucks in crazy.", attribution: "mperez19, on the Mountain Jam and standout songs", source: "Archive.org review" },
      { quote: "The Bad was drunk, Dead tripping, and Allman Bros. coked out.", attribution: "mperez19, quoting Butch Trucks on the encore", source: "Archive.org review" },
      { quote: "we watched a river of brothers and sisters --as wide as the road , flow by us for 12 straight hours", attribution: "bobbypro", source: "Archive.org review" },
      { quote: "It was an amazing experience and I honestly remember nearly every bit of the trip hitching TO the show, and not a bit of the trip back to Oxford.", attribution: "jazbeane", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 17. 11/11/73 Winterland — jazzy Keith-era peak ───────────
  {
    id: "gd-1973-11-11",
    date: "1973-11-11",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "The Promised Land", "Bertha", "Greatest Story Ever Told",
      "Sugaree", "Black-Throated Wind", "To Lay Me Down", "El Paso",
      "Ramble On Rose", "Me and Bobby McGee", "China Cat Sunflower",
      "I Know You Rider", "Me and My Uncle", "Loose Lucy",
      "Weather Report Suite", "Let It Grow",
      "Mississippi Half-Step", "Big River", "Dark Star",
      "Mind Left Body Jam", "Eyes of the World", "China Doll",
      "Sugar Magnolia", "Uncle John's Band", "Johnny B. Goode",
      "And We Bid You Goodnight",
    ],
    archiveUrl: "https://archive.org/details/gd1973-11-11.sbd.mattman.10925.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["mellow", "introspective", "meditative", "joyful"],
    styles: ["jam", "jazz-space", "country-folk"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Winterland 1973: The Complete Recordings"],
    headline: "Dark Star into Eyes, Winterland, November '73.",
    whyThisShow:
      `This is a canonically legendary Wall of Sound-era Winterland show, officially released as ` +
      `part of 'Winterland 1973: The Complete Recordings.' The center of gravity is the second set, ` +
      `where one reviewer called the Dark Star > Eyes sequence "55 minutes of extremely well spent ` +
      `time". The Dark Star itself draws repeated attention: one listener called it "a tour de ` +
      `force of psychedelic jazz" and dubbed it the "thinking man's Dark Star". One voice notes the ` +
      `show is not without small flaws — there are recording dropouts in Eyes of the World and ` +
      `Half-Step patched with an audience source — and one reviewer rates the Dark Star not as the ` +
      `hottest version but as "really spacy and dreamy", placing this show slightly behind 12/2/73 ` +
      `rather than above everything. The broad community weight, however, is strongly canonical.`,
    listenFor:
      `The Big River > Dark Star > Eyes of the World run is the centerpiece: one reviewer described ` +
      `the Dark Star as ranging "from cacophonous, to trippy, to happy and all points inbetween, ` +
      `right into a mesmerizing eyes". One listener singled out what makes this Eyes of the World ` +
      `special: "its structure is brilliant, Keith and Bob both play major roles, its tight and ` +
      `lose" and called the mix "perfect—perfect". There is also a notable Mountain Jam tease at ` +
      `the top of Mississippi Half-Step worth catching — one reviewer heard it as "a glimpse into ` +
      `the epic cow palace allman brothers show". The recording itself draws praise: one listener ` +
      `noted it has "a very very good mix" with the drums not overpowering the rest of the band. ` +
      `After the great second set run, one reviewer is direct that "the rest of the show is nothing ` +
      `special" past that peak.`,
    context:
      `November 1973 sits squarely in the Wall of Sound era, when the Dead were running the massive ` +
      `PA system that defined their mid-'70s live sound. This recording comes from a soundboard ` +
      `source (identifier: gd73-11-11.sbd.schlissel.14105.sbeok.shnf) with brief audience patches ` +
      `covering dropout sections in Eyes of the World and Half-Step. The show was officially ` +
      `released as part of 'Winterland 1973: The Complete Recordings,' giving it the band ` +
      `organization's stamp of endorsement. One reviewer placed it alongside "the legendary Harper ` +
      `college show, the spring 77 shows, and the epic europe shows from 1972" as a must-have.`,
    funFact:
      `One attendee recalled that after the encore, the crowd refused to leave for 25 solid minutes ` +
      `— clapping, screaming, and stomping in unison — until the house lights came back down and ` +
      `the band returned for a double encore.`,
    communityVoices: [
      { quote: "the best segement of the show, imo, big river, dark star, eyes. the DS>eyes is 55 minutes of extremely well spent time.", attribution: "Monik, on the Dark Star > Eyes sequence", source: "Archive.org review" },
      { quote: "This Dark Star has to be in the top 5 of all time in my book", attribution: "003phan, on the Dark Star", source: "Archive.org review" },
      { quote: "The next hour of music ranks among the best the band ever played imo.", attribution: "direwolf600, on the second set run", source: "Archive.org review" },
      { quote: "The Eyes utterly rips.", attribution: "gphishmon, on Eyes of the World", source: "Archive.org review" },
      { quote: "we set ourselves to stomping on the floor. Then we clapped, screamed \"MORE\" and stomped the floor simultaneously, in unison and as one unified body for 25 solid, nonstop minutes.", attribution: "Evan S. Hunt, on the crowd after the show", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 18. 6/23/74 Miami — Wall of Sound ────────────────────────
  {
    id: "gd-1974-06-23",
    date: "1974-06-23",
    venue: "Miami Jai-Alai Fronton",
    city: "Miami",
    state: "FL",
    setlist: [
      "Ramble On Rose", "Black-Throated Wind", "Mississippi Half-Step",
      "Beat It On Down the Line", "Row Jimmy", "Jack Straw",
      "Let It Rock", "Cumberland Blues", "El Paso", "To Lay Me Down",
      "Weather Report Suite", "Let It Grow", "China Doll",
      "Seastones", "Ship of Fools", "Big River", "Black Peter",
      "Around and Around", "Dark Star", "Spanish Jam", "U.S. Blues",
      "Uncle John's Band", "One More Saturday Night", "Casey Jones",
    ],
    archiveUrl: "https://archive.org/details/gd1974-06-23.sbd.miller.32230.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["high-energy", "mellow", "introspective"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: ["Dave's Picks Vol. 34"],
    headline: "Miami '74, with the one-time Let It Rock.",
    whyThisShow:
      `This show has canonical weight both for its music and its availability — it came out as ` +
      `Dave's Picks Vol. 34, and the Jerry Moore AUD was, as one listener put it, "heavily traded ` +
      `BitD of B&P, and often the lone representative from this tour on tape lists". The second-set ` +
      `sequence is the reason heads keep coming back: one reviewer described the Spanish Jam > U.S. ` +
      `Blues as the moment "the band emerges as one and the music feels like a big truck rolling ` +
      `down a highway out of control, the epitome of '74, yet one-of-a-kind". One reviewer also ` +
      `called out "Phil takes the lead on Spanish Jam and drives the band into the best? version of ` +
      `1974". One well-sourced listener does caution that the SBD has issues — Bobby's guitar drops ` +
      `out repeatedly — and recommends the matrix or AUD over the SBD/OFF for much of the show.`,
    listenFor:
      `The once-played "Let It Rock" is the rarity flag here — one reviewer couldn't get over why ` +
      `it didn't get more play: "I will never understand. A perfect match for the bebob belooha ` +
      `screech and scratchin that is the first half of the 70's". The "To Lay Me Down" drew ` +
      `attention as "a best-ever candidate" for the solo. One reviewer zeroed in on a specific ` +
      `moment in Cumberland Blues: "listen @5mins when Jer briefly quotes Hank Garland's Sugar Foot ` +
      `Rag". On the source question, the matrix (122270_mtx_tobin) is flagged as "crucial" and the ` +
      `upgraded SBD (122255_upg-sbd_smith-tobin) addresses pitch issues in the original cribbs ` +
      `recording, which "ran 1% fast in many places".`,
    context:
      `June 1974 sits squarely in the Wall of Sound era, when the Dead were road-testing one of the ` +
      `most elaborate live sound systems ever built. This show was played at the Miami Jai-Alai ` +
      `Fronton — an unusual venue — and was officially released as Dave's Picks Vol. 34, making it ` +
      `one of the few Wall of Sound shows to receive a full archival release. The best available ` +
      `recording is a soundboard (gd74-06-23.sbd.cribbs.16780.sbeok.shnf), though the matrix and ` +
      `AUD transfers are widely considered better options for much of the show. One reviewer notes ` +
      `this was also "the first Phil & Ned Seastones" of the tour, a detail that places it as a ` +
      `minor historical marker within the summer '74 run.`,
    funFact:
      `"Let it Rock" was only played once by the Dead, and one listener traces why the band even ` +
      `knew it: "the original Berry single was a Brit hit (not stateside)" and Jerry had been ` +
      `playing it in Garcia & Saunders sets.`,
    communityVoices: [
      { quote: "The jam into Ship of Fools is a masterpiece in miniature.", attribution: "dr. flashback, on Ship of Fools", source: "Archive.org review" },
      { quote: "This is a missing link show Played before the year off 75 They came back 76 A polished act", attribution: "sailler, on context", source: "Archive.org review" },
      { quote: "As the Spanish Jam evolves toward what turns out to be US Blues, there's a breaking point where the band emerges as one and the music feels like a big truck rolling down a highway out of control", attribution: "Quincy, on Spanish Jam > U.S. Blues", source: "Archive.org review" },
      { quote: "Keith is all over this show... the real ivory jangler. How can you not love young Bobs voice?", attribution: "skullsnroses", source: "Archive.org review" },
      { quote: "Tempos often bogged in '74 and The Wall of Sound tended to record in a flatter, less engaging way, with an undynamic image, but put that aside and there is much of note from this night.", attribution: "Mind Wondrin", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 25. 6/24/85 Riverbend — peak Brent era ───────────────────
  {
    id: "gd-1985-06-24",
    date: "1985-06-24",
    venue: "Riverbend Music Center",
    city: "Cincinnati",
    state: "OH",
    setlist: [
      "Alabama Getaway", "Greatest Story Ever Told",
      "West L.A. Fadeaway", "Beat It On Down the Line",
      "Dupree's Diamond Blues", "Mama Tried",
      "Big Railroad Blues", "Looks Like Rain",
      "Don't Ease Me In",
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Estimated Prophet", "Eyes of the World",
      "Drums", "Space", "The Wheel",
      "Gimme Some Lovin'", "Wharf Rat",
      "Sugar Magnolia",
      "Good Lovin'",
    ],
    archiveUrl: "https://archive.org/details/GratefulDead?query=date%3A1985-06-24",
    era: "80s",
    moods: ["high-energy", "joyful", "triumphant"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Riverbend, summer '85, Garcia on fire all night.",
    whyThisShow:
      `A June 1985 show the community keeps returning to, and the second-set list explains why: Help ` +
      `on the Way > Slipknot! > Franklin's Tower into Estimated Prophet > Eyes of the World, several ` +
      `of the era's high-water marks stacked in one night. The defining feature for a lot of ` +
      `listeners is the Garcia-Weir interplay — Bob is at the top of his game, and his slide work on ` +
      `Samson really comes through on this recording. The soundboard rewards close listening, with ` +
      `even high-end-playback reviewers crediting how much it captures. One caveat: there's some ` +
      `herky-jerky in the mastering, so the tape is excellent rather than flawless.`,
    listenFor:
      `Start with Let It Grow, where Garcia goes full fusion — one reviewer's Al Di Meola comparison ` +
      `is apt. The Comes A Time draws genuine awe; at least one deep listener who's worked through ` +
      `terabytes of Dead material calls it the best version you'll hear. The Weir-Garcia dynamic runs ` +
      `all night — Bob is practically co-soloing through He's Gone. Don't miss the Good Lovin' closer, ` +
      `a favorite post-Pigpen version for more than one attendee. Listen too for the deliberate vocal ` +
      `effects on the PA, Dan Healy's handiwork, which delighted some listeners and annoyed others.`,
    context:
      `June 24, 1985 at Riverbend Music Center in Cincinnati — an outdoor amphitheater with the Ohio ` +
      `River behind the stage, part of the band's twentieth-anniversary touring year. The soundboard ` +
      `has never had an official release, which makes this tape the community's primary reference. One ` +
      `attendee remembers a buzz heading into the show: the band had broken out Cryptical three nights ` +
      `earlier at the Greek and then skipped it at Alpine Valley. It draws an unusually strong run of ` +
      `reviews on Archive for an unreleased tape.`,
    funFact:
      `Behind the band that summer hung Rick Griffin's "Twenty Years So Far" banner — a skeleton ` +
      `minuteman holding Jerry's Tiger guitar like a musket. Only used on the 1985 tour.`,
    communityVoices: [
      { quote: "Garcia is doing his best Al DiMeola during Let It Grow. Seriously, Garcia's guitar on this one is spectacular. Jaw-dropping good!", attribution: "Reece, on Let It Grow", source: "Archive.org review" },
      { quote: `THE BEST "COMES A TIME" YOU WILL HEAR , THERE ARE A FEW OTHER'S THAT COME TO MIND BUT BETWEEN THIS SONG AND THE SETLIST AND THE SOUND QUALITY OF THE SHOW, THIS TO ME MAKES THIS THE BEST VERSION AROUND`, attribution: "gratefuly deadicated, on Comes A Time", source: "Archive.org review" },
      { quote: "The Let it Grow was insane. This was the 25th anniversay tour so they had the killer backdrop of the skeliton w/a gun", attribution: "drkstrcrashes, on the show atmosphere", source: "Archive.org review" },
      { quote: "What a hideously sick and raunchy version of USB this is. Sloppy>mistakes>galore>ignore>brilliance.", attribution: "Evan S. Hunt, on U.S. Blues", source: "Archive.org review" },
      { quote: "you dont need to know much about 85 to know that this night turned out about as best as could be imagined", attribution: "audioresearch", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 28. 9/10/91 MSG — Branford Marsalis (second time) ────────
  {
    id: "gd-1991-09-10",
    date: "1991-09-10",
    venue: "Madison Square Garden",
    city: "New York",
    state: "NY",
    setlist: [
      "Jack Straw", "Bertha", "Walkin' Blues",
      "Brown-Eyed Women", "Queen Jane Approximately",
      "Tennessee Jed", "Cassidy", "Bird Song",
      "Eyes of the World", "Estimated Prophet",
      "Dark Star", "Drums", "Space",
      "The Other One", "Wharf Rat",
      "Throwing Stones", "Not Fade Away",
    ],
    archiveUrl: "https://archive.org/details/gd91-09-10.sbd.miller.96192.sbeok.flac16",
    era: "final-years",
    moods: ["introspective", "psychedelic", "mellow", "late-night"],
    styles: ["jazz-space", "jam", "experimental"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Eight on stage at the Garden, Dark Star returns.",
    whyThisShow:
      `This is the third and final night of Branford Marsalis's run with the Dead at MSG in ` +
      `September 1991, and it landed a Dark Star — the first many attendees had seen in years. ` +
      `One listener went so far as to call it one of the top ten Grateful Dead concerts of all ` +
      `time. Another ranked it as the best post Keith and Donna show. That said, at least one ` +
      `attendee who was there and had skin in the game — his Dark Star quest ending that very ` +
      `night — still considered it the lesser of the three Branford shows. The canonical read is ` +
      `that something genuinely rare happened; the minority view is that the two earlier nights ` +
      `set a bar this one didn't quite clear.`,
    listenFor:
      `The space jam inside Dark Star, after verse two, draws particular attention: one reviewer ` +
      `described Jerry and Branford trading horn sounds as one of the three best improvisational ` +
      `moments he witnessed across fourteen years of seeing the Dead. The Slipknot! drew ` +
      `comparisons to Miles Davis's Bitches Brew era, with Garcia, Hornsby, and Marsalis all ` +
      `contributing. Jerry's vocal on High Time was singled out for a quality that only comes ` +
      `from two decades with a song. Be aware that Vince has some stumbles and the eight-musician ` +
      `lineup can sound cluttered at points.`,
    context:
      `September 1991 was a three-night run at Madison Square Garden with both Branford Marsalis ` +
      `on saxophone and Bruce Hornsby on piano sitting in, putting eight musicians on the stage. ` +
      `The best circulating recording is a soundboard (identifier: gd91-09-10.sbd.sacks.511.sbeok.shnf) ` +
      `and one listener called the sound quality an A+. The show remains officially unreleased, ` +
      `which has kept it circulating as a community tape rather than a commercial product. The ` +
      `setlist includes Dark Star, its first appearance for many in the room, alongside a full ` +
      `second set that runs through The Other One, Wharf Rat, and Not Fade Away.`,
    funFact:
      `Eight musicians on the Garden stage that night — the core five, both Bruce Hornsby and Vince ` +
      `Welnick on keys, plus Branford Marsalis on sax. The biggest configuration the post-Brent band ` +
      `ever fielded.`,
    communityVoices: [
      { quote: "On this particular night, they were the best band in the entire world playing at that moment in time. There is no question about it.", attribution: "zleary", source: "Archive.org review" },
      { quote: "my quest for The Holy Grail (Dark Star) ended that night and with Branford no less. That doesn't change the facts. I knew it that night.", attribution: "The TRUE Bucky, on Dark Star", source: "Archive.org review" },
      { quote: "Jerry, Bruce and Branford contribute to an acid drenched and quite jazzy version of Slipknot, shades of Bitches Brew era Miles Davis.", attribution: "JoeShoe, on Slipknot!", source: "Archive.org review" },
      { quote: "it was one of the best post brent shows i have ever been to", attribution: "feellikeastranger", source: "Archive.org review" },
      { quote: "already the Garden is shrinking from a 18k seat venue to a tight downtown club", attribution: "Solo Head", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 35. 9/3/77 Englishtown Raceway — 150,000 freaks in a field ──
  {
    id: "gd-1977-09-03",
    date: "1977-09-03",
    venue: "Raceway Park",
    city: "Englishtown",
    state: "NJ",
    setlist: [
      "Promised Land", "They Love Each Other", "Me and My Uncle",
      "Mississippi Half-Step", "El Paso",
      "Peggy-O", "Looks Like Rain", "Brown-Eyed Women",
      "Jack Straw",
      "Bertha", "Good Lovin'",
      "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "Eyes of the World",
      "Drums", "The Other One",
      "Stella Blue", "Sugar Magnolia",
      "Terrapin Station",
      "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd77-09-03.sbd.unk.276.sbefixed.shnf",
    era: "77-peak",
    moods: ["high-energy", "joyful", "road-trip", "party"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    releasedAs: ["Dick's Picks Vol. 15"],
    headline: "150,000 people, one scorching day at the drag strip.",
    whyThisShow:
      `Englishtown on September 3, 1977 pulled somewhere between 107,000 and 150,000 people onto a ` +
      `dirt field at Old Bridge Raceway Park in blistering late-summer heat, and the show has been in ` +
      `heavy circulation ever since. Longtime listeners frame it as a bridge between the celebrated ` +
      `spring of '77 and the often-overlooked '78-'79 band. There's a real dissenting view that it's ` +
      `overrated — that its reputation owes as much to how widely it circulated as an early tape as to ` +
      `the playing itself. Either way, it went out over WNEW-FM in New York that Labor Day weekend, ` +
      `straight into a huge regional audience. There's no standalone release, though Dick's Picks 15 ` +
      `draws from it and covers most of the show with some edits.`,
    listenFor:
      `Mississippi Half-Step is the consistent highlight — some heads rank it among their top three of ` +
      `all of 1977. Eyes of the World is worth the wait in the second set, even if the Estimated ` +
      `Prophet leading in is a little wobbly. The Not Fade Away runs just past twenty minutes, with ` +
      `Jerry digging in. Even the show's sharpest critic concedes that the jam out of He's Gone into ` +
      `Not Fade Away is its best stretch, flubs in He's Gone notwithstanding. The circulating ` +
      `soundboard is the one to grab, though FM tapes and a remastered board are out there too.`,
    context:
      `This was the first show in three months — the summer tour had been scrapped after Mickey Hart ` +
      `was injured rolling his Porsche — so it stood as a one-off before the fall run. It was also the ` +
      `first gig where Keith brought only electric keys, with Jerry playing his Travis Bean TB500 ` +
      `modified for two outputs. Donna had had surgery over the summer and decided only at the last ` +
      `minute to appear for a few songs. The show has never had a standalone official release.`,
    funFact:
      `John Scher hired stevedores to bring hundreds of shipping containers and encircle the ` +
      `entire area end-to-end so there were no gatecrashers.`,
    communityVoices: [
      { quote: "FUCK BARTON HALL for once and all - nobody listening can tell why the crescendoss are the key to Barton's adulation", attribution: "jamesnix", source: "Archive.org review" },
      { quote: "The Half Step really swings here- one of my top 3 for '77 (and all time, really). The NFA clocks in at just over 20 minutes. Talk about grindin' it...down and dirty Jerry goes on for days here.", attribution: "PFflyerkid, on Mississippi Half-Step and NFA", source: "Archive.org review" },
      { quote: "This has always made my list of the five overrated shows. Like the others, not because it's not good, but because it's not, overall, a top ten of all time (or the year).", attribution: "Mind Wondrin", source: "Archive.org review" },
      { quote: "9/3/77 is not over nor under rated. It deserves to be ranked alongside other huge festivals played (Watkins Glen) not put up against small intimate venues (Cornell)", attribution: "RiPHRaPH", source: "Archive.org review" },
      { quote: "by sunset when the DEAD hit their stride I was just peaking and just remember the chorus of Trucking going on and on for like eternity!!!!!", attribution: "uncle the 11", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 36. 6/28/74 Boston Garden — the Mind Left Body Jam is born ──
  {
    id: "gd-1974-06-28",
    date: "1974-06-28",
    venue: "Boston Garden",
    city: "Boston",
    state: "MA",
    setlist: [
      "U.S. Blues", "Mexicali Blues", "Tennessee Jed",
      "Beat It On Down the Line", "Brown-Eyed Women",
      "Big River", "Friend of the Devil",
      "Jack Straw", "Loose Lucy", "Mississippi Half-Step",
      "Around and Around",
      "Phil & Ned (Seastones)",
      "Scarlet Begonias", "Eyes of the World",
      "Wharf Rat", "Playing in the Band",
      "Weather Report Suite", "Mind Left Body Jam",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd74-06-28.moore.weiner.gdADT18.16038.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["psychedelic", "high-energy", "meditative", "joyful"],
    styles: ["jam", "experimental", "jazz-space"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Dick's Picks Vol. 12"],
    headline: "Boston Garden, June '74, and that jam.",
    whyThisShow:
      `The community case for this show rests almost entirely on one sequence: the Weather Report ` +
      `Suite dissolving into the Mind Left Body Jam and beyond. Reviewers reach for the biggest claims ` +
      `they have — the best jam any band ever played — and one mapped it into seven distinct movements ` +
      `across roughly twenty-eight minutes, including a fragment of a Dark Star jam and a couple of ` +
      `jazzy peaks before the whole thing collapses into U.S. Blues. The rest of the setlist gets less ` +
      `attention, though there's a hot Scarlet and what some call the best U.S. Blues around ` +
      `bookending the night. It came out officially as Dick's Picks Vol. 12, and the signal is strong: ` +
      `nearly every reviewer treats that WRS jam as a once-in-a-lifetime document.`,
    listenFor:
      `The WRS-into-jam sequence is the whole reason to queue this up. Coming out of a terrific Weather ` +
      `Report Suite, the jam moves through dark, spacey territory before locking into the Mind Left ` +
      `Body theme. What sets this version apart from other 1974 takes is how it shifts through tempos, ` +
      `styles, and landscapes with the entire band contributing, never dropping the thread. Listen ` +
      `closely and a Dark Star theme surfaces for a moment before the music moves on. The Phil-and-Ned ` +
      `Seastones interlude in the first set is on the setlist but draws little comment; the WRS run is ` +
      `where all the attention goes.`,
    context:
      `June 1974 puts the band deep in the Wall of Sound era, hauling that massive PA from arena to ` +
      `arena. Jerry reportedly counted the spring and summer '74 tours among his favorites. The show ` +
      `was released as Dick's Picks Vol. 12 — a release that, by one account, took some internal ` +
      `fighting to get out the door. The source is a soundboard, so the fidelity matches the ` +
      `performance's canonical reputation.`,
    funFact:
      `The Mind Left Body Jam was never actually a Grateful Dead song. Phil borrowed the chord changes ` +
      `from a Paul Kantner/David Crosby tune ("Your Mind Has Left Your Body") and started fishing for ` +
      `them inside other jams. The name stuck. Boston is one of the canonical landings.`,
    communityVoices: [
      { quote: `I'm gonna go out on a limb and say the Jam at the end of Weather Report Suite is "THE BEST JAM EVER" by any band.`, attribution: "mgags", source: "Archive.org review" },
      { quote: "it evolves into the most beautifully rendered and involving MLB Jam ever and then goes through multiple different tempo's, styles and landscapes with the entire band contributing, all telepathically on the same magical wavelength throughout", attribution: "Kola67, on the WRS jam", source: "Archive.org review" },
      { quote: "the only other mind-left-body jam i can think of that comes remotely within the same galaxy as this one is 7/31/74, but its way shorter and doesn't go through the mindbogglingly telepathic changes as this does", attribution: "clementinescaboose, on the MLB Jam", source: "Archive.org review" },
      { quote: "This was my first Dick's Picks (a gift from a friend) - I was not dissapointed (what an understatement!). You won't be either.", attribution: "juanie", source: "Archive.org review" },
      { quote: "Dick had to fight tooth and nail to get any show released.", attribution: "average_joe, on release history", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 40. 8/13/75 Great American Music Hall — One From the Vault ─
  {
    id: "gd-1975-08-13",
    date: "1975-08-13",
    venue: "Great American Music Hall",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "The Music Never Stopped",
      "It Must Have Been the Roses",
      "Eyes of the World",
      "King Solomon's Marbles",
      "Sage and Spirit",
      "Crazy Fingers", "Sugar Magnolia",
      "Drums",
      "Blues for Allah",
      "Stronger Than Dirt",
      "Johnny B. Goode",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd75-08-13.fm.vernon.23661.sbeok.shnf",
    era: "hiatus",
    moods: ["psychedelic", "joyful", "triumphant", "meditative"],
    styles: ["jam", "experimental", "jazz-space", "rock"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    releasedAs: ["One From the Vault"],
    headline: "Blues for Allah, live, in a 400-seat jazz club, 1975.",
    whyThisShow:
      `This is the only show the Dead played in 1975 promoted under the Grateful Dead name, ` +
      `staged as an invite-only industry showcase for radio programmers attending a Billboard ` +
      `convention, in a 400-seat jazz club they self-rented in the Tenderloin. The entire Blues ` +
      `for Allah album was performed live, front to back, with eight older songs worked in — the ` +
      `only time they intentionally played a current album live in this way. The show works ` +
      `because they actually rehearsed it, which was not standard Dead operating procedure, and ` +
      `the woodshedding is audible throughout. It became One From the Vault, the first officially ` +
      `released full show in the Dead's catalog, sixteen years after the night itself. Billy ` +
      `Kreutzmann later called it 'a very pivotal gig and a great night of my life, overall'.`,
    listenFor:
      `The Help on the Way opener is only the second time the song was ever played, and one ` +
      `reviewer noted it is 'amazing' for that earliest-form reason. The Eyes of the World is the ` +
      `only performance between October 1974 and June 1976, and one reviewer described it as ` +
      `taking off and keeping taking off. Sage and Spirit appears here as its only electric ` +
      `performance — the album version was acoustic guitar and flute, and the 1980 reprise was ` +
      `acoustic too, making this one singular. The Blues for Allah closer incorporates the Sand ` +
      `Castles and Unusual Occurrences suite, and one reviewer flagged that anyone in the room ` +
      `hearing it for the first time was probably in a trance during the whole song. For the FM ` +
      `source here on Archive, one careful reviewer notes the pitch needs a -1% adjustment on ` +
      `U.S. Blues but calls it the best historical trade source, with original tunings and ` +
      `introduction trimmed from the official release.`,
    context:
      `August 1975 fell in the middle of the Dead's extended touring hiatus, a year when almost ` +
      `nothing was happening publicly. The show was organized to support the Blues for Allah ` +
      `album release and to help Grateful Dead Records secure a distribution deal with United ` +
      `Artists Records, which also acquired rights to distribute the forthcoming movie soundtrack. ` +
      `Mickey Hart appeared here as a sit-in, not yet fully back in the band — his return was ` +
      `still months away. The FM broadcast circulated widely on C90s and later as a vinyl ` +
      `bootleg titled 'Make Believe Ballroom' or 'Hot as Hell,' but those tapes were missing ` +
      `about 45 minutes via edits and three tracks; the official One From the Vault release in ` +
      `1991 was the first time the complete show reached the public.`,
    funFact:
      `Mickey Hart brought a box of crickets to the show and had them miked for the performance; ` +
      `Phil Loos later wrote that they escaped through the microphone hole and, to the best of ` +
      `his knowledge, 'they can still be heard chirping nightly from the highest rafters of the ` +
      `Great American Music Hall'.`,
    communityVoices: [
      { quote: "The live run-through of the album should've been the album itself.", attribution: "Mind Wondrin [quoting Billy Kreutzmann, on the show overall]", source: "Archive.org review" },
      { quote: "This is tight, well rehearsed Grateful Dead, and they absolutely deliver the knockout punch.", attribution: "ScarletTouchFire", source: "Archive.org review" },
      { quote: "Oh Phil's bass on that EYES intro !!", attribution: "c-freedom, on Eyes of the World", source: "Archive.org review" },
      { quote: "If there was ever a Dead Show that I could go back in time & see in person, this is probably the one I would choose.", attribution: "Dean1067", source: "Archive.org review" },
      { quote: "Jerry tickles your spine with his fast finger work on King Solomon's Marbles", attribution: "Tie-Dyed Tom, on King Solomon's Marbles", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 45. 11/17/72 Wichita — Truckin' > Other One territory ──
  {
    id: "gd-1972-11-17",
    date: "1972-11-17",
    venue: "Century II Convention Hall",
    city: "Wichita",
    state: "KS",
    setlist: [
      "Promised Land", "Sugaree", "Black Throated Wind",
      "Deal", "Mexicali Blues", "Tennessee Jed",
      "El Paso", "China Cat Sunflower", "I Know You Rider",
      "Beat It On Down the Line", "Bird Song",
      "Playing in the Band",
      "He's Gone", "Truckin'", "The Other One",
      "Me and Bobby McGee", "The Other One",
      "Brokedown Palace",
      "Sugar Magnolia",
    ],
    archiveUrl: "https://archive.org/details/gd72-11-17.sbd.warner.15982.sbeok.shnf",
    era: "europe-72",
    moods: ["psychedelic", "high-energy", "joyful"],
    styles: ["jam", "experimental", "rock"],
    audioQuality: "good",
    significance: "deep-cut",
    bestFor: ["head"],
    releasedAs: [],
    headline: "Wichita in November, Keith dark inside The Other One.",
    whyThisShow:
      `A November 1972 deep cut from a run some heads rate as the most solid stretch of the entire ` +
      `fall, right alongside the late-October Cleveland show. The He's Gone is a particular draw — one ` +
      `of the best around, with an outstanding jam coming out of it. The Truckin' into The Other One ` +
      `gives Keith Godchaux room to operate, taking over around the twelve-minute mark for a dark solo ` +
      `before Jerry climbs up behind him. Reviewers describe the first set's playing as virtually ` +
      `flawless on a technical level. There's a cut in Jack Straw — painful given the song's Wichita ` +
      `lyric — but the rest of the tape is intact and sounds excellent.`,
    listenFor:
      `The He's Gone is the anchor: the post-song jam starts around ten minutes in, with Garcia making ` +
      `every second count before the band drops into Truckin'. The Other One that follows is where ` +
      `Keith really takes the wheel, going dark and exploratory with some genuinely fine jazz piano. ` +
      `Bird Song is the other highlight, rated by one reviewer right up there with Veneta. The ` +
      `soundboard transfer is clean enough that both guitars come through clearly. Be warned there's a ` +
      `real cut in Jack Straw, which stings given how directly the song lands in Wichita.`,
    context:
      `November 17, 1972, Century II Convention Hall in Wichita, Kansas — deep into the domestic fall ` +
      `tour that followed Europe '72. The soundboard was transferred by Mike Lai, whose work reviewers ` +
      `credit for bringing the recording to full value. The show has never had an official release, ` +
      `though at the time of one write-up it was apparently under consideration as a Dave's Picks ` +
      `volume. The setlist is missing a Playing in the Band, which reviewers flag as unusual for the era.`,
    funFact:
      `This is the only known recording of Jack Straw played in Wichita — the city named in the song — ` +
      `and it has a massive cut right through it, leaving one reviewer to imagine another Wichita ` +
      `somewhere in the sky where the Jack Straw survives intact.`,
    communityVoices: [
      { quote: "Can't think of a better He's Gone with an outstanding jam.", attribution: "HeadlightOnANorthboundTrain, on He's Gone", source: "Archive.org review" },
      { quote: "ain't it ironic that the only ever Jack Straw from Wichita (or maybe there are more and I just ain't looked hard enough?) in Wichita is cut/flawed/f*cked!!!!!", attribution: "Tidewater four ten O nine, on Jack Straw", source: "Archive.org review" },
      { quote: "an very exploratory Other One featuring some great jazz piano work by Keith", attribution: "Pangolin22, on The Other One", source: "Archive.org review" },
      { quote: "Keith in particular is killing it during the jams. So great to hear him as a key melodic inventor of that nights music.", attribution: "Dylan M, on Keith Godchaux", source: "Archive.org review" },
      { quote: "Around 12 minutes in Keith takes over for a nice, dark solo, and then Jerry scales up behind him about a minute later. Keith wasn't ready to just turn it over and they have a nice moment.", attribution: "kochman, on The Other One", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── 46. 9/16/78 Egypt — Pyramids and pedal steel ───────────
  {
    id: "gd-1978-09-16",
    date: "1978-09-16",
    venue: "Gizah Sound and Light Theatre",
    city: "Giza",
    state: "EGY",
    setlist: [
      "Bertha", "Good Lovin'",
      "Friend of the Devil", "Cassidy",
      "Looks Like Rain", "Stagger Lee",
      "From the Heart of Me",
      "Sunrise", "Promised Land",
      "Ollin Arageed",
      "Shakedown Street", "Drums",
      "Not Fade Away",
      "Iko Iko", "Around and Around",
      "Werewolves of London",
    ],
    archiveUrl: "https://archive.org/details/gd78-09-16.sbd.orf.2319.sbeok.shnf",
    era: "77-peak",
    moods: ["psychedelic", "mellow", "meditative", "joyful"],
    styles: ["jam", "experimental", "rock"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: ["Rocking the Cradle: Egypt 1978"],
    headline: "Giza, September '78, pyramids behind the stage.",
    whyThisShow:
      `The Egypt shows are canonical Dead, and this one — September 16 at the sound-and-light theatre ` +
      `at Giza — is broadly considered the peak of the run. Some reviewers put it above everything ` +
      `else in 1978, January 22 and Red Rocks and New Year's included. The centerpiece is a ` +
      `second-set sequence where the Sudanese musician Hamza El-Din plays Nubian and Arabic music and ` +
      `the band gradually joins in, Jerry feeling out the melody before the whole thing slides into ` +
      `Fire on the Mountain. Heads describe that Ollin Arageed into Fire as the band reaching an ` +
      `entirely new level. The night also holds historical weight as the last-ever Sunrise, though ` +
      `that song isn't on this particular recording.`,
    listenFor:
      `Zero in on the Shakedown Street: Jerry lets the notes ride and echo, graceful rather than ` +
      `rushed, and the solo stretches with almost no limits — some reviewers rate it over the more ` +
      `famous New Year's Dark Star. The Stella Blue is singled out as out of this world from the first ` +
      `note to the last. The Iko Iko is top-notch, and there's lovely guitar work on Miracle. The ` +
      `soundboard's balance is good if not perfect, but it's a clear step up from the audience sources ` +
      `floating around the run.`,
    context:
      `This is the second of three Dead shows at Giza in September 1978, played in front of the ` +
      `pyramids at the sound-and-light theatre. A partial release covering selections from the run ` +
      `came out in 2008 as Rocking the Cradle: Egypt 1978. By one account, these shows were the first ` +
      `time many local people had heard electrified music.`,
    funFact:
      `By one listener's account, some local people turned up on camels and watched from out at the ` +
      `edges.`,
    communityVoices: [
      { quote: "this is the most important show of 1978 hands down, toping 1/22/78, redrocks, new years, anything from november", attribution: "rollandfin", source: "Archive.org review" },
      { quote: "The Olin > Fire is EPIC. The Dead on an entirely new level.", attribution: "Rider384, on Ollin Arageed > Fire on the Mountain", source: "Archive.org review" },
      { quote: "only Stella Blue is out of this world from the first note to the last. I can feel the energy of the ancient pyramids and that unique location", attribution: "Sister Viola Lee, on Stella Blue", source: "Archive.org review" },
      { quote: "This show had the very last performance of Sunrise, but it's not included here in this recording.", attribution: "L. Rosley", source: "Archive.org review" },
      { quote: "the mood is really set and its in Egypt. thats the clincher right there", attribution: "ClubdElf", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ─────────────────────────────────────────────────────────────
  // Calibration entries (synthesized 2026-04-26 under the new
  // tuned synthesizer prompt). All community-voice quotes verified
  // verbatim against Archive.org / r/gratefuldead source data.
  // See scratch/all-five-synthesis.md for source documentation.
  // ─────────────────────────────────────────────────────────────

  // ── Electric Theater 4/26/69 — primal-era deep cut ────────────
  {
    id: "gd-1969-04-26",
    date: "1969-04-26",
    venue: "Electric Theater",
    city: "Chicago",
    state: "IL",
    setlist: [
      "Dupree's Diamond Blues", "Mountains Of The Moon", "China Cat Sunflower",
      "Doin' That Rag", "Hurts Me Too", "Hard To Handle",
      "Cryptical Envelopment", "Drums", "The Other One", "The Eleven",
      "The Other One", "I Know It's A Sin", "Morning Dew",
      "Sitting On Top Of The World", "Minglewood Blues",
      "Silver Threads And Golden Needles", "It's All Over Now Baby Blue",
      "Saint Stephen", "Turn On Your Lovelight",
      "Viola Lee Blues", "Feedback", "What's Become Of The Baby",
      "Feedback", "And We Bid You Good Night",
    ],
    archiveUrl: "https://archive.org/details/gd69-04-26.sbd.yerys.71.sbeok.shnf",
    era: "primal",
    moods: ["psychedelic", "late-night", "dark"],
    styles: ["jam", "experimental", "blues"],
    audioQuality: "good",
    significance: "deep-cut",
    bestFor: ["exploring", "head"],
    releasedAs: ["Dick's Picks Vol 26"],
    headline: "One month after Live/Dead, with the weird part left off the record.",
    whyThisShow:
      `April '69, just one month after the band recorded most of Live/Dead at the Fillmore West. ` +
      `It's the Live/Dead band in another room, working from the same early-psychedelic vocabulary ` +
      `but with a messier local legend attached. The show became Dick's Picks 26, and heads have been ` +
      `complaining about it ever since: the famous weird encore — Viola Lee > Feedback > "What's Become ` +
      `of the Baby" piped in from the studio recording > Bid You Goodnight — got cut from the official ` +
      `release. Going back to the full tape on Archive is part of the appeal.`,
    listenFor:
      `Mountains of the Moon is the surprise. Gentle, sung-through, the kind of song the band only played ` +
      `in the Tom-Constanten era — and the community ranks this version among the best they ever did. ` +
      `The Cryptical > Other One > Eleven > Other One > It's a Sin sequence is the long-form engine ` +
      `the early band built nights around. Viola Lee Blues at the encore is sloppy in places but builds ` +
      `toward the band-and-PA experiment that follows: a studio loop of "What's Become of the Baby" piped ` +
      `through the room while the band plays feedback over it. The Hard to Handle hasn't grown its '71 ` +
      `swagger yet — it's still in its infancy.`,
    context:
      `Spring 1969, the seven-piece Pigpen-and-Tom-Constanten lineup at Bill Graham's Chicago outpost. ` +
      `Archive lists the venue as the Electric Theater; Jerrybase lists it as the Kinetic Playground — ` +
      `same room, mid-rename. Released in 2002 as Dick's Picks Volume 26, but with the encore cut. ` +
      `For this one, the full Archive tape matters, because the official release leaves out the part ` +
      `people argue about most.`,
    funFact:
      `Aaron Russo's Chicago outpost burned down six months later in a fire later linked to a mob ` +
      `blackmail attempt against the owner. The Dead's three April nights were among the room's last ` +
      `big rock dates.`,
    communityVoices: [
      { quote: "Just a month after the lads run at the Fillmore that became the bulk of Live Dead", attribution: "Darrylizer", source: "Archive.org review" },
      { quote: `The playing on "Mountains" is sensitive and lyrical, Jerry's vocals filled with passion`, attribution: "palealien", source: "Archive.org review" },
      { quote: "the most avant-garde thing I've ever heard the band do", attribution: "Mark C., on the encore", source: "Archive.org review" },
      { quote: "What becomes of the baby is played over the PA while the band go nuts", attribution: "JohnOO", source: "Archive.org review" },
      { quote: "I think it's a crime that this encore was left off the official release", attribution: "Ianuaditis, on the cut Viola Lee > Feedback > What's Become of the Baby encore", source: "Archive.org review" },
    ],
    headyversionRanks: [
      { song: "Mountains Of The Moon", rank: 3, votes: 39, topVersionDate: "Feb. 22, 1969", topVersionVotes: 48 },
      { song: "Viola Lee Blues", rank: 5, votes: 29, topVersionDate: "May 2, 1970", topVersionVotes: 110 },
    ],
  },

  // ── Portland 5/19/74 — wall-of-sound + Mind Left Body Jam ────
  {
    id: "gd-1974-05-19",
    date: "1974-05-19",
    venue: "Portland Memorial Coliseum",
    city: "Portland",
    state: "OR",
    setlist: [
      "Mississippi Half-Step", "Mexicali Blues", "Big Railroad Blues",
      "Black Throated Wind", "Scarlet Begonias", "Beat It On Down The Line",
      "Tennessee Jed", "Me And Bobby McGee", "Sugaree", "Jack Straw",
      "It Must Have Been The Roses", "El Paso", "Loose Lucy", "Money Money",
      "China Cat Sunflower", "I Know You Rider",
      "Promised Land", "Bertha", "Greatest Story Ever Told", "Ship Of Fools",
      "Weather Report Suite Prelude", "Weather Report Suite Part 1", "Let It Grow",
      "Wharf Rat", "Big River", "Peggy-O", "Truckin'", "Mind Left Body Jam",
      "Not Fade Away", "Goin' Down The Road Feelin' Bad", "One More Saturday Night",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd74-05-19.sbd.clugston.6957.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["psychedelic", "high-energy", "joyful", "road-trip"],
    styles: ["jam", "rock", "experimental"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    releasedAs: ["Pacific Northwest '73-'74: The Complete Recordings"],
    headline: "A Wall of Sound night where Truckin' finds the Mind Left Body Jam.",
    whyThisShow:
      `Spring '74, Portland, deep into the wall-of-sound era. The whole Pacific Northwest run eventually ` +
      `became a box set, and this is one of the nights people keep separating from the pack: a long, ` +
      `jazzy first set with a China > Rider some heads call the archetype, then a second set that builds ` +
      `through Truckin' into one of the famous Mind Left Body Jams — the kind of passage that turns up ` +
      `in "this is when I finally got it" conversations.`,
    listenFor:
      `The China Cat > I Know You Rider in the first set is what reviewers single out — patient, jazzy, ` +
      `and clean in a very '74 way. The second-set anchor is the Truckin' jam, which doesn't end where ` +
      `you expect it to: it slides into the Mind Left Body Jam, a few minutes of bandwide interplay ` +
      `that gets discussed with unusual reverence even by heads who aren't usually chasing named jams. ` +
      `Weather Report Suite into Let It Grow is the other quiet highlight. The whole show runs almost ` +
      `three hours — pace yourself.`,
    context:
      `May 1974, the Pacific Northwest swing of the wall-of-sound era. Released decades later as part of ` +
      `the Pacific Northwest '73-'74: The Complete Recordings box set — the only official place to find this ` +
      `tape outside the trader network.`,
    funFact:
      `The Mind Left Body Jam usually surfaced out of Weather Report Suite or China > Rider. Portland ` +
      `is one of the rare nights it tumbled out of Truckin' instead.`,
    communityVoices: [
      { quote: "i'm convinced that of all the pre-hiatus versions of china>rider i've heard (the ones with the ujb or feeling groovy jam) this is THE archetype", attribution: "clementinescaboose", source: "Archive.org review" },
      { quote: `For me, this is The Jam. This was the first big jam I ever really “got,” and once I did, it was a real before-and-after moment.`, attribution: "splitopenandjerk, on the Mind Left Body Jam", source: "r/gratefuldead" },
      { quote: "Totally went from Bitches Brew to Buddy Holly without missing a beat.  Love it.", attribution: "dontshakethetree, on the Truckin' jam", source: "r/gratefuldead" },
      { quote: "That is a deeply psychedelic show, and worth all the flipping on vinyl.", attribution: "dondeestasbueno", source: "r/gratefuldead" },
      { quote: "This show, is the reason why I keep listening to the Dead !!!!!!!!!", attribution: "Garrick III", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── The Omni 3/28/89 — late-Brent deep cut, Box of Rain encore ─
  {
    id: "gd-1989-03-28",
    date: "1989-03-28",
    venue: "The Omni",
    city: "Atlanta",
    state: "GA",
    setlist: [
      "Let The Good Times Roll", "Franklin's Tower", "Feel Like A Stranger",
      "Stagger Lee", "Stuck Inside Of Mobile With The Memphis Blues Again",
      "Ramble On Rose", "Let It Grow", "Don't Ease Me In",
      "Samson And Delilah", "Ship Of Fools", "Playing In The Band",
      "Foolish Heart", "Drums", "Space", "Gimme Some Lovin'",
      "Wharf Rat", "Throwing Stones", "Not Fade Away",
      "Box Of Rain",
    ],
    archiveUrl: "https://archive.org/details/gd1989-03-28.sbd.walker-scotton.miller.81529.sbeok.flac16",
    era: "80s",
    moods: ["high-energy", "joyful", "road-trip"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "deep-cut",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Atlanta '89, loose in the right places, with Phil closing the door.",
    whyThisShow:
      `Atlanta, spring '89 — not iconic, just a well-played Brent-era night that came out on a Charlie ` +
      `Miller soundboard and became one of those boards people keep quietly recommending. The first set ` +
      `moves quickly, and the second set feels more connected than the song list suggests, with the ` +
      `kind of Playing in the Band into Foolish Heart segue the late-Brent band did better than they ` +
      `get credit for. Not a show people recommend first; the kind they keep returning to anyway.`,
    listenFor:
      `The first set gets moving immediately. Let the Good Times Roll straight into Franklin's Tower ` +
      `opens the night, and the band keeps the energy up through Stagger Lee, Brent leaning into ` +
      `Stuck Inside of Mobile, and Let It Grow. The second-set core is Playing in the Band into ` +
      `Foolish Heart — heads describe the energy in Foolish as fierce, and one Reddit comment about ` +
      `seeing pastel-colored flowers go up at the start of Playing is the kind of in-the-room memory ` +
      `that gets attached to this version. Throwing Stones > Not Fade Away does what that pairing ` +
      `usually does in this era: sends the room out loud. And Box of Rain as the encore is the lullaby ` +
      `send-off: slow, simple, no flourish.`,
    context:
      `Spring 1989, the Brent-era six-piece, recorded by Charlie Miller — whose name shows up across the ` +
      `Archive reviews as part of why heads love this tape. Brent had a little over a year left with the ` +
      `band. The Spring '89 tour ran shows like this across the southeast, and Atlanta is one of the ` +
      `better-circulated boards from that swing.`,
    funFact:
      `Foolish Heart had been in the rotation less than a year by this Atlanta show. The band was ` +
      `workshopping the Built to Last material that would land that October — and you can hear them ` +
      `feeling out where the songs sat.`,
    communityVoices: [
      { quote: `Tripped on way too much liquid… saw a bunch of huge pastel-colored tissue paper flowers pop up all around the stage at the beginning of Playing.`, attribution: "anonymous, on Playing in the Band", source: "r/gratefuldead" },
      { quote: "done just perfectly as a lullaby to send us on our way", attribution: "shipofthesun, on the Box of Rain encore", source: "Archive.org review" },
      { quote: "The energy in foolish is way up there - fierce!", attribution: "Schumster, on Foolish Heart", source: "Archive.org review" },
      { quote: "The feeling inside that night was a Spring Tour vibe for sure. Fresh. Optimistic.", attribution: "superfoodman", source: "Archive.org review" },
      { quote: "The flow of music this night was as good as it gets.", attribution: "dogleg", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── Albany 3/27/93 — Vince era, Days Between debut, 30 Trips ──
  {
    id: "gd-1993-03-27",
    date: "1993-03-27",
    venue: "Knickerbocker Arena",
    city: "Albany",
    state: "NY",
    setlist: [
      "Hell In A Bucket", "Bertha", "The Same Thing", "Peggy-O",
      "Queen Jane Approximately", "Broken Arrow", "Loose Lucy", "Cassidy",
      "Casey Jones",
      "Eyes Of The World", "Estimated Prophet", "Comes A Time", "Corrina",
      "Drums", "Space", "The Wheel", "All Along The Watchtower",
      "The Days Between", "One More Saturday Night",
      "I Fought The Law",
    ],
    archiveUrl: "https://archive.org/details/gd93-03-27.sbd.nawrocki.31956.sbeok.shnf",
    era: "final-years",
    moods: ["mellow", "emotional", "introspective"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "deep-cut",
    bestFor: ["exploring", "head"],
    releasedAs: ["30 Trips Around the Sun"],
    headline: "A late-era Albany show that makes the counterargument.",
    whyThisShow:
      `Spring '93, the Vince Welnick era, the late chapter of the band's life. A recurring argument ` +
      `around 1993 is that the year is better than its reputation, and this Albany night is one of the ` +
      `shows people point to as evidence. A rare Comes A Time mid-second-set, an early version of Days ` +
      `Between, and a band that's still finding moments two years before the end. Not a show you'd start ` +
      `with — but if you've been told the early '90s aren't worth your time, this is one of the better ` +
      `counterarguments.`,
    listenFor:
      `The first set has more to chew on than a lot of late-period first sets: a Bertha that reviewers ` +
      `single out for Jerry's long solo, plus a Loose Lucy and a Casey Jones that attendees still ` +
      `single out among the late versions. The second set's anchor is Eyes Of The World into Estimated ` +
      `Prophet, then Comes A Time — a song the band only played a handful of times in '93. The Days ` +
      `Between near the end is one of the early performances of a song that never made it to a studio ` +
      `album, and reviewers single this version out. The encore is I Fought The Law, a Vince-era addition.`,
    context:
      `March 1993, Vince Welnick's third year on keys, deep into the Knickerbocker Arena run that the ` +
      `band did most springs. Released on the 30 Trips Around the Sun box set — the band's 50th-anniversary ` +
      `compilation that pulled one show per year from 1965 to 1995. This was their pick for 1993.`,
    funFact:
      `The Days Between was the last song Hunter and Garcia ever wrote together. It debuted six weeks ` +
      `before this Albany show, was played forty-one times in all, and never made it to a studio ` +
      `album. The band's last performance of it came the night before Jerry's final show.`,
    communityVoices: [
      { quote: "This one melted me.  And still does.", attribution: "LevitatingYogi, on Comes A Time", source: "Archive.org review" },
      { quote: "It was times like this in 1992-93 that would restore my faith in the band and renew my appreciation for them.", attribution: "AceHigh4", source: "Archive.org review" },
      { quote: "1993 has got to be the most underrated year of the Grateful Dead.", attribution: "JamminJerome", source: "Archive.org review" },
      { quote: "This version of Days Between makes up for the fact it never made it onto an album.  My favorite version that I've actually heard.", attribution: "WNEC_Chip", source: "Archive.org review" },
      { quote: "Can't say that about many post Brent shows..", attribution: "Eforce21, on this being a show he keeps going back to", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── Cape Cod 10/27/79 — stub, awaiting pipeline merge ─────────────
  {
    id: "gd-1979-10-27",
    date: "1979-10-27",
    venue: "Cape Cod Coliseum",
    city: "South Yarmouth",
    state: "MA",
    setlist: [
      "Jack Straw",
      "Candyman",
      "Me And My Uncle > Big River",
      "Brown Eyed Women",
      "Easy To Love You",
      "Minglewood Blues",
      "Stagger Lee",
      "Lost Sailor > Saint Of Circumstance > Deal",
      "Dancin' In The Streets > Franklin's Tower",
      "He's Gone > Caution > The Other One > Drums > Not Fade Away > Black Peter > Around And Around",
      "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd79-10-27.sbd.clugston.13980.sbeok.shnf",
    era: "late-70s",
    moods: ["high-energy", "joyful", "road-trip"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "deep-cut",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "Cape Cod, fall '79: that second set.",
    whyThisShow:
      `A deep cut beloved for one extraordinary second set at a small Cape Cod arena in the fall of ` +
      `1979, about six months into Brent Mydland's tenure. One veteran of more than 230 shows calls ` +
      `it the best set he ever witnessed — the whole band had gelled, with an energy to that fall the ` +
      `later years never quite matched. The venue was an intimate bandbox, and it got so hot inside ` +
      `that, by one account, steam poured out the doors for half an hour after the crowd left. The ` +
      `first set is solid and energetic, but the community consensus is unanimous: the second set is ` +
      `the reason to pull this tape. It circulates as an excellent-sounding soundboard.`,
    listenFor:
      `The Dancin' in the Streets > Franklin's Tower is the undisputed centerpiece, over thirty ` +
      `minutes long, and multiple listeners call it a candidate for the best version ever recorded. ` +
      `Phil Lesh drives the whole set — there are two moments in the Dancin' > Franklin's where he ` +
      `steps up and steers the jam somewhere new. Right as Franklin's seems to be winding down, Phil ` +
      `comes back in with a run of loud, powerful licks that re-energizes the band for a few more ` +
      `minutes. Listen for a distinctive funky, buzzing keyboard texture from Brent in the Dancin' ` +
      `jam, almost a George Clinton-Parliament sound. And don't skip the post-Drums run: the Black ` +
      `Peter is one of the most emotional versions around, and the Not Fade Away is a slow, drawn-out ` +
      `late-'70s take with Jerry pouring everything into his voice and guitar.`,
    context:
      `October 27, 1979 at the Cape Cod Coliseum in South Yarmouth, MA — a small, remote venue the ` +
      `Dead played only twice that fall. It falls in the late-'70s era, roughly six months after Brent ` +
      `Mydland replaced Keith Godchaux on keyboards. The best circulating recording is a soundboard, ` +
      `and the show has never had an official release. Reviewers point to the Garcia-Mydland chemistry ` +
      `already paying off — the Brown-Eyed Women here is the easy proof.`,
    funFact:
      `One attendee noted that the show's 25th anniversary landed on the same night the Red Sox ` +
      `finally won the World Series — and figured it was just like Jerry to somehow tie all of it ` +
      `together.`,
    communityVoices: [
      { quote: "This second set is the best I ever saw in over 230 shows. If there is a better set out there I have yet to hear it.", attribution: "Purple Gel", source: "Archive.org review" },
      { quote: "what can you say about a 21-minute Frankin's Tower? May be one of the best of all time!!", attribution: "RFKROX, on Franklin's Tower", source: "Archive.org review" },
      { quote: `I felt as if the coliseum was transformed into "another time's forgotten space." Jerry's jams after every verse were never rushed with each one being a complete entity unto itself`, attribution: "AshesRising, on Dancin' > Franklin's Tower", source: "Archive.org review" },
      { quote: `That Jam with Brent and Jerry is and I'll say it for the "first time" about any song or jam this is the best version of Dancin>Franklins.`, attribution: "early 80's meltdown, on Dancin' > Franklin's Tower", source: "Archive.org review" },
      { quote: "when we left the arena the steam poured out of the doors for a half hour to the heavens, sort of a tribute to intensity of the evening.", attribution: "smattman", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },

  // ── MSG 9/16/90 — stub, awaiting pipeline merge ───────────────────
  {
    id: "gd-1990-09-16",
    date: "1990-09-16",
    venue: "Madison Square Garden",
    city: "New York",
    state: "NY",
    setlist: [
      "Hell In A Bucket",
      "Cold Rain And Snow",
      "Little Red Rooster",
      "Stagger Lee",
      "Queen Jane Approximately",
      "Tennessee Jed",
      "Cassidy",
      "Deal",
      "Samson And Delilah",
      "Iko Iko",
      "Looks Like Rain",
      "He's Gone > Jam > Drums > Space > Standing On The Moon > Space > I Need A Miracle > Morning Dew",
      "It's All Over Now Baby Blue",
    ],
    archiveUrl: "https://archive.org/details/gd1990-09-16.144784.sbd.miller.flac2496",
    era: "80s",
    moods: ["introspective", "emotional", "mellow"],
    styles: ["jazz-space", "jam", "rock"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    releasedAs: [],
    headline: "MSG, September '90, He's Gone into Morning Dew.",
    whyThisShow:
      `A soundboard of one night from the September 1990 MSG run, and the recommendation reviewers ` +
      `keep making is that it stands with the band's official Dick's Picks releases. The second set ` +
      `is built around a long He's Gone > Jam > Drums > Space > Standing on the Moon > Space > I Need ` +
      `a Miracle > Morning Dew sequence that gives the night real weight. The show is officially ` +
      `unreleased, which makes Charlie Miller's soundboard transfer the way most of the community ` +
      `hears it.`,
    listenFor:
      `The second set's late run is the main event: He's Gone opens into a full jam before Drums and ` +
      `Space, resurfaces into Standing on the Moon, and pushes through to Morning Dew. The first set ` +
      `carries some range too — Little Red Rooster and Stagger Lee back to back, then a Queen Jane ` +
      `Approximately, an uncommon slot for that song. The recording itself comes recommended as ` +
      `benchmark-quality for the era.`,
    context:
      `September 1990 at Madison Square Garden — the band was deep into a late-era pattern of long ` +
      `residencies in New York. This tape is a Charlie Miller soundboard transfer, available in ` +
      `high-resolution FLAC. It's never been officially released, which itself tells the community ` +
      `something: reviewers rate it a peer of the released Dick's Picks volumes.`,
    funFact:
      `Brent had been gone less than seven weeks. Vince Welnick had played his first show with the ` +
      `band nine nights earlier; Bruce Hornsby was at the piano for his second-ever Dead set. Two ` +
      `keyboard players learning the songs on the fly, with the room watching.`,
    communityVoices: [
      { quote: "As good or better than Dick's Picks 9 official release.", attribution: "Monkeypaws, on recording quality", source: "Archive.org review" },
    ],
    headyversionRanks: [],
  },
];

/** Lookup helper */
export function findConciergeShow(id: string): ConciergeShow | undefined {
  return CATALOG.find((s) => s.id === id);
}
