# Deadhead — Grateful Dead mood-to-show research dataset

## Scope

- Total shows in structured catalog: **179**
- Mood buckets in summary mapping: **9**
- Era buckets: **10**
- Song mood rows: **30**

## Method notes

- The show catalog intentionally blends consensus picks and sleeper picks.
- Audio quality is a practical listener-facing estimate, not a forensic tape-source assessment.
- Venue names are included where confidently established in this pass; some fields may still merit verification against Deadbase/Jerrybase for production use.
- Mood tags reflect community language patterns more than musicological taxonomy.
- Some song top-version dates extend beyond the show table because the song table is broader than the consensus-show shortlist.

- Limitation: Archive.org review pages were harder to extract directly in this pass than Reddit/dead.net/search-visible pages, so some archive-driven show reputations are represented indirectly via community discussion and show-reference pages.
- Limitation: This is a research foundation, not a finished recommendation engine. For app use, add weighting, embeddings, and a confidence score per mood/show link.

## High-level patterns

- The broadest cross-source consensus cluster centers on **Veneta 1972-08-27**, **Cornell 1977-05-08**, **Harpur 1970-05-02**, **Buffalo 1977-05-09**, **Swing 1977-02-26**, **Red Rocks 1978-07-08**, and **Nassau 1990-03-29**.
- For **newcomers**, the community heavily prefers polished, melodic, low-friction shows—especially Spring 1977, Europe ’72, and Spring 1990.
- For **deep heads**, recommendation patterns tilt toward primal 1969, late 1973 / 1974, 1983–1984 volatility, and post-Brent emotional outliers like 1990-09-19 and 1990-09-20.
- The **1976** fan case is very consistent: mellow groove, intricate pocket, beautiful pacing, strong for anxiety-relief or study listening.
- The **1980s conversion** logic is also consistent: use 1980 Nassau, 1983-10-14, 1984-07-13, 1987-09-18, and Spring 1990 rather than throwing skeptical listeners into random mid-80s tapes.
- Song-level emotional anchors recur with surprising stability: **Brokedown Palace**, **Box of Rain**, **Bird Song**, **Wharf Rat**, **Stella Blue**, **Touch of Grey**, **Scarlet > Fire**, **Eyes**, and **Dark Star**.

## Summary table 1 — Mood to show mapping

| mood | rank | date | venue | why |
| --- | --- | --- | --- | --- |
| stressed / anxious / need to come down | 1 | 1976-06-09 | Boston Music Hall, Boston, MA | 1976 devotees describe the year as a unique mellow groove; this show is a patient, beautiful, low-friction entry. |
| stressed / anxious / need to come down | 2 | 1976-06-14 | Beacon Theatre, New York, NY | Another June '76 touchstone: spacious, intricate, and calming without turning sleepy. |
| stressed / anxious / need to come down | 3 | 1973-03-21 | Utica Memorial Auditorium, Utica, NY | A 'beautiful Dead' favorite with lyrical, artful Jerry lines and very little abrasion. |
| stressed / anxious / need to come down | 4 | 1973-02-09 | Roscoe Maples Pavilion, Stanford University, Palo Alto, CA | Bright, melodic, and uplifting rather than overwhelming. |
| stressed / anxious / need to come down | 5 | 1972-05-26 | Lyceum Theatre, London, England | Europe ’72 polish plus a very palatable, melodic set shape. |
| euphoric / celebrating / pure joy | 1 | 1972-08-27 | Old Renaissance Faire Grounds, Veneta, OR | The most common all-in bliss answer: sunny, expansive, ecstatic. |
| euphoric / celebrating / pure joy | 2 | 1977-05-08 | Barton Hall, Cornell University, Ithaca, NY | The canonical joyful/polished pick. |
| euphoric / celebrating / pure joy | 3 | 1990-03-29 | Nassau Coliseum, Uniondale, NY | Late-era uplift with Branford lifting the whole room. |
| euphoric / celebrating / pure joy | 4 | 1978-07-08 | Red Rocks Amphitheatre, Morrison, CO | For celebration with more muscle and velocity. |
| euphoric / celebrating / pure joy | 5 | 1987-09-18 | Madison Square Garden, New York, NY | Triumphant comeback energy. |
| melancholy / breakup / loss | 1 | 1970-05-02 | Harpur College, SUNY Binghamton, Binghamton, NY | Warm, bittersweet, and emotionally wide enough to hold grief. |
| melancholy / breakup / loss | 2 | 1977-05-19 | Fox Theatre, Atlanta, GA | A tender May ’77 date associated with emotional payoff and song-level catharsis. |
| melancholy / breakup / loss | 3 | 1990-09-20 | Madison Square Garden, New York, NY | Beautiful, grieving, luminous late-era Dead. |
| melancholy / breakup / loss | 4 | 1973-03-21 | Utica Memorial Auditorium, Utica, NY | Reflective and lyrical rather than crushing. |
| melancholy / breakup / loss | 5 | 1990-09-19 | Madison Square Garden, New York, NY | For when the listener actually wants to sit inside the darkness. |
| restless / need motion / road trip | 1 | 1978-07-08 | Red Rocks Amphitheatre, Morrison, CO | High-altitude, high-energy release. |
| restless / need motion / road trip | 2 | 1972-09-09 | Hollywood Palladium, Hollywood, CA | Kinetic, melodic, and driving. |
| restless / need motion / road trip | 3 | 1977-05-26 | Baltimore Civic Center, Baltimore, MD | Road-trip thread favorite with hidden-gem status. |
| restless / need motion / road trip | 4 | 1977-04-23 | Springfield Civic Center, Springfield, MA | Spring ’77 engine with direct forward motion. |
| restless / need motion / road trip | 5 | 1981-03-09 | Madison Square Garden, New York, NY | Punchy city-night early-'80s energy. |
| contemplative / meditative / spiritual | 1 | 1973-11-17 | Pauley Pavilion, UCLA, Los Angeles, CA | A full spiritual journey show with long-form architecture. |
| contemplative / meditative / spiritual | 2 | 1974-09-11 | Alexandra Palace, London, England | Eerie, beautiful, and advanced—great for deep, inward listening. |
| contemplative / meditative / spiritual | 3 | 1990-03-29 | Nassau Coliseum, Uniondale, NY | Spiritual but accessible; Branford helps widen the horizon. |
| contemplative / meditative / spiritual | 4 | 1972-08-27 | Old Renaissance Faire Grounds, Veneta, OR | Transcendent without losing warmth. |
| contemplative / meditative / spiritual | 5 | 1974-06-28 | Boston Garden, Boston, MA | Elegant, patient Wall-of-Sound immersion. |
| dark / heavy / raw aggression | 1 | 1970-02-13 | Fillmore East, New York, NY | Primal, serious, and exploratory. |
| dark / heavy / raw aggression | 2 | 1969-03-01 | Fillmore West, San Francisco, CA | Primal acid-rock intensity. |
| dark / heavy / raw aggression | 3 | 1984-07-13 | Greek Theatre, Berkeley, CA | Rare, dangerous-feeling mid-'80s peak. |
| dark / heavy / raw aggression | 4 | 1984-10-12 | Augusta Civic Center, Augusta, ME | Volatile and widely cited as one of the decade's fiercest nights. |
| dark / heavy / raw aggression | 5 | 1990-09-19 | Madison Square Garden, New York, NY | Emotionally dark rather than merely loud. |
| newcomer / first serious Dead show | 1 | 1977-05-08 | Barton Hall, Cornell University, Ithaca, NY | The most universal gateway. |
| newcomer / first serious Dead show | 2 | 1972-08-27 | Old Renaissance Faire Grounds, Veneta, OR | If the newcomer likes psychedelia and sunshine. |
| newcomer / first serious Dead show | 3 | 1972-05-26 | Lyceum Theatre, London, England | If they want melody and low-dissonance flow. |
| newcomer / first serious Dead show | 4 | 1990-03-29 | Nassau Coliseum, Uniondale, NY | If they want clean, modern sound and uplift. |
| newcomer / first serious Dead show | 5 | 1977-05-09 | Buffalo Memorial Auditorium, Buffalo, NY | If they want Cornell's universe with a little more expert-chosen edge. |
| deep-head / sleeper / underrated | 1 | 1973-11-30 | Boston Music Hall, Boston, MA | A cosmic road-trip sleeper that comes up with real passion. |
| deep-head / sleeper / underrated | 2 | 1976-10-09 | Oakland-Alameda County Coliseum Stadium, Oakland, CA | Underrated-show thread favorite. |
| deep-head / sleeper / underrated | 3 | 1984-07-13 | Greek Theatre, Berkeley, CA | 1984 believers treat it like buried treasure, even if online heads know it now. |
| deep-head / sleeper / underrated | 4 | 1989-04-16 | Mecca Auditorium, Milwaukee, WI | A dark-horse 1989 favorite with killer energy. |
| deep-head / sleeper / underrated | 5 | 1989-10-16 | Meadowlands Arena, East Rutherford, NJ | Composite-ranking sleeper / expert-loved late-'89 date. |
| work / study / background vibes | 1 | 1976-06-09 | Boston Music Hall, Boston, MA | Beautiful, patient, unobtrusive but never bland. |
| work / study / background vibes | 2 | 1974-06-28 | Boston Garden, Boston, MA | Flow-state Wall-of-Sound jazziness. |
| work / study / background vibes | 3 | 1974-06-18 | Freedom Hall, Louisville, KY | Good long-form concentration music. |
| work / study / background vibes | 4 | 1973-03-21 | Utica Memorial Auditorium, Utica, NY | Lyrical and low-friction. |
| work / study / background vibes | 5 | 1980-05-16 | Nassau Coliseum, Uniondale, NY | Song-forward rather than aggressively jammy. |

## Summary table 2 — Era summary

| era | general_vibe | top_show_rank | date | venue |
| --- | --- | --- | --- | --- |
| Early psychedelic (1966–1969) | Primal, feral, psychedelic, and risky; the band sounds like it is inventing the rules in real time. | 1 | 1969-03-01 | Fillmore West, San Francisco, CA |
| Early psychedelic (1966–1969) | Primal, feral, psychedelic, and risky; the band sounds like it is inventing the rules in real time. | 2 | 1969-02-27 | Fillmore West, San Francisco, CA |
| Early psychedelic (1966–1969) | Primal, feral, psychedelic, and risky; the band sounds like it is inventing the rules in real time. | 3 | 1968-08-24 | Shrine Auditorium, Los Angeles, CA |
| Workingman’s / acoustic (1970–1971) | Warm, rootsy, human-scale Dead with acoustic sets, country flavor, and big emotional pivots. | 1 | 1970-05-02 | Harpur College, SUNY Binghamton, Binghamton, NY |
| Workingman’s / acoustic (1970–1971) | Warm, rootsy, human-scale Dead with acoustic sets, country flavor, and big emotional pivots. | 2 | 1971-02-18 | Capitol Theatre, Port Chester, NY |
| Workingman’s / acoustic (1970–1971) | Warm, rootsy, human-scale Dead with acoustic sets, country flavor, and big emotional pivots. | 3 | 1971-08-06 | Hollywood Palladium, Hollywood, CA |
| Europe ’72 / jazz explorations (1972–1974) | Open, lyrical, jazzy, and expansive; this is the best era for feeling carried along by long-form flow. | 1 | 1972-08-27 | Old Renaissance Faire Grounds, Veneta, OR |
| Europe ’72 / jazz explorations (1972–1974) | Open, lyrical, jazzy, and expansive; this is the best era for feeling carried along by long-form flow. | 2 | 1973-11-17 | Pauley Pavilion, UCLA, Los Angeles, CA |
| Europe ’72 / jazz explorations (1972–1974) | Open, lyrical, jazzy, and expansive; this is the best era for feeling carried along by long-form flow. | 3 | 1974-06-28 | Boston Garden, Boston, MA |
| Hiatus and comeback (1975–1976) | Spacious, intricate, relaxed, and beautiful; lower ego, more pocket, lots of grace. | 1 | 1975-08-13 | Great American Music Hall, San Francisco, CA |
| Hiatus and comeback (1975–1976) | Spacious, intricate, relaxed, and beautiful; lower ego, more pocket, lots of grace. | 2 | 1976-06-14 | Beacon Theatre, New York, NY |
| Hiatus and comeback (1975–1976) | Spacious, intricate, relaxed, and beautiful; lower ego, more pocket, lots of grace. | 3 | 1976-06-09 | Boston Music Hall, Boston, MA |
| ’77 polished peak | Tight, joyful, highly melodic, and crowd-pleasing without losing improvisational shape. | 1 | 1977-05-08 | Barton Hall, Cornell University, Ithaca, NY |
| ’77 polished peak | Tight, joyful, highly melodic, and crowd-pleasing without losing improvisational shape. | 2 | 1977-05-09 | Buffalo Memorial Auditorium, Buffalo, NY |
| ’77 polished peak | Tight, joyful, highly melodic, and crowd-pleasing without losing improvisational shape. | 3 | 1977-02-26 | Swing Auditorium, San Bernardino, CA |
| Disco Dead / Shakedown era (1978–1979) | Athletic, dancey, dramatic, and electric; more attack, more funk, more forward motion. | 1 | 1978-07-08 | Red Rocks Amphitheatre, Morrison, CO |
| Disco Dead / Shakedown era (1978–1979) | Athletic, dancey, dramatic, and electric; more attack, more funk, more forward motion. | 2 | 1979-10-27 | Cape Cod Coliseum, South Yarmouth, MA |
| Disco Dead / Shakedown era (1978–1979) | Athletic, dancey, dramatic, and electric; more attack, more funk, more forward motion. | 3 | 1979-11-24 | Golden Hall, San Diego, CA |
| Early ’80s (1980–1983) | Punchy, urgent, and alive; less polished than the '70s but often more immediate. | 1 | 1983-10-14 | Hartford Civic Center, Hartford, CT |
| Early ’80s (1980–1983) | Punchy, urgent, and alive; less polished than the '70s but often more immediate. | 2 | 1983-10-21 | Worcester Centrum, Worcester, MA |
| Early ’80s (1980–1983) | Punchy, urgent, and alive; less polished than the '70s but often more immediate. | 3 | 1982-10-10 | Frost Amphitheatre, Stanford University, Palo Alto, CA |
| Mid ’80s (1984–1987) | Fierce, volatile, and high-wire; when it works it feels dangerous and cathartic. | 1 | 1984-07-13 | Greek Theatre, Berkeley, CA |
| Mid ’80s (1984–1987) | Fierce, volatile, and high-wire; when it works it feels dangerous and cathartic. | 2 | 1984-10-12 | Augusta Civic Center, Augusta, ME |
| Mid ’80s (1984–1987) | Fierce, volatile, and high-wire; when it works it feels dangerous and cathartic. | 3 | 1987-03-27 | Hartford Civic Center, Hartford, CT |
| Late ’80s revival / Brent era (1988–1990) | Big-hearted, confident, arena-sized, and emotionally clear; one of the easiest eras to love on tape. | 1 | 1990-03-29 | Nassau Coliseum, Uniondale, NY |
| Late ’80s revival / Brent era (1988–1990) | Big-hearted, confident, arena-sized, and emotionally clear; one of the easiest eras to love on tape. | 2 | 1989-10-09 | Hampton Coliseum, Hampton, VA |
| Late ’80s revival / Brent era (1988–1990) | Big-hearted, confident, arena-sized, and emotionally clear; one of the easiest eras to love on tape. | 3 | 1989-07-07 | JFK Stadium, Philadelphia, PA |
| Final years (1991–1995) | Bittersweet, textured, and more reflective; rewards listeners who want pathos and late-style nuance. | 1 | 1991-09-10 | Madison Square Garden, New York, NY |
| Final years (1991–1995) | Bittersweet, textured, and more reflective; rewards listeners who want pathos and late-style nuance. | 2 | 1991-06-17 | Giants Stadium, East Rutherford, NJ |
| Final years (1991–1995) | Bittersweet, textured, and more reflective; rewards listeners who want pathos and late-style nuance. | 3 | 1990-09-20 | Madison Square Garden, New York, NY |

