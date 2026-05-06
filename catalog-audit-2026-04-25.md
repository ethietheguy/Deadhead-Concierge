# Catalog Audit — 2026-04-25

Skim pass over `lib/concierge/catalog.ts` (55 entries) flagging factual claims that look hallucinated or overclaimed. Generic editorial vibes left alone — focus is on specific factual claims that ship as truth in the UI but aren't sourced.

Severity legend:

- **🔴 CONFIRMED WRONG** — claim is factually incorrect. Fix or cut.
- **🟠 LIKELY WRONG** — claim contradicts well-documented facts; needs correction.
- **🟡 NEEDS VERIFICATION** — specific factual claim that may be true but is unverified. Run `npm run research -- DATE` and check, or soften.
- **🟣 OVERCLAIM** — superlative or universal claim ("the only," "the most," "the greatest in history") that the new prompt rules ban anyway. Soften or cut.

---

## 🔴 Confirmed wrong

### 1. Cornell 5/8/77 (#1, line 46) — funFact
> "For years, Deadheads debated whether the legendary tape was actually from Cornell or a different show. DNA-style audio analysis finally confirmed: it's real."

There is no such technique as "DNA-style audio analysis" applied to Dead tapes. The lineage debate around Cornell did exist (and was about source-tape provenance, not authenticity in this sense), but the resolution wasn't through DNA-anything — it was Rhino reviewing master tapes for the 2017 release.

**Action:** Replace with the version proposed earlier: *"By the early 2000s 'Cornell' was so synonymous with peak Dead that newcomers sometimes assumed it had been the band's only legendary night. There were dozens."* Or drop the funFact entirely.

### 2. 2/13/70 Fillmore East (#7, line 234) — context
> "This Dark Star became the template for everything that followed — the Live/Dead album was built from performances just like this one."

Live/Dead was built from the **Fillmore West** run of February 27 – March 2, 1969. Not the **Fillmore East** in February 1970. Different city, different year, different shows. The 2/13/70 Dark Star is real and great but had nothing to do with making Live/Dead.

**Action:** Cut the Live/Dead reference. Reframe as "this show is in the spirit of what Live/Dead captured" if you want to keep the texture, or drop the analogy.

### 3. 6/24/85 Riverbend (#25, line 827) — funFact
> "[In the Dark]... the only Dead album to go platinum."

Wrong. **American Beauty** is certified 3× platinum and **Workingman's Dead** is 2× platinum, both before *In the Dark*. *In the Dark* did go platinum but is not the only one — and is not even the highest-certified.

**Action:** Cut "only Dead album to go platinum" or rewrite. The accurate fact is: *In the Dark* was the band's only album with a Top-10 single (Touch of Grey, #9). That's the more interesting and correct version.

---

## 🟠 Likely wrong

### 4. Lyceum 5/26/72 (#3, line 109) — funFact
> "The Europe '72 triple LP became the Dead's best-selling album. Most of it was pulled from this single show."

"Best-selling album" is almost certainly wrong — *American Beauty* outsold it (3× platinum vs *Europe '72*'s 1× platinum). And *Europe '72* was compiled from at least seven different shows across the tour, with the Lyceum dates contributing many tracks but not "most of it."

**Action:** Verify with research script. Likely soften to *"The Europe '72 triple LP introduced a generation of European fans to the band; many of its strongest tracks came from this Lyceum night."*

### 5. 9/16/87 MSG (#52, line 1784) — funFact
> "In the Dark made the Grateful Dead the only band in history to score their first Top 10 single more than 20 years into their career."

"Only band in history" is the kind of superlative that's almost always wrong. The Touch of Grey #9 chart position 20+ years in is real and remarkable; the universal claim is unverifiable and likely false.

**Action:** Soften to *"Touch of Grey gave the Grateful Dead — 22 years into their career — their first and only Top 10 single."* Same texture, no superlative.

