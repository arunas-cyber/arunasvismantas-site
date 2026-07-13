# INK — the arunasvismantas.eu design system

Editorial, personal-but-premium. Founder-brand, not corporate SaaS. Print-inspired
restraint: paper, ink, one accent, hairline rules, confident serif headlines.
Every page uses these tokens and components. No ad-hoc colors, ever.

## Colors (the only five)

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAF9F6` | Page background. Warm off-white, never pure white. |
| `ink` | `#1A1815` | Headlines, body text, dark sections (footer, CTA bands). |
| `muted` | `#5C564C` | Secondary text, captions, metadata. AA on paper. |
| `accent` | `#C2410C` | Links, primary buttons, active states. Rust. Use sparingly: if a screen has more than two accent elements, remove one. |
| `line` | `#E8E4DC` | Hairline borders, dividers, card outlines. |

Dark-on-light is the default. Inverted sections (ink background, paper text) are
allowed for the footer and one CTA band per page, nothing else.

## Typography (the only two fonts)

- **Newsreader** (serif): headlines, pull quotes, the italic accent word in a
  headline. Weights 400/500/600. Tight tracking on large sizes.
- **Inter** (sans): body, UI, nav, buttons, captions. Weights 400/500/600.
- Both loaded via `next/font` with `latin` + `latin-ext` subsets (Lithuanian
  diacritics: ą č ę ė į š ų ū ž).
- Scale: hero `clamp(2.75rem, 6vw, 4.5rem)`; section titles `text-3xl/4xl`;
  body `text-base/lg` with `leading-relaxed`; captions `text-sm text-muted`.
- Line length for articles: max 68ch.

## Borders, radius, shadow

- Borders: 1px `line`. Rules and dividers do the visual work, not boxes.
- Radius: `4px` (`rounded`) on cards, buttons, inputs. Nothing pill-shaped
  except small tags/badges.
- Shadow: none at rest. On card hover only: `0 2px 16px rgb(26 24 21 / 0.06)`
  plus border darkening. No glassmorphism, no gradients, no blur.

## Motion

- Micro-interactions 150-250ms, `transition-colors` / `opacity` / small
  `translate-y`. Respect `prefers-reduced-motion`. No parallax, no scale-on-hover
  that shifts layout.

## Components (build once, reuse everywhere)

- `Container`: `max-w-6xl mx-auto px-5 sm:px-8`. Articles: `max-w-[68ch]`.
- `Button`: primary (accent bg, paper text), secondary (ink border, ink text),
  ghost (accent text link with arrow). All ≥44px tall, `cursor-pointer`.
- `Nav`: wordmark left, links center/right, one primary CTA. Hairline bottom
  border. Sticky, paper background.
- `Footer`: inverted (ink bg), name + one-liner, link columns, socials, legal.
- `SectionHeading`: eyebrow (sans, uppercase, tracked, muted) + serif title.
- `Card`: line border, 4px radius, hover shadow. Used for offers, articles,
  courses.
- `ProofBar`: single muted row of text logos ("Rykliai. Lietuva (TV3)",
  "Latitude59", "500 Global", "Firstpick", "Founders & Food").
- `FAQ`: native `<details>`/`<summary>` accordion, hairline separators
  (pairs with FAQPage JSON-LD).
- Article layout: serif display title, byline (always Arunas Vismantas + date),
  68ch measure, drop-cap optional, pull quotes in Newsreader italic.

## Voice

Professional and specific in EN and LT. Real numbers with sources. No hype,
no fluff, no em-dashes. Byline is always Arunas Vismantas.