## Summary table 3 — Song mood table

| song | moods | top_versions | notes |
| --- | --- | --- | --- |
| Dark Star | cosmic; spiritual; exploratory; deep | 1972-04-08; 1972-05-11; 1973-12-06; 1978-12-31; 1989-10-26 | The default 'something bigger than me' song; fans debate versions endlessly, but these dates recur in version talk. |
| Eyes of the World | open; hopeful; flow-state; uplifting | 1973-11-11; 1974-06-20; 1974-08-06; 1977-06-08; 1990-03-29 | Often the easiest way to make a recommendation feel both spiritual and buoyant. |
| Help on the Way > Slipknot! > Franklin's Tower | renewal; lift; spiritual; joyful | 1976-06-14; 1977-02-26; 1977-05-09 | A core 'things are opening up' sequence. |
| Scarlet Begonias > Fire on the Mountain | euphoric; dancey; blissful; expansive | 1977-05-08; 1977-05-17; 1983-10-14 | The app's go-to for ecstatic release. |
| Morning Dew | cathartic; apocalyptic; cleansing; triumphant | 1977-05-08; 1977-04-27 | Perfect for users who need emotional release, not just comfort. |
| Bird Song | healing; reflective; spiritual; gentle | 1972-08-27; 1973-06-22; 1984-07-15 | Frequently named in hard-times and spiritual threads. |
| Brokedown Palace | grief; acceptance; comfort; homecoming | 1971-12-07 | Breakup/healing consensus leans very hard in this direction. |
| Box of Rain | comfort; resilience; tenderness | 1972-09-24; 1990-03-29 | Shows up repeatedly in 'songs that help you through hard times' conversations. |
| Black Muddy River | perseverance; solitude; resolve | 1989-07-07; 1990-09-20 | Often framed as a keep-going song. |
| Row Jimmy | tender; wistful; heartbroken; drifting | 1977-05-08; 1989-07-04; 1990-07-19 | A prime breakup / soft-sad recommendation. |
| Wharf Rat | redemption; weariness; grace | 1971-02-18; 1974-09-11 | Good for users who need sorrow plus a flicker of mercy. |
| Stella Blue | late-night; mourning; beautiful sadness | 1976-06-15; 1976-07-18 | For when the user wants dignity inside sadness. |
| Comes a Time | heart-open; consoling; soulful | 1971-12-04; 1977-05-19 | Another elite breakup / healing vector. |
| Black Peter | mortality; acceptance; stillness | 1972-09-21; 1978-04-14 | Useful for heavy moods where the app should not force false cheer. |
| China Cat Sunflower > I Know You Rider | joyful; kinetic; traveling; sunny | 1972-09-09; 1973-11-14 | One of the easiest ways to recommend motion and joy together. |
| Jack Straw | cinematic; driving; restless | 1979-01-11; 1981-03-09 | Ideal for road-trip and restless moods. |
| Playing in the Band | restless; psychedelic; open-ended | 1972-11-18; 1976-06-22; 1977-02-26 | A great 'I need to get out of my head by going deeper into it' song. |
| The Other One | primal; dark; explosive | 1971-02-20; 1973-02-28; 1979-12-26 | For users who want force, not comfort. |
| Shakedown Street | funky; dancey; cool; night-drive | 1982-04-05; 1978-11-24; 1979-10-27 | The easiest Dead lane for users wanting groove first. |
| Dancin' in the Street | party; motion; release | 1976-06-09; 1978-10-20 | Good for pure dance and house-party moods. |
| Terrapin Station | mythic; spiritual; questing | 1977-05-22; 1987-09-18; 1991-06-11 | Works when a recommendation should feel like a pilgrimage. |
| Sugaree | sultry; patient; burning | 1977-05-19; 1983-10-17 | Excellent for sensual or smoldering moods. |
| Althea | wistful; soulful; night-drive | 1980-05-16 | A strong bridge song for listeners who don't yet love the weirder side. |
| The Wheel | hopeful; redemptive; circular | 1980-11-30; 1990-03-29 | Great for 'I need things to move forward again' recommendations. |
| Uncle John's Band | communal; warm; hopeful | 1974-08-06; 1979-12-26 | Use when the user wants belonging. |
| He's Gone | grief; release; communal mourning | 1973-11-17; 1990-09-19 | Particularly useful in loss-aware recommendation logic. |
| Greatest Story Ever Told | amped; rowdy; sunny | 1972-08-27 | Very good for quick-energy recommendations. |
| Hard to Handle | swagger; bar-band fire; raw | 1971-08-06 | For confident, chest-out moods. |
| Looks Like Rain | yearning; stormy; romantic sadness | 1972-07-16 | A precise fit for rainy, lonely, reflective moods. |
| Touch of Grey | recovery; resilience; comeback | 1987-03-27; 1985-11-10 | The most literal resilience song in the dataset. |

## Show catalog

### 1966-07-03 — Fillmore Auditorium, San Francisco, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, curious
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair (historically essential, but source quality is more variable and often rougher)
- **Key moments:** very early ballroom Dead, garage-psych roots
- **Community consensus:** Historically important more than universally replayed; useful as a baseline for where the story starts.
- **Best for someone feeling:** curious, historical listening
- **Recommendation patterns:** Recommended when someone wants the embryonic form of the band.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1967-11-10 — Shrine Exhibition Hall, Los Angeles, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, wild
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair (historically essential, but source quality is more variable and often rougher)
- **Key moments:** 1967 acid-ballroom energy, suite-era momentum
- **Community consensus:** A major early favorite in fan voting—primal, fast, and very much of its scene.
- **Best for someone feeling:** chaotic, primal, vintage psychedelia
- **Recommendation patterns:** Comes up in year-by-year and primal-era polls.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1968-08-24 — Shrine Auditorium, Los Angeles, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, wild
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair (historically essential, but source quality is more variable and often rougher)
- **Key moments:** 'Alligator > Caution' territory, primal improvisation, 1968 volatility
- **Community consensus:** An early-era favorite for listeners who want the Dead still halfway to the garage and halfway to outer space.
- **Best for someone feeling:** chaotic, wild, seeking something feral
- **Recommendation patterns:** Shows up in primal-Dead recommendation lists.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1968-10-20 — Greek Theatre, Berkeley, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, raw
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair (historically essential, but source quality is more variable and often rougher)
- **Key moments:** outdoor primal energy, 1968 attack
- **Community consensus:** A strong 1968 touchstone for listeners wanting a less studio-shaped, more live-wired Dead.
- **Best for someone feeling:** raw, outdoor psych
- **Recommendation patterns:** Year-poll favorite rather than universal starter pick.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1969-02-22 — Dream Bowl, Vallejo, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, high-energy
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair (historically essential, but source quality is more variable and often rougher)
- **Key moments:** primal sequence flow, winter '69 velocity
- **Community consensus:** A cherished early-1969 date that serious fans use to expand the picture beyond Fillmore West.
- **Best for someone feeling:** feral, wired, seeking early magic
- **Recommendation patterns:** Deep-head primal recommendation.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1969-02-27 — Fillmore West, San Francisco, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, high-energy
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair (historically essential, but source quality is more variable and often rougher)
- **Key moments:** Fillmore West primal peak, high-speed suite logic
- **Community consensus:** Another essential 1969 document: raw, fast, and massively alive.
- **Best for someone feeling:** wired, psychedelic, needing fire
- **Recommendation patterns:** Usually paired with 2/28 and 3/1 when people recommend the Fillmore West run.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1969-03-01 — Fillmore West, San Francisco, CA
- **Era:** Early psychedelic (1966–1969)
- **Mood tags:** psychedelic, primal, chaotic, cosmic, fierce, exploratory, raw, high-energy
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'The Eleven', 'Dark Star' era primality, Fillmore West peak
- **Community consensus:** One of the canonical primal-Dead nights: less about polish, more about danger, velocity, and psychedelic logic.
- **Best for someone feeling:** raw, wired, seeking primal acid-rock energy
- **Recommendation patterns:** Often the answer when someone asks for 1969 at full burn.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.dead.net/comment/2260?page=0%2C3

### 1970-02-13 — Fillmore East, New York, NY
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow, dark, intense
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** legendary 'Dark Star' sequence, primal jamming, February 1970 intensity
- **Community consensus:** A deep-head favorite: less polished than 1977, but spiritually heavier and more exploratory.
- **Best for someone feeling:** dark/heavy, wanting raw power, wanting to get weird, deep listening
- **Recommendation patterns:** Usually recommended when someone asks for the most serious or exploratory live Dead.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, composite_top50
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1970-04-15 — Winterland Arena, San Francisco, CA
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** April 1970 mix of roots and jam, transitional warmth
- **Community consensus:** A strong spring-1970 pick for those who like the country-psychedelic hinge period.
- **Best for someone feeling:** warm, Americana, gentle exploration
- **Recommendation patterns:** Suggested alongside Harpur and Alfred when mapping early-1970 vibes.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1970-05-01 — Alfred College, Alfred, NY
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow, curious, exploratory
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** acoustic set, 'Lovelight' contrast, small-college intimacy
- **Community consensus:** An insider favorite for people who love the acoustic/electric contrast of spring 1970.
- **Best for someone feeling:** rootsy, cozy, curious
- **Recommendation patterns:** Paired with Harpur and Fillmore East in acoustic-era recs.
- **Research confidence:** Medium
- **Source keys:** pick_year_70s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/

### 1970-05-02 — Harpur College, SUNY Binghamton, Binghamton, NY
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, bittersweet, exploratory, acoustic, warm, full-journey
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** acoustic first set, rare acoustic 'Dark Star' aura, three-set arc
- **Community consensus:** A quintessential expert pick: beloved for the acoustic set, emotional range, and the sense that you get rootsy Americana and expansive Dead in one night.
- **Best for someone feeling:** heartbroken, nostalgic, wanting warmth, country/folk mood, wanting a full-journey show
- **Recommendation patterns:** Often recommended to people who love the acoustic side or want one show that explains how broad the band could be.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment, pick_year_70s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/

### 1970-05-15 — Fillmore East, New York, NY
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow, melancholy, emotional
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** ethereal 'Dark Star', acoustic set, spring 1970 tenderness
- **Community consensus:** Frequently singled out for a gorgeous, floating 'Dark Star' and for the sweet-spacious tone of this whole period.
- **Best for someone feeling:** melancholy, stressed, wanting something gentle but alive
- **Recommendation patterns:** Often recommended when someone wants beautiful rather than crushing 1970 Dead.
- **Research confidence:** Medium
- **Source keys:** pick_year_70s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/

