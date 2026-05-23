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

/**
 * Queue of older catalog entries pending the citation-grounded synthesis
 * pipeline. These entries pre-date the community-voices workflow and are
 * kept here so they can be re-run through the pipeline rather than
 * deleted. They are not exposed on the live site.
 */
export const CATALOG_QUEUE: ConciergeShow[] = [

  // ── 7. 2/13/70 — Dark Star into St. Stephen ──────────────────
  {
    id: "gd-1970-02-13",
    date: "1970-02-13",
    venue: "Fillmore East",
    city: "New York",
    state: "NY",
    setlist: [
      "Not Fade Away", "He Was a Friend of Mine", "Dark Star",
      "St. Stephen", "Not Fade Away (reprise)", "Turn On Your Lovelight",
    ],
    archiveUrl: "https://archive.org/details/gd1970-02-13.sbd.miller.95929.flac16",
    era: "early-70s",
    moods: ["psychedelic", "dark", "late-night", "meditative"],
    styles: ["experimental", "jam", "jazz-space"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "Dark Star at the Fillmore East — where the Dead invented a new kind of music.",
    whyThisShow:
      "This is the Deep End. The Dark Star from this show is over 30 minutes of the band pushing into completely uncharted territory — dissonant, beautiful, terrifying, transcendent. If you want to understand why people call the Dead a psychedelic band, this is where you start. It's not background music. It demands your attention.",
    listenFor:
      "Dark Star is the whole show. The first ten minutes build slowly — almost ambient. Then around minute 12, things start dissolving. Jerry's guitar becomes alien. Phil's bass rumbles like tectonic plates shifting. By the time they resolve into St. Stephen, it feels like coming back to Earth from somewhere very far away. This is the Dead at their most avant-garde.",
    context:
      "February 1970 was the height of the Dead's psychedelic exploration. They were regulars at the Fillmore East, and Bill Graham gave them the space to stretch out. This Dark Star became the template for everything that followed — the Live/Dead album was built from performances just like this one. This is the sound of a band with no safety net.",
    funFact: "This show was part of a legendary Fillmore East run with the Allman Brothers. Two of the greatest jam bands in history, under one roof.",
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
    headline: "Red Rocks under the stars — the Dead at their most relaxed and beautiful.",
    whyThisShow:
      "Some Dead shows hit you over the head. This one wraps around you like a warm blanket. The first Dead show at Red Rocks has a mellow, rolling energy — Row Jimmy, Looks Like Rain, Ramble On Rose, Candyman — these are songs about heartbreak and highways, played in one of the most beautiful venues on Earth. Perfect for a long drive or a quiet night.",
    listenFor:
      "Row Jimmy is the emotional heart — slow, meditative, Jerry singing like he's talking just to you. Wharf Rat in the second set is one of the most beautiful songs the Dead ever wrote, and this version is tender and unhurried. Eyes of the World has a loping, jazzy groove that feels like sunset. Even the rockers (Jack Straw, Deal) have an easy warmth to them.",
    context:
      "Red Rocks and the Dead became synonymous over the years, but this was where it started. The natural amphitheater carved into the Colorado mountains provided acoustics that made every note ring. The band was in a relaxed, confident phase — not showing off, just playing.",
    funFact: "Red Rocks has a strict noise curfew. The Dead, predictably, blew past it.",
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
    headline: "Pigpen's final fire — the blues howl before everything changed.",
    whyThisShow:
      "Within a year, Pigpen would be too sick to tour and Keith Godchaux would replace him. This is the last great Pigpen era — the last time the Dead were really a blues band. The Skull & Roses album (the Dead's second live LP) draws from this Fillmore East run, and the energy is raw and swaggering — more rock, less cosmic searching.",
    listenFor:
      "Pigpen's Hard to Handle is the essential moment — his voice, his organ, his showmanship all at full strength. The Other One is a locomotive. Johnny B. Goode to close is pure joy. You can hear the band leaning into its rock side, but Pigpen's blues soul keeps everything earthy.",
    context:
      "The Fillmore East closed in June 1971, and the Dead played a farewell run in April. Pigpen's liver was already failing from years of drinking — he had months, not years, left on stage. The Skull & Roses LP came out later that year and introduced millions of new fans to the Dead. Songs debuted around this run: Wharf Rat, Bertha, Playing in the Band.",
    funFact: "Several songs on the Skull & Roses LP were recorded from this Fillmore East run. The album became the Dead's first certified gold record.",
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
    headline: "The largest rock concert in history — and the Dead played it.",
    whyThisShow:
      "Summer Jam at Watkins Glen: roughly 600,000 people (more than Woodstock), 50 miles of gridlock, and three of the greatest jam bands of all time — the Dead, the Allman Brothers, and The Band — in a farm field in upstate New York. The Dead's afternoon set is looser and sunnier than anything else they recorded that year. This is what peak festival culture sounded like.",
    listenFor:
      "Playing in the Band goes exploratory but never loses its groove. Eyes of the World is one of the earliest great live readings of the song. Around and Around closes with a party vibe. The soundcheck the day before (also circulated widely) was itself nearly a full set — Deadheads who camped early got a bonus show.",
    context:
      "The festival was a one-day event that became a three-day occupation. So many people came that the New York State Thruway was closed. The Dead, the Allmans, and The Band each played full sets, then jammed together. The whole thing was held together by dumb luck and good weather. It became the model for — and warning against — every mega-festival that followed.",
    funFact: "Official attendance estimate: 600,000. Unofficial counts run higher. Either way, it's still the largest rock concert ever held in the United States.",
  },

  // ── 17. 11/11/73 Winterland — jazzy Keith-era peak ───────────
  {
    id: "gd-1973-11-11",
    date: "1973-11-11",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Here Comes Sunshine", "Mexicali Blues", "Brown-Eyed Women",
      "Mississippi Half-Step", "Weather Report Suite",
      "Big River", "Row Jimmy", "El Paso",
      "Playing in the Band", "He's Gone",
      "Truckin'", "The Other One", "Eyes of the World",
      "Stella Blue", "Sugar Magnolia",
      "Morning Dew", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1973-11-11.sbd.mattman.10925.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["mellow", "introspective", "meditative", "joyful"],
    styles: ["jam", "jazz-space", "country-folk"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "Peak jazz-era Dead — the most beautiful playing they ever did indoors.",
    whyThisShow:
      "1973 gets slept on because '77 is louder, but for pure musical taste, '73 might be the Dead's high-water mark. Keith's piano is everywhere. Jerry's guitar is melodic and unhurried. The songs stretch out without ever losing shape. Released as Dick's Picks 14 — the show for people who appreciate craft. Every moment is exactly where it should be.",
    listenFor:
      "Here Comes Sunshine is exquisite — Keith's piano floats, Jerry's guitar shimmers, the harmonies are perfect. Playing in the Band extends into a long jazz jam. Eyes of the World was brand new here and already feels timeless. Morning Dew is devastating. This isn't the Dead throwing lightning — this is the Dead building cathedrals.",
    context:
      "By late '73, the Dead had become a different band than the psychedelic warriors of 1970 — musicians first, entertainers second. Keith Godchaux brought jazz vocabulary into their playing. The songs from Wake of the Flood (released October '73) sat next to old warhorses. A mature band at its peak.",
    funFact: "Dick Latvala, who selected the archival Dick's Picks series, considered the fall '73 tour one of his all-time favorites. Tape-trading heads treasure it for the sheer consistency.",
  },

  // ── 18. 6/23/74 Miami — Wall of Sound ────────────────────────
  {
    id: "gd-1974-06-23",
    date: "1974-06-23",
    venue: "Miami Jai-Alai Fronton",
    city: "Miami",
    state: "FL",
    setlist: [
      "Bertha", "Mexicali Blues", "Brown-Eyed Women",
      "Beat It On Down the Line", "Tennessee Jed",
      "Me and My Uncle", "Loose Lucy", "Jack Straw",
      "Scarlet Begonias", "Playing in the Band",
      "Ship of Fools", "Weather Report Suite",
      "He's Gone", "Truckin'", "Wharf Rat",
      "Sugar Magnolia", "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd1974-06-23.sbd.miller.32230.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["high-energy", "mellow", "introspective"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "The Wall of Sound tour — 600 speakers pointed at a Florida jai-alai fronton.",
    whyThisShow:
      "In 1974 the Dead built the loudest, cleanest, most complex sound system in live rock: the Wall of Sound. Three stories tall, 600 speakers, each musician with a dedicated stack. This show from the tour is one of the best-sounding Dead tapes from the era — like parking a spaceship in a strip mall. If you want to hear why '74 sounds different than anything else, start here.",
    listenFor:
      "The sound quality alone is a revelation — every instrument separately audible, Phil's bass lines clear as bells. Playing in the Band is enormous. Ship of Fools (debuted earlier in '74) is already gutting. He's Gone has the sad-gorgeous quality of the era. The U.S. Blues encore is pure 1974 swagger.",
    context:
      "The Wall of Sound tour nearly broke the band — five trucks to haul, a crew of fifteen, costs that outran revenue. By fall '74 they announced a hiatus. This run has an all-hands-on-deck energy: everyone knew it couldn't last, so they poured everything into it. When you hear '74 Dead, you're hearing a band that knew the clock was ticking.",
    funFact: "The Wall of Sound could be heard clearly a mile away from the venue. In smaller rooms, it was physically disorienting.",
  },

  // ── 19. 10/18/74 Winterland — pre-hiatus farewell ────────────
  {
    id: "gd-1974-10-18",
    date: "1974-10-18",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Scarlet Begonias", "Mexicali Blues", "Brown-Eyed Women",
      "Jack Straw", "Tennessee Jed", "Me and My Uncle",
      "Playing in the Band", "Weather Report Suite",
      "Let It Grow", "Ship of Fools",
      "Truckin'", "Mind Left Body Jam", "Eyes of the World",
      "Wharf Rat", "Sugar Magnolia",
      "Morning Dew", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1974-10-18.sbd.miller.97466.sbeok.flac16",
    era: "wall-of-sound",
    moods: ["emotional", "triumphant", "introspective", "meditative"],
    styles: ["jam", "jazz-space", "rock"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "The band saying goodbye — the pre-hiatus farewell run at Winterland.",
    whyThisShow:
      "The Dead played five nights at Winterland in October 1974 to say farewell before their hiatus. They were exhausted, broke, and at a crossroads. But these shows are not tired — they're valedictory. The band played everything, long jams and gentle country songs, like they were trying to fit their whole catalog into one last week. Filmed and released as The Grateful Dead Movie.",
    listenFor:
      "Eyes of the World is stretched-out and elegant. Weather Report Suite → Let It Grow gives the show compositional weight. The 'Mind Left Body Jam' that emerges from the spaces between songs is one of the most transcendent instrumental passages the Dead ever played. You can hear the band making every note count.",
    context:
      "The Dead announced in 1974 that they were taking a hiatus — the Wall of Sound was bankrupting them, touring was exhausting, Jerry wanted time for other projects. This Winterland run was the send-off. The band didn't tour again until June 1976. It was the longest pause in the Dead's entire career — these shows are the last word from the '70-'74 era.",
    funFact: "The Grateful Dead Movie was filmed across these five nights and took four years to edit. Jerry Garcia directed it himself.",
  },

  // ── 20. 6/14/76 Beacon Theatre — post-hiatus return ──────────
  {
    id: "gd-1976-06-14",
    date: "1976-06-14",
    venue: "Beacon Theatre",
    city: "New York",
    state: "NY",
    setlist: [
      "The Music Never Stopped", "Sugaree", "Mama Tried",
      "Row Jimmy", "Cassidy", "Friend of the Devil",
      "Looks Like Rain", "They Love Each Other",
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Samson and Delilah", "High Time",
      "The Wheel", "Comes a Time", "Dancing in the Street",
      "Wharf Rat", "Sugar Magnolia",
    ],
    archiveUrl: "https://archive.org/details/gd1976-06-14.sbd.miller.30055.sbeok.shnf",
    era: "77-peak",
    moods: ["mellow", "introspective", "emotional"],
    styles: ["rock", "country-folk", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "The post-hiatus return — intimate rooms, patient playing.",
    whyThisShow:
      "After 18 months off the road, the Dead came back smaller. Theaters instead of stadiums. Quieter. Slower. This Beacon Theatre run is a different kind of Dead — deliberate, each song given room to breathe. If the '70-'74 band was about expansion, the '76 band was about refinement. Beautiful and often overlooked.",
    listenFor:
      "Help on the Way > Slipknot! > Franklin's Tower was brand new in 1976 and sounds like a breakthrough — complex, fragile, gorgeous. The Sugaree is extended and emotional. Tempos are slower than before, arrangements more spacious. This is a band figuring out what it wants to be after a year away.",
    context:
      "1976 was a reset. The Dead came back with new material (Help > Slip > Frank, The Music Never Stopped, Samson and Delilah) and a new approach — smaller venues, cleaner sound, less chemistry. The Beacon runs in June were their first East Coast shows in almost two years, and the reception was emotional. Heads had feared they might never tour again.",
    funFact: "The 1976 tour is sometimes called the 'Theater Tour' — the band deliberately downsized after the mega-circus of '74. It was also the first full tour without the Wall of Sound.",
  },

  // ── 21. 10/29/77 DeKalb — fall '77 fire ──────────────────────
  {
    id: "gd-1977-10-29",
    date: "1977-10-29",
    venue: "Evans Field House, Northern Illinois University",
    city: "DeKalb",
    state: "IL",
    setlist: [
      "Mississippi Half-Step", "Mama Tried",
      "They Love Each Other", "El Paso", "Row Jimmy",
      "Passenger", "Ramble On Rose", "Let It Grow",
      "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "Terrapin Station",
      "Playing in the Band", "Drums",
      "Not Fade Away", "Black Peter",
      "Sugar Magnolia", "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd1977-10-29.sbd.unknown.8106.sbeok.shnf",
    era: "77-peak",
    moods: ["high-energy", "joyful", "road-trip"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Fall '77 fire — when you've already heard May, this is next.",
    whyThisShow:
      "Everyone knows May '77. The fall '77 tour is the hidden gem — a different energy, more muscle, Terrapin Station fully in rotation. DeKalb's Field House has a classic late-'77 Dead show: Mississippi Half-Step opens, the band locks in, the Scarlet > Fire cooks. For heads who've already memorized Cornell, fall '77 is the next chapter.",
    listenFor:
      "Scarlet Begonias > Fire on the Mountain in the second set is what they do best — this version has a slightly slower groove that gives the Fire jam room to explode. Terrapin Station is still new and the band plays it with reverence. Let It Grow stretches out. Sugar Magnolia > One More Saturday Night closes the night with a charge.",
    context:
      "Fall 1977 caught the band on the back half of their peak year. They'd released Terrapin Station in July, toured with the new songs all summer, and by October played them like they'd been doing it forever. Less famous than May but equally fierce — Deadheads who dig deeper almost universally love the fall tour.",
    funFact: "The Dead played 82 shows in 1977. That's roughly one show every four days. Hard to imagine any modern band keeping that pace.",
  },

  // ── 22. 5/7/80 Barton Hall — return to Cornell ───────────────
  {
    id: "gd-1980-05-07",
    date: "1980-05-07",
    venue: "Barton Hall, Cornell University",
    city: "Ithaca",
    state: "NY",
    setlist: [
      "On the Road Again", "Dark Hollow", "Monkey and the Engineer",
      "Cassidy", "Ripple", "Deep Elem Blues",
      "Althea", "Little Red Rooster", "Friend of the Devil",
      "Stella Blue", "Promised Land",
      "Feel Like a Stranger", "Ship of Fools",
      "Estimated Prophet", "He's Gone",
      "The Other One", "Wharf Rat", "Good Lovin'",
      "Brokedown Palace",
    ],
    archiveUrl: "https://archive.org/details/gd1980-05-07.sbd.walker.6961.sbeok.shnf",
    era: "late-70s",
    moods: ["mellow", "introspective", "emotional"],
    styles: ["acoustic", "country-folk", "rock"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "The Dead return to Cornell — three years and one day after the legend.",
    whyThisShow:
      "Three years after the most famous show in Dead history, the band came back to Barton Hall. No one expected them to match Cornell '77, and they didn't — but this is a different kind of great. Quieter, more mature, Brent Mydland now in the band replacing Keith. The acoustic-electric sandwich structure the band used in 1980 makes this a beautifully shaped show.",
    listenFor:
      "The acoustic set is the centerpiece — Ripple, Dark Hollow, Monkey and the Engineer. The electric set has a gorgeous Althea (still brand new) and a deeply felt Stella Blue. Brent's organ is subtle but everywhere — he brought a gospel and R&B feel Keith never had. This is the transition from the '70s Dead to the '80s Dead.",
    context:
      "Keith and Donna Godchaux left the band in early 1979; Brent Mydland joined. The acoustic-electric tours of 1980 were the Dead's 15th anniversary celebration. They played old songs they'd abandoned — Cassidy, Loser, acoustic Ripple. The tour produced both the Reckoning (acoustic) and Dead Set (electric) live albums.",
    funFact: "The 15th anniversary tour was the only time the Dead regularly played full acoustic sets in their later years. Seeing Ripple and Dark Hollow played unplugged was a rare treat.",
  },

  // ── 23. 3/10/81 MSG — early Brent punch ──────────────────────
  {
    id: "gd-1981-03-10",
    date: "1981-03-10",
    venue: "Madison Square Garden",
    city: "New York",
    state: "NY",
    setlist: [
      "Shakedown Street", "El Paso", "Peggy-O",
      "Me and My Uncle", "Big River", "Candyman",
      "Little Red Rooster", "Deal",
      "Feel Like a Stranger", "Lost Sailor",
      "Saint of Circumstance", "He's Gone",
      "The Other One", "Stella Blue",
      "Sugar Magnolia", "Brokedown Palace",
    ],
    archiveUrl: "https://archive.org/details/gd1981-03-10.sbd.walker.9134.sbeok.shnf",
    era: "80s",
    moods: ["high-energy", "joyful", "party"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Early Brent — the Dead tighter, leaner, newly urgent.",
    whyThisShow:
      "By 1981, Brent Mydland had settled in and the Dead had found a new gear. The early-'80s Dead is often dismissed by heads who prefer earlier eras, but the first half of the decade has a punchy confidence that nothing else sounds like. MSG '81 captures it — sharp song selection, Jerry's playing incisive, Brent adding color underneath.",
    listenFor:
      "Shakedown Street opens the show with a strut. Feel Like a Stranger (from Go to Heaven) has swagger. Lost Sailor → Saint of Circumstance is a two-song suite the early-'80s band owned. Bob's slide on Little Red Rooster is gorgeous. This isn't the Dead stretching into space — this is the Dead as a tight rock band with jazz harmonic sensibility.",
    context:
      "The Dead had released Go to Heaven in 1980 — the first album with Brent. The sound was sleeker, more '80s. Critics were skeptical. But live, the songs worked. MSG was becoming a regular Dead venue, and the New York runs became events. This show is the band finding its early-'80s voice.",
    funFact: "Brent Mydland had played in Bob Weir's solo band before joining the Dead. He was the youngest member by nearly a decade.",
  },

  // ── 24. 10/12/84 Augusta — mid-'80s hidden gem ───────────────
  {
    id: "gd-1984-10-12",
    date: "1984-10-12",
    venue: "Augusta Civic Center",
    city: "Augusta",
    state: "ME",
    setlist: [
      "Mississippi Half-Step", "Little Red Rooster",
      "Dire Wolf", "C.C. Rider", "Row Jimmy",
      "Beat It On Down the Line", "Ramble On Rose",
      "Let It Grow",
      "Hell in a Bucket", "Scarlet Begonias",
      "Fire on the Mountain", "Playing in the Band",
      "Uncle John's Band", "Morning Dew",
      "Sugar Magnolia", "Wharf Rat",
    ],
    archiveUrl: "https://archive.org/details/GratefulDead?query=date%3A1984-10-12",
    era: "80s",
    moods: ["mellow", "introspective", "emotional"],
    styles: ["rock", "country-folk", "jam"],
    audioQuality: "good",
    significance: "deep-cut",
    bestFor: ["head"],
    headline: "A mid-'80s sleeper — when you want the Dead nobody talks about.",
    whyThisShow:
      "Augusta Civic Center, Maine, October 1984 — you won't find this on most 'greatest shows' lists. That's exactly why it's on this one. The mid-'80s Dead at a small venue in a small city is the band in its natural habitat — no stadium pressure, no landmark-show expectations, just a good night's work. Jerry's playing is sharp, the sound is crisp, and the whole show has a hidden-gem quality.",
    listenFor:
      "Mississippi Half-Step opens and sets the tone — easy, confident, swinging. Let It Grow in the first set is extended and beautiful. Hell in a Bucket is punchy. Wharf Rat in the encore will knock you over. Nothing in this show is famous. All of it is good.",
    context:
      "The mid-'80s Dead were strange beasts — arena popularity was still a couple of years away (Touch of Grey broke them to MTV in 1987), but they'd outgrown theaters. Jerry's health was starting to slide. Brent was solidifying as the emotional center. The band was inconsistent night-to-night, but when everything clicked — like this — they were still capable of real magic.",
    funFact: "Maine became one of the band's quiet favorite stops — Bob Weir had roots in the region, and the crowds there skewed toward old-school heads, not arena casuals.",
  },

  // ── 26. 7/17/89 Alpine Valley — Brent-era outdoor peak ───────
  {
    id: "gd-1989-07-17",
    date: "1989-07-17",
    venue: "Alpine Valley Music Theatre",
    city: "East Troy",
    state: "WI",
    setlist: [
      "Hell in a Bucket", "Cold Rain and Snow",
      "Little Red Rooster", "Row Jimmy",
      "When I Paint My Masterpiece", "Tennessee Jed",
      "The Music Never Stopped",
      "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "Eyes of the World",
      "Drums", "Space", "I Need a Miracle",
      "Standing on the Moon", "Sugar Magnolia",
      "Morning Dew",
    ],
    archiveUrl: "https://archive.org/details/gd89-07-17.sbd.miller.7443.sbeok.shnf",
    era: "80s",
    moods: ["joyful", "high-energy", "triumphant", "road-trip"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["newcomer", "exploring", "head"],
    headline: "Alpine Valley — Brent-era Dead at their outdoor-summer best.",
    whyThisShow:
      "Alpine Valley in East Troy, Wisconsin is one of the Dead's great outdoor rooms — a natural grass amphitheater tucked into rolling hills. The July '89 run is legendary; this first night sets the tone. Tight, fiery, Brent's organ pushing everyone, Jerry sounding fresh. Perfect summer Dead — if you've never sat in grass under stars listening to Scarlet > Fire, this show is the next best thing.",
    listenFor:
      "The second-set sequence is the highlight — Scarlet Begonias > Fire on the Mountain > Estimated Prophet > Eyes of the World, each song flowing into the next. Standing on the Moon was brand new in '89 and is already a masterpiece. Morning Dew closes the night. The outdoor acoustics give every note room to breathe.",
    context:
      "1989 was the Dead's second big year after Touch of Grey broke them to mainstream MTV audiences. Suddenly they were playing stadiums to kids who'd never heard Dark Star. Alpine Valley, with its intimate tiered lawn, was a safe harbor — a place the lifers still called home. Brent was at his peak, three months before the Hampton 'Formerly the Warlocks' comeback.",
    funFact: "Alpine Valley became such a ritual that the July run became known simply as 'Alpine' — heads planned summer around it.",
  },

  // ── 27. 6/17/91 Giants Stadium — late-era stadium run ────────
  {
    id: "gd-1991-06-17",
    date: "1991-06-17",
    venue: "Giants Stadium",
    city: "East Rutherford",
    state: "NJ",
    setlist: [
      "Cold Rain and Snow", "Walkin' Blues", "Loser",
      "Queen Jane Approximately", "Big Railroad Blues",
      "Cassidy", "Deal",
      "Scarlet Begonias", "Fire on the Mountain",
      "Looks Like Rain", "He's Gone",
      "Drums", "Space", "I Need a Miracle",
      "Standing on the Moon", "Not Fade Away",
      "Foolish Heart",
    ],
    archiveUrl: "https://archive.org/details/gd91-06-17.sbd.miller.95898.flac16",
    era: "final-years",
    moods: ["high-energy", "joyful", "road-trip", "party"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Late-era summer tour — the Dead filling stadiums, still finding surprises.",
    whyThisShow:
      "Giants Stadium in June 1991 is the Dead as late-era institution — tens of thousands of fans, a full stadium tour, the songs familiar but the performances still capable of lifting off. Brent had died the year before; Vince Welnick was now on keys, with Bruce Hornsby often sitting in. This show is the Dead figuring out who they were without Brent — and on this night, finding something new.",
    listenFor:
      "Scarlet > Fire is the touchstone — Vince bringing different colors than Brent ever did, Bruce's piano giving the jam a sophisticated second voice. Foolish Heart is one of the band's late-era gems, newly written and fully formed. Standing on the Moon is a highlight of the Brent/post-Brent era. Morning Dew's lifelong closing statement, still devastating.",
    context:
      "Brent Mydland died in July 1990 from a drug overdose. The band brought in Vince Welnick (and briefly Bruce Hornsby as a regular guest) to fill the void — a different sound, less raw than Brent's. By summer 1991, Vince had mostly settled in. Crowds were massive. The band was exhausted. Jerry's health worsening. But moments like this still happened.",
    funFact: "Bruce Hornsby played as a regular guest with the Dead for over 100 shows between 1990-1992. His piano gave the band a jazzy second-keyboard voice for one of its most transitional periods.",
  },

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
    headline: "Primal 1968 — before the songs, before the structure, just the sound.",
    whyThisShow:
      "This is the Dead at their most embryonic. The Shrine Auditorium shows from 1968 capture the band mid-mutation — the Anthem of the Sun era, before Live/Dead, before songs like Uncle John's Band even existed. Long, dissonant, searching. If you want to hear where the psychedelic Dead came from, start here. This is not background music. It's a document.",
    listenFor:
      "The Alligator → Drums → Caution sequence is classic primal Dead — proto-jam, motorik, Jerry's guitar still partially distorted and wild. That's It for the Other One is a multi-part suite the band was still figuring out how to play. The whole show has an untrained, exploratory quality — young musicians inventing a genre in real time.",
    context:
      "In 1968 the Dead had just added Mickey Hart as a second drummer, were writing Anthem of the Sun in the studio with avant-garde composer Tom Constanten, and were the house band of the San Francisco psychedelic scene. Bill Graham was booking them regularly on both coasts. They'd only just decided they were a real rock band, not just an Acid Test ballroom crew.",
    funFact: "The Dead played the Shrine Auditorium multiple times in 1968 and 1969 — it was one of their key LA venues in the primal era.",
  },

  // ── 31. 5/22/77 Pembroke Pines — the Sugaree heard 'round the world ──
  {
    id: "gd-1977-05-22",
    date: "1977-05-22",
    venue: "Sportatorium",
    city: "Pembroke Pines",
    state: "FL",
    setlist: [
      "Bertha", "Mama Tried", "Tennessee Jed",
      "Looks Like Rain", "Sugaree", "El Paso",
      "Peggy-O", "Big River", "Brown-Eyed Women",
      "Promised Land",
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Estimated Prophet", "The Other One",
      "Wharf Rat", "Terrapin Station", "Morning Dew",
      "One More Saturday Night",
    ],
    archiveUrl: "https://archive.org/details/gd77-05-22.sbd.dp-leftovers.18803.sbefail.shnf",
    era: "77-peak",
    moods: ["high-energy", "triumphant", "joyful", "emotional"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    headline: "The May '77 show some Deadheads quietly insist beats Cornell.",
    whyThisShow:
      "Two weeks after Barton Hall, the band rolled into a hockey rink in the Florida swamps and turned in what a sizable minority of tape collectors consider the actual peak of May '77. Dick Latvala himself reportedly said this show 'tears Cornell apart, rips it to shreds.' If you've worn out 5/8/77, this is the next door to walk through.",
    listenFor:
      "The Sugaree is the moment — widely cited as the single best Sugaree the band ever played, with three distinct jam sections any one of which could stand alone. Help on the Way > Slipknot! > Franklin's Tower in the second set is monstrous. The Wharf Rat > Terrapin > Morning Dew sequence at the end is operatic. Reviewers on Archive describe peaks 'that will knock you on the floor' — they're not exaggerating.",
    context:
      "The legendary May '77 northeastern run had ended; the band swung south for a Florida and Southeast leg that's almost as good. The Sportatorium was a strange venue — a corrugated-metal arena built for hockey in the middle of the Everglades — but the band was still riding the energy that produced Cornell, Buffalo, St. Paul, and the Atlanta Fox. Released as Dick's Picks Vol. 3 (partial — eight songs only); the full show circulates as 'DP3 leftovers.'",
    funFact: "Dick's Picks Vol. 3 only released eight songs from this night. Deadheads spent decades begging for the rest. The full SBD has been freely available on Archive.org since the early 2000s.",
  },

  // ── 32. 5/19/77 Atlanta Fox — the other May '77 contender ────
  {
    id: "gd-1977-05-19",
    date: "1977-05-19",
    venue: "Fox Theatre",
    city: "Atlanta",
    state: "GA",
    setlist: [
      "Promised Land", "Sugaree", "Mama Tried",
      "Mexicali Blues", "Peggy-O", "El Paso",
      "Row Jimmy", "Looks Like Rain", "Deal",
      "Bertha", "Good Lovin'",
      "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "He's Gone",
      "Drums", "The Other One", "Stella Blue",
      "Around and Around", "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd77-05-19.sbd.direwolf.3120.sbeok.shnf",
    era: "77-peak",
    moods: ["high-energy", "triumphant", "joyful", "emotional"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["newcomer", "exploring", "head"],
    headline: "The Peggy-O of Peggy-Os — May '77 in a beautiful old movie palace.",
    whyThisShow:
      "The Fox is a 4,600-seat 1929 Egyptian-revival movie theater with painted stars on the ceiling. The Dead were in the middle of the greatest run of their career. Put those two things together and you get the show that Archive reviewers describe with phrases like 'best set list ever' and 'Jerry was on FIRE this night.' The Sugaree rivals 5/22; the Peggy-O might be the band's definitive version. One Aussie taper goes further: 'If this show was circulated instead of 5/8/77 then it would be considered the greatest.'",
    listenFor:
      "Peggy-O is the song most fans remember — Jerry's voice tender, the Beautiful Jam at the end an emotional career high. The Sugaree is a three-jam epic. Scarlet > Fire is canonical 1977 magic. The Stella Blue out of Drums is a heart-stopper. The whole show has a sense of a band aware they're playing in a beautiful room and rising to meet it.",
    context:
      "May 1977 was the Dead at full creative peak: a tight, jazz-influenced lineup, the second-set song architecture finally locked in, Jerry's tone fattest it would ever be. The Fox Theatre run (5/18 and 5/19) was the southern-leg jewel of the tour. The full May '77 box (released 2014) gathered all 22 shows into a 14-CD set; this one stands out even within that set.",
    funFact: "The Fox Theatre was nearly demolished in 1974 — saved by an Atlanta civic campaign three years before this show. The Dead played one of the first major rock concerts in the rescued venue.",
  },

  // ── 33. 5/15/77 St. Paul — the night Estimated > Eyes was born ──
  {
    id: "gd-1977-05-15",
    date: "1977-05-15",
    venue: "St. Paul Civic Center",
    city: "St. Paul",
    state: "MN",
    setlist: [
      "The Promised Land", "Bertha", "Mama Tried",
      "Tennessee Jed", "Looks Like Rain",
      "Sugaree", "El Paso", "Brown-Eyed Women",
      "Passenger", "Friend of the Devil", "Music Never Stopped",
      "Bertha (II)",
      "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "Eyes of the World",
      "Drums", "Wharf Rat",
      "Dancin' in the Streets",
      "St. Stephen", "Iko Iko", "Not Fade Away",
    ],
    archiveUrl: "https://archive.org/details/gd1977-05-15.28916.sbeok.flac16",
    era: "77-peak",
    moods: ["high-energy", "joyful", "psychedelic", "triumphant"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "First-ever Estimated > Eyes. First-ever Iko Iko. The night the second set's architecture clicked.",
    whyThisShow:
      "If May '77 has a hidden chapter, this is it. St. Paul is where two of the most-played pairings in Dead history were invented in real time: the Estimated Prophet > Eyes of the World pairing that would become the spine of late-era second sets, and the very first Iko Iko, dropped into a St. Stephen > NFA segue that Archive reviewers describe as 'off the rails.' The whole second set sounds like the band figuring out a new vocabulary on stage.",
    listenFor:
      "Estimated > Eyes is the historical headline, and the version is fitting — the band attacks it like they know it'll be a thing. The St. Stephen > Iko > NFA stretch is one of those passages where the segues are so seamless that, as one Archive reviewer puts it, 'someone who didn't know the band would think it was one song.' The Dancin' in the Streets is also a top contender for best of '77.",
    context:
      "Mid-May '77, ten shows into the legendary tour, the band was in a state of musical fearlessness — willing to debut new combinations on a Sunday night in Minnesota because they trusted each other completely. The St. Paul Civic Center was a strange concrete bowl, but the room couldn't dampen the energy. The Charlie Miller transfer (28916) is the gold-standard SBD seed.",
    funFact: "The very first Iko Iko was played this night, sandwiched between St. Stephen and Not Fade Away. Iko would go on to become a beloved closer/encore for the rest of the band's career.",
  },

  // ── 34. 6/9/77 Winterland — the Eyes that ranks above '74 ────
  {
    id: "gd-1977-06-09",
    date: "1977-06-09",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "Mississippi Half-Step", "Mama Tried", "Tennessee Jed",
      "Looks Like Rain", "Loser", "El Paso",
      "Peggy-O", "The Music Never Stopped",
      "Bertha",
      "Estimated Prophet", "Eyes of the World",
      "Drums", "Not Fade Away",
      "He's Gone", "Truckin'", "Wharf Rat",
      "Sugar Magnolia",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd1977-06-09.28614.sbeok.flac16",
    era: "77-peak",
    moods: ["high-energy", "triumphant", "joyful", "psychedelic"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "The most-reviewed '77 show on Archive.org. Read the comments — they're not wrong.",
    whyThisShow:
      "Of every show from the legendary '77 year, this Winterland night has the most fan reviews on Archive.org by a wide margin. The Mississippi Half-Step here is a top-three-ever candidate. The Eyes of the World is the only Estimated > Eyes in the band's history that resolves to a full stop instead of segueing — and reviewers consistently rank it above the famous '74 Eyes. One reviewer called it 'the best version for any year, post-1974.' That's a serious claim. Listen and judge.",
    listenFor:
      "Mississippi Half-Step is the opener and it announces the whole night — Jerry locked in, Phil walking, Keith decorating. Eyes of the World in the second set is the song everyone talks about — patient, exploratory, then resolved with such finality that Bobby and Jerry both seem surprised. Truckin' > Wharf Rat is a quiet emotional centerpiece. Not Fade Away gets cosmic.",
    context:
      "Winterland was Bill Graham's home base and the Dead's Bay Area room. By June 1977 the band was riding the high of the May northeastern run and bringing it home. The Charlie Miller transfer (28614) is the canonical SBD source. Officially released on the *Winterland June 1977: The Complete Recordings* box set.",
    funFact: "The full-stop Estimated > Eyes ending here is unique. Every other version of that pairing in Dead history segues — only on this night did they let Eyes resolve and stop, then wait for the crowd reaction.",
  },

  // ── 37. 8/6/74 Roosevelt Stadium — the Eyes of the World ────
  {
    id: "gd-1974-08-06",
    date: "1974-08-06",
    venue: "Roosevelt Stadium",
    city: "Jersey City",
    state: "NJ",
    setlist: [
      "Bertha", "Beat It On Down the Line", "Brown-Eyed Women",
      "Big River", "Mississippi Half-Step", "Mexicali Blues",
      "Tennessee Jed", "Jack Straw", "Loser",
      "Black Throated Wind", "Eyes of the World",
      "China Cat Sunflower", "I Know You Rider",
      "Promised Land",
      "Playing in the Band", "Scarlet Begonias", "Playing in the Band (reprise)",
      "It Must Have Been the Roses",
      "Truckin'", "Drums", "Not Fade Away",
      "Goin' Down the Road Feeling Bad", "Not Fade Away (reprise)",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd74-08-06.merin.weiner.gdADT.5914.sbefail.shnf",
    era: "wall-of-sound",
    moods: ["triumphant", "psychedelic", "high-energy", "joyful"],
    styles: ["jam", "experimental", "jazz-space"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "The Eyes of the World that everyone agrees is the best ever. Period.",
    whyThisShow:
      "Among Wall of Sound-era listeners, this Eyes is not debated. It is the version. Jerry's two solos between the verses are, as one Archive reviewer puts it, 'mind-blowing — so fast, so beautifully phrased, so inspired, I have never heard him play like that in ANY Eyes ever.' Then the Playing in the Band > Scarlet Begonias > Playing in the Band sandwich in the second set seals it. This is the Dead at the absolute apex of their improvisational powers.",
    listenFor:
      "Eyes of the World is the centerpiece — and it's the verse solos, not the closing jam, that make it singular. Listen for how Jerry moves between the verses. The Playing > Scarlet > Playing sandwich is structurally insane. Bobby's onstage banter about a fence-climber and a Jersey crowd brawl after Eyes is also legendary in its own right. The Truckin' > Drums > NFA > GDTRFB > NFA suite is a master class.",
    context:
      "Summer '74, days before the Wall of Sound's biggest run and weeks before the band would announce its hiatus. Roosevelt Stadium was a decaying ballpark in Jersey City — torn down in 1985 — that hosted a string of Dead shows in the mid-70s. The Merin/Weiner audience tape is excellent given the era. Officially released as part of Dick's Picks Vol. 31.",
    funFact: "Bobby Weir's onstage scolding of a fence-climber during the post-Eyes break ('look at that fool!') is one of the most-quoted between-song moments in the Dead's recorded history.",
  },

  // ── 38. 2/24/74 Winterland — Dark Star > Morning Dew ────────
  {
    id: "gd-1974-02-24",
    date: "1974-02-24",
    venue: "Winterland Arena",
    city: "San Francisco",
    state: "CA",
    setlist: [
      "U.S. Blues", "Mexicali Blues", "Brown-Eyed Women",
      "Beat It On Down the Line", "Loser",
      "Jack Straw", "Sugaree", "Money Money",
      "Row Jimmy", "El Paso", "China Cat Sunflower",
      "I Know You Rider", "Around and Around",
      "Weather Report Suite",
      "He's Gone", "Truckin'",
      "Dark Star", "Morning Dew",
      "Sugar Magnolia", "It's All Over Now Baby Blue",
    ],
    archiveUrl: "https://archive.org/details/gd74-02-24.sbd.windsor.199.sbefail.shnf",
    era: "wall-of-sound",
    moods: ["psychedelic", "dark", "emotional", "meditative"],
    styles: ["experimental", "jam", "jazz-space"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "The Dark Star > Morning Dew that gets sworn at by Deadheads who can't believe it's real.",
    whyThisShow:
      "Officially released as Dave's Picks Vol. 13. The 45-minute Dark Star > Morning Dew sequence is, as Archive reviewers put it, 'the purest expression of the human experience ever uttered' — high praise even by Deadhead standards. This is the kind of show you put on at 2 AM with headphones and no plans for the next morning. The rare It's All Over Now Baby Blue encore is the cherry on top.",
    listenFor:
      "Dark Star is the entire reason. The first Dark Star reaches into outer space, then resolves into Morning Dew — a Morning Dew that one reviewer ranks 'second only to 9/21/72.' Jerry's last solo in the Dew sounds, in another reviewer's phrase, 'like his fingers are melting the guitar.' The China Cat > Rider is also tremendous. The Baby Blue encore is rare and gorgeous.",
    context:
      "February 1974 — a few weeks before the full Wall of Sound would debut at the Cow Palace (3/23/74). The band was tight, well-rested, with Mars Hotel material in the works. Dave's Picks Vol. 13 made this show official in 2015. Charlie Miller's transfer is the cleanest available; the older Windsor seed has more reviews.",
    funFact: "The 45-minute Dark Star > Morning Dew sequence is one of the longest single uninterrupted improvisational stretches the Dead ever committed to tape. Dave's Picks Vol. 13 was a subscription-only release in 2015 and sold out before the disc shipped.",
  },

  // ── 39. 7/19/74 Selland Arena Fresno — Phil-forward ─────────
  {
    id: "gd-1974-07-19",
    date: "1974-07-19",
    venue: "Selland Arena",
    city: "Fresno",
    state: "CA",
    setlist: [
      "U.S. Blues", "Mexicali Blues", "Brown-Eyed Women",
      "Beat It On Down the Line", "Tennessee Jed",
      "Jack Straw", "Scarlet Begonias", "El Paso",
      "Mississippi Half-Step", "Around and Around",
      "Weather Report Suite", "Let It Grow",
      "Spanish Jam", "Eyes of the World",
      "China Doll",
      "Playing in the Band",
      "Wharf Rat", "Sugar Magnolia",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd74-07-19.sbd.symons.12381.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["psychedelic", "high-energy", "meditative"],
    styles: ["jam", "experimental", "jazz-space"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Phil bombs and Spanish Jam — the night the Wall of Sound hit Fresno.",
    whyThisShow:
      "If you want one Wall of Sound show where Phil Lesh's bass is the lead instrument, this is it. Archive reviewers describe him as 'a beast — everywhere, dropping bombs.' The Weather Report Suite > Let It Grow > Spanish Jam > Eyes > China Doll suite is one of the most cohesive long-form passages of the entire era — reviewers compare it to chamber jazz played by a rock band with telepathy.",
    listenFor:
      "The second-set suite is the entire show. Let It Grow is 'furious, manic, perfect' — Garcia and Lesh intertwine like lightning and thunder. The Spanish Jam is Phil-led and stunning. Eyes drops in fluid, then resolves into a tender China Doll. The first-set Scarlet Begonias is also a stand-alone gem — fully formed even though the song was only six months old.",
    context:
      "Summer '74 California swing, just past the halfway mark of the Wall of Sound year. Selland Arena was a small civic auditorium in central California — a relatively intimate room for a band carrying their giant PA. Officially released as Dick's Picks Vol. 12 (with material from 6/26/74 Providence). The Symons SBD is the most-reviewed source on Archive; Charlie Miller's flac16 (32634) is the cleanest.",
    funFact: "The Wall of Sound was so loud at Fresno that the Selland Arena's interior fixtures reportedly came loose from the ceiling vibration. The crew had to do running repairs between sets.",
  },

  // ── 41. 5/15/70 Fillmore East — acoustic and electric ──────
  {
    id: "gd-1970-05-15",
    date: "1970-05-15",
    venue: "Fillmore East",
    city: "New York",
    state: "NY",
    setlist: [
      "Don't Ease Me In", "Friend of the Devil",
      "Dire Wolf", "Black Peter", "Cold Jordan",
      "Candyman", "Cumberland Blues",
      "Casey Jones", "Uncle John's Band",
      "Cold Rain and Snow", "Hard to Handle",
      "Big Boss Man", "China Cat Sunflower", "I Know You Rider",
      "Good Lovin'", "Dark Star", "St. Stephen",
      "Not Fade Away", "Turn On Your Lovelight",
      "And We Bid You Goodnight",
    ],
    archiveUrl: "https://archive.org/details/gd70-05-15.early-late.sbd.97.sbeok.shnf",
    era: "early-70s",
    moods: ["mellow", "psychedelic", "joyful", "meditative"],
    styles: ["acoustic", "country-folk", "jam", "experimental"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "An Evening with the Grateful Dead — acoustic, NRPS, electric. All in one night.",
    whyThisShow:
      "Spring 1970 was the brief, beautiful era when the Dead played 'An Evening with the Grateful Dead' — an acoustic Dead set, a New Riders of the Purple Sage set (with Jerry on pedal steel), then an electric Dead set. This Fillmore East show is the most-reviewed 1970 show on the entire Archive — 97 reviews and counting. As one reviewer puts it: 'If you want to hear what the GD were all about in 1970, get this.'",
    listenFor:
      "The acoustic set is the gem — Don't Ease Me In, Friend of the Devil, Dire Wolf, Black Peter, Candyman, Uncle John's Band — all the Workingman's and American Beauty material in raw, intimate form. The electric set ramps into a Dark Star > St. Stephen > NFA > Lovelight that feels like coming up out of a deep dive. And We Bid You Goodnight as the closer is gospel a cappella — pure tenderness.",
    context:
      "May 1970 — the Workingman's Dead album would drop a month later, American Beauty in November. The band had reinvented themselves as country-rock balladeers without abandoning the cosmic side. The Fillmore East was Bill Graham's New York room. The 'Evening with' format only ran for a few months before the band gave it up — a glimpse of an alternate-universe Dead.",
    funFact: "Jerry literally played three instruments and three sets that night: acoustic guitar with the Dead, pedal steel with the New Riders, and electric guitar with the Dead again. Three bands, one guitarist, one evening.",
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

  // ── 43. 3/26/72 Academy of Music NYC — Dave's Picks 14 ─────
  {
    id: "gd-1972-03-26",
    date: "1972-03-26",
    venue: "Academy of Music",
    city: "New York",
    state: "NY",
    setlist: [
      "Greatest Story Ever Told", "Sugaree", "Me and My Uncle",
      "China Cat Sunflower", "I Know You Rider",
      "Black Throated Wind", "Big Railroad Blues",
      "The Stranger (Two Souls in Communion)",
      "Loser", "Beat It On Down the Line",
      "El Paso", "Tennessee Jed",
      "Truckin'", "The Other One", "Me and My Uncle",
      "The Other One", "Wharf Rat",
      "Sugar Magnolia",
    ],
    archiveUrl: "https://archive.org/details/gd1972-03-26.133303.sbd.miller.flac16",
    era: "europe-72",
    moods: ["high-energy", "psychedelic", "joyful", "triumphant"],
    styles: ["rock", "jam", "blues"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Released as Dave's Picks 14. The Truckin' > Other One > Wharf Rat sandwich melts faces.",
    whyThisShow:
      "The seven-night Academy of Music run was the Dead's pre-Europe '72 warm-up — they were tightening up the new material with Keith on piano before crossing the Atlantic. This Sunday-night show is the most-reviewed of the run and the one Dave's Picks chose to preserve. Archive reviewers don't hold back: 'Truckin' = face melted. Other One = grenade dropped in puddle and former face distributed over large area.'",
    listenFor:
      "The Truckin' > The Other One > Me and My Uncle > The Other One > Wharf Rat sandwich is the highlight — one of the great sequences of '72. The opening Greatest Story Ever Told sets the tempo. The rare second-ever performance of Pigpen's 'The Stranger (Two Souls in Communion)' is a deep-cut treasure. Sugar Magnolia closes with full power.",
    context:
      "March 1972, ten days before the band flew to England. The Academy of Music was a former movie palace at 14th Street and Irving Place in NYC (later renamed the Palladium). The seven-night run was a soft-launch for the Europe '72 material. Dave's Picks Vol. 14 made this show official in 2015. Charlie Miller's transfer is the canonical SBD.",
    funFact: "'The Stranger (Two Souls in Communion)' was Pigpen's late-period original. He played it live only a handful of times, and only one of them was at the Academy of Music run.",
  },

  // ── 44. 2/9/73 Maples Pavilion Stanford — debut night ──────
  {
    id: "gd-1973-02-09",
    date: "1973-02-09",
    venue: "Maples Pavilion (Stanford University)",
    city: "Stanford",
    state: "CA",
    setlist: [
      "Bertha", "Mexicali Blues", "Wave That Flag",
      "Black Throated Wind", "Loser", "Beat It On Down the Line",
      "Brown-Eyed Women", "Box of Rain", "Sugaree",
      "El Paso", "Don't Ease Me In",
      "Here Comes Sunshine", "Around and Around",
      "Playing in the Band", "China Cat Sunflower",
      "I Know You Rider", "Big Railroad Blues",
      "They Love Each Other", "Looks Like Rain",
      "Truckin'", "Eyes of the World", "China Doll",
      "Sugar Magnolia",
      "Casey Jones",
    ],
    archiveUrl: "https://archive.org/details/gd73-02-09.sbd.allred.9888.sbeok.shnf",
    era: "wall-of-sound",
    moods: ["joyful", "high-energy", "mellow", "psychedelic"],
    styles: ["rock", "jam", "country-folk"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "Seven world premieres in one night. The first Eyes of the World ever played.",
    whyThisShow:
      "This is one of the most historically loaded nights in Grateful Dead history. The band debuted SEVEN songs at this college gym show: Here Comes Sunshine, Row Jimmy, Loose Lucy, Wave That Flag (early Truckin' cousin), They Love Each Other, China Doll, and — the big one — the very first Eyes of the World. As one reviewer puts it, 'this debut Eyes is interesting in that Bobby Ace's chords during the verses are unique only to this version.' You're hearing songs being born.",
    listenFor:
      "The first Eyes of the World is the headline — Bobby's verse chords are different from the version everyone knows, which makes it feel almost like a different song. Here Comes Sunshine debuts radiant. They Love Each Other shows up here as a brand-new Hunter/Garcia composition. The China Doll is the first one and it's already a heart-stopper. Listen for the band tuning up to Beer Barrel Polka before Mexicali — they were goofing around even on the historic nights.",
    context:
      "February 1973 was the start of a transitional year — the band had retired Pigpen-era material and was building the next songbook. They played a college show because Mickey Hart's brother was a Stanford student. Released as Dave's Picks Vol. 11 in 2014. The Allred SBD is the most-reviewed source. As one attendee remembers: 'It rained all day. They stamped your hand DEAD when you entered. Many opted to have it stamped on their forehead.'",
    funFact: "Of the seven songs that debuted this night, six (Here Comes Sunshine, Eyes, They Love Each Other, China Doll, Loose Lucy, Row Jimmy) became permanent setlist staples. Wave That Flag evolved into U.S. Blues by 1974.",
  },

  // ── 47. 3/29/85 Springfield — first-set Supplication Jam ───
  {
    id: "gd-1985-03-29",
    date: "1985-03-29",
    venue: "Springfield Civic Center",
    city: "Springfield",
    state: "MA",
    setlist: [
      "Cold Rain and Snow", "Little Red Rooster",
      "Bird Song", "My Brother Esau",
      "Bottom of the Bottle", "Supplication Jam",
      "Don't Ease Me In",
      "Terrapin Station",
      "Playing in the Band",
      "Drums", "Space",
      "The Wheel", "Throwing Stones",
      "Not Fade Away",
      "Johnny B. Goode",
    ],
    archiveUrl: "https://archive.org/details/gd85-03-29.oade-schoeps.sacks.23475.sbeok.flacf",
    era: "80s",
    moods: ["high-energy", "joyful", "psychedelic", "party"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "A first-set Supplication Jam, a Terrapin opener, and a Johnny B. Goode at 192 BPM.",
    whyThisShow:
      "Springfield Civic 1985 is one of those mid-80s shows that proves the Dead could still find new combinations even in their second decade. Dropping a Supplication Jam into the first set is rare and weird — Supplication usually only appeared as a tag inside Lazy Lightning. Opening the second set with Terrapin Station is even rarer — Terrapin was usually buried mid-set. And the Johnny B. Goode encore is, as one Archive reviewer measured it, '192 BPM. Don't think I've ever heard it played that fast before.'",
    listenFor:
      "The first-set Supplication Jam > Esau is the structural surprise. Bird Song stretches out beautifully. Terrapin Station opening the second set sets up a different second-set arc than usual. The Wheel > Throwing Stones > Not Fade Away closing run is tight. The Johnny B. Goode encore is the gallop home — Phil Lesh reportedly had to walk over to Jerry's mic to bring him in for a landing.",
    context:
      "Spring 1985 — the Dead's 20th anniversary year. Brent Mydland was at his peak as a band member, Jerry was still mostly healthy, the band was playing arenas without yet being mainstream stars. Springfield is Western Mass — a small market that always got hot Dead shows because the room sat about 8,000 and the crowd was hardcore. Oades Schoeps audience tape is the consensus best source. No SBD circulates.",
    funFact: "Per Archive reviewer measurement, the Johnny B. Goode encore clocks at roughly 192 BPM — well above the band's typical version and a candidate for the fastest Johnny B. Goode they ever played.",
  },

  // ── 48. 3/24/86 Spectrum — second Box of Rain since '74 ────
  {
    id: "gd-1986-03-24",
    date: "1986-03-24",
    venue: "The Spectrum",
    city: "Philadelphia",
    state: "PA",
    setlist: [
      "Hell in a Bucket", "Cold Rain and Snow",
      "Walkin' Blues", "Friend of the Devil",
      "Box of Rain",
      "Lost Sailor", "Saint of Circumstance",
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Estimated Prophet", "Eyes of the World",
      "Drums", "Space",
      "Morning Dew", "Sugar Magnolia",
      "U.S. Blues",
    ],
    archiveUrl: "https://archive.org/details/gd86-03-24.naks.braverman.16746.sbeok.shnf",
    era: "80s",
    moods: ["triumphant", "emotional", "high-energy", "joyful"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "The second Box of Rain since 1974. The roof of the Spectrum lifted ten feet.",
    whyThisShow:
      "After the legendary Hampton 3/20/86 revival of Box of Rain (the first live performance since 1973), the band brought it back four nights later in Philadelphia. The Archive reviews capture the moment: 'The roof lifted about 10 feet off the Spectrum when they started Box of Rain, and another 50 feet when Phil started singing and everyone realized what it was.' Then a transcendent Morning Dew out of Space — described by one taper as 'second only to Augusta's for all my Dews.'",
    listenFor:
      "Box of Rain in the first set is the historical moment — Phil singing his own song, the crowd realization in real time. Help > Slip > Franklin's opens the second set. The Morning Dew is the night's musical peak — 'blistering,' 'out of nowhere.' The Lost Sailor > Saint of Circumstance pairing was already nostalgia by '86 (about to be retired forever in 1990).",
    context:
      "Spring 1986 — six months before Jerry's diabetic coma would change everything. The band was in a confident mid-decade groove. The Spectrum was Philly's sports arena, host to dozens of Dead shows over the years. Box of Rain had been retired in 1973 after Phil's father died (he'd written it for him); its 1986 return was a cathartic moment for the band and for Deadheads.",
    funFact: "Phil Lesh hadn't sung Box of Rain on stage in 13 years when the band brought it back at Hampton on 3/20/86. He reportedly only agreed to do it if Bobby would learn the harmony part. Bobby learned it.",
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
    headline: "Brent at peak — a Shakedown that doesn't slow down until Baby Blue.",
    whyThisShow:
      "Spring 1989 was Brent Mydland's absolute peak — vocals strong, organ work pushing the band, songs like Foolish Heart and We Can Run hitting their stride. This Pittsburgh show is the standout of that tour. Archive reviewers call it 'probably the best of this tour' — the Shakedown opens the second set hot and the band 'didn't slow down until Baby Blue.' The GDTRFB > Lovelight closing is one of the best of the late '80s.",
    listenFor:
      "Shakedown Street opening the second set is the sustained highlight — long, funky, Brent and Jerry trading lead. Tennessee Jed in the first set is described by one reviewer as 'a clinic in fine musicianship — the final two minutes are just so reassuring.' The GDTRFB > Lovelight closer brings the house down. Knockin' on Heaven's Door encore is tender.",
    context:
      "April 1989 — six months before the Hampton 'Formerly the Warlocks' run, the band was tightening up after years of Touch of Grey-era mainstream chaos. Pittsburgh's Civic Arena (the Igloo) had a retractable dome. The shows were marred by gate-crashing and fights outside — the late-'80s Touch of Grey crowd had brought a lot of new attention but also a lot of trouble. The music inside, on this night, was the answer to that.",
    funFact: "The Pittsburgh Civic Arena was the first major sports/concert venue in the world with a retractable roof. The Dead reportedly asked if they could open it during the show; the answer was no. (It was 40 degrees outside.)",
  },

  // ── 50. 7/19/90 Deer Creek — Brent's swan song window ──────
  {
    id: "gd-1990-07-19",
    date: "1990-07-19",
    venue: "Deer Creek Music Center",
    city: "Noblesville",
    state: "IN",
    setlist: [
      "Jack Straw", "Mississippi Half-Step",
      "Walkin' Blues", "Loser",
      "Queen Jane Approximately", "Bird Song",
      "Promised Land",
      "Foolish Heart",
      "Victim or the Crime",
      "Playing in the Band",
      "Uncle John's Band",
      "Drums", "Space",
      "The Other One", "Stella Blue",
      "Lovelight",
      "Knockin' on Heaven's Door",
    ],
    archiveUrl: "https://archive.org/details/gd90-07-19.dsbd.garcia420.2177.sbeok.shnf",
    era: "80s",
    moods: ["high-energy", "joyful", "emotional", "triumphant"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "Brent Mydland's swan song. Seven days later he was gone.",
    whyThisShow:
      "Brent Mydland died on July 26, 1990. This show was played seven days earlier. Listening with that knowledge changes everything — the Foolish Heart sounds like a goodbye, the Stella Blue is unbearable. Released officially as Dave's Picks Vol. 40. Archive reviewers describe a 'Killer Foolish with Brent — top 5 Foolish all-time.' Even without the context, it's a top-tier 1990 show; with the context, it becomes essential.",
    listenFor:
      "Foolish Heart is the centerpiece — Brent's organ pushing the song forward, Jerry's solos lyrical and engaged. The Jack Straw opener is one of the best ever played. Bird Song stretches into beautiful territory. The Other One into Stella Blue is the heartbreaker — patient, exploratory, then unbearable even before you know what was coming. The Queen Jane Approximately is the rare-Dylan-cover surprise of the night.",
    context:
      "July 1990, Brent's eighth year in the band. Deer Creek was a brand-new outdoor amphitheater that would become a beloved Midwestern Dead venue for decades. Brent had been struggling with addiction and depression. He died of a morphine and cocaine overdose at his home in California, age 37. He was the third Grateful Dead keyboardist to die — joining Pigpen (1973) and Keith Godchaux (1980).",
    funFact: "After Brent's death the band canceled the rest of the summer tour and went dark for two months, then resumed in September with Bruce Hornsby on grand piano and Vince Welnick on synth — two keyboardists doing the work of one. They never officially recovered.",
  },

  // ── 51. 4/22/79 Spartan Stadium — Brent Mydland's first show ─
  {
    id: "gd-1979-04-22",
    date: "1979-04-22",
    venue: "Spartan Stadium",
    city: "San Jose",
    state: "CA",
    setlist: [
      "Jack Straw", "Tennessee Jed", "Mama Tried",
      "Mexicali Blues", "Sugaree", "New Minglewood Blues",
      "Brown-Eyed Women", "Looks Like Rain",
      "Stagger Lee", "Passenger", "Deal",
      "I Need a Miracle", "Bertha", "Good Lovin'",
      "Scarlet Begonias", "Fire on the Mountain",
      "Estimated Prophet", "He's Gone",
      "Drums", "The Other One", "Wharf Rat",
      "Around and Around", "U.S. Blues",
      "Shakedown Street",
    ],
    archiveUrl: "https://archive.org/details/gd79-04-22.sbd.bennett.12001.sbeok.shnf",
    era: "late-70s",
    moods: ["high-energy", "joyful", "road-trip"],
    styles: ["rock", "jam"],
    audioQuality: "good",
    significance: "legendary",
    bestFor: ["exploring", "head"],
    headline: "Brent Mydland's debut. The night a new chapter started without warning.",
    whyThisShow:
      "Most fans showed up to Spartan Stadium not knowing the Godchauxs had been pushed out the week before. As Archive reviewer 'jeffsetz' puts it: 'On the day of this show, most in attendance had no idea who was going to replace Keith. When the Dead came out, the new guy looked familiar.' Then Brent walked out and the band ripped into Jack Straw with a fresh keyboard voice carrying it. This isn't a top-tier musical performance — it's a historical document. Brent's eleven years would change everything about the late-period Dead, and they all start here.",
    listenFor:
      "Brent's organ on Bertha and Good Lovin' announces a different band — more soulful, more harmonically active than Keith's tasteful piano. The Looks Like Rain takes on new resonance: it actually rained that day, and one reviewer remembers his friend setting off military ordnance during the song. Shakedown Street as a closer was still brand new — the song debuted in late '78 and Brent attacks it. The vocals are noticeably stronger than Keith-era — Brent could actually sing.",
    context:
      "Keith and Donna Godchaux had played their last show on February 17, 1979 at Oakland Coliseum. They were exhausted, struggling with addiction, and the band had decided amicably to part ways. Brent Mydland — recommended by Bob Weir, who'd worked with him in the Bob Weir Band — was hired in early April and had less than a month to learn the songbook. Spartan Stadium was an outdoor stadium show with Greg Kihn and the Charlie Daniels Band opening. Bennett SBD source.",
    funFact: "Brent learned roughly 100 Grateful Dead songs in three weeks before his first show. He stayed in the band for over eleven years — longer than any other Dead keyboardist, and through the band's entire commercial peak.",
  },

  // ── 52. 9/16/87 MSG — In the Dark tour, late-summer fire ────
  {
    id: "gd-1987-09-16",
    date: "1987-09-16",
    venue: "Madison Square Garden",
    city: "New York",
    state: "NY",
    setlist: [
      "Touch of Grey", "Scarlet Begonias",
      "Little Red Rooster", "Dire Wolf",
      "My Brother Esau", "High Time",
      "Let It Grow", "Don't Ease Me In",
      "Bertha", "Greatest Story Ever Told",
      "Devil With the Blue Dress", "Good Golly Miss Molly",
      "Devil With the Blue Dress (reprise)",
      "He's Gone", "Drums", "Space",
      "Truckin'", "Wharf Rat", "Throwing Stones",
      "Not Fade Away",
      "Goin' Down the Road Feeling Bad",
      "Black Muddy River",
    ],
    archiveUrl: "https://archive.org/details/gd87-09-16.sbd.hinko.22797.sbeok.shnf",
    era: "80s",
    moods: ["high-energy", "joyful", "triumphant", "party"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Touch of Grey opens. Jerry rips. The MTV-era Dead at their most engaged.",
    whyThisShow:
      "Fall 1987 was the chaotic year — In the Dark had hit, Touch of Grey was on MTV, and the band was suddenly playing to people who'd never heard 'St. Stephen' in their lives. The Sept '87 MSG run is when the band proved they could meet the moment. Archive reviewer 'pnc' captures it: 'Jerry rips in this show, and it's funny — while he blows several lyrics, it is more like he gets ahead of himself due to exuberance than his usual nodding forgetfulness.' That's a Jerry alive in the music. The Bertha > Greatest > Devil With the Blue Dress > Good Golly second-set medley is, as another reviewer notes, 'pretty hot.'",
    listenFor:
      "Touch of Grey opening the show is the cultural moment — by '87 the song was a Top 10 hit and the band leaned into it as an opener. The first-set Scarlet Begonias is rare without Fire (a 'standalone Scarlet'), and the crowd noise on the recording captures the bummed reaction one Archive taper remembers, before the band redeems it. The Devil With the Blue Dress > Good Golly > Blue Dress sandwich is Brent at full Mitch Ryder mode. The Black Muddy River encore is one of the saddest songs in the catalog and Jerry sells it.",
    context:
      "September 1987 was a six-night MSG run; this was night three. The crowd was a mix of lifers who'd been around for a decade and 'Touch heads' who'd shown up for the radio hit. The band was healthy, the lineup with Brent fully integrated, and the Dylan & The Dead tour (summer '87) had given them a creative jolt. The Hinko SBD is the canonical source. As 'capn doubledose' wrote: 'I knew it — this is better than La Bamba night.'",
    funFact: "In the Dark made the Grateful Dead the only band in history to score their first Top 10 single more than 20 years into their career. Touch of Grey reached No. 9 on the Billboard Hot 100 in September 1987 — the same month as this show.",
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

  // ── 54. 6/22/92 Star Lake — Dark Star and the Spanish Jam returns ─
  {
    id: "gd-1992-06-22",
    date: "1992-06-22",
    venue: "Star Lake Amphitheater",
    city: "Burgettstown",
    state: "PA",
    setlist: [
      "Jack Straw", "Loser",
      "Walkin' Blues", "It Must Have Been the Roses",
      "Queen Jane Approximately",
      "Ramble On Rose", "Beat It On Down the Line",
      "Deal",
      "Scarlet Begonias", "Fire on the Mountain",
      "Victim or the Crime",
      "Dark Star", "Drums", "Space",
      "Spanish Jam", "The Other One",
      "Stella Blue", "Goin' Down the Road Feeling Bad",
      "Around and Around",
      "Knockin' on Heaven's Door",
    ],
    archiveUrl: "https://archive.org/details/gd92-06-22.daud.harlan.5218.sbeok.shnf",
    era: "final-years",
    moods: ["psychedelic", "emotional", "introspective", "dark"],
    styles: ["jam", "experimental", "rock"],
    audioQuality: "good",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "A second-set Dark Star and the Spanish Jam returns. Vince-era Dead at their most adventurous.",
    whyThisShow:
      "Summer 1992 doesn't get talked about — it's wedged between Brent's death and Jerry's collapse, with Vince Welnick still finding his footing. But this Star Lake night had everything that made late-era Dead worth chasing. Archive reviewers focus on one stretch: Dark Star > Drums > Space > Spanish Jam > The Other One > Stella Blue. As one fan ('rat ina trainditch') describes it: 'The darkish Spanish Jam and then having my heart strings yanked by the Stella.' This is a Vince-era show where the band reaches for old fire and finds it.",
    listenFor:
      "Dark Star in the second set is the reason — by '92 it was rare and precious, and this version is patient and exploratory. The Spanish Jam (a recurring Phil-led theme not played often after the early '70s) emerging out of Space is the structural surprise. Stella Blue is one of those late-era Stellas where Jerry sounds like he's singing his own elegy. The Knockin' on Heaven's Door encore lands different in 1992, with Garcia's voice already showing the wear.",
    context:
      "June 22, 1992 — second night at the brand-new Star Lake Amphitheater outside Pittsburgh. As Archive reviewer 'chuck m' writes: 'What better way to christen a brand new arena than with back-to-back good Dead shows.' Jerry would be diagnosed with serious health issues weeks later and miss most of the rest of summer tour. The Harlan DAUD source is the canonical recording; the SBD partial is also solid.",
    funFact: "The Spanish Jam is technically based on a section of Sketches of Spain (Miles Davis / Gil Evans, 1960). The Dead first played it in 1968 and revived it sporadically. The 1992 versions are some of the last full appearances of this 25-year-old band tradition.",
  },

  // ── 55. 10/1/94 Boston Garden — last Garden run, Help>Slip>Frank opener ─
  {
    id: "gd-1994-10-01",
    date: "1994-10-01",
    venue: "Boston Garden",
    city: "Boston",
    state: "MA",
    setlist: [
      "Help on the Way", "Slipknot!", "Franklin's Tower",
      "Walkin' Blues", "Althea",
      "Me and My Uncle", "Big River",
      "Just Like Tom Thumb's Blues",
      "So Many Roads",
      "The Promised Land",
      "Scarlet Begonias", "Fire on the Mountain",
      "Way to Go Home", "Saint of Circumstance",
      "Terrapin Station",
      "Drums", "Space",
      "The Last Time", "Stella Blue",
      "One More Saturday Night",
      "Liberty",
    ],
    archiveUrl: "https://archive.org/details/gd94-10-01.sbd.ashley-bertha.14869.sbeok.shnf",
    era: "final-years",
    moods: ["triumphant", "emotional", "high-energy", "joyful"],
    styles: ["rock", "jam"],
    audioQuality: "pristine",
    significance: "classic",
    bestFor: ["exploring", "head"],
    headline: "Help > Slip > Franklin's opens the last-ever Boston Garden run. Top-ten 90s show.",
    whyThisShow:
      "By fall 1994, the conventional wisdom was that the band was running on fumes. This Boston Garden show is the rebuttal. Archive reviewer 'samson' is direct: 'A very solid show with great jamming. The whole band is definitely into it. Without a doubt, one of my top ten of the nineties.' Opening with Help on the Way > Slipknot! > Franklin's Tower is a statement — the band saying 'we still know how to do this.' This was the Dead's last-ever Boston Garden run; the building closed eleven months later.",
    listenFor:
      "Help > Slip > Franklin's opening the show is the anchor — bold opener choice, executed cleanly. So Many Roads is one of Hunter/Garcia's last great compositions and Jerry sings it with weight. Scarlet > Fire is a back-to-basics second-set centerpiece. The rare cover of the Stones' 'The Last Time' out of Space is the deep-cut surprise. Stella Blue closing the second set is heartbreaking; the Liberty encore feels like a band saying goodbye to a city.",
    context:
      "October 1, 1994 — opening night of a six-show Boston Garden run, the band's last visit to that legendary arena. The Garden had hosted Dead shows since the early '70s; it would close for events on 9/28/95, less than a year later, and be demolished in 1998. Jerry's health was visibly declining — but on the right nights, late-era Jerry could still find the line. Two competing SBD sources circulate; the Ashley/Bertha seed is the consensus better recording per the Archive comments.",
    funFact: "Boston Garden closed for events on 9/28/95 — the same year Jerry died — and the FleetCenter (now TD Garden) opened next door just two days later. The old Garden was demolished in 1998. The Dead had played the building dozens of times across two and a half decades.",
  },
];

/** Lookup helper */
export function findConciergeShow(id: string): ConciergeShow | undefined {
  return CATALOG.find((s) => s.id === id);
}
