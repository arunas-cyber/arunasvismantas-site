"use client";

import { useState } from "react";

/**
 * Collapsed by default: a "want this on your site?" button that reveals the
 * embed snippet, a one-line instruction, and a copy-to-clipboard button.
 */
export function EmbedCode({
  code,
  triggerLabel,
  heading,
  instruction,
  copyLabel = "Copy",
  copiedLabel = "Copied ✓",
}: {
  code: string;
  triggerLabel: string;
  heading: string;
  instruction: string;
  copyLabel?: string;
  copiedLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked; the text is still selectable
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border-[3px] border-ink bg-yellow px-6 text-[15px] font-bold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
      >
        {triggerLabel}
      </button>
    );
  }

  return (
    <div className="avb bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="avtag text-ink/70">{heading}</p>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-xl border-[3px] border-ink bg-yellow px-5 py-2 text-[14px] font-extrabold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{instruction}</p>
      <pre className="mt-4 overflow-x-auto rounded-lg border-2 border-line bg-paper p-4 text-[12px] leading-relaxed text-ink">
        <code>{code}</code>
      </pre>
    </div>
  );
}