### 1971-02-18 — Capitol Theatre, Port Chester, NY
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** transitional, emotional, historic, grieving, renewing, rootsy
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** first 'Wharf Rat','Loser','Bertha','Greatest Story','Playing', emotionally huge transitional night
- **Community consensus:** One of the most historically and emotionally important shows the band ever played: a hinge-point night with astonishing song debuts.
- **Best for someone feeling:** change, grief, renewal, wanting a threshold moment
- **Recommendation patterns:** Gets recommended both as history lesson and as a genuinely great show.
- **Research confidence:** High
- **Source keys:** composite_top50, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.dead.net/comment/2260?page=0%2C3

### 1971-02-20 — Capitol Theatre, Port Chester, NY
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow, restless, kinetic
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** all-time 'Other One' candidate, dense Port Chester energy
- **Community consensus:** A heavy-duty 1971 deep-head pick, especially for listeners chasing primal vestiges inside the streamlined 1971 sound.
- **Best for someone feeling:** dark, restless, focused
- **Recommendation patterns:** Often recommended for 'The Other One' obsessives.
- **Research confidence:** Medium
- **Source keys:** heady_search
- **Source URLs:** https://headyversion.com/

### 1971-03-18 — Fox Theatre, St. Louis, MO
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow, restless, kinetic
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (solid circulating sources, with some variation and occasional rough edges)
- **Key moments:** lean 1971 attack, Fox Theatre punch
- **Community consensus:** Often cited as a quintessential 1971 rocker—fast, efficient, and hugely fun.
- **Best for someone feeling:** restless, wanting straight-line rock
- **Recommendation patterns:** A favorite 'if you like concise Dead' recommendation.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1971-08-06 — Hollywood Palladium, Hollywood, CA
- **Era:** Workingman’s / acoustic (1970–1971)
- **Mood tags:** rootsy, warm, bittersweet, earthy, reflective, mellow, driving, open-road
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** legendary 'Hard to Handle', Keith-era brink energy, tight bar-band power
- **Community consensus:** A famous 1971 burner—leaner, faster, and more rock-and-roll than most gateway shows.
- **Best for someone feeling:** wanting swagger, wanting pure rock energy, road trip
- **Recommendation patterns:** A top answer for 'best hard-rocking Dead show' and for anyone who loves the Pigpen/Keith transition.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment, pick_year_70s, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/; https://www.dead.net/comment/2260?page=0%2C3

### 1972-04-08 — Wembley Empire Pool, London, England
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, spiritual
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** all-time 'Dark Star' conversation, Europe '72 elegance
- **Community consensus:** Song-level canon more than whole-show consensus monster, but essential for cosmic-listening playlists.
- **Best for someone feeling:** spiritual, open, needing to drift
- **Recommendation patterns:** Usually cited in Dark Star version wars.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1972-05-03 — Olympia Theatre, Paris, France
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Mr. Charlie' favorite, Europe '72 swagger
- **Community consensus:** Often recommended for song-level excellence and classic Europe '72 balance.
- **Best for someone feeling:** light-hearted, moving, wanting roots + finesse
- **Recommendation patterns:** Useful if your mood map wants song-specific pull.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1972-05-11 — Rotterdam Civic Hall, Rotterdam, Netherlands
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, cosmic
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Dark Star' that 'just shreds', Europe '72 experimentation
- **Community consensus:** Another show elevated by one massive version, especially among Dark Star seekers.
- **Best for someone feeling:** cosmic, adventurous
- **Recommendation patterns:** Deep-head Europe '72 recommendation.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1972-05-13 — Lille Fairgrounds, Lille, France
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** great 'Casey Jones', European-tour confidence
- **Community consensus:** A fertile Europe '72 stop with punchier song-level peaks than some of the spacier nights.
- **Best for someone feeling:** wanting fun, faster pace
- **Recommendation patterns:** Strong for song-specific recommendation logic.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1972-05-26 — Lyceum Theatre, London, England
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, warm, mellow
- **Energy level:** Medium
- **Audience level:** Newcomer
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** Europe '72 culmination, graceful set construction, songbook confidence
- **Community consensus:** A polished, melodic, very human show—easy to love even for non-Deadheads.
- **Best for someone feeling:** warm, sunny, social listening, pub-friendly
- **Recommendation patterns:** Common as a newcomer or public-space recommendation because it is melodic and comparatively low-dissonance.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, pub_show
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1lrj7ic/pub_show_recommendation/

### 1972-07-16 — Roosevelt Stadium, Jersey City, NJ
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, melancholy, emotional
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Looks Like Rain' favorite, summer stadium feel
- **Community consensus:** More often cited for standout versions than as an overall all-timer, but very useful in mood mapping.
- **Best for someone feeling:** yearning, humid-summer melancholy
- **Recommendation patterns:** Song-led recommendation.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1972-08-27 — Old Renaissance Faire Grounds, Veneta, OR
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** blissful, sun-soaked, psychedelic, uplifting, transcendent, spacious
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Bird Song', 'Dark Star', sun-soaked 'Playing in the Band', all-time 'Greatest Story Ever Told'
- **Community consensus:** One of the most universally loved shows: sunny, spacious, psychedelic, and somehow relaxed and ecstatic at once.
- **Best for someone feeling:** euphoric, celebrating, connected, wanting something bigger, wanting an uplifting trip
- **Recommendation patterns:** Comes up constantly for uplifting, blissful, newcomer-safe psychedelic Dead.
- **Research confidence:** High
- **Source keys:** composite_top50, uplifting_show, new_listener_guide, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1c42wa8/whats_the_most_uplifting_show_the_band_ever_played/; https://www.reddit.com/r/gratefuldead/comments/p5ujw7/not_sure_if_im_a_deadhead_but_ive_been_obsessed/; https://www.dead.net/comment/2260?page=0%2C3

### 1972-09-09 — Hollywood Palladium, Hollywood, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, driving, open-road
- **Energy level:** Medium
- **Audience level:** Newcomer
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** all-time 'China Cat > Rider' candidate, driving feel
- **Community consensus:** A go-to if you want movement, melodic jam logic, and one of the most replayed transitions in the catalog.
- **Best for someone feeling:** road trip, wanting to move, sunny focus
- **Recommendation patterns:** Very common in driving and song-version recommendation threads.
- **Research confidence:** High
- **Source keys:** deadnet_best_versions, road_trip_shows
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3; https://www.reddit.com/r/gratefuldead/comments/kofcfr/best_shows_for_a_road_trip/

### 1972-09-10 — Hollywood Palladium, Hollywood, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, playful, light
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Dire Wolf' favorite
- **Community consensus:** Useful mainly as a song-level node in mood mapping rather than a full-show consensus titan.
- **Best for someone feeling:** playful unease, storytelling mood
- **Recommendation patterns:** Song-specific recommendation support.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1972-09-21 — The Spectrum, Philadelphia, PA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, grieving, accepting
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** September '72 elasticity, lyrical first-set singing, jam depth, great 'Black Peter' candidate
- **Community consensus:** Already a strong show; song-level chatter gives it extra usefulness for grief/acceptance moods.
- **Best for someone feeling:** meditative, open-hearted, getting lost in a long walk, mourning, late-night healing
- **Recommendation patterns:** Recommended when someone wants fall '72 but not necessarily Veneta.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.dead.net/comment/2260?page=0%2C3

### 1972-09-24 — Palace Theatre, Waterbury, CT
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, warm, mellow
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** fall '72 songbook richness, warm, graceful flow
- **Community consensus:** Less globally famous than Veneta but strongly loved by fans who live in the details of 1972.
- **Best for someone feeling:** reflective, warm, full-show immersion
- **Recommendation patterns:** Strong 1972-deepening recommendation.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1973-02-09 — Roscoe Maples Pavilion, Stanford University, Palo Alto, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, healing, gentle
- **Energy level:** Medium
- **Audience level:** Newcomer
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** beloved 'Eyes of the World', spectacular 'They Love Each Other' / 'TLEO' discussion
- **Community consensus:** A top answer for 'beautiful' and 'uplifting' Dead—very little harshness, lots of melodic generosity.
- **Best for someone feeling:** uplifting, healing, wanting brightness without frenzy
- **Recommendation patterns:** Recommended when someone wants beauty more than cosmic abstraction.
- **Research confidence:** High
- **Source keys:** uplifting_show, ranking_73
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1c42wa8/whats_the_most_uplifting_show_the_band_ever_played/

### 1973-03-21 — Utica Memorial Auditorium, Utica, NY
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, beautiful, reflective, warm, graceful, flowing
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** artful, lyrical Jerry, favorite 'Here Comes Sunshine' talk
- **Community consensus:** A connoisseur pick for beauty: graceful, vocal-forward, and emotionally warm rather than showy.
- **Best for someone feeling:** contemplative, reflective, soft heartbreak
- **Recommendation patterns:** Beautiful-show thread staple.
- **Research confidence:** Medium
- **Source keys:** beautiful_show
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1n8qm37/looking_for_your_favorite_beautiful_dead_shows/

### 1973-03-24 — The Spectrum, Philadelphia, PA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, immersive
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** all-time 'Dark Star' chatter, March '73 depth
- **Community consensus:** One of the favorite '73 nights for listeners who want long-form exploratory jamming with real emotional contour.
- **Best for someone feeling:** deep listening, psychedelic but controlled
- **Recommendation patterns:** Shows up in 1973 ranking discussions.
- **Research confidence:** Medium
- **Source keys:** pick_year_70s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/

### 1973-03-31 — War Memorial Auditorium, Buffalo, NY
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** March '73 sweep, strong jam suite
- **Community consensus:** A less mainstream but respected 1973 pick that broadens the mood palette beyond the usual few dates.
- **Best for someone feeling:** immersive, focused
- **Recommendation patterns:** 1973-deep-cut recommendation.
- **Research confidence:** Medium
- **Source keys:** favorite_73
- **Source URLs:** 

### 1973-06-10 — RFK Stadium, Washington, DC
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, driving, open-road
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** giant outdoor context, June '73 looseness, Allman Brothers bill aura
- **Community consensus:** A sprawling, summery, generous-feeling outdoor show that fans return to for the atmosphere as much as the playing.
- **Best for someone feeling:** road trip, summer day, wanting something loose and expansive
- **Recommendation patterns:** Comes up whenever people want big-canvas 1973.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1973-06-22 — P.N.E. Coliseum, Vancouver, BC
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, cosmic
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** all-time '73 candidate, major 'Bird Song'/'Dark Star' era love
- **Community consensus:** Often named alongside 11/11 and 11/17 as one of the best 1973 nights, especially for big-arc jamming.
- **Best for someone feeling:** cosmic, seeking peak improv
- **Recommendation patterns:** Common in 'pick a 1973 show' threads.
- **Research confidence:** Medium
- **Source keys:** pick_year_70s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/

### 1973-06-30 — Universal Amphitheatre, Universal City, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, curious
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** under-the-radar '73 excellence
- **Community consensus:** Frequently cited as an under-the-radar 1973 date by people tired of the obvious picks.
- **Best for someone feeling:** curious, wanting a sleeper
- **Recommendation patterns:** Sleeper-show recommendation.
- **Research confidence:** Medium
- **Source keys:** favorite_73
- **Source URLs:** 

### 1973-11-11 — Winterland Arena, San Francisco, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, uplifting, joyful
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** famous 'Eyes of the World' candidate, late-'73 confidence
- **Community consensus:** A benchmark late-'73 show for people who love liquidity, intelligence, and groove.
- **Best for someone feeling:** meditative, uplifted, headphones
- **Recommendation patterns:** Frequently used in definitive-version talk around 'Eyes'.
- **Research confidence:** High
- **Source keys:** pick_year_70s, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/; https://www.dead.net/comment/2260?page=0%2C3

### 1973-11-14 — San Diego Sports Arena, San Diego, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, immersive, detailed
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** famous 'China Cat > Rider' and 'Big River', late-'73 complexity
- **Community consensus:** A classic late-'73 statement show—smart, slippery, and packed with definitive-version talk.
- **Best for someone feeling:** focused, headphones, wanting song-level peaks
- **Recommendation patterns:** Frequently appears in song-nerd and 1973-peak debates.
- **Research confidence:** High
- **Source keys:** trips30, deadnet_best_versions
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.dead.net/comment/2260?page=0%2C3

### 1973-11-17 — Pauley Pavilion, UCLA, Los Angeles, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** deep, immersive, transcendent, complex, full-journey, exploratory
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Here Comes Sunshine','China > Rider','Eyes','Playing > UJB > Dew > UJB > Playing'
- **Community consensus:** One of the most respected 1973 monsters: deep, rich, and loaded with career-highlight performances.
- **Best for someone feeling:** wanting a full spiritual journey, long headphones session
- **Recommendation patterns:** Default advanced-listener 1973 recommendation.
- **Research confidence:** High
- **Source keys:** composite_top50, favorite_73
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1973-11-30 — Boston Music Hall, Boston, MA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, driving, open-road
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Weather Report > Dark Star Jam > Eyes' aura, great show without Donna
- **Community consensus:** A major sleeper/driver’s show in the fan community—spacey, smart, and weirdly under-discussed.
- **Best for someone feeling:** road trip at night, cosmic but flowing
- **Recommendation patterns:** Sleeper-show and driving-show favorite.
- **Research confidence:** High
- **Source keys:** underrated_shows, road_trip_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/wmravf/what_are_some_of_your_favorite_underrated_shows/; https://www.reddit.com/r/gratefuldead/comments/kofcfr/best_shows_for_a_road_trip/

