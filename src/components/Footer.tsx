import Link from "next/link";
import { Container } from "./Container";
import { liveRoutes, type Locale } from "@/lib/routes";
import { CALENDLY_URL, CALLSY_URL, LINKEDIN_URL } from "@/lib/site";

const copy: Record<
  Locale,
  { tagline: string; nav: string; elsewhere: string; legalKeys: string[] }
> = {
  en: {
    tagline:
      "Founder of Callsy. Building AI agents and helping founders build theirs.",
    nav: "Pages",
    elsewhere: "Elsewhere",
    legalKeys: ["privacy", "terms", "imprint"],
  },
  lt: {
    tagline:
      "Callsy įkūrėjas. Kuriu AI agentus ir padedu jų susikurti kitiems.",
    nav: "Puslapiai",
    elsewhere: "Kitur",
    legalKeys: ["privacy-lt", "terms-lt", "imprint-lt"],
  },
};

const socials = [
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Callsy", href: CALLSY_URL },
  { label: "Calendly", href: CALENDLY_URL },
];

export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const pages = liveRoutes(locale).filter(
    (r) => r.nav !== undefined || r.key.startsWith("call"),
  );
  const legal = liveRoutes(locale).filter((r) => c.legalKeys.includes(r.key));

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div className="max-w-sm">
          <p className="font-serif text-xl">Arunas Vismantas</p>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            {c.tagline}
          </p>
        </div>
        <nav aria-label={c.nav} className="flex flex-col gap-2 text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-paper/50">
            {c.nav}
          </p>
          {pages.map((r) => (
            <Link
              key={r.key}
              href={r.path}
              className="text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              {r.title}
            </Link>
          ))}
        </nav>
        <nav aria-label={c.elsewhere} className="flex flex-col gap-2 text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-paper/50">
            {c.elsewhere}
          </p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-3 border-t border-paper/10 py-6 text-xs text-paper/50">
        <span>© {new Date().getFullYear()} Arunas Vismantas</span>
        <span className="flex gap-4">
          {legal.map((r) => (
            <Link
              key={r.key}
              href={r.path}
              className="transition-colors duration-200 hover:text-paper"
            >
              {r.title}
            </Link>
          ))}
        </span>
      </Container>
    </footer>
  );
}
