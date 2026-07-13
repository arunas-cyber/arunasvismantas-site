/**
 * Single source of truth for every public URL on arunasvismantas.eu.
 * The sitemap, nav, per-page metadata, and hreflang all read from this file.
 * If a URL is not here, it does not exist.
 *
 * `counterpart` links the same page across locales (used for hreflang).
 * Most insights articles will be market-specific and have no counterpart.
 */

export type Locale = "en" | "lt";

export type RouteStatus = "live" | "planned";

export interface SiteRoute {
  /** Stable key, unique per locale variant. */
  key: string;
  locale: Locale;
  /** Path starting with "/". LT routes live under /lt. */
  path: string;
  /** Page title. The layout template appends "| Arunas Vismantas" (home is absolute). */
  title: string;
  description: string;
  /** Target keywords from the Phase 0 research. */
  keywords: string[];
  /** 1 = core/conversion, 2 = hub, 3 = spoke. */
  tier: 1 | 2 | 3;
  status: RouteStatus;
  /** key of the same page in the other locale, if a true counterpart exists. */
  counterpart?: string;
  /** Show in the main nav (order = position). */
  nav?: number;
}

export const SITE_URL = "https://arunasvismantas.eu";

/** Stable sitemap lastmod. Bump when core-page content changes. */
export const SITE_UPDATED = "2026-07-13";

