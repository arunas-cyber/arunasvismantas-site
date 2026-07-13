import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { navRoutes, routeByKey, type Locale } from "@/lib/routes";

const cta: Record<Locale, { key: string; label: string }> = {
  en: { key: "call", label: "Book a call" },
  lt: { key: "call-lt", label: "Konsultacija" },
};

export function Nav({ locale }: { locale: Locale }) {
  const links = navRoutes(locale);
  const callRoute = routeByKey(cta[locale].key);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={locale === "en" ? "/" : "/lt"}
          className="shrink-0 font-serif text-lg font-medium tracking-tight"
        >
          Arunas Vismantas
        </Link>
        <nav className="flex items-center gap-5 sm:gap-6">
          {links.map((r) => (
            <Link
              key={r.key}
              href={r.path}
              className="hidden text-sm font-medium text-muted transition-colors duration-200 hover:text-ink sm:block"
            >
              {r.title}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
          {callRoute && (
            <Button href={callRoute.path}>{cta[locale].label}</Button>
          )}
        </nav>
      </Container>
    </header>
  );
}
