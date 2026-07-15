# arunasvismantas.eu — SEO/GEO status & content roadmap

Updated 2026-07-13. Companion to arunasvismantas-seo-plan.md (Phase 0 keyword research).
Site is now **LT-default** (/ = Lithuanian, /en = English).

---

## 1. What is DONE (technical foundation)

The machine-readability layer is complete. None of it drives traffic on its own,
it makes traffic *possible* once content exists.

- routes.ts single source of truth; sitemap.xml with hreflang; robots.txt; canonicals; per-locale `<html lang>`
- JSON-LD: Person (with awards, alumniOf, homeLocation), WebSite, ProfilePage, Article, BreadcrumbList, FAQPage
- Open Graph + Twitter cards + share image (og.jpg); llms.txt for AI engines
- Typed content engine (articles as data + one renderer) so every future post inherits schema, TOC, hreflang, OG automatically
- Native-professional copy, EN + LT

## 2. What we are MISSING (gap audit, by priority)

**P0 — blocks all traffic**
1. **Content. The hubs are empty.** Zero articles = zero organic traffic. Everything above is scaffolding. This is the whole game now.
2. **Not indexed.** Deploy to Vercel (in progress), then Google Search Console + submit sitemap + IndexNow auto-ping. Google can't rank what it can't crawl.

**P1 — authority & measurement**
3. **Zero backlinks / new-domain authority.** A new site ranks slowly even with great content. Need: directory profiles, the sameAs links below, a few guest mentions, and the free-tool link magnet later.
4. **Analytics missing.** Add Vercel Analytics or Plausible + GSC so we measure what works.
5. **sameAs incomplete.** Person entity only links LinkedIn/Threads/Callsy. Add X, YouTube, Founders & Food podcast, F6S, Crunchbase → stronger knowledge-panel + AI-citation entity resolution.

**P2 — enhancements**
6. Newsletter capture not live (Substack URL pending) — conversions leak.
7. Press achievements sit in Person.award but not as individual Event/CreativeWork entities — richer results possible later.
8. Post-deploy: Lighthouse / Core Web Vitals check (Next is fast by default; verify).
9. Real in-article images (hero art per post) for engagement + image search.

## 3. Content roadmap (keyword-driven, LT-first)

Each article = 1 object in `src/content/articles.ts` + 1 route in `routes.ts`.
Volumes/KD from Phase 0 research (LT = Lithuania, EN = US proxy).

### Sprint 1 — LT foundation (highest ROI, thin competition)
1. **HUB: "Dirbtinis intelektas: išsamus gidas"** — kw `dirbtinis intelektas` (33,100/mo, KD 2). The flagship. Links down to every spoke.
2. **Course landing: "Dirbtinio intelekto mokymai: susikurk savo AI asistentą"** — cluster `dirbtinio intelekto mokymai / ai mokymai / ai kursai` (~650/mo combined, commercial). The money page.
3. **Spoke: "Nemokamas dirbtinis intelektas: geriausi įrankiai"** — kw `dirbtinis intelektas nemokamai` (6,600/mo). Top-of-funnel magnet.
4. **Spoke: "Geriausios dirbtinio intelekto programos"** — kw `dirbtinio intelekto programos` (880/mo, KD 3).
5. **Spoke: "Verslo rykliai: kaip iš tikrųjų atrodo pitchas"** — kw `verslo rykliai` (260/mo, KD 4). Unbeatable E-E-A-T: he was on the show.

### Sprint 2 — EN, OpenClaw window (time-sensitive, decaying fast)
6. **Spoke: "What is OpenClaw"** — kw `what is openclaw` (14,800/mo, KD 36, decaying ~45%/mo). Ship ASAP.
7. **Spoke: "OpenClaw setup & tutorial: build your own AI assistant"** — `openclaw setup` + `openclaw tutorial` (KD 14-23). One definitive guide.
8. **HUB: "Personal AI assistant: the complete guide"** — kw `personal ai assistant` (14,800/mo, KD 12). Durable flagship.
9. **Course landing EN: "Build your own AI assistant"**

### Sprint 3 — mixed authority + breadth
10. **Spoke EN: "Claude Code vs Cursor"** — kw `claude code vs cursor` (8,100/mo, KD 5). Absurdly winnable.
11. **HUB LT: "Startuolis: gidas"** + spoke **"Vienaragiai Lietuvoje"** (`startuolis` 480, `vienaragiai lietuvoje` 110 KD 3).
12. **Spoke LT: "ChatGPT lietuviškai: pilnas gidas"** — `chatgpt lietuviskai` (12,100/mo navigational skim).
13. **Spoke EN: "Claude Code tutorial for non-engineers"** (2,900/mo, +650% yoy).

### Sprint 4+ — long tail
vibe coding tools/tutorial, pitch deck examples, pre seed funding, verslo angelai, verslo idejos, remaining LT spokes.

## 4. Publishing discipline (every article)
- In routes.ts (tier, keywords) + articles.ts (typed object). Byline Arunas. No em-dashes. Native register.
- Hub links down to all spokes; spokes link up to hub (internal linking).
- FAQ block where natural (earns FAQPage rich result).
- After deploy: IndexNow ping so publish = index.

## 5. Immediate next actions
1. Finish Vercel deploy + domain (in progress).
2. Search Console verify + submit sitemap; wire IndexNow.
3. Start Sprint 1, article #1 (dirbtinis intelektas hub).
4. Arunas: send sameAs URLs (X, YouTube, podcast, F6S, Crunchbase) + Substack URL.
