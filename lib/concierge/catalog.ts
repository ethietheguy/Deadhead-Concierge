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
  // ── 1. Cornell '77 — the GOAT ────────────────────────────────
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
      "Dancing in the Street", "Scarlet Begonias", "Fire on the Mountain",
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
    headline: "The show that defined what the Grateful Dead could be.",
    whyThisShow:
      "If you only ever listen to one Dead show, this is it. Every song lands. The band is locked in from the first note, and by the time Scarlet > Fire hits in the second set, they're playing on a level that shouldn't be possible. This isn't nostalgia — it's genuinely one of the greatest live performances ever recorded.",
    listenFor:
      "The Scarlet Begonias > Fire on the Mountain transition — it's seamless and builds like a wave. Morning Dew in the encore is devastating — Jerry's voice cracks with emotion and the whole room holds its breath. The Barton Hall acoustics give everything a warm, intimate quality despite the energy.",
    context:
      "May 1977 is widely considered the Dead's peak month. They were touring the Northeast, every show was fire, and Cornell was the crown jewel. The tape circulated for decades as the most-traded bootleg in history before getting an official release in 2017.",
    funFact: "For years, Deadheads debated whether the legendary tape was actually from Cornell or a different show. DNA-style audio analysis finally confirmed: it's real.",
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
    headline: "A benefit concert in an Oregon field that became a psychedelic masterpiece.",
    whyThisShow:
      "This is the Dead at their most free. An outdoor benefit show on a scorching August day in rural Oregon — no pressure, no corporate stage, just the band and a field full of freaks. The music is loose, exploratory, and radiates pure joy. If you want to understand what the Dead were really about, start here.",
    listenFor:
      "Dark Star is the centerpiece — over 30 minutes of the band dissolving into pure sound and reassembling. The Playing in the Band is equally cosmic. But don't sleep on Bird Song — Jerry's guitar tone in the Oregon sun is otherworldly. He's Gone hits different when you realize it was written about their manager who'd just ripped them off.",
    context:
      "The band played this benefit for Chuck Kesey's Springfield Creamery (yes, Ken Kesey's brother). They'd just returned from Europe and were at a creative peak. The whole show was filmed for the Sunshine Daydream movie, which didn't get officially released until 2013.",
    funFact: "The temperature hit 107 degrees that day. You can hear the heat in the music — everything shimmers.",
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
    headline: "The final night of Europe '72 — the show that became the album.",
    whyThisShow:
      "The Europe '72 album is how millions of people first heard the Dead, and most of that album came from this night. The Lyceum show captures the band at their most accessible and joyful — every song is a gem, the energy is celebratory, and the sound quality is immaculate. It's a party from start to finish.",
    listenFor:
      "Truckin' opens with a swagger that sets the tone for the whole night. The China Cat > Rider is pure bliss — the transition is one of the smoothest they ever played. Dark Star in the second set goes deep without getting lost. And Morning Dew (not on the original album but on the complete release) is a gut punch.",
    context:
      "This was the final night of the Dead's legendary 1972 European tour — 22 shows across England, France, Germany, Denmark, and the Netherlands. Pigpen was still in the band, and you can hear his blues influence throughout. The tour was expensive and nearly bankrupted them, but it produced some of the greatest music they ever made.",
    funFact: "The Europe '72 triple LP became the Dead's best-selling album. Most of it was pulled from this single show.",
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
    headline: "The night Branford Marsalis walked onstage and everything changed.",
    whyThisShow:
      "This is the show that proves the late-era Dead could still reach the mountaintop. When Branford Marsalis sits in on saxophone, the band transforms — suddenly they're playing jazz, they're playing with a telepathy that had been rare in recent years. If you want something sophisticated and deeply musical, this is your show.",
    listenFor:
      "Eyes of the World is the highlight — 20+ minutes of the band and Branford locked in a musical conversation that feels like pure telepathy. Dark Star is rare for 1990 and absolutely dripping with texture. Jerry's tone all night is crystalline. You'll hear the moment Branford enters — the band's energy shifts like someone opened a window.",
    context:
      "By 1990, the Dead were deep into their late period — huge crowds, uneven nights, Jerry's health declining. Then Branford Marsalis showed up. Mickey Hart had invited him, and the band responded by playing like it was 1974. This was the only Dark Star played all year. This show converted more new Deadheads than almost any other late-era recording.",
    funFact: "Branford later said he'd never played with a band that listened like the Dead. High praise from a jazz legend.",
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
    headline: "The Dead rise from the ashes. Dark Star returns after four years of silence.",
    whyThisShow:
      "This is the comeback show. After years of decline and Jerry's near-death from a diabetic coma, the Dead walked onstage at Hampton and played like their lives depended on it — because in a way, they did. When Dark Star appeared in the setlist for the first time in four years, the crowd lost their minds. This is triumph in its purest form.",
    listenFor:
      "The opening Help > Slip > Frank is a statement — 'we're back.' But the real moment is when the first notes of Dark Star emerge from the Space jam. The crowd reaction is thunderous. Listen for the Attics of My Life that follows — incredibly rare and heartbreakingly beautiful. The whole second set is the Dead reclaiming their legacy.",
    context:
      "In 1986, Jerry Garcia fell into a diabetic coma and nearly died. The band regrouped, but by 1989 the magic had been inconsistent. Then came Hampton. The setlist reads like a greatest hits of deep cuts — songs they hadn't played in years, pulled out with fire and purpose. Deadheads call this 'Formerly the Warlocks' because the shows were advertised under that name to keep the venue intimate.",
    funFact: "The shows were billed as 'Formerly the Warlocks' — the band's original name — to keep the crowd size manageable. It didn't work.",
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
    headline: "New Year's Eve '78 — the last waltz at Winterland, and the Dead threw everything they had at it.",
    whyThisShow:
      "This is the ultimate party show. The closing of Winterland — Bill Graham's legendary venue — and the Dead played for over four hours, through midnight, until breakfast was served at dawn. If you want a show that captures the energy and communal joy of being at a Dead concert, this is the one.",
    listenFor:
      "The Dark Star > Other One > Wharf Rat > St. Stephen sequence in the third set is a journey — nearly an hour of the band at their most exploratory. But honestly, the whole night builds. Scarlet > Fire early on is fiery, Casey Jones gets the place rocking, and by the time midnight hits, the energy is electric. The sound quality is impeccable — this was professionally filmed and recorded.",
    context:
      "Winterland was the Dead's home venue — they'd played there dozens of times. When Bill Graham announced its closing, the Dead were the obvious choice for the final show. Graham went all out: Breakfast was served at dawn (Blues Brothers and the New Riders opened). The show was broadcast live on FM radio and later released as a concert film.",
    funFact: "Bill Graham descended from the rafters on a giant joint at midnight. The Blues Brothers opened. Breakfast burritos were served at dawn.",
  },

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
    headline: "The last show. You can hear the ending in every note.",
    whyThisShow:
      "This isn't the best Dead show. It might be the most important. Jerry Garcia's final performance — a month before his death — is haunted by a weight that's impossible to ignore once you know what comes next. So Many Roads, with Jerry visibly emotional, is one of the most devastating moments in live music. This is a show about endings, and it's unforgettable.",
    listenFor:
      "So Many Roads is the moment. Jerry breaks down during the performance — his voice cracking, the lyrics suddenly prophetic. Box of Rain closes the show, Phil Lesh singing a song about mortality that neither he nor anyone else knew would be the last song the Grateful Dead ever played. Black Muddy River in the encore is Jerry at his most raw. Listen with the context. It changes everything.",
    context:
      "By July 1995, Jerry Garcia was in poor health — overweight, struggling with addiction, his playing uneven. The band's final tour was a mix of brilliant moments and painful ones. Soldier Field was the last of three Chicago shows. One month later, on August 9, 1995, Jerry died in his sleep at a rehab facility. He was 53.",
    funFact: "The final song the Grateful Dead ever played was Box of Rain — a Phil Lesh song about his dying father. Nobody planned it that way.",
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
    headline: "The night after Cornell — and some Deadheads think this one's even better.",
    whyThisShow:
      "If Cornell is the show everyone knows, Buffalo is the insider's pick. Help > Slip > Frank opens with one of the greatest three-song sequences in Dead history. The whole show has an easy confidence — the band knows they're on fire and they're enjoying it. Less pressure than Cornell, more swagger. A perfect road trip show.",
    listenFor:
      "Help on the Way > Slipknot! > Franklin's Tower is the centerpiece — three songs that flow into each other like movements of a symphony, building from intricate to explosive to joyful. Eyes of the World in the second set is liquid gold. Stella Blue is heartbreak in slow motion. And Uncle John's Band to close is pure communal warmth.",
    context:
      "This is the night after Cornell, same May '77 Northeast tour. The band was deep in one of the greatest runs in rock history — every show that month is worth hearing. Buffalo often gets overlooked because of Cornell's legend, but it might be the more adventurous show of the two.",
    funFact: "May 1977 produced so many classic shows that Deadheads simply call it 'the run.' Every night was magic.",
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
    headline: "The Dark Star that became the textbook definition of psychedelic rock.",
    whyThisShow:
      "This is the primal template. The Live/Dead album — the record that taught the world what a Dead show sounded like — was largely built from the February and March 1969 Fillmore West run, and this night is the core of it. Long Dark Star, St. Stephen rising out of the mist, Lovelight lasting forever. Not easy listening. Essential listening.",
    listenFor:
      "The 23-minute Dark Star is the centerpiece — Jerry's guitar tone liquid, Phil playing melody lines beneath it all, the band moving as one organism. St. Stephen > The Eleven is a rush of psychedelic rock that paved the way for everything from Phish to post-rock. Pigpen's Lovelight turns the whole place into a revival.",
    context:
      "Early 1969 was the Dead at their most exploratory — still playing ballrooms, not yet rock stars, pushing the boundaries of what a rock band could be. Warner Bros finally agreed to release a live record because no studio album had captured what the band actually did. The resulting Live/Dead became one of the first true live albums — a single performance, presented whole.",
    funFact: "Live/Dead essentially invented the modern live album. Before it, live records were usually compilations. The Dead said: no, this is what we do — one night, start to finish.",
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
    headline: "Three shows in one night — acoustic, New Riders, and a Dark Star for the ages.",
    whyThisShow:
      "This is the most complete portrait of the 1970 Dead you can find. An acoustic set, then a New Riders of the Purple Sage set (with Jerry on pedal steel), then an electric set with a 25-minute Dark Star. A college gym became a church that night. Released officially as Dick's Picks 8 — one of the most beloved archival releases in the Dead's catalog.",
    listenFor:
      "The acoustic set opens with Don't Ease Me In and Candyman — this was the era of Workingman's Dead and American Beauty, when the band had rediscovered country and folk. Then the electric set unleashes Dark Star → St. Stephen → Not Fade Away → Mason's Children — one of the most dizzying sequences they ever played. Uncle John's Band was brand new in 1970 and sounds freshly minted.",
    context:
      "Spring 1970 was a transitional peak. Workingman's Dead would come out in June, American Beauty in November. The band was honoring its folk roots and its rock future simultaneously, playing acoustic and electric sets on the same night. Harpur captured both halves in a single performance.",
    funFact: "Jerry Garcia literally played three different sets that night — acoustic Dead, pedal steel with the New Riders, and electric Dead. One guitarist, three bands, one evening.",
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
    headline: "Europe '72 opens — the first night of the legendary tour.",
    whyThisShow:
      "The Dead landed in England, set up at Wembley, and unleashed the first night of the most documented tour in rock history. Fresh, confident, the band in peak form with Keith Godchaux newly installed on piano and Pigpen still in the lineup. If the Lyceum show is the victory lap, this one is the starting gun.",
    listenFor:
      "China Cat Sunflower > I Know You Rider is perfect pop-songwriting Dead — the harmonies lock, the energy bounces. Playing in the Band is loose and exploratory. Pigpen's Good Lovin' is one of his last great vocal turns. Tennessee Jed, Jack Straw, Sugaree — the Workingman's/Beauty-era country-rock Dead at full strength.",
    context:
      "The Europe '72 tour was the Dead's international statement — 22 dates across England, France, Germany, Denmark, and the Netherlands. They brought families, crew, a mobile recording unit, and recorded every show. The resulting triple album became the Dead's best-selling record and converted a generation of European fans. Wembley was the opening salvo.",
    funFact: "The Dead brought an entourage of roughly 40 people to Europe. The tour lost money but produced immortal music.",
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
    headline: "The Dead and the Allman Brothers, together on one stage, for hours.",
    whyThisShow:
      "This is what happens when two of the greatest jam bands in history share a stage. Both bands played full sets, then played together — Jerry, Bob, Dickey Betts, Butch Trucks all locked in. Outdoor, massive, sprawling, joyful. If you want to understand what 1973 actually felt like at the peak of the jam-band era, this is the show.",
    listenFor:
      "The encore sequence is where the bands combine — Not Fade Away → Goin' Down the Road Feeling Bad with the Allmans all over it, guitars trading lines, the groove doubled. The main Dead set has a gorgeous Eyes of the World (still brand new), a mellow Row Jimmy, and a Truckin' that rolls for days.",
    context:
      "1973 was peak Keith-era Dead — jazzy, spacious, Jerry's playing never more lyrical. They were big enough to headline stadiums but had lost none of their adventurousness. The Allman Brothers co-headline was the Dead's first major shared tour with another act. Duane Allman had died in '71; his band was still mourning. You can hear the musicians supporting each other.",
    funFact: "This was the largest crowd the Dead had ever played for to date. Seven weeks later, Watkins Glen would be ten times bigger.",
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
    headline: "Peak Brent-era — when the mid-'80s Dead could still hit the ceiling.",
    whyThisShow:
      "If you want one show that proves the 1985 Dead could still be great, this is it. Riverbend Music Center in Cincinnati, midsummer, band relaxed and firing on all cylinders. Brent is everywhere — piano, organ, vocals. Jerry's tone is warm. The second-set jam sequence is some of the most transcendent playing they did that decade.",
    listenFor:
      "Help on the Way > Slipknot! > Franklin's Tower in the second set is a reminder of why this three-song sequence is a holy text for Deadheads. Eyes of the World is extended and jazzy. The Wheel > Gimme Some Lovin' is Brent in full gospel mode. Wharf Rat closes the main set with weight. This show has an unhurried, summer-evening quality.",
    context:
      "1985 was the Dead's 20th anniversary year. They were playing arenas and amphitheaters, Jerry was still mostly healthy, Brent had fully integrated. Summer tour had an easy confidence. Two years later, Touch of Grey and In the Dark would turn them into household names. This show catches the band still in its pre-megastar moment, comfortable and playing for themselves.",
    funFact: "In the Dark, the 1987 album that produced Touch of Grey, was recorded live on stage at the Marin Civic with no audience — the band wanted the live feel. It worked: the only Dead album to go platinum.",
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
    headline: "Branford Marsalis, again — the late-era Dark Star they weren't supposed to have.",
    whyThisShow:
      "The other Branford show. The 3/29/90 Nassau performance gets the headlines, but this one — MSG, September '91, Branford back on saxophone — might be the deeper, stranger, more jazz-informed take. The Dark Star here is searching, textural, conversational. The band and Branford dance around each other for a long time. Required listening if you loved Nassau.",
    listenFor:
      "Dark Star is the whole thing — patient, abstract, real chamber jazz. Branford on soprano sax is gorgeous. Eyes of the World has a delicacy that's rare in late-era Dead. The whole second set flows like a suite, songs bleeding into each other without hard cuts. The band was listening.",
    context:
      "Mickey Hart had brought Branford Marsalis into the Dead's orbit — they'd met on a cultural exchange, and Branford was a fan. He sat in with the Dead only a handful of times; this was one of the deepest. The band was exhausted and Jerry's playing was uneven by fall '91, but nights like this proved the ceiling was still there.",
    funFact: "Branford Marsalis's brother Wynton became the face of mainstream jazz. Branford was always the more adventurous Marsalis — which is why the Dead connection made sense.",
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
];

/** Lookup helper */
export function findConciergeShow(id: string): ConciergeShow | undefined {
  return CATALOG.find((s) => s.id === id);
}
