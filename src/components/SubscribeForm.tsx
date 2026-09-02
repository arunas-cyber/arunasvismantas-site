"use client";

import { useState } from "react";

/** Email capture for the newsletter. Posts to /api/subscribe (Loops). */
export function SubscribeForm({
  source = "newsletter",
  placeholder = "Your email",
  cta = "Subscribe",
  loadingLabel = "Subscribing...",
  success = "Thanks! You're on the list.",
  error = "Something went wrong. Try again.",
  note,
}: {
  source?: string;
  placeholder?: string;
  cta?: string;
  loadingLabel?: string;
  success?: string;
  error?: string;
  note?: string;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) {
        setState("error");
        return;
      }
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="avb bg-yellow p-6">
        <p className="text-lg font-extrabold tracking-tight text-ink">
          {success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{placeholder}</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            autoComplete="email"
            className="w-full rounded-xl border-[3px] border-ink bg-white px-4 py-3 text-[16px] font-medium text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </label>
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex min-h-13 shrink-0 cursor-pointer items-center justify-center rounded-xl border-[3px] border-ink bg-yellow px-6 text-[15px] font-extrabold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal disabled:opacity-60"
        >
          {state === "loading" ? loadingLabel : cta}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3 text-sm font-semibold text-coral">{error}</p>
      )}
      {note && <p className="mt-3 text-xs text-muted">{note}</p>}
    </form>
  );
}
