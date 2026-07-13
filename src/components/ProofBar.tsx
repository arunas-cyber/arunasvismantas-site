const proofs = [
  "Rykliai. Lietuva (TV3)",
  "Latitude59",
  "500 Global",
  "Firstpick",
  "Founders & Food",
];

const line = proofs.map((p) => `★ ${p}`).join(" ") + " ";

/** Marquee proof band, straight from the brand book. */
export function ProofBar() {
  return (
    <div className="avb overflow-hidden bg-coral text-white">
      <div
        aria-label={proofs.join(", ")}
        className="flex w-max animate-[marquee_22s_linear_infinite] whitespace-nowrap py-3 font-mono text-[15px] font-bold uppercase tracking-[0.06em]"
      >
        <span aria-hidden>{line.repeat(3)}</span>
        <span aria-hidden>{line.repeat(3)}</span>
      </div>
    </div>
  );
}
