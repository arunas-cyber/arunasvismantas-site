/**
 * Webinar funnel content. Everything editable in one place.
 * ⚠️ DRAFT COPY — replace with the real webinar details + Arunas's photo.
 */
export const webinar = {
  // --- Landing page ---
  eyebrow: "Nemokamas online seminaras",
  // Big promise. Keep it concrete and outcome-led.
  title: "Kaip įdarbinti Claude Code kasdienėje veikloje ir automatizuoti procesus",
  subtitle:
    "Per 90 minučių gyvai parodysiu, kaip Claude Code paversti kasdieniu darbuotoju: nuo pasikartojančių užduočių iki automatizuotų procesų. Būtent taip kasdien taupau valandas Callsy.",
  // ISO date + a human label (LT). Set the real one.
  dateISO: "2026-08-14T18:00:00+03:00",
  dateLabel: "Rugpjūčio 14 d., 18:00 (Lietuvos laiku)",
  place: "Tiesioginė transliacija internetu",
  // Short role line shown on the photo badge.
  host: "Callsy įkūrėjas ir CEO",

  // Short bio for credibility (funnel version, tighter than /apie).
  bio: "Esu Arunas Vismantas, penkių verslų įkūrėjas ir Callsy vadovas. Su Claude Code kasdien automatizuoju darbus ir kuriu produktus, nors neturiu inžinerinio išsilavinimo. Su juo pasidariau ir dalį Callsy, ir šią svetainę. Seminare parodysiu tikslų būdą, kuris man iš tikrųjų veikia.",
  photo: "/images/webinar/arunas.jpg", // drop a portrait here; page hides the frame until it exists

  // Credibility chips shown next to the host. Keep short, all verified.
  credentials: [
    "LOGIN 2025 pranešėjas",
    "Callsy įkūrėjas ir CEO",
    "500 Global akseleratorius",
    "F6S #3 AI įmonė 2026",
  ],
  // Reinforces the offer right by the form. Honest, no fake scarcity numbers.
  reassurance: ["Nemokama", "90 min gyvai", "Nuoroda el. paštu"],

  // What they'll learn.
  bullets: [
    "Kas yra Claude Code ir kur jį realiai galima įdarbinti kasdieniame darbe.",
    "Kaip atpažinti, kurias užduotis verta automatizuoti pirmiausia.",
    "Kaip teisingai duoti užduotį agentui, kad jis padarytų būtent tai, ko reikia.",
    "Tikri pavyzdžiai gyvai: nuo pasikartojančių darbų iki automatizuotų procesų.",
    "Kaip nesusimauti: dažniausios pradedančiųjų klaidos ir kaip jų išvengti.",
  ],
  cta: "Registruotis nemokamai",

  // --- Upsell (tripwire) page ---
  upsell: {
    kicker: "Palauk, dar ne viskas",
    title: "Pasiruošk seminarui: Claude Code starto rinkinys",
    price: "7,99 €",
    // The "worth digging in before the webinar" angle boosts conversion.
    pitch:
      "Prieš seminarą verta įsigilinti. Šis praktinis rinkinys su įdiegimo žingsniais, paruoštais promptais ir įrankių lentele leis tau ateiti pasiruošusiam ir iš seminaro išsinešti dvigubai daugiau. Pasiūlymas galioja tik čia ir dabar.",
    bullets: [
      "Įdiegimo žingsniai: nuo nulio iki pirmo veikiančio projekto.",
      "Paruošti promptai, kuriuos tereikia nukopijuoti.",
      "Įrankių ir kainų lentelė: nuo ko pradėti.",
      "Kontrolinis sąrašas: ko niekada neleisti agentui.",
    ],
    cta: "Pridėti už 7,99 €",
    decline: "Ne, ačiū, matysimės seminare",
    // Placeholder checkout. Swap for the real Gumroad/Stripe/etc. URL later.
    checkoutUrl: "#checkout-not-wired-yet",
  },
} as const;
