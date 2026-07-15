import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";
import { navRoutes, routeByKey, type Locale } from "@/lib/routes";

const cta: Record<Locale, { key: string; label: string }> = {
  en: { key: "call", label: "Book a call" },
  lt: { key: "call-lt", label: "Konsultacija" },
};

export function Nav({ locale }: { locale: Locale }) {
  const links = navRoutes(locale).map((r) => ({ href: r.path, title: r.title }));
  const callRoute = routeByKey(cta[locale].key);
  const ctaData = { href: callRoute?.path ?? "#", label: cta[locale].label };

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur-sm">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Link
          href={locale === "en" ? "/en" : "/"}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow text-[15px] font-extrabold text-ink ring-2 ring-ink">
            AV
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Arunas Vismantas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-muted transition-colors duration-150 hover:text-blue"
            >
              {l.title}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
          <Button href={ctaData.href}>{ctaData.label}</Button>
        </nav>

        {/* Mobile nav */}
        <MobileNav links={links} cta={ctaData} locale={locale} />
      </Container>
    </header>
  );
}
