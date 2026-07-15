import { type Article } from "../types";

/** SPOKE — kw "dirbtinio intelekto programos" (880/mo, KD 3). By use case. */
export const dirbtinioIntelektoProgramos: Article = {
  routeKey: "lt-dirbtinio-intelekto-programos",
  kind: "spoke",
  publishedAt: "2026-07-15",
  kicker: "Dirbtinis intelektas",
  lede: "Geriausios dirbtinio intelekto programos nėra vienas sąrašas. Yra atsakymas į klausimą „ką konkrečiai nori padaryti\". Štai kuri programa kuriam darbui, ir kur kiekviena nusileidžia.",
  hero: {
    src: "/images/insights/dirbtinio-intelekto-programos.jpg",
    alt: "Iliustracija: dirbtinio intelekto programų piktogramų tinklelis su didinamuoju stiklu",
  },
  blocks: [
    {
      type: "p",
      text: "Klausimas „kuri dirbtinio intelekto programa geriausia\" yra maždaug toks pat naudingas, kaip klausimas „kuris įrankis geriausias\". Atsuktuvas ar pjūklas? Priklauso, ką darai. Todėl šis sąrašas sudėliotas ne pagal reitingą, o pagal darbą, kurį reikia atlikti.",
    },
    {
      type: "p",
      text: "**Skaidrumo dėlei:** nuoroda į Claude yra rekomendacinė, tau ji nieko nekainuoja. Įtraukiau jį todėl, kad pats juo naudojuosi kasdien.",
    },
    {
      type: "h2",
      id: "trumpas-atsakymas",
      text: "Trumpas atsakymas",
    },
    {
      type: "table",
      caption: "Kuri programa kuriam darbui. Visos turi nemokamą versiją.",
      head: ["Ką nori padaryti", "Ką rinktis"],
      rows: [
        ["Rašyti tekstus, ilgus dokumentus", "Claude"],
        ["Universaliai, viskam po truputį", "ChatGPT"],
        ["Rasti faktus su šaltiniais", "Perplexity arba Copilot"],
        ["Dirbti Gmail, Docs, Drive aplinkoje", "Google Gemini"],
        ["Kurti paveikslėlius", "Gemini arba Microsoft Designer"],
        ["Iššifruoti garso įrašus", "Whisper (nemokamas, veikia tavo kompiuteryje)"],
      ],
    },
    {
      type: "h2",
      id: "rasymui",
      text: "Rašymui ir tekstams",
    },
    {
      type: "p",
      text: "**[Claude](https://claude.ai/referral/5JaLlVfIEg)** yra stipriausias ilgesniems tekstams, dokumentams ir niuansuotam tonui. Jis rečiau „pila vandenį\" ir geriau laikosi sudėtingų nurodymų. Nemokama versija turi solidžias ribas, kurių kasdieniam rašymui dažniausiai pakanka.",
    },
    {
      type: "p",
      text: "**ChatGPT** universaliausias: rašymas, idėjos, klausimai, vaizdai ir balso pokalbis vienoje vietoje. Jo silpnoji vieta nemokamoje versijoje, griežčiausios žinučių ribos: pasiekus jas, tyliai persijungia į silpnesnį modelį.",
    },
    {
      type: "p",
      text: "Abu lietuviškai rašo padoriai, bet nė vienas nerašo tobulai. Kodėl būtent taip ir ką su tuo daryti, išsamiai paaiškinau [ChatGPT lietuviškai gide](/izvalgos/chatgpt-lietuviskai).",
    },
    {
      type: "h2",
      id: "faktams",
      text: "Faktams ir paieškai",
    },
    {
      type: "p",
      text: "**Perplexity** yra geriausias pasirinkimas, kai reikia atsakymo su šaltiniais. Jis veikia kaip paieška, tik iškart pateikia atsakymą ir nurodo, iš kur jį paėmė. Nemokama versija riboja gilesnes „Pro\" paieškas iki kelių per dieną, bet paprastoms užklausoms neriboja.",
    },
    {
      type: "p",
      text: "**Microsoft Copilot** nemokamai duoda tai, ką kiti slepia už mokamos sienos: atsakymus su nuorodomis, paveikslėlių kūrimą ir gilesnio mąstymo režimą. Jei nesi Microsoft ekosistemoje, jis vis tiek vertas dėmesio būtent dėl to.",
    },
    {
      type: "h2",
      id: "vaizdams",
      text: "Vaizdams",
    },
    {
      type: "ul",
      items: [
        "**Google Gemini** patogiausias pradėti: veikia naršyklėje ir turi solidžią nemokamą dienos kvotą.",
        "**Microsoft Designer** nemokamai duoda daug generacijų, užtenka Microsoft paskyros.",
        "**Ideogram** vienintelis padoriai sudeda **tekstą paveikslėlyje** (logotipai, plakatai, iškabos). Jei reikia raidžių, rinkis jį.",
      ],
    },
    {
      type: "h2",
      id: "garsui",
      text: "Garsui ir transkripcijai",
    },
    {
      type: "p",
      text: "**Whisper** (OpenAI, atviro kodo) iššifruoja garso įrašus, supranta ir lietuviškai. Svarbiausia: jį galima paleisti savo kompiuteryje. Tai reiškia **neribotai, nemokamai ir privačiai**, tavo įrašai niekur nekeliauja. Apie tai beveik niekas nekalba, nors tai bene naudingiausias nemokamas AI įrankis apskritai.",
    },
    {
      type: "h2",
      id: "kaip-pasirinkti",
      text: "Kaip pasirinkti (ir netapti įrankių kolekcionieriumi)",
    },
    {
      type: "ol",
      items: [
        "**Pradėk nuo darbo, ne nuo įrankio.** Užrašyk, ką konkrečiai nori padaryti šią savaitę.",
        "**Pasirink vieną programą** iš lentelės ir naudok ją savaitę realiam darbui.",
        "**Nemokėk iškart.** Mokama versija (apie 20 eurų per mėnesį) verta tik tada, kai pajunti konkrečią ribą.",
        "**Neskubėk kolekcionuoti.** Du gerai pažįstami įrankiai naudingesni už dešimt išbandytų po kartą.",
      ],
    },
    {
      type: "quote",
      text: "Geriausia dirbtinio intelekto programa yra ta, kurią atsidarai kasdien. Visos kitos yra tik skirtukai naršyklėje.",
    },
    {
      type: "faq",
      title: "Dažni klausimai",
      items: [
        {
          q: "Kuri dirbtinio intelekto programa geriausia?",
          a: "Nėra vienos geriausios. Rašymui, Claude. Universaliai, ChatGPT. Faktams su šaltiniais, Perplexity. Darbui su Google paslaugomis, Gemini. Pasirink pagal darbą, kurį reikia atlikti.",
        },
        {
          q: "Ar dirbtinio intelekto programos nemokamos?",
          a: "Visos šiame sąraše turi nemokamą versiją, ir daugumai kasdienių darbų jos pakanka. Mokamos versijos duoda galingesnius modelius ir didesnes ribas. Platesnį nemokamų įrankių sąrašą surinkau [atskirai](/izvalgos/nemokamas-dirbtinis-intelektas).",
        },
        {
          q: "Kiek programų reikia?",
          a: "Vienos ar dviejų. Realiai naudingiau savaitę padirbti su viena programa, nei perbėgti dešimt. Įgūdis atsiranda iš naudojimo, ne iš pasirinkimo.",
        },
        {
          q: "Ar galima naudoti dirbtinį intelektą be interneto?",
          a: "Taip, bet ne populiariąsias programas. Atviro kodo modelius (pavyzdžiui, Whisper transkripcijai) galima paleisti savo kompiuteryje. Tada viskas veikia neribotai ir duomenys niekur nekeliauja.",
        },
      ],
    },
    {
      type: "cta",
      text: "Nori dirbtinį intelektą pritaikyti versle arba pats susikurti AI agentą? Pakalbėkime.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
  related: ["lt-dirbtinis-intelektas", "lt-nemokamas-dirbtinis-intelektas"],
};
