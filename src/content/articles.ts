import { type Article } from "./types";
import { routeByKey, type Locale, type SiteRoute } from "@/lib/routes";
import { dirbtinisIntelektas } from "./lt/dirbtinis-intelektas";
import { nemokamasDirbtinisIntelektas } from "./lt/nemokamas-dirbtinis-intelektas";

/**
 * The article registry. Every published piece is one object here plus one
 * route in routes.ts (status "live"). Order does not matter; hubs sort by
 * publishedAt on the index pages.
 */
export const articles: Article[] = [
  dirbtinisIntelektas,
  nemokamasDirbtinisIntelektas,
];

export const articleByRouteKey = (routeKey: string) =>
  articles.find((a) => a.routeKey === routeKey);

export interface PublishedArticle {
  article: Article;
  route: SiteRoute;
}

/** Live articles for a locale, newest first (hub index + static params). */
export function articlesForLocale(locale: Locale): PublishedArticle[] {
  return articles
    .map((article) => ({ article, route: routeByKey(article.routeKey) }))
    .filter(
      (x): x is PublishedArticle =>
        x.route !== undefined &&
        x.route.locale === locale &&
        x.route.status === "live",
    )
    .sort((a, b) => b.article.publishedAt.localeCompare(a.article.publishedAt));
}