export const routes: SiteRoute[] = [
  // ---------------------------------------------------------------- EN core
  {
    key: "home",
    locale: "en",
    path: "/",
    title: "Arunas Vismantas | Founder, AI builder, speaker",
    description:
      "Founder of Callsy. I build AI agents, teach founders to build their own AI assistants, and speak about startups, ecommerce, and AI.",
    keywords: ["arunas vismantas"],
    tier: 1,
    status: "live",
    counterpart: "home-lt",
  },
  {
    key: "about",
    locale: "en",
    path: "/about",
    title: "About",
    description:
      "Arunas Vismantas: founder of Callsy, Latitude59 pitch finalist, FirstPick and 500 Global accelerator alum, host of the Founders & Food podcast.",
    keywords: ["arunas vismantas"],
    tier: 1,
    status: "live",
    counterpart: "about-lt",
    nav: 2,
  },
  {
    key: "insights",
    locale: "en",
    path: "/insights",
    title: "Insights",
    description:
      "Guides and build notes on AI agents, building with AI as a non-engineer, and startup lessons from the Baltics. By Arunas Vismantas.",
    keywords: ["ai agents", "personal ai assistant"],
    tier: 2,
    status: "live",
    counterpart: "insights-lt",
    nav: 1,
  },
  {
    key: "call",
    locale: "en",
    path: "/call",
    title: "Book a call",
    description:
      "Book an advisory call with Arunas Vismantas: AI agents and MCP integrations, ecommerce automation, or startup fundraising in the Baltics.",
    keywords: ["ai agent consultant"],
    tier: 1,
    status: "live",
    counterpart: "call-lt",
  },
  {
    key: "newsletter",
    locale: "en",
    path: "/newsletter",
    title: "Newsletter",
    description:
      "Practical notes on building AI agents and building a startup in public. Real numbers, tools that work, no fluff.",
    keywords: ["ai agents newsletter"],
    tier: 1,
    status: "live",
    counterpart: "newsletter-lt",
    nav: 4,
  },
  {
    key: "press",
    locale: "en",
    path: "/press",
    title: "Press and stages",
    description:
      "Arunas Vismantas in the press: Rykliai. Lietuva (Shark Tank Lithuania) pitch, Latitude59 finals, FirstPick AI Accelerator, 500 Global.",
    keywords: ["arunas vismantas callsy"],
    tier: 1,
    status: "live",
    counterpart: "press-lt",
    nav: 3,
  },
  {
    key: "privacy",
    locale: "en",
    path: "/privacy",
    title: "Privacy policy",
    description: "Privacy policy for arunasvismantas.eu.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "privacy-lt",
  },
  {
    key: "terms",
    locale: "en",
    path: "/terms",
    title: "Terms",
    description: "Terms of use for arunasvismantas.eu.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "terms-lt",
  },
  {
    key: "imprint",
    locale: "en",
    path: "/imprint",
    title: "Imprint",
    description: "Imprint and contact details for arunasvismantas.eu.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "imprint-lt",
  },

  // ---------------------------------------------------------------- LT core
  {
    key: "home-lt",
    locale: "lt",
    path: "/lt",
    title: "Arunas Vismantas | Startuolio įkūrėjas, AI praktikas",
    description:
      "Callsy įkūrėjas. Kuriu AI agentus, mokau susikurti savo AI asistentą, vedu renginius apie startuolius ir dirbtinį intelektą.",
    keywords: ["arunas vismantas"],
    tier: 1,
    status: "live",
    counterpart: "home",
  },
  {
    key: "about-lt",
    locale: "lt",
    path: "/lt/apie",
    title: "Apie mane",
    description:
      "Arunas Vismantas: Callsy įkūrėjas, Latitude59 finalininkas, FirstPick ir 500 Global akseleratorių alumnas, tinklalaidės Founders & Food vedėjas.",
    keywords: ["arunas vismantas"],
    tier: 1,
    status: "live",
    counterpart: "about",
    nav: 2,
  },
  {
    key: "insights-lt",
    locale: "lt",
    path: "/lt/izvalgos",
    title: "Įžvalgos",
    description:
      "Gidai ir praktinės pastabos apie dirbtinį intelektą, AI agentus ir startuolių kūrimą. Autorius Arunas Vismantas.",
    keywords: ["dirbtinis intelektas", "ai agentai"],
    tier: 2,
    status: "live",
    counterpart: "insights",
    nav: 1,
  },
  {
    key: "call-lt",
    locale: "lt",
    path: "/lt/konsultacija",
    title: "Konsultacija",
    description:
      "Rezervuokite pokalbį su Arunu Vismantu: AI agentai ir MCP integracijos, el. prekybos automatizavimas, startuolio investicijų pritraukimas.",
    keywords: ["ai konsultacija"],
    tier: 1,
    status: "live",
    counterpart: "call",
  },
  {
    key: "newsletter-lt",
    locale: "lt",
    path: "/lt/naujienlaiskis",
    title: "Naujienlaiškis",
    description:
      "Praktiškos pastabos apie AI agentų kūrimą ir startuolio auginimą. Tikri skaičiai, veikiantys įrankiai, jokio pūtimo.",
    keywords: ["ai naujienlaiskis"],
    tier: 1,
    status: "live",
    counterpart: "newsletter",
    nav: 4,
  },
  {
    key: "press-lt",
    locale: "lt",
    path: "/lt/spauda",
    title: "Spauda ir scenos",
    description:
      "Arunas Vismantas žiniasklaidoje: Rykliai. Lietuva (TV3), Latitude59 finalas, FirstPick AI akseleratorius, 500 Global.",
    keywords: ["arunas vismantas callsy"],
    tier: 1,
    status: "live",
    counterpart: "press",
    nav: 3,
  },
  {
    key: "privacy-lt",
    locale: "lt",
    path: "/lt/privatumas",
    title: "Privatumo politika",
    description: "arunasvismantas.eu privatumo politika.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "privacy",
  },
  {
    key: "terms-lt",
    locale: "lt",
    path: "/lt/taisykles",
    title: "Naudojimosi taisyklės",
    description: "arunasvismantas.eu naudojimosi taisyklės.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "terms",
  },
  {
    key: "imprint-lt",
    locale: "lt",
    path: "/lt/rekvizitai",
    title: "Rekvizitai",
    description: "arunasvismantas.eu rekvizitai ir kontaktai.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "imprint",
  },
];

export const liveRoutes = (locale?: Locale) =>
  routes.filter(
    (r) => r.status === "live" && (locale ? r.locale === locale : true),
  );

export const navRoutes = (locale: Locale) =>
  liveRoutes(locale)
    .filter((r) => r.nav !== undefined)
    .sort((a, b) => (a.nav ?? 0) - (b.nav ?? 0));

export const routeByKey = (key: string) => routes.find((r) => r.key === key);

export const routeByPath = (path: string) => routes.find((r) => r.path === path);
