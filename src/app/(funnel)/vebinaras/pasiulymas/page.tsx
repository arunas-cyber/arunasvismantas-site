import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { webinar } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Registracija sėkminga",
  description: webinar.upsell.title,
};

export default function WebinarUpsell() {
  const u = webinar.upsell;
  return (
    <main className="min-h-full bg-paper">
      <Container className="max-w-2xl py-10 sm:py-16">
        {/* Confirmation — clear green success state */}
        <div className="avb bg-[#1FC16B] px-6 py-9 text-center sm:px-10">
          <span
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink bg-white shadow-[3px_3px_0_#141210]"
            style={{ animation: "success-pop 0.45s ease-out both" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9"
              fill="none"
              stroke="#0F8A4C"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 12.6l5 5L20 6.4" />
            </svg>
          </span>
          <h1 className="mt-5 text-2xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-3xl">
            Registracija sėkminga!
          </h1>
          <p className="mx-auto mt-2 max-w-md text-[15px] font-semibold text-ink/80">
            Tavo vieta rezervuota. Prisijungimo nuorodą jau siunčiame į tavo el.
            paštą.
          </p>
        </div>

        {/* The tripwire offer */}
        <div className="avb mt-8 bg-white p-6 sm:p-10">
          <p className="avtag text-coral">{u.kicker}</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl">
            {u.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{u.pitch}</p>

          <ul className="mt-6 space-y-3">
            {u.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-[17px] leading-relaxed text-ink"
              >
                <span aria-hidden className="mt-0.5 font-bold text-coral">
                  ★
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t-[3px] border-ink pt-6">
            <span className="text-3xl font-extrabold">{u.price}</span>
            <a
              href={u.checkoutUrl}
              className="flex min-h-13 flex-1 items-center justify-center rounded-xl border-[3px] border-ink bg-yellow px-6 py-3 text-[17px] font-extrabold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
            >
              {u.cta}
            </a>
          </div>

          <div className="mt-5 text-center">
            <a
              href="/vebinaras/aciu"
              className="text-sm font-semibold text-muted underline underline-offset-4 transition-colors duration-150 hover:text-ink"
            >
              {u.decline}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
