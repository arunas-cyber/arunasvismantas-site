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
};

export default function WebinarLanding() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", webinar.photo),
  );

  return (
    <main className="min-h-full bg-paper">
      <Container className="py-10 sm:py-16">
        {/* Wordmark only — no nav, no links out. */}
        <div className="mb-10 flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow text-[15px] font-extrabold text-ink ring-2 ring-ink">
            AV
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Arunas Vismantas
          </span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left: the pitch */}
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

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="avb inline-flex items-center bg-yellow px-4 py-2 text-[15px] font-bold">
                {webinar.dateLabel}
              </span>
              <span className="avb inline-flex items-center bg-white px-4 py-2 text-[15px] font-bold">
                {webinar.place}
              </span>
            </div>

            <ul className="mt-8 space-y-3">
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

            <div className="mt-8 flex items-start gap-4 border-t-[3px] border-ink pt-6">
              {hasPhoto && (
                <div className="avb relative h-20 w-20 shrink-0 overflow-hidden bg-white">
                  <Image
                    src={webinar.photo}
                    alt="Arunas Vismantas"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-[15px] leading-relaxed text-muted">
                {webinar.bio}
              </p>
            </div>
          </div>

          {/* Right: the form (sticky on desktop) */}
          <div className="lg:sticky lg:top-10">
            <div className="avb bg-ink p-6 text-paper sm:p-8">
              <p className="avtag text-yellow">Registracija</p>
              <p className="mt-2 text-2xl font-extrabold leading-tight">
                Užsiregistruok nemokamai
              </p>
              <p className="mt-2 text-sm text-paper/70">
                Vietų skaičius ribotas. Prisijungimo nuorodą atsiųsime el. paštu.
              </p>
              <div className="mt-6">
                <WebinarForm cta={webinar.cta} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
