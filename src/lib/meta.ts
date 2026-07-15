import type { Metadata } from "next";
import { routeByKey, SITE_URL } from "./routes";

const DEFAULT_OG_IMAGE = "/og.jpg";

interface MetaOpts {
  /** Open Graph type. Defaults to "website"; use "profile" for /about, "article" for posts. */
  ogType?: "website" | "profile" | "article";
  /** ISO dates for article Open Graph. */
  publishedTime?: string;
  modifiedTime?: string;
  /** Override the share image (e.g. an article's hero). Root-relative path. */
  ogImage?: string;
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
      // LT is the site default, so x-default resolves to the Lithuanian URL.
      "x-default": `${SITE_URL}${lt.path}`,
    };
  }

  const isHome = key === "home" || key === "home-lt";
  const ogLocale = r.locale === "en" ? "en_US" : "lt_LT";
  const altLocale = r.locale === "en" ? "lt_LT" : "en_US";
  const ogImage = opts.ogImage ?? DEFAULT_OG_IMAGE;

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: r.title }],
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
      images: [ogImage],
    },
  };
}
