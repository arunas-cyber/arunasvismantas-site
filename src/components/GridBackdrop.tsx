"use client";

import { useEffect, useRef } from "react";

interface GridBackdropProps {
  rows?: number;
  cols?: number;
  /** wave = diagonal sweep, pulse = ripple from center, random = scattered */
  animation?: "pulse" | "wave" | "random";
  /** seconds per pulse cycle */
  duration?: number;
}

/**
 * Animated data-grid backdrop for color-block sections (brand "alive" layer).
 * Renders behind content: parent needs `relative`, siblings need `relative`
 * (or z-10) to sit above it. Ink cells at low opacity keep the 60/30/10 rule.
 * With prefers-reduced-motion the pulse stops at the resting opacity.
 */
export function GridBackdrop({
  rows = 8,
  cols = 16,
  animation = "wave",
  duration = 3,
}: GridBackdropProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse-follow glow, tracked on the parent section only.
  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    parent.addEventListener("mousemove", onMove);
    return () => parent.removeEventListener("mousemove", onMove);
  }, []);

  const centerR = (rows - 1) / 2;
  const centerC = (cols - 1) / 2;

  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    let delay: number;
    if (animation === "wave") {
      delay = (r + c) * 0.1;
    } else if (animation === "random") {
      // Deterministic pseudo-random so server and client render identically.
      delay = (((i * 2654435761) >>> 0) % 1000) / 1000 * duration;
    } else {
      delay = Math.hypot(r - centerR, c - centerC) * 0.2;
    }
    return (
      <span
        key={i}
        className="rounded-[3px] bg-ink"
        style={{
          opacity: 0.05,
          animation: `cell-pulse ${duration}s ease-in-out ${delay.toFixed(2)}s infinite alternate`,
        }}
      />
    );
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="grid h-full w-full gap-1.5 p-2"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {cells}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx, 65%) var(--my, 35%), rgb(20 18 16 / 0.12), transparent 70%)",
        }}
      />
    </div>
  );
}
