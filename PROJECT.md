# arunasvismantas.eu — project handoff

Personal brand site for **Arunas Vismantas** (spell WITHOUT diacritics: "Arunas Vismantas", not "Arūnas").
Live at **https://arunasvismantas.eu**. Last updated 2026-07-15.

## 1. What this is for

Three jobs, in order:
1. **Personal brand** — the canonical, machine-readable record of who he is and what he does.
2. **SEO + GEO** — rank in Google (LT + EN) and get cited by AI answer engines.
3. **Lead gen** — every page pushes one of: book a call, buy the course (later), join the newsletter, invite to speak.

Who he is (verified, use everywhere): five-time founder based in **Vilnius**; co-founder & CEO of **Callsy** (callsy.ai, EU AI voice/SMS/email agents for ecommerce). Co-founded and led **Podbase, Smart Vision, AdKings, BrandBoosters, Callsy**, plus **iDenfy** (idenfy.com, KYC). BA Oxford Brookes 2010. Pitched on **Rykliai. Lietuva** (Shark Tank LT, TV3) — validated on air by unicorn founders Tadas Burgaila & Toma Sabaliauskienė, **no deal** (never claim an investment). **Latitude59 2026** top-7 finalist. **FirstPick AI Accelerator** (first in Baltics). **500 Global Eurasia** Batch 9. **F6S #3 Top Company in AI** (Mar 2026). Hosts **Founders & Food** podcast. Co-founder of Callsy: Laimonas Sutkus.

## 2. Deployment

- **Repo:** github.com/arunas-cyber/arunasvismantas-site (**public**; made public so Vercel could see it).
- **Deploy:** Vercel, auto-deploys on push to `main`. ~30s. Never deploy manually.
- **Domain:** GoDaddy DNS → Vercel. **Apex is canonical** (`arunasvismantas.eu` serves Production); `www` 308-redirects to apex. Do NOT flip this — all canonicals/sitemap/schema use the apex (`SITE_URL`).
- **Commit author** must be Arunas (`git config user.email arunas@callsy.ai`).

## 2b. Working on this from a new machine

```bash
git clone https://github.com/arunas-cyber/arunasvismantas-site.git
cd arunasvismantas-site
npm install
git config user.name "Arunas Vismantas" && git config user.email "arunas@callsy.ai"
npm run dev          # http://localhost:3000
claude               # auto-loads CLAUDE.md -> AGENTS.md -> PROJECT.md + BRAND.md
```

Everything needed to continue is in this repo (code, PROJECT.md, BRAND.md, `docs/` plans). What is **machine-local and does NOT travel**:
- **MCP servers.** Hero images need the **Fal.ai** MCP; keyword/SERP research needs **DataForSEO**. Reconnect them on the new machine or those steps won't work (writing/publishing still works fine without them).
- **`photos/`** (gitignored source photos). Only the compressed versions in `public/images/` are committed.
- Any `~/.claude` memory. That's why this file exists — it is the source of truth, not memory.

## 3. Architecture (the important part)

**Next.js 16 App Router + Tailwind v4.** ⚠️ Next 16 has breaking changes — read `node_modules/next/dist/docs/` before writing framework code (see AGENTS.md).

