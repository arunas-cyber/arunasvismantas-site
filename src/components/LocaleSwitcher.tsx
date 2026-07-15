"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeByKey, routeByPath, type Locale } from "@/lib/routes";

/** Links to the current page's counterpart in the other locale. */
export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const current = routeByPath(pathname);
  const counterpart = current?.counterpart
    ? routeByKey(current.counterpart)
    : undefined;
  const href = counterpart?.path ?? (locale === "en" ? "/" : "/en");
  const label = locale === "en" ? "LT" : "EN";

  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
      aria-label={locale === "en" ? "Lietuviškai" : "In English"}
    >
      {label}
    </Link>
  );
}
