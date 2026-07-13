const bars = [
  "bg-ink",
  "bg-ink",
  "bg-coral",
  "bg-ink",
  "bg-blue",
  "bg-ink",
  "bg-ink",
  "bg-coral",
  "bg-ink",
  "bg-blue",
  "bg-ink",
  "bg-ink",
];

/** Animated voice waveform, the brand's signature motif. */
export function Waveform() {
  return (
    <div aria-hidden className="flex h-14 max-w-md items-end gap-1.5">
      {bars.map((color, i) => (
        <span
          key={i}
          className={`${color} h-full flex-1 origin-bottom rounded-[3px] animate-[wave_1.1s_ease-in-out_infinite]`}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
