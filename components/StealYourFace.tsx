/**
 * Minimalist steal-your-face nod: a simple circle + lightning bolt.
 * Not the full SYF — too maximalist. This keeps it subtle, per the
 * product guardrails (no tie-dye, no dancing bears).
 */
export function StealYourFace({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.5 5.5 L8 13 H11.5 L10 18.5 L16 11 H12.5 L13.5 5.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
