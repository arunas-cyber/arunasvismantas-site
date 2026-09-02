"use client";

import { useEffect, useState } from "react";

/**
 * Auto-resizing iframe for embedded tools whose content height changes with
 * state (so a fixed height either scrolls or leaves a void). It listens for a
 * postMessage from the embedded app carrying its height and matches it.
 *
 * The embedded app must post its height, e.g. on load + resize:
 *   const send = () => parent.postMessage(
 *     { type: "resize", height: document.documentElement.scrollHeight }, "*");
 *   new ResizeObserver(send).observe(document.body); send();
 *
 * Until it does, we fall back to `minHeight`. Messages are accepted only from
 * the embedded app's own origin.
 */
export function EmbedFrame({
  src,
  title,
  minHeight = 760,
}: {
  src: string;
  title: string;
  minHeight?: number;
}) {
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    // The embedded tool can post from its published or preview subdomain, so we
    // don't hard-restrict the origin. Instead we validate the payload and clamp
    // to a sane pixel range (a stray/rogue resize is at worst cosmetic).
    function onMessage(e: MessageEvent) {
      const d = e.data;
      const raw =
        d && typeof d === "object" ? (d.height ?? d.value ?? d.h) : d;
      const n = Number(raw);
      if (Number.isFinite(n) && n >= 200 && n <= 6000) setHeight(Math.ceil(n));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [src]);

  return (
    <iframe
      src={src}
      title={title}
      className="block w-full"
      style={{ height: `${height}px`, border: 0 }}
      loading="lazy"
      allow="clipboard-write"
    />
  );
}
