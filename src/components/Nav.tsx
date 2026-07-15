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
        <nav className="flex items-center gap-5 sm:gap-6">
          {links.map((r) => (
            <Link
              key={r.key}
              href={r.path}
              className="hidden text-[15px] font-semibold text-muted transition-colors duration-150 hover:text-blue lg:block"
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
