/**
 * Webinar funnel content. Everything editable in one place.
 * ⚠️ DRAFT COPY — replace with the real webinar details + Arunas's photo.
 */
export const webinar = {
  // --- Landing page ---
  eyebrow: "Nemokamas vebinaras",
  // Big promise. Keep it concrete and outcome-led.
  title: "Susikurk savo AI asistentą, kuris iš tikrųjų dirba už tave",
  subtitle:
    "Per 90 minučių parodysiu, kaip be programavimo pasistatyti AI agentą, kuris atlieka realų darbą, o ne tik atsakinėja į klausimus.",
  // ISO date + a human label (LT). Set the real one.
  dateISO: "2026-08-14T18:00:00+03:00",
  dateLabel: "Rugpjūčio 14 d., 18:00 (Lietuvos laiku)",
  place: "Tiesioginė transliacija internetu",

  // Short bio for credibility (funnel version, tighter than /apie).
  bio: "Esu Arunas Vismantas, penkių verslų įkūrėjas ir Callsy vadovas. Kuriu AI agentus kasdien, be inžinerinio išsilavinimo, ir pristačiau šią temą LOGIN 2025 scenoje. Šiame vebinare dalinuosi tuo, kas iš tikrųjų veikia.",
  photo: "/images/webinar/arunas.jpg", // drop a portrait here; page hides the frame until it exists

  // What they'll learn.
  bullets: [
    "Kuo AI agentas skiriasi nuo paprasto pokalbių roboto ir kada verta jį statyti.",
    "Kokius įrankius naudoti, kad pradėtum be programavimo žinių.",
    "Kaip saugiai apibrėžti, ką agentas gali ir ko negali daryti.",
    "Realus pavyzdys nuo nulio iki veikiančio asistento.",
  ],
  cta: "Registruotis nemokamai",

  // --- Upsell (tripwire) page ---
  upsell: {
    kicker: "Palauk, prieš tave išeinant",
    title: "Pasiruošk vebinarui: praktinis AI asistento gidas",
    price: "7,99 €",
    // The "worth digging in before the webinar" angle boosts conversion.
    pitch:
      "Prieš vebinarą verta įsigilinti. Šis 20 puslapių gidas su konkrečiais žingsniais ir įrankių sąrašu leis tau ateiti pasiruošusiam ir iš vebinaro išsinešti dvigubai daugiau. Pasiūlymas galioja tik dabar, šioje vietoje.",
    bullets: [
      "Žingsnis po žingsnio: nuo idėjos iki pirmojo veikiančio agento.",
      "Įrankių sąrašas su nemokamais ir mokamais variantais.",
      "Saugumo kontrolinis sąrašas: ko niekada neleisti agentui.",
      "Klausimai, kuriuos verta pasižymėti vebinarui.",
    ],
    cta: "Pridėti už 7,99 €",
    decline: "Ne, ačiū, matysimės vebinare",
    // Placeholder checkout. Swap for the real Gumroad/Stripe/etc. URL later.
    checkoutUrl: "#checkout-not-wired-yet",
  },
} as const;
