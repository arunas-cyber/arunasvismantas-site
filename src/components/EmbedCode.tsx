"use client";

import { useState } from "react";

/** A copy-to-clipboard box for an embed snippet. */
export function EmbedCode({
  code,
  heading,
  copyLabel = "Copy",
  copiedLabel = "Copied ✓",
}: {
  code: string;
  heading: string;
  copyLabel?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked; user can still select the text manually
    }
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
      <pre className="mt-4 overflow-x-auto rounded-lg border-2 border-line bg-paper p-4 text-[12px] leading-relaxed text-ink">
        <code>{code}</code>
      </pre>
    </div>
  );
}
