const proofs = [
  "Rykliai. Lietuva (TV3)",
  "Latitude59",
  "500 Global",
  "Firstpick",
  "Founders & Food",
];

/**
 * One marquee half. The proof set is repeated enough to exceed any viewport,
 * so translating the track by exactly -50% (one half) never leaves a gap.
 * Explicit padding on each item keeps spacing uniform across the loop seam,
 * including on mobile where whitespace-based spacing can round unevenly.
 */
function Half() {
  return (
    <ul className="flex shrink-0 items-center">
      {Array.from({ length: 3 }).flatMap((_, r) =>
        proofs.map((p, i) => (
          <li key={`${r}-${i}`} className="flex items-center whitespace-nowrap">
            <span className="px-4">{p}</span>
            <span aria-hidden className="text-white/70">
              ★
            </span>
          </li>
        )),
      )}
    </ul>
  );
}

/** Marquee proof band, straight from the brand book. */
export function ProofBar() {
  return (
    <div
      className="avb overflow-hidden bg-coral text-white"
      role="marquee"
      aria-label={proofs.join(", ")}
    >
      <div
        aria-hidden
        className="flex w-max animate-[marquee_34s_linear_infinite] py-3 font-mono text-[15px] font-bold uppercase tracking-[0.06em] [will-change:transform]"
      >
        <Half />
        <Half />
      </div>
    </div>
  );
}