### 1973-12-19 — Curtis Hixon Convention Hall, Tampa, FL
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, late-night, haunting
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** December '73 depth, sinuous pacing, late-'73 emotional intelligence
- **Community consensus:** Late 1973 at its patient, multi-dimensional best—less sunshine than 1972, more mystery.
- **Best for someone feeling:** reflective, late-night, wanting depth
- **Recommendation patterns:** A classic deep-head 1973 answer.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1974-02-24 — Winterland Arena, San Francisco, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, flow-state, background-friendly
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** Wall-of-Sound-era precision, great ranking support
- **Community consensus:** A high-ranking 1974 show in composite lists, valued for its patient sophistication.
- **Best for someone feeling:** working/studying, clean immersion
- **Recommendation patterns:** Strong 1974 anchor in rankings.
- **Research confidence:** Medium
- **Source keys:** composite_top50
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1974-06-18 — Freedom Hall, Louisville, KY
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, flow-state, background-friendly
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 1974 wall-of-sound glide, long-form improvisation, summer '74 brightness
- **Community consensus:** A strong Wall of Sound-era recommendation for people who want clean interplay and patient expansion.
- **Best for someone feeling:** contemplative, working/studying, wanting long-form flow
- **Recommendation patterns:** Often appears in advanced 1974 recommendation lists.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1974-06-20 — Omni, Atlanta, GA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Eyes of the World' favorite
- **Community consensus:** Mostly essential for song-level mood mapping, but still a useful 1974 node.
- **Best for someone feeling:** open, buoyant
- **Recommendation patterns:** Song-specific rec support.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1974-06-26 — Providence Civic Center, Providence, RI
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, immersive, detailed
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** liquid Wall-of-Sound jamming, 1974 rhythmic patience
- **Community consensus:** A serious-listener 1974 pick with a reputation for open improvisation and graceful density.
- **Best for someone feeling:** contemplative, immersive, headphones
- **Recommendation patterns:** Used by 1974 partisans as evidence that June 1974 is stacked.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1974-06-28 — Boston Garden, Boston, MA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, flow-state, background-friendly
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Eyes of the World' / 'Weather Report' aura, Wall-of-Sound sweep
- **Community consensus:** One of the signature June '74 shows: elegant, patient, and large-scale without feeling heavy-handed.
- **Best for someone feeling:** meditative, working/studying, wanting clean jazz-Dead
- **Recommendation patterns:** Frequently cited by 1974 loyalists and in composite all-time lists.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1974-08-06 — Roosevelt Stadium, Jersey City, NJ
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** all-time 'Eyes of the World' talk, best 'UJB' chatter
- **Community consensus:** One of the most useful show entries for song-level recommendation logic—especially if your app wants to recommend by song feel within a show.
- **Best for someone feeling:** open-hearted, flow-state
- **Recommendation patterns:** Version-head recommendation.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1974-09-11 — Alexandra Palace, London, England
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** eerie, cosmic, beautiful, exploratory, haunting, advanced
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** 'Seastones > Eyes > Jam > Wharf Rat', stunning second set
- **Community consensus:** An advanced-listener favorite: eerie, beautiful, and extremely '1974 London' in the best way.
- **Best for someone feeling:** dark contemplative, late-night headphones, cosmic
- **Recommendation patterns:** Often recommended when someone asks for unreleased gems or the strangest beautiful Dead.
- **Research confidence:** High
- **Source keys:** favorite_unreleased, hidden_91990
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1akbymn/favorite_shows_that_have_not_been_released_yet/; https://www.reddit.com/r/gratefuldead/comments/1sanqbn/91990_and_92090_are_just_hiding_in_plain_sight/

### 1974-09-18 — Parc des Expositions, Dijon, France
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, contemplative
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** Europe '74 elegance, liquid final-year interplay
- **Community consensus:** A top fan-voted 1974 pick that feels graceful, cosmopolitan, and gently adventurous.
- **Best for someone feeling:** contemplative, travelling, late-afternoon listening
- **Recommendation patterns:** Recommended to people who love the Europe '72 side but want the more evolved 1974 form.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1974-10-16 — Winterland Arena, San Francisco, CA
- **Era:** Europe ’72 / jazz explorations (1972–1974)
- **Mood tags:** lyrical, open, flowing, exploratory, transcendent, jazzy, bittersweet, emotional
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (often strong boards, though not every circulating source is pristine)
- **Key moments:** farewell-run gravity, October '74 largeness
- **Community consensus:** A strong late-1974 pick, especially for listeners who like end-of-era weight.
- **Best for someone feeling:** bittersweet, majestic
- **Recommendation patterns:** Suggested in final-1974 listening arcs.
- **Research confidence:** Medium
- **Source keys:** heady_search
- **Source URLs:** https://headyversion.com/

### 1975-08-13 — Great American Music Hall, San Francisco, CA
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, playful, intricate, spacious, beautiful, laid-back, curious, exploratory
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** small-room comeback atmosphere, 'Help > Slip > Franklin's' debut-era intrigue, one-off intimacy
- **Community consensus:** A cherished 'inside baseball' show: historically huge, intimate, and full of comeback excitement.
- **Best for someone feeling:** curious, playful, wanting club-size Dead
- **Recommendation patterns:** Recommended when someone wants an important hinge-point show rather than a pure peak-performance pick.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1975-09-28 — Lindley Meadows, Golden Gate Park, San Francisco, CA
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, playful, intricate, spacious, beautiful, laid-back, curious, exploratory
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (usually very listenable; some nights approach official-release quality)
- **Key moments:** outdoor low-stakes feel, rare 1975 context
- **Community consensus:** Important mostly because 1975 is so sparse; charming, communal, and historically key.
- **Best for someone feeling:** easygoing, curious, picnic listening
- **Recommendation patterns:** Recommended when someone wants the comeback context rather than a monster performance.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1976-06-09 — Boston Music Hall, Boston, MA
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, intricate, spacious, beautiful, laid-back, subtly funky
- **Energy level:** Medium
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** delicate 'Eyes of the World', laid-back 'Dancin'' energy, June '76 space
- **Community consensus:** Many 1976 devotees use this to illustrate the year’s 'mellow groove': patient, beautiful, and subtly funky.
- **Best for someone feeling:** stressed, anxious, studying, wanting beauty without overload
- **Recommendation patterns:** Frequently recommended when someone wants 1976’s uniquely relaxed, intricate pocket.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, opinion_76, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/xhicq/whats_your_opinion_on_1976/; https://www.dead.net/comment/2260?page=0%2C3

### 1976-06-14 — Beacon Theatre, New York, NY
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, flowing, intricate, soothing, beautiful, spacious
- **Energy level:** Medium
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Help > Slip > Franklin's' favorite, relaxed June '76 groove
- **Community consensus:** A textbook 1976 recommendation: mellow, intricate, and very easy to sink into.
- **Best for someone feeling:** stressed, anxious, studying, wanting mellow precision
- **Recommendation patterns:** One of the most-cited shows in 'what makes 1976 special?' threads.
- **Research confidence:** High
- **Source keys:** pick_year_70s, opinion_76, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/; https://www.reddit.com/r/gratefuldead/comments/xhicq/whats_your_opinion_on_1976/; https://www.dead.net/comment/2260?page=0%2C3

### 1976-06-15 — Beacon Theatre, New York, NY
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, playful, intricate, spacious, beautiful, laid-back, late-night, haunting
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (usually very listenable; some nights approach official-release quality)
- **Key moments:** great 'Stella Blue' lineage
- **Community consensus:** More song-useful than consensus-monster, but close enough to the June '76 sweet spot to matter.
- **Best for someone feeling:** late-night sadness, acceptance
- **Recommendation patterns:** Good for song-specific mood pulls.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1976-06-22 — Capitol Theatre, Passaic, NJ
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, playful, intricate, spacious, beautiful, laid-back, restless, kinetic
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (usually very listenable; some nights approach official-release quality)
- **Key moments:** 'Playing in the Band' favorite
- **Community consensus:** Important as a version-head destination and a nice representation of 1976's spacious logic.
- **Best for someone feeling:** restless but calm, wanting to drift
- **Recommendation patterns:** For people who want 1976 to feel exploratory rather than sleepy.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1976-07-18 — Orpheum Theatre, San Francisco, CA
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, playful, intricate, spacious, beautiful, laid-back, grieving, accepting
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (usually very listenable; some nights approach official-release quality)
- **Key moments:** great 'Stella Blue' candidate
- **Community consensus:** Song-first significance, but excellent for the 1976 beauty bucket.
- **Best for someone feeling:** mourning, gentle late-night listening
- **Recommendation patterns:** Song-led mood mapping support.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1976-10-09 — Oakland-Alameda County Coliseum Stadium, Oakland, CA
- **Era:** Hiatus and comeback (1975–1976)
- **Mood tags:** mellow, playful, intricate, spacious, beautiful, laid-back
- **Energy level:** Medium
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (usually very listenable; some nights approach official-release quality)
- **Key moments:** October '76 confidence, laid-back but bigger than June
- **Community consensus:** A sleeper-ish 1976 favorite—still smooth, but with a little more punch and stadium breadth.
- **Best for someone feeling:** relaxed but awake, wanting a bridge from 1976 to 1977
- **Recommendation patterns:** Often named in underrated-show conversations.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, underrated_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/wmravf/what_are_some_of_your_favorite_underrated_shows/

### 1977-02-26 — Swing Auditorium, San Bernardino, CA
- **Era:** ’77 polished peak
- **Mood tags:** precise, explosive, polished, kinetic, joyful, technically dazzling
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** all-time 'Help > Slip > Franklin's', clean 1977 articulation, explosive second set
- **Community consensus:** A technical and emotional benchmark for pre-May '77 playing—polished but more daring than the stereotype of 1977 suggests.
- **Best for someone feeling:** need a lift, wanting precision, wanting to hear the machine lock in
- **Recommendation patterns:** Shows up constantly in 'best Help/Slip/Franklin' conversations and in serious 1977 rankings.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.dead.net/comment/2260?page=0%2C3

### 1977-03-18 — Winterland Arena, San Francisco, CA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** March '77 poise, big Winterland swing
- **Community consensus:** Another proof-point that 1977 greatness was broader than one month.
- **Best for someone feeling:** good mood, wanting balance
- **Recommendation patterns:** Comes up in 'best non-May 1977' threads.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-03-20 — Winterland Arena, San Francisco, CA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** March '77 sparkle, Winterland familiarity
- **Community consensus:** March '77 is less famous than May, but this is one of the shows that makes the case for it as a full-fledged peak month.
- **Best for someone feeling:** optimistic, wanting bright motion
- **Recommendation patterns:** For fans who want early 1977 before the spring-tour legend fully calcifies.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-04-23 — Springfield Civic Center, Springfield, MA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, driving, open-road
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** pre-May heat, driving first-set momentum
- **Community consensus:** A transitional favorite that feels like the band is already entering the polished-peak zone.
- **Best for someone feeling:** road trip, upbeat, wanting a lead-in to May
- **Recommendation patterns:** Common in driving-show threads and April 1977 recs.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, road_trip_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/kofcfr/best_shows_for_a_road_trip/

### 1977-04-25 — Capitol Theatre, Passaic, NJ
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (strong board circulation; many nights have Betty-style clarity)
- **Key moments:** April '77 precision, theater intimacy
- **Community consensus:** A strong fan-voted April 1977 show that broadens the story beyond May.
- **Best for someone feeling:** clear-headed, wanting a polished but less famous show
- **Recommendation patterns:** Good 'next step after Cornell' pick.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1977-05-04 — Palladium, New York, NY
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** NYC club/theater feel, tour-opening snap
- **Community consensus:** A compact, vivid early-tour marker with very little dead air.
- **Best for someone feeling:** city energy, wanting fast payoff
- **Recommendation patterns:** Often included in 'full May '77' start-here paths.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-05 — New Haven Coliseum, New Haven, CT
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** pre-Cornell anticipation, shiny spring tone
- **Community consensus:** A strong launch point into the famous week, with many of the same virtues as the better-known dates.
- **Best for someone feeling:** buoyant, wanting to live inside May '77
- **Recommendation patterns:** Recommended in full-tour listening paths.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-07 — Boston Garden, Boston, MA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, blissful
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** big-room clarity, pre-Cornell excitement, sharp songcraft
- **Community consensus:** A major contender in the 'Boston > Cornell?' sub-argument within Spring '77 fandom.
- **Best for someone feeling:** euphoric, hyped, wanting a classic but not the cliché
- **Recommendation patterns:** Often appears in 'best week of their career' conversations around May 1977.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-08 — Barton Hall, Cornell University, Ithaca, NY
- **Era:** ’77 polished peak
- **Mood tags:** transcendent, joyful, polished, euphoric, uplifting, dreamy
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Scarlet Begonias > Fire on the Mountain', 'Brown-Eyed Women', 'Row Jimmy', 'Morning Dew'
- **Community consensus:** The gateway giant—balanced, beautiful, expertly played, and mythic. Some heads think it is over-canonized, but very few deny how complete it feels.
- **Best for someone feeling:** joyful, uplifted, wanting the classic answer, showing a newcomer, dreamy but energetic
- **Recommendation patterns:** Recommended constantly to newcomers and to anyone wanting the polished 'platonic ideal' of the Dead.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment, new_listener_guide
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/p5ujw7/not_sure_if_im_a_deadhead_but_ive_been_obsessed/

