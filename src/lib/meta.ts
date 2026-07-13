import type { Metadata } from "next";
import { routeByKey, SITE_URL } from "./routes";

const OG_IMAGE = "/og.jpg";

interface MetaOpts {
  /** Open Graph type. Defaults to "website"; use "profile" for /about, "article" for posts. */
  ogType?: "website" | "profile" | "article";
  /** ISO dates for article Open Graph. */
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Per-page metadata derived from routes.ts: title, description, keywords,
 * canonical, hreflang alternates, Open Graph, and Twitter cards.
 */
export function pageMetadata(key: string, opts: MetaOpts = {}): Metadata {
  const r = routeByKey(key);
  if (!r) throw new Error(`Unknown route key: ${key}`);
  const cp = r.counterpart ? routeByKey(r.counterpart) : undefined;
  const url = `${SITE_URL}${r.path}`;

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
  const ogLocale = r.locale === "en" ? "en_US" : "lt_LT";
  const altLocale = r.locale === "en" ? "lt_LT" : "en_US";

  return {
    title: isHome ? { absolute: r.title } : r.title,
    description: r.description,
    keywords: r.keywords.length ? r.keywords : undefined,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: opts.ogType ?? "website",
      title: r.title,
      description: r.description,
      url,
      siteName: "Arunas Vismantas",
      locale: ogLocale,
      alternateLocale: altLocale,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: r.title }],
      ...(opts.publishedTime
        ? {
            publishedTime: opts.publishedTime,
            modifiedTime: opts.modifiedTime ?? opts.publishedTime,
            authors: ["Arunas Vismantas"],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
      images: [OG_IMAGE],
    },
  };
}