### 6. 4/29/71 Fillmore East (#13, line 426) — funFact
> "Several songs on the Skull & Roses LP were recorded from this Fillmore East run. The album became the Dead's first certified gold record."

The Skull & Roses LP did pull from this run — that part's likely fine. "First certified gold record" needs verification. *American Beauty* (1970) and *Workingman's Dead* (1970) both went gold; not sure of the dates of certification, but Skull & Roses being literally first is suspect.

**Action:** Verify or cut "first" claim. Safer: *"Skull & Roses became the Dead's first commercial breakthrough — gold-certified shortly after release."*

---

## 🟡 Needs verification (run research script before shipping)

### 7. Veneta 8/27/72 (#2, line 78) — funFact
> "The temperature hit 107 degrees that day."

Different sources cite anywhere from 100°F to 108°F. The Sunshine Daydream movie says "100+." 107 specifically might be exact or might be folklore. Run the research script and check Reddit threads.

### 8. Branford 3/29/90 (#4, line 140) — funFact
> "Branford later said he'd never played with a band that listened like the Dead. High praise from a jazz legend."

Direct quote attributed to Branford. He has spoken positively about the show in multiple interviews; this exact quote may or may not be real. **Action:** Find the actual Branford interview quote (it exists, easy to find) and use that one verbatim with attribution.

### 9. Branford 3/29/90 (#4, line 139) — context
> "This show converted more new Deadheads than almost any other late-era recording."

Unverifiable superlative — "more than almost any other" is the kind of thing the new prompt rules ban. **Action:** Cut the sentence; let the music speak for itself.

### 10. Watkins Glen 7/28/73 (#16, line 523) — funFact
> "Official attendance estimate: 600,000. Unofficial counts run higher. Either way, it's still the largest rock concert ever held in the United States."

The 600K figure is widely cited but disputed (Guinness recognized it for years, then walked it back). "Still the largest rock concert ever held in the US" is contested — some sources cite Steve Wozniak's US Festival or Garth Brooks' Central Park show as comparable or larger. **Action:** Verify or hedge to *"one of the largest rock concerts ever held in the US."*

### 11. Red Rocks 7/8/78 (#8, line 268) — funFact
> "Red Rocks has a strict noise curfew. The Dead, predictably, blew past it."

Plausible Dead lore but not anchored to this specific show. **Action:** Verify or cut. If you can't tie it to 7/8/78 specifically, kill it.

### 12. 5/22/77 (#31, line 1022) — whyThisShow
> "Dick Latvala himself reportedly said this show 'tears Cornell apart, rips it to shreds.'"

