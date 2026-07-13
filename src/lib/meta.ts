import type { Metadata } from "next";
import { routeByKey, SITE_URL } from "./routes";

/**
 * Per-page metadata derived from routes.ts: title, description, canonical,
 * and hreflang alternates when a locale counterpart exists.
 */
export function pageMetadata(key: string): Metadata {
  const r = routeByKey(key);
  if (!r) throw new Error(`Unknown route key: ${key}`);
  const cp = r.counterpart ? routeByKey(r.counterpart) : undefined;

  let languages: Record<string, string> | undefined;
  if (cp) {
    const en = r.locale === "en" ? r : cp;
    const lt = r.locale === "lt" ? r : cp;
    languages = {
      en: `${SITE_URL}${en.path}`,
      lt: `${SITE_URL}${lt.path}`,
      "x-default": `${SITE_URL}${en.path}`,
    };
  }

  const isHome = key === "home" || key === "home-lt";

  return {
    title: isHome ? { absolute: r.title } : r.title,
    description: r.description,
    alternates: {
      canonical: `${SITE_URL}${r.path}`,
      ...(languages ? { languages } : {}),
    },
  };
}
