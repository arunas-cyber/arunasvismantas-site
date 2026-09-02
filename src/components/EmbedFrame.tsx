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
    let origin = "";
    try {
      origin = new URL(src).origin;
    } catch {
      return;
    }
    function onMessage(e: MessageEvent) {
      if (e.origin !== origin) return;
      const raw =
        e.data && typeof e.data === "object" ? e.data.height : e.data;
      const n = Number(raw);
      if (Number.isFinite(n) && n > 200) setHeight(Math.ceil(n));
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
