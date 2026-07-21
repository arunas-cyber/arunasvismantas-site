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
    path: "/en",
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
    path: "/en/about",
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
    path: "/en/insights",
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
    path: "/en/call",
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
    path: "/en/newsletter",
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
    path: "/en/press",
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
    path: "/en/privacy",
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
    path: "/en/terms",
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
    path: "/en/imprint",
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
    path: "/",
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
    path: "/apie",
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
    path: "/izvalgos",
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
    path: "/konsultacija",
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
    path: "/naujienlaiskis",
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
    path: "/spauda",
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
    path: "/privatumas",
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
    path: "/taisykles",
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
    path: "/rekvizitai",
    title: "Rekvizitai",
    description: "arunasvismantas.eu rekvizitai ir kontaktai.",
    keywords: [],
    tier: 1,
    status: "live",
    counterpart: "imprint",
  },

  // ------------------------------------------------- Insights articles (LT)
  {
    key: "lt-dirbtinis-intelektas",
    locale: "lt",
    path: "/izvalgos/dirbtinis-intelektas",
    title: "Dirbtinis intelektas: išsamus gidas 2026 metams",
    description:
      "Kas yra dirbtinis intelektas, kaip jis veikia ir kaip jį naudoti kasdien bei versle. Praktinis gidas lietuviškai, be techninio žargono. Autorius Arunas Vismantas.",
    keywords: [
      "dirbtinis intelektas",
      "kas yra dirbtinis intelektas",
      "dirbtinis intelektas lietuviskai",
    ],
    tier: 2,
    status: "live",
    counterpart: "en-artificial-intelligence",
  },
  {
    key: "lt-nemokamas-dirbtinis-intelektas",
    locale: "lt",
    path: "/izvalgos/nemokamas-dirbtinis-intelektas",
    title: "Nemokamas dirbtinis intelektas: 7 geriausi įrankiai 2026 m.",
    description:
      "Geriausi nemokami dirbtinio intelekto įrankiai, veikiantys ir lietuviškai. Ką kiekvienas geba, kur riba tarp nemokamo ir mokamo, ir nuo ko pradėti. Autorius Arunas Vismantas.",
    keywords: [
      "dirbtinis intelektas nemokamai",
      "nemokama dirbtinio intelekto programa",
      "nemokami ai irankiai",
    ],
    tier: 3,
    status: "live",
    counterpart: "en-free-ai-tools",
  },
  {
    key: "lt-verslas-be-kapitalo",
    locale: "lt",
    path: "/izvalgos/kaip-sukurti-versla-be-kapitalo",
    title: "Kaip sukurti verslą be didelio kapitalo: 8 pamokos nuo 0 iki 100 000 EUR",
    description:
      "Praktiškos verslo kūrimo pamokos iš 20 metų ir penkių verslų: pardavimai prieš produktą, maržos, funelis, grįžtantys klientai ir įrankiai. Įžvalgos iš LOGIN 2025. Autorius Arunas Vismantas.",
    keywords: [
      "kaip sukurti versla",
      "verslas be kapitalo",
      "verslas nuo nulio",
      "verslo idejos",
    ],
    tier: 2,
    status: "live",
    counterpart: "en-build-business-no-capital",
  },

  {
    key: "lt-chatgpt-lietuviskai",
    locale: "lt",
    path: "/izvalgos/chatgpt-lietuviskai",
    title: "ChatGPT lietuviškai: kiek gerai iš tikrųjų moka (ir ko niekas nesako)",
    description:
      "Ar ChatGPT tikrai gerai moka lietuviškai? Tyrimų skaičiai, o ne nuomonės. Kaip naudotis nemokamai ir be registracijos, kodėl „ChatGPT lietuviškai\" svetainės nėra ChatGPT, ir kaip gauti geresnę lietuvių kalbą.",
    keywords: [
      "chatgpt lietuviskai",
      "chat gpt lietuviskai nemokamai",
      "chatgpt lietuviskai be registracijos",
    ],
    tier: 3,
    status: "live",
    counterpart: "en-chatgpt-lithuanian",
  },

  {
    key: "lt-dirbtinio-intelekto-programos",
    locale: "lt",
    path: "/izvalgos/dirbtinio-intelekto-programos",
    title: "Geriausios dirbtinio intelekto programos 2026: kuri kuriam darbui",
    description:
      "Geriausios dirbtinio intelekto programos pagal darbą, kurį reikia atlikti: rašymui, faktams, vaizdams, garsui. Ką rinktis, kur kiekviena nusileidžia ir kada verta mokėti.",
    keywords: [
      "dirbtinio intelekto programos",
      "geriausia dirbtinio intelekto programa",
      "ai programos",
    ],
    tier: 3,
    status: "live",
    counterpart: "en-best-ai-apps",
  },

  {
    key: "lt-kas-yra-openclaw",
    locale: "lt",
    path: "/izvalgos/kas-yra-openclaw",
    title: "Kas yra OpenClaw ir kas iš tikrųjų pribaigė ažiotažą",
    description:
      "OpenClaw tapo greičiausiai augusiu projektu GitHub istorijoje. Kas jis yra iš tikrųjų, kodėl ažiotažą pribaigė ne saugumas, o ekonomika, ir ar verta jį leisti.",
    keywords: ["openclaw", "kas yra openclaw", "ai asistentas"],
    tier: 3,
    status: "live",
    counterpart: "en-what-is-openclaw",
  },

  {
    key: "lt-startuolis",
    locale: "lt",
    path: "/izvalgos/startuolis",
    title: "Startuolis: kas tai yra ir kaip pradėti savąjį (2026 gidas)",
    description:
      "Kas yra startuolis, kuo skiriasi nuo įprasto verslo, kaip finansuojamas ir kaip pradėti savąjį. Praktinis gidas iš penkis kartus startuolius kūrusio įkūrėjo. Autorius Arunas Vismantas.",
    keywords: [
      "startuolis",
      "kas yra startuolis",
      "kaip sukurti startuoli",
      "startuolis lietuvoje",
    ],
    tier: 2,
    status: "live",
  },
  {
    key: "lt-vienaragiai-lietuvoje",
    locale: "lt",
    path: "/izvalgos/vienaragiai-lietuvoje",
    title: "Vienaragiai Lietuvoje: visi penki milijardiniai startuoliai",
    description:
      "Lietuva užaugino penkis vienaragius: Vinted, Nord Security, Baltic Classifieds Group, Flo Health ir Cast AI. Kas jie, kaip pasiekė milijardą ir ko iš to pasimokyti.",
    keywords: [
      "vienaragiai lietuvoje",
      "lietuvos vienaragiai",
      "startuoliai lietuvoje",
      "unicorn lietuva",
    ],
    tier: 3,
    status: "live",
  },
  {
    key: "lt-verslo-rykliai",
    locale: "lt",
    path: "/izvalgos/verslo-rykliai",
    title: "Verslo rykliai: kaip iš tikrųjų atrodo pitchas (mano patirtis)",
    description:
      "Pristatėme Callsy Rykliai. Lietuva laidoje (TV3). Kas iš tikrųjų vyksta Verslo rykliuose, koks buvo ryklių verdiktas ir ką iš to išmokau. Arunas Vismantas.",
    keywords: ["verslo rykliai", "rykliai lietuva", "shark tank lietuva"],
    tier: 3,
    status: "live",
  },

  // ------------------------------------------------- Insights articles (EN)
  {
    key: "en-artificial-intelligence",
    locale: "en",
    path: "/en/insights/artificial-intelligence",
    title: "Artificial Intelligence: A Practical Guide for 2026",
    description:
      "What artificial intelligence is, how it actually works, and how to use it day to day and in business. No jargon, from a founder who builds with AI every day.",
    keywords: [
      "artificial intelligence",
      "what is artificial intelligence",
      "how does ai work",
    ],
    tier: 2,
    status: "live",
    counterpart: "lt-dirbtinis-intelektas",
  },
  {
    key: "en-free-ai-tools",
    locale: "en",
    path: "/en/insights/free-ai-tools",
    title: "Free AI: The 7 Best Tools in 2026 (and Where the Free Tier Ends)",
    description:
      "The best free AI tools in 2026: real free-tier limits, what each is genuinely best at, the privacy reality, and where to start. No hype, from a founder who builds with AI.",
    keywords: ["free ai tools", "free ai", "best free ai"],
    tier: 3,
    status: "live",
    counterpart: "lt-nemokamas-dirbtinis-intelektas",
  },
  {
    key: "en-what-is-openclaw",
    locale: "en",
    path: "/en/insights/what-is-openclaw",
    title: "What Is OpenClaw? And What Really Killed the Hype",
    description:
      "OpenClaw became the fastest-growing repo in GitHub history, then the hype collapsed. What it actually is, why economics rather than security killed it, and whether you should run it.",
    keywords: ["what is openclaw", "openclaw", "openclaw explained"],
    tier: 3,
    status: "live",
    counterpart: "lt-kas-yra-openclaw",
  },
  {
    key: "en-best-ai-apps",
    locale: "en",
    path: "/en/insights/best-ai-apps",
    title: "The Best AI Apps in 2026: Which One for Which Job",
    description:
      "The best AI apps organised by the job you need done: writing, facts, images, audio. What to pick, where each one falls short, and when paying is actually worth it.",
    keywords: ["best ai apps", "best ai tools", "which ai app"],
    tier: 3,
    status: "live",
    counterpart: "lt-dirbtinio-intelekto-programos",
  },
  {
    key: "en-chatgpt-lithuanian",
    locale: "en",
    path: "/en/insights/chatgpt-in-lithuanian",
    title: "ChatGPT in Lithuanian: How Good Is It Really?",
    description:
      "Does ChatGPT actually handle Lithuanian well? The benchmark numbers, not opinions. How to use it free without signing up, why the \"ChatGPT lietuviškai\" sites are not ChatGPT, and how to get better Lithuanian out of it.",
    keywords: [
      "chatgpt lithuanian",
      "chatgpt in lithuanian",
      "llm lithuanian language",
    ],
    tier: 3,
    status: "live",
    counterpart: "lt-chatgpt-lietuviskai",
  },
  {
    key: "en-build-business-no-capital",
    locale: "en",
    path: "/en/insights/how-to-build-a-business-without-capital",
    title: "How to Build a Business Without Much Capital: 8 Lessons From 0 to €100K",
    description:
      "Practical business-building lessons from 20 years and five companies: sales before product, margins, the funnel, returning customers, and tools. From my LOGIN 2025 talk.",
    keywords: [
      "how to build a business",
      "business without capital",
      "how to start a business with no money",
    ],
    tier: 2,
    status: "live",
    counterpart: "lt-verslas-be-kapitalo",
  },
  {
    key: "en-personal-ai-assistant",
    locale: "en",
    path: "/en/insights/personal-ai-assistant",
    title: "Personal AI Assistant: The Complete Guide for 2026",
    description:
      "What a personal AI assistant is in 2026, the best options compared, and how to build your own without coding. From a founder who builds and ships AI agents daily.",
    keywords: [
      "personal ai assistant",
      "best ai assistant",
      "ai assistant 2026",
      "build your own ai assistant",
    ],
    tier: 2,
    status: "live",
  },
  {
    key: "en-claude-code-vs-cursor",
    locale: "en",
    path: "/en/insights/claude-code-vs-cursor",
    title: "Claude Code vs Cursor (2026): A Non-Engineer's Honest Comparison",
    description:
      "Claude Code vs Cursor compared by a founder who ships with both daily. Terminal agent vs AI IDE: pricing, workflow, token efficiency, and which to pick if you are not an engineer.",
    keywords: [
      "claude code vs cursor",
      "claude code vs cursor 2026",
      "best ai coding tool",
    ],
    tier: 3,
    status: "live",
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
