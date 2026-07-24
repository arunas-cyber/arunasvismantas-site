import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { webinar } from "@/lib/webinar";
import { LINKEDIN_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Iki susitikimo seminare",
};

export default function WebinarThanks() {
  return (
    <main className="flex min-h-full items-center bg-paper">
      <Container className="max-w-xl py-16">
        <div className="avb bg-white px-6 py-12 text-center sm:px-10">
          <p className="text-4xl">🎉</p>
          <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Viskas paruošta
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Tavo vieta rezervuota. Prisijungimo nuorodą ir priminimą atsiųsime
            el. paštu prieš seminarą.
          </p>
          <p className="avtag mt-8 text-coral">{webinar.dateLabel}</p>
        </div>

        {/* LinkedIn follow invite */}
        <div className="avb mt-6 flex flex-col items-start gap-5 bg-blue p-6 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="min-w-0">
            <p className="avtag text-paper/70">Kol laukiam seminaro</p>
            <p className="mt-1.5 text-xl font-extrabold leading-tight">
              Sek mane LinkedIn
            </p>
            <p className="mt-1.5 text-[15px] font-medium text-paper/85">
              Dalinuosi, ką iš tikrųjų daro AI ir kaip automatizuoju darbus
              kasdien. Be teorijos, tik iš praktikos.
            </p>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-[3px] border-ink bg-yellow px-6 py-3 text-[16px] font-extrabold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            Sekti LinkedIn
          </a>
        </div>
      </Container>
    </main>
  );
}
