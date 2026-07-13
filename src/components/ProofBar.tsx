const proofs = [
  "Rykliai. Lietuva (TV3)",
  "Latitude59",
  "500 Global",
  "Firstpick",
  "Founders & Food",
];

export function ProofBar() {
  return (
    <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {proofs.map((p) => (
        <li
          key={p}
          className="text-sm font-medium tracking-wide text-muted"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}
