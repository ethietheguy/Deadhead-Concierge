"use client";

import { useState, useEffect, useCallback } from "react";
import { StealYourFace } from "@/components/StealYourFace";
import { getRecommendation } from "@/lib/concierge/engine";
import { CHIP_KEYWORDS } from "@/lib/concierge/keywords";
import type { ConciergeShow } from "@/lib/concierge/types";

// ─── Placeholder rotation ────────────────────────────────────
const PLACEHOLDERS = [
  "I'm on a long drive and feeling introspective...",
  "It's Friday night and I want to dance...",
  "Show me something I've never heard...",
  "I'm brand new — where do I start?",
  "I just got dumped and I need something that understands...",
  "I'm stoned on my porch watching the sunset...",
  "Show me the weirdest thing they ever played...",
  "I'm cooking dinner and want to groove...",
];

// ─── Format date nicely ──────────────────────────────────────
function formatShowDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Loading state component ─────────────────────────────────
function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <div className="animate-spin">
        <StealYourFace size={48} className="text-terracotta" />
      </div>
      <p className="text-muted text-sm tracking-wide animate-pulse">
        Digging through the vault...
      </p>
    </div>
  );
}

// ─── Recommendation card ─────────────────────────────────────
function RecommendationCard({
  show,
  onTryAnother,
}: {
  show: ConciergeShow;
  onTryAnother: () => void;
}) {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <p className="text-sm text-muted mb-6 tracking-wide">
        Based on what you told us...
      </p>

      {/* Show identity */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight leading-tight">
          {formatShowDate(show.date)}
        </h2>
        <p className="text-lg text-warmblack/70 mt-1">
          {show.venue} — {show.city}
          {show.state ? `, ${show.state}` : ""}
        </p>
        <p className="text-sm text-muted mt-1">Grateful Dead</p>
      </div>

      {/* Headline */}
      <blockquote className="border-l-2 border-terracotta pl-4 mb-10">
        <p className="text-lg sm:text-xl text-navy italic leading-relaxed">
          &ldquo;{show.headline}&rdquo;
        </p>
      </blockquote>

      {/* Why this show */}
      <section className="mb-10">
        <h3 className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
          Why this show
        </h3>
        <p className="text-warmblack/85 leading-relaxed">{show.whyThisShow}</p>
      </section>

      {/* What to listen for */}
      <section className="mb-10">
        <h3 className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
          What to listen for
        </h3>
        <p className="text-warmblack/85 leading-relaxed">{show.listenFor}</p>
      </section>

      {/* The context */}
      <section className="mb-10">
        <h3 className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
          The context
        </h3>
        <p className="text-warmblack/85 leading-relaxed">{show.context}</p>
      </section>

      {/* Fun fact */}
      {show.funFact && (
        <section className="mb-10 bg-cream-dark/50 rounded-lg p-4">
          <p className="text-sm text-warmblack/70">
            <span className="font-semibold text-navy">Fun fact: </span>
            {show.funFact}
          </p>
        </section>
      )}

      {/* Listen link — resolves the show date to the top IA recording at click time */}
      <a
        href={`/api/archive/${show.date}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-terracotta text-cream font-medium hover:bg-terracotta-dark transition-colors text-lg mb-6"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Listen on Archive.org
      </a>

      {/* Try another */}
      <button
        onClick={onTryAnother}
        className="w-full py-3 rounded-lg border border-navy/20 text-navy font-medium hover:bg-cream-dark transition-colors"
      >
        Tell me something else
      </button>
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────
export default function ConciergePage() {
  const [moodText, setMoodText] = useState("");
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<ConciergeShow | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previousIds, setPreviousIds] = useState<string[]>([]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Rotate placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleChip = useCallback((keyword: string) => {
    setSelectedChips((prev) =>
      prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword]
    );
  }, []);

  const handleSubmit = useCallback(async () => {
    const trimmed = moodText.trim();
    if (!trimmed && selectedChips.length === 0) return;

    setIsLoading(true);

    // Local fallback used when there's no free text, or when the API errors.
    const runLocal = (): ConciergeShow =>
      getRecommendation(
        {
          text: trimmed || undefined,
          chips: selectedChips.length > 0 ? selectedChips : undefined,
        },
        previousIds,
      );

    let result: ConciergeShow | null = null;

    // Only call the AI path when the user actually typed something.
    // Chip-only requests are fast and deterministic — no need to spend a token.
    if (trimmed) {
      try {
        const res = await fetch("/api/concierge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: trimmed,
            chips: selectedChips,
            previousIds,
          }),
        });
        if (res.ok) {
          const data = (await res.json()) as { show: ConciergeShow };
          result = data.show;
        }
      } catch {
        // swallow — we'll fall back below
      }
    }

    if (!result) {
      result = runLocal();
      // Tiny delay so the local-only path still feels considered, not snappy
      await new Promise((r) => setTimeout(r, 400));
    }

    setPreviousIds((prev) => [...prev, result!.id]);
    setRecommendation(result);
    setIsLoading(false);
  }, [moodText, selectedChips, previousIds]);

  const handleTryAnother = useCallback(() => {
    setRecommendation(null);
    // Keep the mood text so user can tweak it
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const showInput = !recommendation && !isLoading;

  return (
    <div className="max-w-page mx-auto px-4 sm:px-6">
      <div className="max-w-2xl mx-auto py-12 sm:py-20">
        {/* Hero — compressed when showing result */}
        <div className={recommendation ? "mb-8" : "mb-12"}>
          <div className="inline-flex items-center gap-2 text-terracotta mb-6">
            <StealYourFace size={18} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium">
              Deadhead Concierge
            </span>
          </div>

          {showInput && (
            <>
              <h1 className="text-3xl sm:text-5xl font-semibold text-navy tracking-tight leading-[1.1] mb-2">
                Tell us how you&rsquo;re feeling.
              </h1>
              <p className="text-lg text-warmblack/60">
                We&rsquo;ll tell you what Dead show to listen to.
              </p>
            </>
          )}
        </div>

        {/* Input area */}
        {showInput && (
          <div className="space-y-6">
            <div>
              <textarea
                value={moodText}
                onChange={(e) => setMoodText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={PLACEHOLDERS[placeholderIndex]}
                rows={3}
                className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-lg text-warmblack placeholder:text-warmblack/30 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/40 resize-none transition-all"
              />
              <button
                onClick={handleSubmit}
                disabled={!moodText.trim() && selectedChips.length === 0}
                className="mt-3 w-full sm:w-auto px-8 py-3 rounded-lg bg-terracotta text-cream font-medium hover:bg-terracotta-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-lg"
              >
                Find my show
              </button>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3 font-medium">
                or pick a vibe
              </p>
              <div className="flex flex-wrap gap-2">
                {CHIP_KEYWORDS.map((keyword) => {
                  const isSelected = selectedChips.includes(keyword);
                  return (
                    <button
                      key={keyword}
                      onClick={() => toggleChip(keyword)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-terracotta text-cream"
                          : "bg-white border border-navy/15 text-warmblack/70 hover:border-terracotta/40 hover:text-navy"
                      }`}
                    >
                      {keyword}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {isLoading && <LoadingState />}

        {/* Result */}
        {recommendation && !isLoading && (
          <RecommendationCard
            show={recommendation}
            onTryAnother={handleTryAnother}
          />
        )}
      </div>
    </div>
  );
}
