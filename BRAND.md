# AV Brand System v1.0 — arunasvismantas.eu

Neo-brutalist founder brand, applied from the official brand book
("Arunas Vismantas — Brandbook v1.0, 2026"). Bold, candid, high energy.
Every page uses these tokens and components. No ad-hoc colors, ever.

## Colors (the only five)

| Token | Name | Hex | Use |
|---|---|---|---|
| `paper` | Paper | `#F4EFE1` | Base surface. |
| `ink` | Ink Black | `#141210` | Text, 3px outlines, dark blocks. |
| `yellow` | Voltage Yellow | `#FFE14D` | Primary / hero fields, monogram. |
| `coral` | Hot Coral | `#FF3D6E` | Accent / energy, hover states, marquee. |
| `blue` | Signal Blue | `#2E4BFF` | Links, info, badges. |

Support: `muted` `#3A3631` (body text on light), `line` (ink at 15%, subtle
dividers).

**60 / 30 / 10 rule:** 60% Paper or Ink base, 30% one bold field (Yellow),
10% Coral + Blue as sharp accents. Never split brights 50/50; pick one hero
color per surface.

**Contrast rules:** Ink text on Yellow/Paper/White. White text on
Coral/Blue/Ink. Never yellow text on white, never coral on blue, never drop
the black outline on bright fields.

## Typography (the only two fonts)

- **Bricolage Grotesque**: display and body. ExtraBold 800 for headlines
  (display uppercase, tracking -0.035em, line-height ~0.86), SemiBold 600 for
  emphasis, Regular/Medium for body (17px, generous line height).
- **JetBrains Mono**: labels, tags, data, timestamps. Always UPPERCASE with
  wide tracking (`.avtag` class: 11px, +14% tracking, bold).
- Loaded via `next/font` with `latin` + `latin-ext` subsets (Lithuanian
  diacritics).
- Scale: Display 96 / H1 40 / H2 26 / Body 17 / Label 11.

## Signature elements

- **`.avb` card**: 3px ink border, 20px radius, hard shadow
  `7px 7px 0 #141210`. Add `.avb-hover` for the lift (translate -2px,
  shadow grows to 10px). Buttons use the 4px variant.
- **AV monogram**: yellow rounded square, ink "AV", ExtraBold (nav +
  favicon `src/app/icon.svg`). Circle variant for social avatars.
- **Marquee band** (`ProofBar`): coral card, white mono uppercase, ★
  separators, 22s scroll.
- **Waveform** (`Waveform`): animated voice bars, ink with coral/blue
  accents. The voice-agent motif.
- **Floaty badge**: pill with 3px border, hard shadow, slow float animation
  (hero callsy.ai link).
- **Color-blocked sections**: hero on Yellow, CTA bands on Ink, cards on
  White. Photos (when added): 3px ink outline + hard shadow, candid founder
  shots, optionally duotone Ink + Yellow. Never generic stock.

## Motion

Micro-interactions 150-250ms via transform/box-shadow. Keyframes: `wave`,
`marquee`, `floaty`. All animations respect `prefers-reduced-motion`.

## Voice

"Talk like a founder to a founder. No fluff, no hype, just what we're
building and why." Short sentences. Have a point of view. Warm, human,
occasionally funny. Show progress, not promises. No em-dashes. Byline is
always Arunas Vismantas.

Say: "We build AI voice agents that actually pick up the phone."
Not: "Leveraging synergistic AI-driven paradigms to revolutionise..."