### 1977-05-09 — Buffalo Memorial Auditorium, Buffalo, NY
- **Era:** ’77 polished peak
- **Mood tags:** polished, sharp, emotional, uplifting, confident, dynamic
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Help > Slip > Franklin's', 'Comes a Time', sharp Buffalo energy
- **Community consensus:** A classic 'anti-Cornell' expert pick: still polished, but many heads hear more edge and emotional punch than 5/8.
- **Best for someone feeling:** joyful, confident, wanting refined energy with bite
- **Recommendation patterns:** Often recommended to listeners who already know Cornell and want a slightly more head-favorite Spring '77 show.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-11 — St. Paul Civic Center, St. Paul, MN
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** Minnesota stop on legendary run, high-floor spring performance
- **Community consensus:** Not the most singled-out show, but routinely included in all-time 1977 shortlists.
- **Best for someone feeling:** upbeat, wanting continuity after Cornell/Buffalo
- **Recommendation patterns:** Recommended by people doing the entire May sequence.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-17 — Memorial Coliseum, Tuscaloosa, AL
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, warm, mellow
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** rolling second set, strong 'Sugaree'/'Peggy-O' aura, May '77 flow
- **Community consensus:** A beloved May '77 stop that feels warm, complete, and slightly less discussed than Cornell/Buffalo.
- **Best for someone feeling:** warm, uplifted, road trip
- **Recommendation patterns:** Common in deep-fan May '77 recommendation chains.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-19 — Fox Theatre, Atlanta, GA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, melancholy, emotional
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** heartbreaking 'Loser', beautiful second-set pacing, rich Fox Theatre sound
- **Community consensus:** One of the more emotional May '77 picks—people especially single out its tenderness and its ability to hit hard without sounding messy.
- **Best for someone feeling:** melancholy, bittersweet, wanting beauty and release
- **Recommendation patterns:** Often cited for song-specific catharsis, especially 'Loser' and other emotionally loaded performances.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, emotion_songs
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/156t4f2/grateful_dead_songs_that_have_brought_intense/

### 1977-05-22 — Pembroke Pines Sportatorium, Pembroke Pines, FL
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, blissful
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** long-form second-set flow, Florida heat vibe, 'Terrapin Station' / 'Morning Dew' aura
- **Community consensus:** The Pembroke show is a cult-level May '77 favorite; some fans gush about it with borderline religious intensity.
- **Best for someone feeling:** euphoric, wanting majesty, wanting big second-set drama
- **Recommendation patterns:** Often used as the anti-Cornell pick for people wanting May '77 without the obvious choice.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-25 — The Mosque, Richmond, VA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, uplifted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (strong board circulation; many nights have Betty-style clarity)
- **Key moments:** Virginia '77 groove, flowing second set
- **Community consensus:** Another prized late-May '77 performance that gets strong love from people mining the whole tour.
- **Best for someone feeling:** uplifted, driving, wanting overlooked May gold
- **Recommendation patterns:** Common in 'don't stop at Cornell' recommendation chains.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-05-26 — Baltimore Civic Center, Baltimore, MD
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** strong road-trip flow, hidden-gem May '77 feel
- **Community consensus:** Often described as one of the best unreleased/under-discussed May '77 nights.
- **Best for someone feeling:** driving, optimistic, wanting classic Dead without obvious branding
- **Recommendation patterns:** Road-trip and hidden-gem recommendation staple.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, road_trip_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/kofcfr/best_shows_for_a_road_trip/

### 1977-05-28 — Hartford Civic Center, Hartford, CT
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (strong board circulation; many nights have Betty-style clarity)
- **Key moments:** solid Hartford momentum, glistening late-May tone, strong set-closing arc
- **Community consensus:** Not as mythologized as the first half of May, but widely admired as a high-floor/high-ceiling '77 show.
- **Best for someone feeling:** good mood, wanting polished motion
- **Recommendation patterns:** A deepening recommendation once someone has already tried the obvious May staples.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-06-08 — Winterland Arena, San Francisco, CA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** famous 'Eyes of the World' candidate, liquid June tone
- **Community consensus:** For many fans, this is a song-nerd show: the set is strong overall, but specific versions make it legendary.
- **Best for someone feeling:** focused listening, wanting to chase definitive versions
- **Recommendation patterns:** Frequently invoked in Headyversion-style song debates.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, heady_search
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://headyversion.com/

### 1977-06-09 — Winterland Arena, San Francisco, CA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (strong board circulation; many nights have Betty-style clarity)
- **Key moments:** 'Eyes of the World' peak reputation, June Winterland glow
- **Community consensus:** Beloved for its balance of finesse and lift, especially by listeners who obsess over 1977 song-level highlights.
- **Best for someone feeling:** upbeat, wanting brilliance without overload
- **Recommendation patterns:** Often surfaces in Eyes-centered and late-spring '77 threads.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.dead.net/comment/2260?page=0%2C3

### 1977-09-03 — Raceway Park, Englishtown, NJ
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, driving, open-road
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** massive outdoor feel, 'Mississippi Half-Step', 'Eyes of the World'
- **Community consensus:** Huge-scale 1977 Dead with unusually open, crowd-lifting momentum.
- **Best for someone feeling:** road trip, sunny but strong, wanting large-scale joy
- **Recommendation patterns:** Common for people who love 1977 but want something a little less overplayed than Cornell.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-10-29 — Evans Field House, Northern Illinois University, DeKalb, IL
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** late-'77 confidence, athletic second set, compact fire
- **Community consensus:** Late 1977 often gets overshadowed by May, and this is one of the shows fans use to correct that.
- **Best for someone feeling:** energetic, wanting late-'77 edge
- **Recommendation patterns:** Regularly appears in late-'77 defender lists.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-11-02 — Seneca College Field House, Toronto, ON
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, warm, mellow
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** clean gymnasium sound, autumn pace
- **Community consensus:** A quieter cult favorite in the late-'77 constellation.
- **Best for someone feeling:** focused, warm but not sleepy
- **Recommendation patterns:** Usually comes up in chain recs with the other early-November 1977 shows.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-11-04 — Cotterell Court, Colgate University, Hamilton, NY
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, easygoing, melodic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (strong board circulation; many nights have Betty-style clarity)
- **Key moments:** intimate college-gym feel, late-'77 sharpness
- **Community consensus:** A fan favorite that feels friendlier and more compact than some other big '77 monsters.
- **Best for someone feeling:** social, pub-friendly, wanting a smooth entry
- **Recommendation patterns:** Recommended when someone wants a crowd-pleasing show with less dissonance.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, pub_show
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1lrj7ic/pub_show_recommendation/

### 1977-11-05 — Community War Memorial, Rochester, NY
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** tight Rochester energy, late-fall confidence
- **Community consensus:** One of the strong late-'77 chain recommendations, often mentioned right next to Colgate and Binghamton.
- **Best for someone feeling:** focused, restless, wanting a non-obvious '77
- **Recommendation patterns:** Late '77 deepening pick.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-11-06 — Broome County Veterans Memorial Arena, Binghamton, NY
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** big late-'77 sequencing, 'Half-Step' / 'Truckin'' aura
- **Community consensus:** Another late-'77 believer pick: more muscular and slightly more autumnal than May.
- **Best for someone feeling:** restless, wanting momentum with depth
- **Recommendation patterns:** Often recommended after someone has exhausted May '77.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1977-12-29 — Winterland Arena, San Francisco, CA
- **Era:** ’77 polished peak
- **Mood tags:** joyful, polished, euphoric, uplifting, tight, dancey
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** year-end lift, late-'77 muscle
- **Community consensus:** A big-year coda that sounds slightly more forceful than the canonical May run.
- **Best for someone feeling:** celebratory, wanting an end-of-year glow
- **Recommendation patterns:** Often recommended in 'best Winterland '77' subthreads.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1978-01-22 — McArthur Court, Eugene, OR
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** snappy first set, fast-moving transitions, 1978 electricity
- **Community consensus:** A favorite among people who like 1978's extra attack and brighter edge.
- **Best for someone feeling:** restless, wanting propulsion, working out
- **Recommendation patterns:** Shows up in rankings as an early-1978 peak.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1978-04-14 — Cassell Coliseum, Blacksburg, VA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, accepting, gentle
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** 'Black Peter' favorite
- **Community consensus:** Useful mainly to enrich grief/acceptance song mapping in a higher-energy year.
- **Best for someone feeling:** acceptance, sadness with light
- **Recommendation patterns:** Song-specific mapping.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1978-04-16 — Huntington Civic Center, Huntington, WV
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, driving, open-road
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** driving spring '78 energy
- **Community consensus:** A favorite for highway listening—fast, bright, and motivating.
- **Best for someone feeling:** road trip, restless
- **Recommendation patterns:** Driving-show recommendation.
- **Research confidence:** Medium
- **Source keys:** road_trip_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/kofcfr/best_shows_for_a_road_trip/

### 1978-05-14 — Providence Civic Center, Providence, RI
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** May '78 bounce, dance-heavy flow
- **Community consensus:** Fan-voted 1978 favorite with plenty of motion and little drag.
- **Best for someone feeling:** dancy, restless, looking for fast reward
- **Recommendation patterns:** A nice bridge from 1977 to the more athletic 1978 sound.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1978-07-08 — Red Rocks Amphitheatre, Morrison, CO
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** high-energy, triumphant, dancey, electric, adventurous, fierce
- **Energy level:** Very High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** wide-open Red Rocks feel, hard-charging 1978 attack, driving second set
- **Community consensus:** The canonical 1978 show for people who want ferocity, joy, and altitude. Cocaine-era, yes—but in the good sense for many fans: charged and unstoppable.
- **Best for someone feeling:** adrenalized, road trip, mountain-drive energy, wanting to dance hard
- **Recommendation patterns:** A default answer for raw, high-energy late-'70s Dead.
- **Research confidence:** High
- **Source keys:** composite_top50, heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1978-10-20 — Winterland Arena, San Francisco, CA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** all-time 'Dancin' in the Street' conversation
- **Community consensus:** A strong dance-mapping show because one performance so often gets singled out.
- **Best for someone feeling:** wanting to dance, house-party Dead
- **Recommendation patterns:** Dance-party logic input.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1978-12-31 — Winterland Arena, San Francisco, CA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, nostalgic, reflective
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** 'Dark Star' return, relaxed 'Scarlet > Fire', melodic 'Rhythm Devils'
- **Community consensus:** A celebratory, loose, historic New Year's Eve show with enough myth and warmth to merit repeated recommendation.
- **Best for someone feeling:** celebratory, nostalgic, wanting a ritual event
- **Recommendation patterns:** Holiday/event recommendation, often for relaxed joy rather than pure intensity.
- **Research confidence:** High
- **Source keys:** pick_year_70s, deadnet_best_versions
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1g9yc9z/pick_one_show_from_every_year_from_the_1970s/; https://www.dead.net/comment/2260?page=0%2C3

### 1979-01-10 — Nassau Coliseum, Uniondale, NY
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** Keith/Donna final-tour energy, classic early-'79 feel
- **Community consensus:** A top pre-Brent 1979 favorite—still old-world Dead, but revved up.
- **Best for someone feeling:** transition, restless, wanting urgency
- **Recommendation patterns:** Recommended in 1979-best threads as the Keith/Donna-era high point.
- **Research confidence:** Medium
- **Source keys:** best_79
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/7iygd2/best_shows_of_1979/

### 1979-01-11 — Nassau Coliseum, Uniondale, NY
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, driving, open-road
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** all-time 'Jack Straw'
- **Community consensus:** Very useful for song-specific mood mapping—cinematic, driving, and vivid.
- **Best for someone feeling:** road trip, story-song intensity
- **Recommendation patterns:** Song-led recommendation.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1979-01-20 — Buffalo Memorial Auditorium, Buffalo, NY
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** Keith/Donna late-run fire
- **Community consensus:** Often paired with 1/10/79 as proof that January 1979 is special.
- **Best for someone feeling:** urgent, wanting edge
- **Recommendation patterns:** 1979-best thread staple.
- **Research confidence:** Medium
- **Source keys:** best_79
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/7iygd2/best_shows_of_1979/

### 1979-05-09 — Broome County Veterans Memorial Arena, Binghamton, NY
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** Brent's first tour excitement
- **Community consensus:** A key 'new era' show—fans like hearing the band reconfigure itself in real time.
- **Best for someone feeling:** fresh-start energy, curiosity
- **Recommendation patterns:** Recommended for understanding the Brent transition.
- **Research confidence:** Medium
- **Source keys:** best_79
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/7iygd2/best_shows_of_1979/

### 1979-05-11 — Billerica Forum, Billerica, MA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** killer early Brent feel
- **Community consensus:** Another 1979 transition favorite with a lot of fan love.
- **Best for someone feeling:** energetic, wanting early-Brent spark
- **Recommendation patterns:** Brent-onboarding recommendation.
- **Research confidence:** Medium
- **Source keys:** best_79
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/7iygd2/best_shows_of_1979/

### 1979-10-27 — Cape Cod Coliseum, South Yarmouth, MA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** great 'Dancin'' reputation, Brent-era early chemistry
- **Community consensus:** A cult 1979 favorite that fans use to argue the new Brent era hit the ground running.
- **Best for someone feeling:** moving on, wanting fresh-start energy, dancey
- **Recommendation patterns:** Very common in 1979-best threads.
- **Research confidence:** High
- **Source keys:** trips30, best_79
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.reddit.com/r/gratefuldead/comments/7iygd2/best_shows_of_1979/