### Locales: LT is default
- `/` = **Lithuanian** (priority market), `/en` = English.
- Route groups: `src/app/(lt)/...` serves root paths, `src/app/(en)/en/...` serves `/en/*`.
- Each group has its own `layout.tsx` → both render `<RootShell locale>`.
- LT slugs are **keyword-localized, not translated** (`/apie`, `/konsultacija`, `/izvalgos`, `/spauda`, `/naujienlaiskis`).
- `x-default` hreflang → **LT** (it's the default locale).

### `src/lib/routes.ts` — single source of truth
Every public URL lives here. Sitemap, nav, metadata, hreflang all read from it. **If it's not in routes.ts, it doesn't exist.**
Each route: `key`, `locale`, `path`, `title`, `description`, `keywords`, `tier` (1=core, 2=hub, 3=spoke), `status`, `counterpart` (the other locale's key — drives hreflang), optional `nav` (order).

### Content engine — content as data
- **`src/content/types.ts`** — `Article` + `Block` union. Blocks: `p`, `h2` (needs `id`, feeds the TOC), `h3`, `ul`, `ol`, `quote`, `table`, `video`, `faq`, `cta`.
- **`src/content/lt/*.ts` and `src/content/en/*.ts`** — one file per article, exports a typed `Article`.
- **`src/content/articles.ts`** — the registry. Import + add to the `articles` array.
- **`src/components/ArticleView.tsx`** — the ONE renderer. Gives every article: TOC, byline, hero, Person + Article + BreadcrumbList JSON-LD (+ FAQPage/VideoObject from blocks), related cards.
- **Inline markdown** in any `text` field: `**bold**` and `[label](href)`, handled by `src/components/Inline.tsx` (recursive, so `**[x](y)**` works). Internal `/` hrefs → next/link. Referral links (`/referral/`, `ref=`, `aff=`) auto-get `rel="sponsored nofollow"`.

### To publish a new article
1. Add a route in `routes.ts` (both locales, cross-linked via `counterpart`).
2. Create `src/content/{lt,en}/slug.ts` exporting an `Article`.
3. Import + register in `src/content/articles.ts`.
4. Hero → `public/images/insights/slug.jpg` (1600px wide, ~150KB, `sips -Z 1600 -s format jpeg -s formatOptions 82`).
5. `npx tsc --noEmit && npm run build`, then commit + push. Sitemap updates itself.

### SEO/GEO layer (already built, don't rebuild)
`sitemap.ts`, `robots.ts`, `lib/meta.ts` (`pageMetadata(key, opts)` → title/desc/canonical/hreflang/OG/Twitter), `lib/schema.tsx` (`personJsonLd` with awards/alumniOf/sameAs, `websiteJsonLd`, `profilePageJsonLd`, `JsonLd`), `public/llms.txt`, `public/og.jpg`.

## 4. Brand: "AV Brand System v1.0" (see BRAND.md)

Neo-brutalist, from Arunas's official brandbook. **Five colors only:** Paper `#F4EFE1`, Ink `#141210`, Voltage Yellow `#FFE14D`, Hot Coral `#FF3D6E`, Signal Blue `#2E4BFF`. Fonts: **Bricolage Grotesque** (display/body, ExtraBold uppercase headlines) + **JetBrains Mono** (`.avtag` labels). Signature: `.avb` = 3px ink border + 20px radius + hard offset shadow. 60/30/10 color rule. Motifs: `ProofBar` marquee, `Waveform`, AV monogram. No gradients, no glow.

## 5. Content standards (hard rules — Arunas pushed back on all of these)

1. **Depth, not thin listicles.** Research first (SERP gap + verified current facts). Cite real sources. Include tables, specifics, an opinionated expert take. Be the best page on the SERP. A first draft was rejected as "very narrow, doesn't have a lot of value."
2. **Native, never translated.** LT must read as a native marketer wrote it. Kill calques (e.g. "penki verslai vėliau" ← "five companies later"; "statybų užrašai" ← "build notes"). EN = sharp founder voice.
3. **Bilingual parity.** Every article ships LT + EN, hreflang-paired. LT first (priority), EN is a native counterpart, not a translation.
4. **Hero approval.** ALWAYS show generated hero options and get Arunas's approval BEFORE wiring one in. Never auto-wire.
5. **No em-dashes.** Byline always Arunas Vismantas.
6. **Never publish unverified facts.** If research flags something unverifiable (e.g. 2026 ChatGPT pricing), hedge or omit.

**Hero images:** Fal.ai MCP, model `fal-ai/nano-banana-pro`, 16:9, 2K. The prompt recipe that reliably hits the brand is in the git history — flat neo-brutalist, thick uniform black outlines, hard-edged solid black offset shadows, flat fills, warm cream bg, yellow/coral/blue only, **no text/letters/numbers**, risograph poster aesthetic. Costs a small metered Fal charge per generation.

## 6. Published content (12 articles = 6 topics × 2 locales)

| Topic | LT | EN | Target kw |
|---|---|---|---|
| AI guide (hub) | `/izvalgos/dirbtinis-intelektas` | `/en/insights/artificial-intelligence` | dirbtinis intelektas (33,100/mo, KD 2) |
| Free AI tools | `/izvalgos/nemokamas-dirbtinis-intelektas` | `/en/insights/free-ai-tools` | dirbtinis intelektas nemokamai (6,600/mo) |
| Business/LOGIN pillar | `/izvalgos/kaip-sukurti-versla-be-kapitalo` | `/en/insights/how-to-build-a-business-without-capital` | kaip sukurti verslą |
| ChatGPT lietuviškai | `/izvalgos/chatgpt-lietuviskai` | `/en/insights/chatgpt-in-lithuanian` | chatgpt lietuviškai (12,100/mo) |
| Best AI apps | `/izvalgos/dirbtinio-intelekto-programos` | `/en/insights/best-ai-apps` | dirbtinio intelekto programos (880/mo, KD 3) |
| What is OpenClaw | `/izvalgos/kas-yra-openclaw` | `/en/insights/what-is-openclaw` | what is openclaw (14,800/mo, decaying) |

Since then (2026-07, 2nd + 3rd sessions): added **Verslo rykliai** (Shark Tank story, LT), **Startuolis** hub (LT), **Vienaragiai Lietuvoje** (LT), **Kaip patekome į 500 Global** (LT+EN pair), **Claude Code vs Cursor** (EN, 8,100/mo KD5), **Personal AI Assistant** hub (EN, 14,800/mo KD12). **17 articles total, all with on-brand heroes.**

The **business pillar** is built from the transcript of his real **LOGIN 2025 talk** (YouTube `dDxAc3GPziU`, embedded with VideoObject schema). Hero = real LOGIN stage photo.

## 7. In-flight decisions (as of 2026-07, resume here)

- **Hero float animation — awaiting Arunas's verdict.** Added opt-in `hero.animate?: boolean` (types.ts) → gentle 5s `hero-float` keyframe on the framed hero. Currently enabled ONLY on `verslo-rykliai` as a test. Decide: keep just there / roll out to all heroes / make subtler / drop.
- **Bilingual parity ("plan B") — awaiting decision.** 4 of the newer articles are single-language on purpose (verslo-rykliai + vienaragiai = LT-only, genuinely LT-specific; claude-code-vs-cursor + personal-ai-assistant = EN-only, near-zero LT demand). Recommendation: add ONLY a `startuolis` → EN counterpart ("what is a startup"), leave the other four single-language. Not yet done.

## 7b. Next up (from the keyword research)

Plans live in this repo: **`docs/seo-plan.md`** (full Phase 0 keyword research: LT + EN keyword maps with volumes/KD, hub-and-spoke plan) and **`docs/seo-roadmap.md`** (SEO gap audit + prioritised content roadmap).
- **OpenClaw setup/tutorial** (openclaw setup + tutorial, KD 14–23) — feeds the course. Research done (see the `what-is-openclaw` session / git history).
- **AI mokymai course landing** — the money page. BLOCKED: no checkout (payments deferred) and no Substack yet, so there's nothing to convert into.
- More long-tail from the roadmap (vibe coding tools, pitch deck examples, pre-seed funding, etc.).

## 8. Open items / gotchas

- **Google Search Console:** sitemap submitted but showed "Couldn't fetch" — that was almost certainly the old apex→www redirect (now fixed). Re-submit `sitemap.xml`. Verification method still TBD.
- **Backlinks = the #1 gap.** New domain, zero authority. Easiest win: get **Callsy, iDenfy, Podbase, AdKings, BrandBoosters** to link to arunasvismantas.eu (founder bio / team page). Site already links out to them to make the reciprocal ask easy. A "backlink kit" was offered but not built.
- **Missing URLs:** Podbase (podbase.com) and AdKings (adkings.agency) now linked. Smart Vision still unknown — don't guess; ask Arunas.
- **Missing from `sameAs`:** X/Twitter, Founders & Food podcast, F6S, Crunchbase. Have: LinkedIn, Threads (@arunas_v), YouTube (channel UCvDlDbUdglYaALimIskMXTA), Callsy.
- **`SUBSTACK_URL` is null** in `lib/site.ts` → newsletter CTAs fall back to LinkedIn. Set it when the Substack exists.
- **Imprint** needs real company details once the entity for paid services is chosen.
- **Medium repost:** EN business article drafted at `docs/medium-how-to-build-a-business.md`. When publishing, set Medium's canonical to the on-site EN URL so we keep ranking credit.
- **21st.dev Magic MCP is broken** — both API keys 401. Needs a fresh key if wanted.
- **`photos/`** in the repo is gitignored (large originals). Arunas drops source photos there.
- Verify content in the browser at mobile width (375px) — mobile nav is a hamburger (`MobileNav.tsx`).
