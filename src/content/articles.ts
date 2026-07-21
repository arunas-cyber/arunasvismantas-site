import { type Article } from "./types";
import { routeByKey, type Locale, type SiteRoute } from "@/lib/routes";
import { dirbtinisIntelektas } from "./lt/dirbtinis-intelektas";
import { nemokamasDirbtinisIntelektas } from "./lt/nemokamas-dirbtinis-intelektas";
import { verslasBeKapitalo } from "./lt/verslas-be-kapitalo";
import { chatgptLietuviskai } from "./lt/chatgpt-lietuviskai";
import { dirbtinioIntelektoProgramos } from "./lt/dirbtinio-intelekto-programos";
import { kasYraOpenclaw } from "./lt/kas-yra-openclaw";
import { versloRykliai } from "./lt/verslo-rykliai";
import { startuolis } from "./lt/startuolis";
import { vienaragiaiLietuvoje } from "./lt/vienaragiai-lietuvoje";
import { kaipPatekomeI500Global } from "./lt/kaip-patekome-i-500-global";
import { kaipNaudotisClaude } from "./lt/kaip-naudotis-claude";
import { artificialIntelligence } from "./en/artificial-intelligence";
import { freeAiTools } from "./en/free-ai-tools";
import { buildBusinessNoCapital } from "./en/build-business-no-capital";
import { chatgptLithuanian } from "./en/chatgpt-lithuanian";
import { bestAiApps } from "./en/best-ai-apps";
import { whatIsOpenclaw } from "./en/what-is-openclaw";
import { claudeCodeVsCursor } from "./en/claude-code-vs-cursor";
import { personalAiAssistant } from "./en/personal-ai-assistant";
import { howWeGotInto500Global } from "./en/how-we-got-into-500-global";
import { howToUseClaude } from "./en/how-to-use-claude";

/**
 * The article registry. Every published piece is one object here plus one
 * route in routes.ts (status "live"). Order does not matter; hubs sort by
 * publishedAt on the index pages.
 */
export const articles: Article[] = [
  dirbtinisIntelektas,
  nemokamasDirbtinisIntelektas,
  verslasBeKapitalo,
  artificialIntelligence,
  freeAiTools,
  buildBusinessNoCapital,
  chatgptLietuviskai,
  chatgptLithuanian,
  dirbtinioIntelektoProgramos,
  bestAiApps,
  kasYraOpenclaw,
  whatIsOpenclaw,
  versloRykliai,
  startuolis,
  vienaragiaiLietuvoje,
  kaipPatekomeI500Global,
  kaipNaudotisClaude,
  claudeCodeVsCursor,
  personalAiAssistant,
  howWeGotInto500Global,
  howToUseClaude,
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
