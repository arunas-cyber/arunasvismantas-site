/**
 * Webinar funnel content. Everything editable in one place.
 * ⚠️ DRAFT COPY — replace with the real webinar details + Arunas's photo.
 */
export const webinar = {
  // --- Landing page ---
  eyebrow: "Nemokamas vebinaras",
  // Big promise. Keep it concrete and outcome-led.
  title: "Kaip iš tikrųjų dirbti su Claude Code ir susikurti produktą be programavimo",
  subtitle:
    "Per 90 minučių gyvai parodysiu, kaip pats dirbu su Claude Code: nuo idėjos iki veikiančio produkto. Tą patį būdą kasdien naudoju kurdamas Callsy.",
  // ISO date + a human label (LT). Set the real one.
  dateISO: "2026-08-14T18:00:00+03:00",
  dateLabel: "Rugpjūčio 14 d., 18:00 (Lietuvos laiku)",
  place: "Tiesioginė transliacija internetu",
  // Short role line shown on the photo badge.
  host: "Callsy įkūrėjas ir CEO",

  // Short bio for credibility (funnel version, tighter than /apie).
  bio: "Esu Arunas Vismantas, penkių verslų įkūrėjas ir Callsy vadovas. Su Claude Code kasdien kuriu produktus, nors neturiu inžinerinio išsilavinimo. Su juo sukūriau ir dalį Callsy, ir šią svetainę. Vebinare parodysiu tikslų būdą, kuris man iš tikrųjų veikia.",
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
    "Kas yra Claude Code ir kodėl jis viską keičia tiems, kurie nemoka programuoti.",
    "Kaip paruošti kompiuterį ir pradėti nuo nulio per vieną vakarą.",
    "Kaip teisingai kalbėti su agentu, kad jis sukurtų būtent tai, ko nori.",
    "Tikras pavyzdys gyvai: nuo tuščio ekrano iki veikiančio produkto.",
    "Kaip nesusimauti: dažniausios pradedančiųjų klaidos ir kaip jų išvengti.",
  ],
  cta: "Registruotis nemokamai",

  // --- Upsell (tripwire) page ---
  upsell: {
    kicker: "Palauk, dar ne viskas",
    title: "Pasiruošk vebinarui: Claude Code starto rinkinys",
    price: "7,99 €",
    // The "worth digging in before the webinar" angle boosts conversion.
    pitch:
      "Prieš vebinarą verta įsigilinti. Šis praktinis rinkinys su įdiegimo žingsniais, paruoštais promptais ir įrankių lentele leis tau ateiti pasiruošusiam ir iš vebinaro išsinešti dvigubai daugiau. Pasiūlymas galioja tik čia ir dabar.",
    bullets: [
      "Įdiegimo žingsniai: nuo nulio iki pirmo veikiančio projekto.",
      "Paruošti promptai, kuriuos tereikia nukopijuoti.",
      "Įrankių ir kainų lentelė: nuo ko pradėti.",
      "Kontrolinis sąrašas: ko niekada neleisti agentui.",
    ],
    cta: "Pridėti už 7,99 €",
    decline: "Ne, ačiū, matysimės vebinare",
    // Placeholder checkout. Swap for the real Gumroad/Stripe/etc. URL later.
    checkoutUrl: "#checkout-not-wired-yet",
  },
} as const;
