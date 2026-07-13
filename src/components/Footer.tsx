import Link from "next/link";
import { Container } from "./Container";
import { liveRoutes, type Locale } from "@/lib/routes";
import { CALENDLY_URL, CALLSY_URL, LINKEDIN_URL, THREADS_URL } from "@/lib/site";

const copy: Record<
  Locale,
  {
    heading: string;
    tagline: string;
    nav: string;
    elsewhere: string;
    legalKeys: string[];
  }
> = {
  en: {
    heading: "Let's build.",
    tagline: "Arunas Vismantas · Vilnius, Lithuania",
    nav: "Pages",
    elsewhere: "Elsewhere",
    legalKeys: ["privacy", "terms", "imprint"],
  },
  lt: {
    heading: "Kurkime.",
    tagline: "Arunas Vismantas · Vilnius, Lietuva",
    nav: "Puslapiai",
    elsewhere: "Kitur",
    legalKeys: ["privacy-lt", "terms-lt", "imprint-lt"],
  },
};

const socials = [
  { label: "callsy.ai ↗", href: CALLSY_URL, hot: true },
  { label: "LinkedIn ↗", href: LINKEDIN_URL, hot: false },
  { label: "Threads ↗", href: THREADS_URL, hot: false },
  { label: "Calendly ↗", href: CALENDLY_URL, hot: false },
];

export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const pages = liveRoutes(locale).filter(
    (r) => r.nav !== undefined || r.key.startsWith("call"),
  );
  const legal = liveRoutes(locale).filter((r) => c.legalKeys.includes(r.key));

  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div className="max-w-sm">
          <p className="text-4xl font-extrabold uppercase leading-[0.9] tracking-tight">
            {c.heading}
          </p>
          <p className="avtag mt-5 text-paper/50">{c.tagline}</p>
        </div>
        <nav aria-label={c.nav} className="flex flex-col gap-2.5 text-[15px]">
          <p className="avtag text-paper/50">{c.nav}</p>
          {pages.map((r) => (
            <Link
              key={r.key}
              href={r.path}
              className="font-semibold text-paper/80 transition-colors duration-150 hover:text-yellow"
            >
              {r.title}
            </Link>
          ))}
        </nav>
        <nav
          aria-label={c.elsewhere}
          className="flex flex-col gap-2.5 text-[15px]"
        >
          <p className="avtag text-paper/50">{c.elsewhere}</p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold transition-colors duration-150 hover:text-yellow ${
                s.hot ? "text-yellow" : "text-paper/80"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-3 border-t-[2.5px] border-paper/15 py-6">
        <span className="avtag text-paper/45">
          © {new Date().getFullYear()} Arunas Vismantas
        </span>
        <span className="flex gap-4">
          {legal.map((r) => (
            <Link
              key={r.key}
              href={r.path}
              className="avtag text-paper/45 transition-colors duration-150 hover:text-paper"
            >
              {r.title}
            </Link>
          ))}
        </span>
      </Container>
    </footer>
  );
}