### 1979-11-24 — Golden Hall, San Diego, CA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** earthshaking 'China > Rider', massive second set
- **Community consensus:** A heavily praised late-1979 show and one of the best arguments that Brent-era Dead found its footing fast.
- **Best for someone feeling:** wanting force and fun, driving
- **Recommendation patterns:** Often named best of 1979.
- **Research confidence:** Medium
- **Source keys:** best_79_alt
- **Source URLs:** 

### 1979-12-03 — Dane County Coliseum, Madison, WI
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** 'true rebirth' feel
- **Community consensus:** A useful 'new era clicking into place' show in fan discussion.
- **Best for someone feeling:** renewal, moving on
- **Recommendation patterns:** Transition-show recommendation.
- **Research confidence:** Medium
- **Source keys:** best_79_alt
- **Source URLs:** 

### 1979-12-26 — Oakland Auditorium Arena, Oakland, CA
- **Era:** Disco Dead / Shakedown era (1978–1979)
- **Mood tags:** funky, high-energy, dancey, adventurous, dramatic, electric, hopeful, redemptive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (energetic tapes, but source quality varies more than 1977 or Spring 1990)
- **Key moments:** very emotive 'Uncle John's Band'
- **Community consensus:** Important in song-level consensus and late-'79 appreciation.
- **Best for someone feeling:** communal, hopeful, healing
- **Recommendation patterns:** Song-specific support and year-end 1979 arcs.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1980-05-15 — Nassau Coliseum, Uniondale, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** great 'GDTRFB', Brent organ color
- **Community consensus:** Part of the 'Go To Nassau' cluster that many fans use as the easiest 1980 entry point.
- **Best for someone feeling:** energetic, open-road
- **Recommendation patterns:** Top 1980 beginner recommendation.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1980-05-16 — Nassau Coliseum, Uniondale, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, late-night, haunting
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** favorite 'Althea' talk
- **Community consensus:** Maybe the single best gateway into 1980 for listeners who want soulful, song-forward Dead.
- **Best for someone feeling:** wistful, late-night city mood
- **Recommendation patterns:** Commonly recommended for Althea chasers.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1980-08-30 — The Spectrum, Philadelphia, PA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** strong 'Eyes' set, late-summer '80 lift
- **Community consensus:** Headyversion/archive-style favorite more than broad newbie pick, but very useful for song/show linkage.
- **Best for someone feeling:** focused, flow-state
- **Recommendation patterns:** Song-driven rec.
- **Research confidence:** Medium
- **Source keys:** heady_search
- **Source URLs:** https://headyversion.com/

### 1980-09-06 — Maine State Fairgrounds, Lewiston, ME
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, uplifting, joyful
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** sunny outdoor uplift, big communal feeling
- **Community consensus:** One of the more common uplifting-show answers outside the usual 1970s suspects.
- **Best for someone feeling:** uplifted, summer nostalgia
- **Recommendation patterns:** Good 'most uplifting show' option.
- **Research confidence:** Medium
- **Source keys:** uplifting_show
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1c42wa8/whats_the_most_uplifting_show_the_band_ever_played/

### 1980-11-30 — Fox Theatre, Atlanta, GA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, hopeful, redemptive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** 'The Wheel' favorite
- **Community consensus:** A song-level bright spot that belongs in hope/redemption mood buckets.
- **Best for someone feeling:** hopeful, light emerging from darkness
- **Recommendation patterns:** Song-specific support.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1981-03-09 — Madison Square Garden, New York, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, late-night, haunting
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** strong MSG energy, high-octane second set
- **Community consensus:** A favorite 1981 pick for people who like the Dead sounding punchy, assertive, and city-wired.
- **Best for someone feeling:** need energy, late-night city mood
- **Recommendation patterns:** Shows up a lot in 'one 1981 show' threads.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, favorite_81
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/xyamrv/favourite_81_shows/

### 1981-05-05 — Glens Falls Civic Center, Glens Falls, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** spring '81 snap
- **Community consensus:** One of the go-to secondary 1981 picks for people who really dig the year.
- **Best for someone feeling:** need a push, city-to-highway energy
- **Recommendation patterns:** 1981 fan-favorite list regular.
- **Research confidence:** Medium
- **Source keys:** favorite_81
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/xyamrv/favourite_81_shows/

### 1981-05-11 — New Haven Coliseum, New Haven, CT
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** 1981 consistency and bite
- **Community consensus:** A good representative 1981 show in recommendation threads.
- **Best for someone feeling:** urgent, focused
- **Recommendation patterns:** 1981 shortlist mainstay.
- **Research confidence:** Medium
- **Source keys:** favorite_81
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/xyamrv/favourite_81_shows/

### 1981-05-16 — Barton Hall, Cornell University, Ithaca, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** 1981 Cornell jolt, spring '81 momentum
- **Community consensus:** A year-poll standout for people who want the old 1977 room with a very different 1981 engine.
- **Best for someone feeling:** need energy, wanting a familiar landmark with rougher edges
- **Recommendation patterns:** Recommended to fans comparing eras in the same venue.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1981-08-28 — Long Beach Arena, Long Beach, CA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, driving, open-road
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** West Coast 1981 ease + force
- **Community consensus:** A frequent answer when fans are pressed for one more '81 pick.
- **Best for someone feeling:** road trip, ocean-air energy
- **Recommendation patterns:** 1981 rec list support.
- **Research confidence:** Medium
- **Source keys:** favorite_81
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/xyamrv/favourite_81_shows/

### 1981-10-19 — Sports Palace, Barcelona, Spain
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** Europe '81 glow
- **Community consensus:** Widely loved among 1981 heads—special because of location, atmosphere, and inspired playing.
- **Best for someone feeling:** travelling, adventurous
- **Recommendation patterns:** Often a favorite 1981 answer.
- **Research confidence:** Medium
- **Source keys:** favorite_81
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/xyamrv/favourite_81_shows/

### 1981-12-09 — CU Events Center, Boulder, CO
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** great 'China > Rider' and 'Scarlet > Fire', 'Satisfaction'
- **Community consensus:** A high-energy recommendation for winning over people skeptical of 1981–82 Dead.
- **Best for someone feeling:** restless, need a blast
- **Recommendation patterns:** 80s-conversion thread pick.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1981-12-31 — Oakland Auditorium Arena, Oakland, CA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, curious, exploratory
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** one of the few 1980s 'Dark Star' appearances
- **Community consensus:** Historically significant and fun, especially for fans who want event-show energy plus rarity.
- **Best for someone feeling:** celebratory, curious
- **Recommendation patterns:** Holiday/event rec and rarity rec.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1982-04-05 — The Spectrum, Philadelphia, PA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** strong 'Shakedown Street'
- **Community consensus:** A dance-forward 1982 showlet in fan memory.
- **Best for someone feeling:** wanting funk, needing to move
- **Recommendation patterns:** Song-driven show rec.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1982-04-06 — The Spectrum, Philadelphia, PA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** 'best show of 82' chatter, powerful 'Truckin''
- **Community consensus:** One of the more aggressively recommended 1982 dates in online communities.
- **Best for someone feeling:** need a jolt, wanting rough-edged quality
- **Recommendation patterns:** Conversion-thread and year-best pick.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1982-07-31 — Manor Downs, Austin, TX
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** summer outdoor attack, Texas heat vibe
- **Community consensus:** Widely loved 1982 pick with rough charm and serious drive.
- **Best for someone feeling:** hot summer night, restless, needing a push
- **Recommendation patterns:** Appears in favorite-1982 and 80s-conversion talk.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1982-08-07 — Alpine Valley Music Theatre, East Troy, WI
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, high-energy, driving
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** great first set, 'Music Never Stopped > Sugaree > Music Never Stopped'
- **Community consensus:** A favorite for people who value first-set rock energy as much as second-set jams.
- **Best for someone feeling:** working out, upbeat
- **Recommendation patterns:** 1982 deepening pick.
- **Research confidence:** Medium
- **Source keys:** favorite_81
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/xyamrv/favourite_81_shows/

### 1982-08-10 — University of Iowa Field House, Iowa City, IA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, uplifting, joyful
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** brightly uplifting August feel
- **Community consensus:** A less-obvious but recurring uplifting-show answer.
- **Best for someone feeling:** uplifted, lighthearted
- **Recommendation patterns:** Useful alt for uplift bucket.
- **Research confidence:** Medium
- **Source keys:** uplifting_show
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1c42wa8/whats_the_most_uplifting_show_the_band_ever_played/

### 1982-09-20 — Madison Square Garden, New York, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** fall '82 bite
- **Community consensus:** A recommended '82 show for listeners who want tightness plus nerve.
- **Best for someone feeling:** focused, urban night energy
- **Recommendation patterns:** 80s-conversion support.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1982-10-10 — Frost Amphitheatre, Stanford University, Palo Alto, CA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, energizing
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** 'Scarlet > Fire' aura, October '82 drive, clean outdoor recording reputation
- **Community consensus:** A major favorite for people who want the early-'80s bite without the roughest edges.
- **Best for someone feeling:** stuck, needing a jolt, wanting crisp early-'80s rock
- **Recommendation patterns:** Often appears in shortlist answers to 'sell me on the early '80s'.
- **Research confidence:** Medium
- **Source keys:** heady_top50_comment
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1983-06-18 — Saratoga Performing Arts Center, Saratoga Springs, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** big, alive SPAC energy
- **Community consensus:** Often described as high-energy and not remotely polite—one of the clearest cases for 1983 as a live year.
- **Best for someone feeling:** need catharsis, wanting fireworks
- **Recommendation patterns:** Very common 1983 recommendation.
- **Research confidence:** High
- **Source keys:** favorite_83, best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1qqhgwb/favorite_83_shows/; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1983-09-02 — BSU Pavilion, Boise, ID
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, restless, kinetic
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** 'Help > Slip > Frank','Estimated > Eyes > Jam'
- **Community consensus:** A favorite under-the-radar 1983 entry with a strong jam suite.
- **Best for someone feeling:** adventurous, restless
- **Recommendation patterns:** 1983-deep-cut support.
- **Research confidence:** Medium
- **Source keys:** favorite_83
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1qqhgwb/favorite_83_shows/

### 1983-10-14 — Hartford Civic Center, Hartford, CT
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** urgent, blissful, fierce, high-energy, risk-taking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Scarlet > Fire > Estimated > Eyes' hour-of-bliss reputation, 1983 bite
- **Community consensus:** The show people often use to say, 'No really, 1983 can be amazing.' Fierce but not inaccessible.
- **Best for someone feeling:** restless, wanting a jolt, wanting bliss with teeth
- **Recommendation patterns:** A top recommendation for converting people to 1980s Dead.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, new_listener_guide, 80s_convert, favorite_83
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/p5ujw7/not_sure_if_im_a_deadhead_but_ive_been_obsessed/; https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/; https://www.reddit.com/r/gratefuldead/comments/1qqhgwb/favorite_83_shows/

### 1983-10-15 — Hartford Civic Center, Hartford, CT
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** adjacent to 10/14 peak, October '83 heat
- **Community consensus:** Often mentioned right next to 10/14 as proof the run was stacked.
- **Best for someone feeling:** high energy, wanting more after 10/14
- **Recommendation patterns:** Run-completion rec.
- **Research confidence:** Medium
- **Source keys:** favorite_83
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1qqhgwb/favorite_83_shows/

### 1983-10-17 — Lake Placid Olympic Center, Lake Placid, NY
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** great 'Sugaree' talk
- **Community consensus:** A true 1983 fan pick—song-specific and show-level love intersect here.
- **Best for someone feeling:** driven, need to feel something
- **Recommendation patterns:** Common in favorite-'83 sublists.
- **Research confidence:** Medium
- **Source keys:** favorite_83
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1qqhgwb/favorite_83_shows/

### 1983-10-21 — Worcester Centrum, Worcester, MA
- **Era:** Early ’80s (1980–1983)
- **Mood tags:** punchy, raw, urgent, risk-taking, rocking, alive, primal, wild
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Good — Good (strong boards/AUDs exist, but quality varies)
- **Key moments:** October '83 tear, Worcester intensity, already canonical among '83 heads
- **Community consensus:** No longer really underrated among online heads, but still broader-world underrated.
- **Best for someone feeling:** need catharsis, wanting raw '83 force, wild, high-wire
- **Recommendation patterns:** Comes up constantly when people defend 1983 as a great year.
- **Research confidence:** High
- **Source keys:** trips30, favorite_83, underrated_shows
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.reddit.com/r/gratefuldead/comments/1qqhgwb/favorite_83_shows/; https://www.reddit.com/r/gratefuldead/comments/wmravf/what_are_some_of_your_favorite_underrated_shows/

### 1984-04-20 — Philadelphia Civic Center, Philadelphia, PA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** released-era notoriety, strong overall energy
- **Community consensus:** One of the cleaner on-ramps into 1984 because it is both strong and comparatively accessible.
- **Best for someone feeling:** need intensity without total chaos
- **Recommendation patterns:** Default 1984 starter in some threads.
- **Research confidence:** Medium
- **Source keys:** favorite_84
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/

