import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WebinarForm } from "@/components/WebinarForm";
import { webinar } from "@/lib/webinar";

export const metadata: Metadata = {
  title: webinar.title,
  description: webinar.subtitle,
  openGraph: {
    type: "website",
    title: webinar.title,
    description: webinar.subtitle,
    url: "/vebinaras",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: webinar.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: webinar.title,
    description: webinar.subtitle,
    images: ["/og.jpg"],
  },
};

export default function WebinarLanding() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", webinar.photo),
  );

  return (
    <main className="min-h-full bg-paper pb-24">
      <Container className="py-10 sm:py-14">
        {/* Wordmark only — no nav, no links out. */}
        <div className="mb-10 flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow text-[15px] font-extrabold text-ink ring-2 ring-ink">
            AV
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Arunas Vismantas
          </span>
        </div>

        {/* HERO: big promise on the left, large portrait on the right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: the pitch + primary CTA above the fold */}
          <div>
            <p className="avtag inline-block rounded-lg bg-coral px-3 py-1.5 text-white">
              {webinar.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-5xl">
              {webinar.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">
              {webinar.subtitle}
            </p>

            {/* Plain info line — deliberately NOT a button. */}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-l-[3px] border-coral pl-4 text-[15px] font-bold text-ink">
              <span>{webinar.dateLabel}</span>
              <span aria-hidden className="text-muted">
                ·
              </span>
              <span>{webinar.place}</span>
            </p>

            {/* Primary CTA above the fold */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#registracija"
                className="avb avb-hover inline-flex items-center justify-center bg-yellow px-7 py-4 text-lg font-extrabold uppercase tracking-tight text-ink"
              >
                {webinar.cta}
              </a>
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {webinar.reassurance.map((r) => (
                  <li
                    key={r}
                    className="flex items-center gap-1.5 text-[14px] font-bold text-ink"
                  >
                    <span aria-hidden className="text-coral">
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: large host portrait */}
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-10 lg:max-w-none">
            {hasPhoto ? (
              <div className="avb relative aspect-[4/5] w-full overflow-hidden bg-white">
                <Image
                  src={webinar.photo}
                  alt="Arunas Vismantas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-[28%_15%]"
                  priority
                />
                {/* Name badge over the photo */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/90 to-transparent p-5">
                  <div>
                    <p className="text-xl font-extrabold leading-tight text-paper">
                      Arunas Vismantas
                    </p>
                    <p className="text-sm font-medium text-paper/80">
                      {webinar.host}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="avb flex aspect-[4/5] w-full items-center justify-center bg-yellow">
                <span className="text-7xl font-extrabold text-ink">AV</span>
              </div>
            )}
          </div>
        </div>

        {/* VALUE + FORM: bullets on the left, registration card on the right */}
        <div className="mt-16 grid items-start gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: what they'll learn */}
          <div>
            <p className="avtag text-muted">Ką sužinosi</p>
            <ul className="mt-4 space-y-3">
              {webinar.bullets.map((b) => (
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

            {/* Credibility chips */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {webinar.credentials.map((c) => (
                <li
                  key={c}
                  className="avtag rounded-md border-2 border-ink bg-paper px-2.5 py-1 text-ink"
                >
                  {c}
                </li>
              ))}
            </ul>

            {/* Host bio */}
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
              {webinar.bio}
            </p>
          </div>

          {/* Right: registration form (sticky on desktop) */}
          <div id="registracija" className="lg:sticky lg:top-10">
            <div className="avb bg-ink p-6 text-paper sm:p-8">
              <p className="avtag text-yellow">Registracija</p>
              <p className="mt-2 text-2xl font-extrabold leading-tight">
                Užsiregistruok nemokamai
              </p>
              <p className="mt-2 text-sm text-paper/70">
                Vietų skaičius ribotas. Prisijungimo nuorodą atsiųsime el.
                paštu.
              </p>
              <div className="mt-6">
                <WebinarForm cta={webinar.cta} />
              </div>

              {/* Reassurance strip */}
              <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-paper/15 pt-4">
                {webinar.reassurance.map((r) => (
                  <li
                    key={r}
                    className="flex items-center gap-1.5 text-[13px] font-bold text-paper/80"
                  >
                    <span aria-hidden className="text-yellow">
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 lg:mt-24">
          <p className="avtag text-muted">D.U.K.</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Dažni klausimai
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {webinar.faq.map((item) => (
              <div key={item.q} className="avb bg-white p-5">
                <p className="font-extrabold text-ink">{item.q}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Sticky CTA — keeps the ask in reach while scrolling, all breakpoints */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-[3px] border-ink bg-paper/95 backdrop-blur">
        <Container className="flex items-center justify-between gap-4 py-3">
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-[15px] font-extrabold uppercase tracking-tight text-ink">
              Claude Code online seminaras
            </p>
            <p className="truncate text-[13px] font-bold text-muted">
              {webinar.dateLabel}
            </p>
          </div>
          <a
            href="#registracija"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow px-6 py-3 text-base font-extrabold uppercase tracking-tight text-ink ring-2 ring-ink sm:w-auto sm:px-7"
          >
            {webinar.cta}
            <span aria-hidden className="text-coral">
              →
            </span>
          </a>
        </Container>
      </div>
    </main>
  );
}
