import type { MetadataRoute } from "next";
import { liveRoutes, routeByKey, SITE_URL, SITE_UPDATED } from "@/lib/routes";
import { articleByRouteKey } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return liveRoutes().map((r) => {
    const cp = r.counterpart ? routeByKey(r.counterpart) : undefined;
    const en = r.locale === "en" ? r : cp;
    const lt = r.locale === "lt" ? r : cp;
    const article = articleByRouteKey(r.key);
    const lastModified = article?.updatedAt ?? article?.publishedAt ?? SITE_UPDATED;
    return {
      url: `${SITE_URL}${r.path}`,
      lastModified,
      changeFrequency: r.tier === 1 ? "monthly" : "weekly",
      priority: r.tier === 1 ? 0.8 : r.tier === 2 ? 0.9 : 0.6,
      ...(cp && en && lt
        ? {
            alternates: {
              languages: {
                en: `${SITE_URL}${en.path}`,
                lt: `${SITE_URL}${lt.path}`,
              },
            },
          }
        : {}),
    };
  });
}