### 1984-07-13 — Greek Theatre, Berkeley, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** dark, fierce, rare, adventurous, volatile, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** only 1984 'Dark Star', 'Scarlet > Touch > Fire', Greek run mythos
- **Community consensus:** A near-consensus 1984 highlight—dark, rare, and exciting in all the ways people mean when they say '1984 is dangerous.'
- **Best for someone feeling:** dark, adventurous, needing something rare and huge
- **Recommendation patterns:** Top 1984 answer and deep-head magnet.
- **Research confidence:** High
- **Source keys:** composite_top50, 80s_convert, favorite_84, best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/; https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1984-07-14 — Greek Theatre, Berkeley, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** adventurous 'Help > Slip > Franklin's'
- **Community consensus:** A worthy companion to 7/13, often praised for adventurousness and flow.
- **Best for someone feeling:** high-energy, questing
- **Recommendation patterns:** Recommended as part of the Greek '84 run.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1984-07-15 — Greek Theatre, Berkeley, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire, dark
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** laid-back but energetic party vibe, excellent 'Bird Song' chatter
- **Community consensus:** The softest-edged of the Greek '84 trio, but still loved for its vibe.
- **Best for someone feeling:** party, summer night, less dark than 7/13
- **Recommendation patterns:** Used when someone wants 1984 energy with a more cheerful surface.
- **Research confidence:** High
- **Source keys:** 80s_convert, favorite_84
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/; https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/

### 1984-10-12 — Augusta Civic Center, Augusta, ME
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire, dark
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** high-energy Maine show, mid-'80s fireworks, reiterated as one of best of decade
- **Community consensus:** One of the clearest community favorites from 1984—volatile, exciting, and often called one of the decade’s best.
- **Best for someone feeling:** dark but energized, reckless, needing intensity, cathartic, fierce
- **Recommendation patterns:** The default answer in many 1984 threads.
- **Research confidence:** High
- **Source keys:** trips30, recs_84, best_each_era, favorite_84
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.reddit.com/r/gratefuldead/comments/10r46vo/1984_recommendations/; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/; https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/

### 1985-03-25 — Springfield Civic Center, Springfield, MA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire, restless, kinetic
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** moving 'Drums > Space', 1985 nervous energy
- **Community consensus:** A left-field but loved 1985 pick that leans into the era's ragged intensity.
- **Best for someone feeling:** restless, unsettled but seeking release
- **Recommendation patterns:** Deep-head 1985 recommendation.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1985-04-27 — Frost Amphitheatre, Stanford University, Palo Alto, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** underrated spring '85 heat
- **Community consensus:** A sleeper pick that knowledgeable fans bring up when they want to flex beyond the obvious '85 dates.
- **Best for someone feeling:** need energy, spring urgency
- **Recommendation patterns:** Underrated-show support.
- **Research confidence:** Medium
- **Source keys:** underrated_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/wmravf/what_are_some_of_your_favorite_underrated_shows/

### 1985-04-28 — Frost Amphitheatre, Stanford University, Palo Alto, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** another underrated Frost date
- **Community consensus:** Pairs with 4/27 as an overlooked 1985 run highlight.
- **Best for someone feeling:** outdoor intensity, wanting a sleeper
- **Recommendation patterns:** Underrated-run recommendation.
- **Research confidence:** Medium
- **Source keys:** underrated_shows
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/wmravf/what_are_some_of_your_favorite_underrated_shows/

### 1985-06-14 — Greek Theatre, Berkeley, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** Greek '85 punch
- **Community consensus:** Part of the mid-June 1985 strong run in fan memory.
- **Best for someone feeling:** summer-night energy
- **Recommendation patterns:** 1985 run-completion rec.
- **Research confidence:** Medium
- **Source keys:** shows_85
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/50l6fv/85_shows/

### 1985-06-22 — Alpine Valley Music Theatre, East Troy, WI
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** surprisingly attention-grabbing 'Walkin' Blues'
- **Community consensus:** Song-level utility more than full-show canon, but helps flesh out mood mapping.
- **Best for someone feeling:** bar-band grit
- **Recommendation patterns:** Song-led support.
- **Research confidence:** Medium
- **Source keys:** heady_search
- **Source URLs:** https://headyversion.com/

### 1985-06-24 — Riverbend Music Center, Cincinnati, OH
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire, high-energy, driving
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** mid-'80s speed and bite, summer 1985 momentum
- **Community consensus:** A year-winner in fan voting and part of the argument that 1985 still had serious firepower.
- **Best for someone feeling:** charged, working out, wanting ragged energy
- **Recommendation patterns:** Suggested in 1985-best lists.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1985-06-30 — Merriweather Post Pavilion, Columbia, MD
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** mid-'80s fireworks bucket
- **Community consensus:** A meaningful anchor for the '1985 can still rage' case.
- **Best for someone feeling:** fired up, reckless
- **Recommendation patterns:** Era-defining 1985 answer.
- **Research confidence:** Medium
- **Source keys:** best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1985-07-01 — Merriweather Post Pavilion, Columbia, MD
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** must-listen 1980s show chatter
- **Community consensus:** Often named as a must-hear '80s performance.
- **Best for someone feeling:** amped, needing velocity
- **Recommendation patterns:** High-priority 1985 rec.
- **Research confidence:** Medium
- **Source keys:** favorite_84
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/

### 1985-11-07 — Community War Memorial, Rochester, NY
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** strong November '85
- **Community consensus:** November 1985 gets serious love; this is one of its anchors.
- **Best for someone feeling:** focused, cold-weather intensity
- **Recommendation patterns:** 1985 late-year rec.
- **Research confidence:** Medium
- **Source keys:** shows_85
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/50l6fv/85_shows/

### 1985-11-08 — Community War Memorial Auditorium, Rochester, NY
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** another strong November '85 show
- **Community consensus:** Thread-level recommendation more than cross-source canon, but useful for sleeper coverage.
- **Best for someone feeling:** jolted, wanting one more rough gem
- **Recommendation patterns:** Paired with 11/7/85 in recommendation threads.
- **Research confidence:** Medium
- **Source keys:** shows_85
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/50l6fv/85_shows/

### 1985-11-10 — Brendan Byrne Arena, East Rutherford, NJ
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire, hopeful, redemptive
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** best 'Touch of Grey' chatter
- **Community consensus:** Song-first significance; useful for hope/recovery mood mapping.
- **Best for someone feeling:** hopeful, recovering
- **Recommendation patterns:** Song-led recommendation.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1985-11-11 — Brendan Byrne Arena, East Rutherford, NJ
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** best 'Little Red Rooster', best 'Touch of Grey' alternate chatter
- **Community consensus:** Another song-level utility show with strong late-1985 fan interest.
- **Best for someone feeling:** swagger, recovery
- **Recommendation patterns:** Song-specific support.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1986-12-15 — Oakland-Alameda County Coliseum Arena, Oakland, CA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire, curious, exploratory
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** late-'86 recovery context
- **Community consensus:** Useful mostly as a contextual node; not a top recommendation compared with neighboring years.
- **Best for someone feeling:** curious
- **Recommendation patterns:** Not central, kept minimal.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1987-03-27 — Hartford Civic Center, Hartford, CT
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** hopeful, redemptive, crowd-lifting, bright, comeback, emotional
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** favorite 'Touch of Grey', post-coma energy
- **Community consensus:** One of the emotional anchors of 1987: hope, comeback, and crowd-band connection in one place.
- **Best for someone feeling:** recovering, hopeful, needing a reset
- **Recommendation patterns:** Excellent for 'I need to feel like things can turn around' mood logic.
- **Research confidence:** High
- **Source keys:** deadnet_best_versions, 80s_convert
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3; https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1987-04-03 — The Centrum, Worcester, MA
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** band on fire
- **Community consensus:** A pure-energy recommendation from fans who like 1987 at full charge.
- **Best for someone feeling:** amped, fired up
- **Recommendation patterns:** High-energy late-'80s precursor rec.
- **Research confidence:** Medium
- **Source keys:** 80s_convert
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/70z96n/cant_really_get_into_80s_dead_anyone_got_a_show/

### 1987-08-18 — Compton Terrace Amphitheatre, Tempe, AZ
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** forgotten gem, crowd energy, Terrapin theatrics
- **Community consensus:** A sleeper 1987 pick with unusually vivid fan testimony.
- **Best for someone feeling:** sunset desert energy, wanting a forgotten gem
- **Recommendation patterns:** Underrated-show support.
- **Research confidence:** Medium
- **Source keys:** favorite_84
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/

### 1987-09-18 — Madison Square Garden, New York, NY
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** triumphant, arena-sized, hopeful, emotional, big-hearted, redemptive
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** 'Terrapin > Drums > Space > GDTRFB', post-coma confidence, MSG crowd lift
- **Community consensus:** A comeback-era classic—big room, big emotions, and the sense the band knew it had its mojo back.
- **Best for someone feeling:** triumphant, hopeful, needing a comeback story
- **Recommendation patterns:** Frequently recommended to people who want a heroic, emotionally direct late-'80s show.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, trips30, best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1987-09-19 — Madison Square Garden, New York, NY
- **Era:** Mid ’80s (1984–1987)
- **Mood tags:** fierce, ragged, intense, volatile, adventurous, high-wire
- **Energy level:** Very High
- **Audience level:** Deep head
- **Audio quality:** Fair — Fair–Good (performance highs can be huge, but tapes are less consistently polished)
- **Key moments:** Hampton/MSG '87 run context
- **Community consensus:** Overshadowed by 9/18, but still often praised as part of the same peak run.
- **Best for someone feeling:** wanting more after 9/18
- **Recommendation patterns:** Run-extension recommendation.
- **Research confidence:** Medium
- **Source keys:** favorite_84
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/13r8wl4/whats_your_favorite_1984_show/

### 1988-06-25 — Buckeye Lake Music Center, Hebron, OH
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, driving, open-road
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** 1988 confidence and sprawl
- **Community consensus:** One of the main 1988 'best show' answers among serious fans.
- **Best for someone feeling:** summer road trip, big outdoor optimism
- **Recommendation patterns:** Strong 1988 anchor.
- **Research confidence:** Medium
- **Source keys:** best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1988-07-03 — Oxford Plains Speedway, Oxford, ME
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, driving, open-road
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** large outdoor summer feel, late-'80s confidence
- **Community consensus:** A fan-voted 1988 standout that captures the big-hearted late-'80s sound.
- **Best for someone feeling:** celebratory, summer road trip
- **Recommendation patterns:** Good 1988 anchor show.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1988-12-28 — Oakland-Alameda County Coliseum Arena, Oakland, CA
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** great 'Walkin' Blues' energy
- **Community consensus:** Song-level support for 1988 energy mapping.
- **Best for someone feeling:** wanting a quick jolt
- **Recommendation patterns:** Song-driven support.
- **Research confidence:** Medium
- **Source keys:** heady_search
- **Source URLs:** https://headyversion.com/

### 1989-04-16 — Mecca Auditorium, Milwaukee, WI
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** killer energy, best 'Bird Song' of year chatter, great AUD reputation
- **Community consensus:** A true dark-horse 1989 favorite that fans use to show how deep the revival goes beyond the famous fall run.
- **Best for someone feeling:** bright but edgy, wanting something underrated
- **Recommendation patterns:** Excellent sleeper pick.
- **Research confidence:** Medium
- **Source keys:** best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1989-07-04 — Rich Stadium, Orchard Park, NY
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** favorite 'Cold Rain and Snow' and 'Row Jimmy' chatter
- **Community consensus:** Very useful for song-driven mood buckets—summer-bright but emotionally soft in spots.
- **Best for someone feeling:** summer nostalgia, tender happiness
- **Recommendation patterns:** Song-led recommendation.
- **Research confidence:** Medium
- **Source keys:** deadnet_best_versions
- **Source URLs:** https://www.dead.net/comment/2260?page=0%2C3

### 1989-07-07 — JFK Stadium, Philadelphia, PA
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, driving, open-road
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** huge summer-stadium momentum, big 'Blow Away' energy, revival-era confidence
- **Community consensus:** A go-to arena/stadium-era recommendation when people want the Dead sounding revived, loud, and fully themselves again.
- **Best for someone feeling:** celebratory, road trip, wanting big energy, summer-night euphoria
- **Recommendation patterns:** Often used to convert skeptics who think late-era Dead lacks juice.
- **Research confidence:** High
- **Source keys:** heady_top50_comment, best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1989-10-09 — Hampton Coliseum, Hampton, VA
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** mysterious, legendary, eventful, dark, anticipatory, massive
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** Formerly the Warlocks mystique, Dark Star return-era glow
- **Community consensus:** One of the most mythologized late-era shows: dramatic, eventful, and emotionally huge.
- **Best for someone feeling:** mystery, anticipation, wanting a legendary event
- **Recommendation patterns:** Event-show recommendation for fans who like lore and payoff.
- **Research confidence:** High
- **Source keys:** composite_top50, best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1989-10-16 — Meadowlands Arena, East Rutherford, NJ
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, curious, exploratory
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** expert-loved sleeper from composite list
- **Community consensus:** A more expert-facing late-'89 pick that broadens the Miami/Hampton story.
- **Best for someone feeling:** curious, wanting an underrated late-'89 show
- **Recommendation patterns:** Sleeper-show support.
- **Research confidence:** Medium
- **Source keys:** composite_top50
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/

