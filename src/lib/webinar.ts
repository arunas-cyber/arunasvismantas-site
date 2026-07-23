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
  reassurance: ["Nemokama", "90 min gyvai", "Gyvas Q&A", "Nuoroda el. paštu"],

  // What they'll learn.
  bullets: [
    "Kas yra Claude Code ir kur jį realiai galima įdarbinti kasdieniame darbe.",
    "Kaip atpažinti, kurias užduotis verta automatizuoti pirmiausia.",
    "Kaip teisingai duoti užduotį agentui, kad jis padarytų būtent tai, ko reikia.",
    "Tikri pavyzdžiai gyvai: nuo pasikartojančių darbų iki automatizuotų procesų.",
    "Kaip nesusimauti: dažniausios pradedančiųjų klaidos ir kaip jų išvengti.",
    "Gyva klausimų ir atsakymų sesija: pabaigoje atsakysiu į visus tavo klausimus tiesiogiai.",
  ],
  cta: "Registruotis nemokamai",

  // Landing FAQ.
  faq: [
    {
      q: "Ar reikia mokėti programuoti?",
      a: "Ne. Seminaras skirtas žmonėms be techninio pasiruošimo. Viską rodysiu nuo nulio ir paprasta kalba.",
    },
    {
      q: "Kiek laiko truks?",
      a: "Apie 90 minučių, įskaitant gyvą klausimų ir atsakymų sesiją pabaigoje.",
    },
    {
      q: "Ar bus įrašas?",
      a: "Taip. Visiems užsiregistravusiems po seminaro atsiųsime įrašą, todėl nieko nepraleisi, net jei negalėsi dalyvauti gyvai.",
    },
    {
      q: "Ko man reikės?",
      a: "Tik kompiuterio ir interneto ryšio. Prieš seminarą el. paštu atsiųsime, ką verta pasiruošti iš anksto.",
    },
    {
      q: "Kam šis seminaras skirtas?",
      a: "Įkūrėjams, komandų vadovams ir specialistams, kurie nori automatizuoti kasdienius darbus su Claude Code, net neturėdami inžinerinio išsilavinimo.",
    },
    {
      q: "Ar tikrai nemokamas?",
      a: "Taip, dalyvavimas nemokamas. Užsiregistruok ir prisijungimo nuorodą atsiųsime el. paštu.",
    },
  ],

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
