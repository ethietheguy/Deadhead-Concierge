import type { ConciergeShow } from "./types";

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