The "reportedly" hedge is doing a lot of work. Dick Latvala (the Dead's archivist) was real and outspoken; this quote may be authentic or fan-attributed. **Action:** Find a primary source for this quote. If you can't, cut it or replace with the documented fact that Latvala chose this show for Dick's Picks 3.

### 13. 5/15/77 (#33, line 1097) — funFact
> "The very first Iko Iko was played this night..."

The first Iko Iko by the Dead is somewhere in May '77 — but verifying this specific night as THE debut needs a setlist database check.

### 14. 3/5/72 (#42, line 1414) — headline
> "The first Black Throated Wind. The first Mind Left Body Jam."

"First Black Throated Wind" is verifiable from setlist DB. "First true Mind Left Body Jam" is fuzzier — the MLB Jam emerged gradually, no clean debut date. **Action:** Verify the BTW claim; soften the MLB claim.

### 15. 9/24/88 MSG Rainforest (#53, line 1820) — whyThisShow
> "Suzanne Vega singing Robyn Hitchcock's 'Chinese Bones' is, in one Archive reviewer's words, 'worth the download alone'..."

Need to verify that Suzanne Vega actually performed "Chinese Bones" with the Dead at this benefit. The setlist shows "Chinese Bones" but the attribution to Vega specifically is the kind of detail that gets invented. Same for Hall & Oates and "Every Time You Go Away" attribution.

### 16. 7/19/74 Selland (#39, line 1313) — funFact
> "The Wall of Sound was so loud at Fresno that the Selland Arena's interior fixtures reportedly came loose from the ceiling vibration."

"Reportedly" again. Specific anecdote that sounds tellable but may be fabricated. **Action:** Find a source or cut.

### 17. 4/22/79 Spartan (#51, line 1746) — funFact
> "Brent learned roughly 100 Grateful Dead songs in three weeks before his first show."

Specific number + specific timeline. Plausible. May come from a real interview or be a rounded fan estimate. **Action:** Verify against Brent interviews or biography sources.

---

## 🟣 Overclaim / banned-phrase territory

These don't necessarily contain hallucinated facts but use the kind of language the new system prompt forbids — universal directives, "greatest of all time" superlatives, etc. Worth a sweep regardless:

- **#1 Cornell whyThisShow:** "If you only ever listen to one Dead show, this is it." → Banned phrase. Replace.
- **#1 Cornell whyThisShow:** "playing on a level that shouldn't be possible" → Hype.
- **#1 Cornell context:** "the most-traded bootleg in history" → Unverifiable superlative.
- **#11 Live/Dead funFact:** "Live/Dead essentially invented the modern live album." → Wrong (live albums predate it: James Brown at the Apollo 1963, Allmans at Fillmore 1971, etc.).
- **#15 RFK '73 context:** "the Dead's first major shared tour with another act" → Overclaim; the Dead had shared bills with countless bands since 1965.
- **#37 8/6/74 headline:** "The Eyes of the World that everyone agrees is the best ever. Period." → Universal claim. The verse-solo Eyes claim is real; "everyone agrees" isn't.
- **#38 2/24/74 listenFor:** "'the purest expression of the human experience ever uttered' — high praise even by Deadhead standards." → Probably a real review quote, but worth verifying it actually exists in the comments.

---

## Patterns / themes

A few systemic issues worth fixing at the workflow level, not just per-entry:

**1. Quote attribution is the biggest risk surface.** Roughly a third of the entries contain quotes attributed to "Archive reviewers" or specific people (Dick Latvala, Branford Marsalis, etc.). Some of these are clearly real (the new research script confirmed several Cornell reviewer phrasings); others may be invented or paraphrased. Every quoted line should be traceable to a real comment or interview before shipping.

**2. "First-ever" claims are a hallucination magnet.** AI loves debuts and origins. The 2/9/73 Eyes debut is real and verifiable. The "first Iko Iko" at 5/15/77 might or might not be. The "first true Mind Left Body Jam" at 3/5/72 is fuzzy. Treat every "first" claim as suspect until verified against jerrybase.com or gdsets.com.

**3. Numerical claims are suspect.** Specific numbers — 107 degrees at Veneta, 100 songs in three weeks for Brent, 600,000 at Watkins Glen — sound concrete but are exactly the kind of thing AI invents to add texture. Cross-check or use ranges.

**4. Album-sales claims are wrong.** Two separate entries make incorrect platinum/best-selling claims (#3 Lyceum, #25 Riverbend). The Dead's RIAA certification history is on Wikipedia and easy to verify; one pass through it would fix both.

---

## Recommended next steps

1. **Critical fixes (this session or next):** Address the four 🔴 CONFIRMED WRONG items. They ship as truth in the UI right now.
2. **Then the 🟠s.** Three album/superlative claims that contradict known facts.
3. **Then run the research script on the 🟡s.** For each, `npm run research -- DATE` will surface real reviews; either find the quote you attributed or cut/replace.
4. **The 🟣 overclaims** can be cleaned up gradually as you re-edit each entry. The new prompt voice will pull future generation away from this language; the catalog itself still has the old voice baked in.

Total flags: ~25 across 55 entries. Most catalog content is fine; the bad stuff clusters in `funFact` (where AI reaches for "interesting" and invents) and in the most famous shows (where the temptation to mythologize is highest).