### 1989-10-26 — Miami Arena, Miami, FL
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** mystical, dark, surprising, high-wire, late-night, psychedelic
- **Energy level:** High
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** famous 'Dark Star' return-era mystique, strange, high-wire Miami energy
- **Community consensus:** One of the truly magical late-'80s dark-horse monsters—mystical, risky, and huge.
- **Best for someone feeling:** wanting mystery, dark but not hopeless, late-night trance
- **Recommendation patterns:** Frequently used as proof that late-era Dead could still be startling.
- **Research confidence:** High
- **Source keys:** trips30, deadnet_best_versions
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.dead.net/comment/2260?page=0%2C3

### 1989-12-10 — Great Western Forum, Inglewood, CA
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, uplifting, joyful
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** late-'89 confidence
- **Community consensus:** A respected late-1989 peak in Brent-era recommendation threads.
- **Best for someone feeling:** uplifted, wanting a cleaner late-'80s hit
- **Recommendation patterns:** Brent-era shortlist support.
- **Research confidence:** Medium
- **Source keys:** best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1990-03-14 — Capital Centre, Landover, MD
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** strong Spring 1990 set construction
- **Community consensus:** A quality Spring 1990 recommendation when you want the tour's huge sound without defaulting to Branford night.
- **Best for someone feeling:** good mood, wanting the big Spring '90 sound
- **Recommendation patterns:** Common secondary Spring 1990 rec.
- **Research confidence:** Medium
- **Source keys:** favorite_90s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/14yt002/favorite_90s_shows/

### 1990-03-29 — Nassau Coliseum, Uniondale, NY
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** joyful, spiritual, expansive, uplifting, confident, jazzy
- **Energy level:** High
- **Audience level:** Newcomer
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** Branford Marsalis guesting on 'Eyes of the World' and 'Dark Star', 'The Wheel', Spring 1990 sound
- **Community consensus:** One of the clearest late-era consensus peaks: joyous, expansive, and emotionally generous, with Branford lifting the whole band into a jazzier gear.
- **Best for someone feeling:** uplifted, connected, wanting something spiritual but accessible, celebrating
- **Recommendation patterns:** Recommended for uplift, late-era conversion, and proof that 1990 can stand with the classic years.
- **Research confidence:** High
- **Source keys:** composite_top50, uplifting_show, deadnet_best_versions, best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1ra1k76/the_top_50_grateful_dead_shows_of_all_time_a/; https://www.reddit.com/r/gratefuldead/comments/1c42wa8/whats_the_most_uplifting_show_the_band_ever_played/; https://www.dead.net/comment/2260?page=0%2C3; https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1990-04-02 — The Omni, Atlanta, GA
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, hopeful, redemptive
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** top-to-bottom praise
- **Community consensus:** Frequently named in beautiful-show discussions and as another Spring 1990 triumph.
- **Best for someone feeling:** beautiful, hopeful, wide open
- **Recommendation patterns:** Great for users asking for beauty more than legend.
- **Research confidence:** Medium
- **Source keys:** beautiful_show
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1n8qm37/looking_for_your_favorite_beautiful_dead_shows/

### 1990-06-23 — Autzen Stadium, Eugene, OR
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** big outdoor Spring/Summer 1990 continuity
- **Community consensus:** One of the strongest outdoor-1990 recommendations, with many fans pairing it mentally with the broader Spring '90 peak.
- **Best for someone feeling:** summer freedom, celebratory
- **Recommendation patterns:** Road-trip and outdoor-high recommendation.
- **Research confidence:** Medium
- **Source keys:** best_each_era
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1odj6jt/best_show_from_each_era/

### 1990-07-10 — Carter-Finley Stadium, Raleigh, NC
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, melancholy
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** show displayed in 'best Loser' snippet
- **Community consensus:** Mostly relevant for song-level emotion mapping.
- **Best for someone feeling:** cinematic melancholy
- **Recommendation patterns:** Song-led support.
- **Research confidence:** Medium
- **Source keys:** emotion_songs
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/156t4f2/grateful_dead_songs_that_have_brought_intense/

### 1990-07-19 — Deer Creek Music Center, Noblesville, IN
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** 'Row Jimmy' as broken-heart medicine
- **Community consensus:** Not necessarily a global top-100 show pick, but highly valuable for breakup/healing mood logic because of song-specific recommendations.
- **Best for someone feeling:** heartbreak, gentle grief
- **Recommendation patterns:** Breakup-support recommendation.
- **Research confidence:** Medium
- **Source keys:** breakup_thread
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1enzbr8/grateful_breakup/

### 1990-09-19 — Madison Square Garden, New York, NY
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, dark
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** grieving-Brent atmosphere, sometimes described as darkest show
- **Community consensus:** A reassessment pick: heavy, grieving, and unusually emotionally direct for late 1990.
- **Best for someone feeling:** grief, dark headspace, wanting to feel sorrow safely
- **Recommendation patterns:** Powerful but not newcomer-safe; strong for a dark/heavy mood bucket.
- **Research confidence:** Medium
- **Source keys:** hidden_91990
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1sanqbn/91990_and_92090_are_just_hiding_in_plain_sight/

### 1990-09-20 — Madison Square Garden, New York, NY
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** beautiful, grieving, luminous, bittersweet, deep, late-night
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** great 'China > Rider', Dark Star out of Space, luminous post-Brent emotion
- **Community consensus:** Increasingly recognized as a beautiful, moving late-era show hiding in plain sight.
- **Best for someone feeling:** reflective, grieving but hopeful, wanting beauty after loss
- **Recommendation patterns:** Excellent advanced-listener recommendation for bittersweet moods.
- **Research confidence:** High
- **Source keys:** beautiful_show, hidden_91990
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/1n8qm37/looking_for_your_favorite_beautiful_dead_shows/; https://www.reddit.com/r/gratefuldead/comments/1sanqbn/91990_and_92090_are_just_hiding_in_plain_sight/

### 1990-10-27 — Le Zénith, Paris, France
- **Era:** Late ’80s revival / Brent era (1988–1990)
- **Mood tags:** confident, bright, arena-sized, emotional, revived, big-hearted, reflective
- **Energy level:** High
- **Audience level:** Intermediate
- **Audio quality:** Excellent — Excellent (big, clean late-era boards are common)
- **Key moments:** Europe '90 glow, post-Brent transition
- **Community consensus:** A fan-voted late-era favorite that suggests the band retained elegance even amid transition.
- **Best for someone feeling:** reflective, travelling, wanting late-era poise
- **Recommendation patterns:** Useful entry into post-Brent Europe '90.
- **Research confidence:** Medium
- **Source keys:** trips30
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/

### 1991-05-10 — Shoreline Amphitheatre, Mountain View, CA
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, curious, exploratory
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** straight-fire early 1991
- **Community consensus:** A frequent 1991 recommendation for energy and cohesion.
- **Best for someone feeling:** curious about 1991, wanting motion
- **Recommendation patterns:** One of the easier 1991 entry points.
- **Research confidence:** Medium
- **Source keys:** best_91
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/728cc8/best_show_of_1991/

### 1991-05-11 — Shoreline Amphitheatre, Mountain View, CA
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** dual-keyboard chemistry
- **Community consensus:** A beloved 1991 date that fans cite when arguing the Bruce/Vince setup really worked.
- **Best for someone feeling:** renewed, expansive
- **Recommendation patterns:** Strong 1991 counterargument to decline narratives.
- **Research confidence:** High
- **Source keys:** best_91, hot_take_91
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/728cc8/best_show_of_1991/; https://www.reddit.com/r/gratefuldead/comments/h8xmer/hot_take_91_is_a_fantastic_year_for_the_dead_and/

### 1991-06-11 — Charlotte Coliseum, Charlotte, NC
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, transcendent, late-night
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** favorite 'Terrapin' talk
- **Community consensus:** Often singled out for one especially moving centerpiece performance.
- **Best for someone feeling:** spiritual, late-night
- **Recommendation patterns:** Song-led 1991 recommendation.
- **Research confidence:** Medium
- **Source keys:** best_91
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/728cc8/best_show_of_1991/

### 1991-06-17 — Giants Stadium, East Rutherford, NJ
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, open, curious
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** only 'Eyes' opener, Dark Star teases, everyone in good moods
- **Community consensus:** A major 1991 fan favorite—big, weird, and unusually buoyant.
- **Best for someone feeling:** open-minded, summery, curious
- **Recommendation patterns:** Common in 'best of 1991' and late-era defense threads.
- **Research confidence:** High
- **Source keys:** best_91, hot_take_91
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/728cc8/best_show_of_1991/; https://www.reddit.com/r/gratefuldead/comments/h8xmer/hot_take_91_is_a_fantastic_year_for_the_dead_and/

### 1991-06-22 — Soldier Field, Chicago, IL
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** Dark Star sandwich into Terrapin
- **Community consensus:** A strong late-era event show with unusual sequencing that appeals to adventurous listeners.
- **Best for someone feeling:** adventurous, wanting late-era weirdness
- **Recommendation patterns:** Good advanced-late-era recommendation.
- **Research confidence:** Medium
- **Source keys:** favorite_90s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/14yt002/favorite_90s_shows/

### 1991-09-04 — Richfield Coliseum, Richfield, OH
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, curious, exploratory
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** favorite Vince-era show chatter
- **Community consensus:** A niche but meaningful pick for people who specifically value Vince-era chemistry.
- **Best for someone feeling:** curious, wanting the overlooked stuff
- **Recommendation patterns:** Deep-head 1991 rec.
- **Research confidence:** Medium
- **Source keys:** favorite_90s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/14yt002/favorite_90s_shows/

### 1991-09-10 — Madison Square Garden, New York, NY
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, transcendent, curious
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Excellent — Excellent (widely circulated board and/or official-release-level source)
- **Key moments:** Branford guesting, 1991 dual-keyboard lift
- **Community consensus:** The easiest consensus 1991 choice: big-room late-era Dead with a clear event feel and real musical payoff.
- **Best for someone feeling:** connected, curious about 1991, wanting late-era legitimacy
- **Recommendation patterns:** Default answer in many 'best of 1991' threads.
- **Research confidence:** High
- **Source keys:** trips30, best_91
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.reddit.com/r/gratefuldead/comments/728cc8/best_show_of_1991/

### 1991-09-25 — Boston Garden, Boston, MA
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** Bruce/Jerry chemistry praise
- **Community consensus:** A respected 1991 late-year show in defense threads.
- **Best for someone feeling:** energized reflection
- **Recommendation patterns:** Used to support '1991 was good actually' claims.
- **Research confidence:** Medium
- **Source keys:** hot_take_91
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/h8xmer/hot_take_91_is_a_fantastic_year_for_the_dead_and/

### 1993-02-23 — Oakland-Alameda County Coliseum Arena, Oakland, CA
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, curious, exploratory
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** 1993 bright spot
- **Community consensus:** A useful post-1991 late-era recommendation with real fan support.
- **Best for someone feeling:** curious about overlooked 90s Dead
- **Recommendation patterns:** Late-era deep cut.
- **Research confidence:** Medium
- **Source keys:** favorite_90s
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/14yt002/favorite_90s_shows/

### 1993-06-18 — Soldier Field, Chicago, IL
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** Walkin' Blues energy snippet context
- **Community consensus:** Song-level support more than broad canon.
- **Best for someone feeling:** quick jolt
- **Recommendation patterns:** Peripheral.
- **Research confidence:** Medium
- **Source keys:** heady_search
- **Source URLs:** https://headyversion.com/

### 1994-03-28 — Nassau Coliseum, Uniondale, NY
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, emotional, curious
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** favorite '94 show chatter
- **Community consensus:** A notable 1994 defense-thread recommendation.
- **Best for someone feeling:** bittersweet curiosity
- **Recommendation patterns:** Late-era sleeper support.
- **Research confidence:** Medium
- **Source keys:** discover_94
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/90cq7q/just_discovered_this_band_would_gratefully/

### 1994-07-03 — Shoreline Amphitheatre, Mountain View, CA
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** another favorite '94 pick
- **Community consensus:** One of the dates fans reach for when making the case that 1994 still mattered.
- **Best for someone feeling:** summer nostalgia, soft late-era glow
- **Recommendation patterns:** 1994-defense support.
- **Research confidence:** Medium
- **Source keys:** discover_94
- **Source URLs:** https://www.reddit.com/r/gratefuldead/comments/90cq7q/just_discovered_this_band_would_gratefully/

### 1994-10-01 — Boston Garden, Boston, MA
- **Era:** Final years (1991–1995)
- **Mood tags:** lyrical, spiritual, bittersweet, textured, reflective, late-era, nostalgic, emotional
- **Energy level:** Medium
- **Audience level:** Deep head
- **Audio quality:** Good — Good (variable, but usually more than usable for serious listening)
- **Key moments:** late-era emotional gravity, 1994 surprise quality
- **Community consensus:** A late, late highlight that many fans cite when arguing there was still beauty left in 1994.
- **Best for someone feeling:** nostalgic, bittersweet, end-of-an-era listening
- **Recommendation patterns:** Usually cited by people defending overlooked late-period shows.
- **Research confidence:** High
- **Source keys:** trips30, discover_94
- **Source URLs:** https://gratefuldeadvault.wordpress.com/2016/03/20/favorite-shows-from-30-trips-around-the-sun/; https://www.reddit.com/r/gratefuldead/comments/90cq7q/just_discovered_this_band_would_gratefully/
