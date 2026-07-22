"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/** Registration form. On success, redirects to the upsell page. */
export function WebinarForm({ cta }: { cta: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Nepavyko užregistruoti. Bandykite dar kartą.");
        setLoading(false);
        return;
      }
      router.push("/vebinaras/pasiulymas");
    } catch {
      setError("Nepavyko užregistruoti. Bandykite dar kartą.");
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border-[3px] border-ink bg-white px-4 py-3 text-[16px] font-medium text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label className="block">
        <span className="sr-only">Vardas</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tavo vardas"
          autoComplete="name"
          className={field}
        />
      </label>
      <label className="block">
        <span className="sr-only">El. paštas</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tavo el. paštas"
          autoComplete="email"
          className={field}
        />
      </label>
      {error && <p className="text-sm font-semibold text-coral">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="flex min-h-13 w-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-ink bg-yellow px-6 py-3 text-[17px] font-extrabold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal disabled:opacity-60"
      >
        {loading ? "Registruojama..." : cta}
      </button>
      <p className="text-center text-xs text-muted">
        Registruodamasis sutinki gauti el. laišką su prisijungimo nuoroda.
      </p>
    </form>
  );
}
