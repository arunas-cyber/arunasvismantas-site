import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { webinar } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Iki susitikimo vebinare",
};

export default function WebinarThanks() {
  return (
    <main className="flex min-h-full items-center bg-paper">
      <Container className="max-w-xl py-16 text-center">
        <div className="avb bg-white px-6 py-12 sm:px-10">
          <p className="text-4xl">🎉</p>
          <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Viskas paruošta
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Tavo vieta rezervuota. Prisijungimo nuorodą ir priminimą atsiųsime
            el. paštu prieš vebinarą.
          </p>
          <p className="avtag mt-8 text-coral">{webinar.dateLabel}</p>
        </div>
      </Container>
    </main>
  );
}
