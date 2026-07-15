import { type Article } from "../types";

/** SPOKE (LT) — counterpart of en-what-is-openclaw. */
export const kasYraOpenclaw: Article = {
  routeKey: "lt-kas-yra-openclaw",
  kind: "spoke",
  publishedAt: "2026-07-15",
  kicker: "AI agentai",
  lede: "OpenClaw tapo greičiausiai augusiu projektu GitHub istorijoje, o paskui ažiotažas subliuško. Beveik visi kaltina saugumo spragas. Jie klysta. Štai kas OpenClaw yra iš tikrųjų, kas jį realiai pribaigė ir ar verta jį leisti.",
  hero: {
    src: "/images/insights/openclaw.jpg",
    alt: "Iliustracija: centrinis AI mazgas, linijomis sujungtas su pokalbių burbulais",
  },
  blocks: [
    {
      type: "p",
      text: "Per maždaug penkis mėnesius OpenClaw iš nieko tapo populiariausiu projektu GitHub platformoje, aplenkdamas net React, kuriam prireikė dešimtmečio. Paskui susidomėjimas ištirpo. Beveik visi straipsniai kaltina saugumo spragas. Ta istorija neteisinga, arba bent jau nepilna, o tikroji kur kas naudingesnė, jei galvoji apie savo AI asistentą.",
    },
    {
      type: "h2",
      id: "kas-tai",
      text: "Kas OpenClaw yra iš tikrųjų",
    },
    {
      type: "p",
      text: "Pirmiausia sugriaukime didžiausią klaidingą įsivaizdavimą: **OpenClaw nėra dirbtinio intelekto modelis.** Tai ne ChatGPT ar Claude konkurentas. Tai **vartai** (angl. gateway): nedidelė programa, veikianti tavo paties kompiuteryje, kuri sujungia modelį, už kurį jau moki, su tavo susirašinėjimo programėlėmis ir operacine sistema.",
    },
    {
      type: "p",
      text: "Tame ir slypi visas triukas, ir jis geras. Vietoj dar vienos svetainės tavo asistentas gyvena **WhatsApp, Telegram, Slack, Discord, Signal, iMessage** ir maždaug 25 kitose platformose, kuriomis jau naudojiesi. Rašai jam kaip žmogui. Jis gali vykdyti komandas, tvarkyti failus, skaityti paštą, valdyti kalendorių ir fone atlikti kelių žingsnių užduotis.",
    },
    {
      type: "table",
      caption: "OpenClaw trumpai. Patikrinta pagal projekto kodą ir dokumentaciją.",
      head: ["", ""],
      rows: [
        ["Kūrėjas", "Peter Steinberger (austrų programuotojas, anksčiau PSPDFKit)"],
        ["Pasirodė", "2025 m. lapkričio 24 d. (iš pradžių kitu pavadinimu)"],
        ["Licencija", "MIT, atviro kodo, TypeScript ir Swift"],
        ["Populiarumas", "~383 000 žvaigždučių, greičiausiai augęs projektas GitHub istorijoje"],
        ["Kur veikia", "Tavo kompiuteryje (macOS, Linux, Windows), Node.js, 18789 prievadas"],
        ["Modelis", "Savas: Claude, GPT, Gemini, DeepSeek ar vietinis modelis"],
        ["Ar palaikomas?", "Taip. v2026.7.1 išleista 2026 m. liepos 13 d., 532 prisidėjusieji"],
      ],
    },
    {
      type: "p",
      text: "Verta atvirai pasakyti apie naujoviškumą, nes TechCrunch kalbinti ekspertai taip ir padarė. AI inžinierius Artem Sorokin: *„Iš dirbtinio intelekto tyrimų perspektyvos, čia nėra nieko naujo.\"* John Hammond iš Huntress dar tiesiau: *„OpenClaw vis tiek tėra apvalkalas ChatGPT, Claude ar bet kuriam modeliui, kurį prie jo prikabini.\"*",
    },
    {
      type: "quote",
      text: "OpenClaw proveržis niekada nebuvo intelektas. Tai buvo prieiga ir pasiekiamumas. Jis padarė agentus asmeniškus, įkeldamas juos į tavo WhatsApp. Bet lubos vis tiek yra tavo modelio lubos.",
    },
    {
      type: "h2",
      id: "kas-pribaige",
      text: "Kas iš tikrųjų pribaigė ažiotažą (ne saugumas)",
    },
    {
      type: "p",
      text: "Štai dalis, kurios beveik niekas nemini. **2026 m. balandžio 4 d. Anthropic atjungė Claude Pro ir Max prenumeratas nuo trečiųjų šalių įrankių**, tarp jų ir OpenClaw. Iki tos dienos žmonės praktiškai neribotai leido agentus už fiksuotą 20-200 eurų mėnesio prenumeratą. Po jos teko mokėti pagal realų sunaudojimą.",
    },
    {
      type: "p",
      text: "Sąnaudos aktyviems naudotojams šoktelėjo **10-50 kartų**. Hacker News prisipildė pasakojimų, kaip 200 dolerių ištirpsta per valandą. Boris Cherny, vadovaujantis Claude Code, paaiškino paprastai: *„mūsų prenumeratos nebuvo kurtos tokiam naudojimo modeliui.\"*",
    },
    {
      type: "p",
      text: "Įsigilink, ką tai reiškia. **Programinė įranga nuo vasario iki balandžio nepasikeitė. Pasikeitė ekonomika.** Ir atsitiktiniai naudotojai išgaravo per kelias dienas. Svajonė apie visada budintį asmeninį agentą kelis šlovingus mėnesius buvo tyliai subsidijuojama kainodaros spragos. Kai paaiškėjo tikroji niekada nemiegančio agento kaina, dauguma suprato, kad tiek jo ir nenori.",
    },
    {
      type: "p",
      text: "Kuriu AI agentus komerciškai, tad pasakysiu taip, kaip sakau kasdien: agento vieneto ekonomika nėra detalė, kurią optimizuosi vėliau. Ji ir yra produktas. OpenClaw yra didžiausia vieša šios pamokos demonstracija, kokią esame matę.",
    },
    {
      type: "h2",
      id: "localhost-klaida",
      text: "„Localhost\" klaida",
    },
    {
      type: "p",
      text: "Saugumo istorija reali, bet įdomesnė nei „kodas buvo prastas\". OpenClaw sukurtas veikti **lokaliai**, kur jo 18789 prievadas visiškai saugus, nes prie jo prieina tik tavo kompiuteris.",
    },
    {
      type: "p",
      text: "Tada žmonės panoro, kad asistentas veiktų ir uždarius nešiojamąjį. Tad perkėlė jį į debesų serverį. Ir tas prievadas tapo pasiekiamas iš interneto. Skaičiuojama, kad viešai pasiekiamų kopijų buvo **šimtai tūkstančių**.",
    },
    {
      type: "p",
      text: "Saugumo modelis buvo logiškas. Jį sugriovė ne kodas, o diegimas. Didžioji dalis tų spragų nebuvo niekieno parašytos, jos buvo **sukurtos įdiegiant**, naudotojams priėmus vieną protingai skambantį patogumo sprendimą. Ši pamoka vertingesnė už bet kokį spragų sąrašą.",
    },
    {
      type: "h2",
      id: "apie-spragas",
      text: "Apie tą baisųjį spragų skaičių",
    },
    {
      type: "p",
      text: "Pamatysi cituojant „543 saugumo spragos\" kaip įrodymą, kad OpenClaw katastrofiškai nesaugus. Būsiu sąžiningas taip, kaip dauguma nėra: **tas skaičius klaidina.** Apie 92% jų užregistravo viena saugumo tyrimų organizacija. Taip nutinka, kai populiariausias projektas GitHub istorijoje tampa trofėjumi: tyrėjai sugula visi.",
    },
    {
      type: "p",
      text: "Konkurentai turi mažiau spragų iš dalies todėl, kad į juos kur kas mažiau kas žiūri. Tai nedaro OpenClaw saugaus, kai kurios spragos buvo rimtos, įskaitant 9,9 pavojingumo teisių eskalavimą ir ataką, kai vien apsilankius svetainėje buvo galima perimti tavo agentą. Bet spragų kiekis matuoja dėmesį lygiai tiek pat, kiek kokybę.",
    },
    {
      type: "h2",
      id: "ko-nepataisysi",
      text: "Dalis, kurios nepataisysi",
    },
    {
      type: "p",
      text: "Rimčiausia problema nėra jokia atskira klaida. Tyrėjai pademonstravo ataką, kuriai **nereikėjo jokios spragos**: laiškas, apsimetantis komandos vadovu, prašantis prieigos per tariamą incidentą. Agentas paslaugiai persiuntė prisijungimo duomenis atviru tekstu. Jokia spraga neužregistruota, nes niekas nesulūžo. Viskas suveikė lygiai taip, kaip suprojektuota.",
    },
    {
      type: "p",
      text: "Simon Willison tai vadina **mirtinu trejetu**: privatūs duomenys, nepatikimas turinys ir galimybė veikti. Sudėk visus tris ir gausi problemą, kurios joks pataisymas neišsprendžia. Gali tik sumažinti sprogimo zoną. Visi saugumo šaltiniai sutaria dėl vienos taisyklės: **niekada neleisk OpenClaw savo pagrindiniame kompiuteryje.** Naudok virtualią mašiną, konteinerį ar atsarginį įrenginį.",
    },
    {
      type: "h2",
      id: "ar-mires",
      text: "Tai ar jis miręs?",
    },
    {
      type: "p",
      text: "Ne, ir tai daugelį nustebina. Versija 2026.7.1 išleista 2026 m. liepos 13 d., ir vien prie jos prisidėjo per 500 žmonių. Kūrėjas 2026 m. vasarį prisijungė prie OpenAI, o projektą perėmė ne pelno siekiantis fondas, kuris jį aktyviai prižiūri.",
    },
    {
      type: "p",
      text: "**Mirė ažiotažas, ne projektas.** Pasikeitė tik tai, kam jis skirtas: iš virusinio žaisliuko, kurį diegė visi, jis tapo infrastruktūra, kurią rimti žmonės leidžia sąmoningai, izoliuotoje aplinkoje ir su išlaidų limitais.",
    },
    {
      type: "h2",
      id: "ar-verta",
      text: "Ar verta jį leisti?",
    },
    {
      type: "ul",
      items: [
        "**Taip, jei** nori iš tikrųjų suprasti asmeninius AI agentus, leisi jį virtualioje mašinoje ar atsarginiame kompiuteryje, nustatysi griežtą išlaidų limitą ir žiūrėsi į jį kaip į eksperimentą, o ne kaip į liokajų realiam gyvenimui.",
        "**Ne, jei** nori įdiegti jį darbiniame kompiuteryje, prijungti prie tikro pašto ir palikti veikti be priežiūros. Būtent apie tokią konfigūraciją perspėja kiekvienas saugumo tyrėjas.",
        "**Kaina:** programinė įranga nemokama (MIT). Moki už modelio API naudojimą. Asmeniniam naudojimui dažniausiai minima **6-13 eurų per mėnesį**, intensyviai automatizacijai gerokai per 100.",
        "**Reikalingi įgūdžiai:** įdiegti tikrai lengva, yra vienos eilutės diegimas ir vedlys. **Apsaugoti, ne.** Tai skirtingi įgūdžiai, ir būtent antrasis yra svarbus.",
      ],
    },
    {
      type: "h2",
      id: "tikroji-pamoka",
      text: "Tikroji pamoka",
    },
    {
      type: "p",
      text: "OpenClaw vienu metu įrodė ir paklausą, ir lubas. 383 000 žvaigždučių sako, kad žmonės labai nori asmeninio AI asistento. Visa likusi istorija sako, kad kliūtis niekada nebuvo modelio protas.",
    },
    {
      type: "p",
      text: "**Kliūtis yra pasitikėjimo ribos.** Prie ko šitas daiktas gali liestis? Kieno žinutės gali jam nurodinėti? Kiek jis gali išleisti? Jokios gudrios užklausos to neišsprendžia, nes tai ne užklausų problema. Būtent todėl, kai mokau susikurti savo AI asistentą, vertingiausias įgūdis yra ne „sukurti agentą\". Agentą kiekvienas įdiegia per penkias minutes. Vertingiausias įgūdis yra **apibrėžti agento ribas**: nuspręsti, ko jis niekada negali daryti.",
    },
    {
      type: "faq",
      title: "Dažni klausimai",
      items: [
        {
          q: "Kas yra OpenClaw paprastais žodžiais?",
          a: "Atviro kodo programa, veikianti tavo kompiuteryje, kuri sujungia AI modelį, už kurį jau moki (pvz., Claude ar GPT), su tavo susirašinėjimo programėlėmis. Vietoj svetainės tavo asistentas gyvena WhatsApp ar Telegram ir gali dirbti su failais, paštu, kalendoriumi. Tai nėra pats dirbtinio intelekto modelis.",
        },
        {
          q: "Ar OpenClaw nemokamas?",
          a: "Programinė įranga nemokama, MIT licencija. Bet moki už AI modelio API naudojimą, ir tai yra tikroji kaina. Asmeniniam naudojimui dažniausiai minima 6-13 eurų per mėnesį, intensyviai automatizacijai gerokai daugiau nei 100.",
        },
        {
          q: "Ar galiu naudoti savo Claude prenumeratą su OpenClaw?",
          a: "Ne, nuo 2026 m. balandžio 4 d., kai Anthropic atjungė Pro ir Max prenumeratas nuo trečiųjų šalių įrankių. Dabar reikia mokėti pagal API naudojimą. Būtent šis kainos pokytis, o ne saugumas, sugriovė atsitiktinių naudotojų bazę.",
        },
        {
          q: "Ar OpenClaw saugus?",
          a: "Ne pagal nutylėjimą ir ne pagrindiniame kompiuteryje. Jis pakankamai saugus virtualioje mašinoje su leidžiamųjų sąrašais, tik patikrintais įskiepiais, išlaidų limitu ir niekada į internetą neatvertais vartais. Giliausia rizika yra architektūrinė, ne klaida: agentą, turintį privačius duomenis, gaunantį nepatikimą turinį ir galintį veikti, galima paprasčiausiai apgauti.",
        },
        {
          q: "Ar reikia mokėti programuoti?",
          a: "Įdiegti, ne, yra vienos eilutės diegimas ir vedlys. Saugiai valdyti, praktiškai taip. Įdiegti lengva, apibrėžti saugias ribas, sunku.",
        },
        {
          q: "Ar OpenClaw miręs?",
          a: "Ne. Mirė ažiotažas, ne projektas. Versija 2026.7.1 išleista 2026 m. liepą su daugiau nei 500 prisidėjusiųjų, o projektą prižiūri ne pelno siekiantis fondas.",
        },
      ],
    },
    {
      type: "cta",
      text: "Nori susikurti savo AI asistentą, tinkamai apibrėžtą, kad būtų naudingas, o ne rizika? Pakalbėkime.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
  related: ["lt-dirbtinis-intelektas", "lt-dirbtinio-intelekto-programos"],
};
