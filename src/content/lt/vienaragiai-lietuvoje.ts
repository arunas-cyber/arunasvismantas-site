import { type Article } from "../types";

/** Spoke — kw "vienaragiai lietuvoje" (110/mo, KD 3). Link-magnet. */
export const vienaragiaiLietuvoje: Article = {
  routeKey: "lt-vienaragiai-lietuvoje",
  kind: "spoke",
  publishedAt: "2026-07-21",
  kicker: "Startuoliai",
  lede: "Lietuva, mažiau nei trijų milijonų gyventojų šalis, jau užaugino penkis vienaragius. Kas jie, kaip kiekvienas pasiekė milijardo vertę ir ką iš to gali pasimokyti kiekvienas įkūrėjas.",
  blocks: [
    {
      type: "p",
      text: "Vienaragis versle yra retas dalykas: startuolis, kurio vertė viršija milijardą dolerių. Terminą 2013 metais sugalvojo investuotoja Aileen Lee būtent todėl, kad tokios įmonės yra tokios retos, kaip mitinis vienaragis. Ir vis dėlto Lietuva, maža šalis Baltijos pakrantėje, jų turi jau penkis. Tai daugiau nei įspūdinga santykyje su gyventojų skaičiumi.",
    },
    {
      type: "h2",
      id: "kas-yra-vienaragis",
      text: "Kas yra vienaragis?",
    },
    {
      type: "p",
      text: "Vienaragis (angl. unicorn) yra privati įmonė, kurios vertė viršija vieną milijardą dolerių, dažniausiai dar prieš išeinant į biržą. Vertė nustatoma investuotojų raunduose: kai fondai perka įmonės dalį, jie tuo pačiu įvertina visą įmonę. Kai tas įvertinimas peržengia milijardą, gimsta vienaragis.",
    },
    {
      type: "p",
      text: "Svarbu suprasti, kad vertė nėra tas pats kas pelnas ar pinigai banke. Tai investuotojų lūkestis, kiek įmonė bus verta ateityje. Kai kurie vienaragiai yra pelningi, kiti dar degina pinigus augimui. Bet visais atvejais tai ženklas, kad rimti investuotojai tiki milžinišku įmonės potencialu.",
    },
    {
      type: "h2",
      id: "lietuvos-vienaragiai",
      text: "Penki Lietuvos vienaragiai",
    },
    {
      type: "table",
      caption: "Lietuvos vienaragiai (2026 m.)",
      head: ["Įmonė", "Sritis", "Vienaragis nuo"],
      rows: [
        ["Vinted", "Naudotų drabužių prekyvietė", "2019 (pirmasis)"],
        ["Nord Security", "Kibernetinis saugumas (NordVPN)", "2022"],
        ["Baltic Classifieds Group", "Internetiniai skelbimai", "Vienaragis"],
        ["Flo Health", "Moterų sveikatos programėlė", "2024"],
        ["Cast AI", "Debesų kaštų optimizavimas", "2026 (penktasis)"],
      ],
    },
    {
      type: "h2",
      id: "vinted",
      text: "Vinted: pirmasis ir didžiausias",
    },
    {
      type: "p",
      text: "Vinted, naudotų drabužių prekyvietė, tapo pirmuoju Lietuvos vienaragiu 2019 metais. Idėja gimė paprastai: viena iš įkūrėjų turėjo per daug drabužių ir per mažai vietos spintoje. Šiandien Vinted yra viena didžiausių tokių platformų Europoje, o jos vertė vėlesniuose etapuose siekė apie 5 milijardus eurų. Tai geriausias pavyzdys, kaip kasdienė problema virsta milijardine įmone.",
    },
    {
      type: "h2",
      id: "nord-security",
      text: "Nord Security: kibernetinio saugumo milžinas",
    },
    {
      type: "p",
      text: "Nord Security, geriausiai žinoma dėl NordVPN, tapo antruoju Lietuvos vienaragiu 2022 metais, pritraukusi 100 milijonų dolerių investiciją prie 1,6 milijardo dolerių vertės. Po metų vertė beveik padvigubėjo. Įmonė įrodo, kad kibernetinis saugumas yra viena augančių sričių pasaulyje, o lietuviai čia yra tarp geriausių.",
    },
    {
      type: "h2",
      id: "baltic-classifieds",
      text: "Baltic Classifieds Group ir Flo Health",
    },
    {
      type: "p",
      text: "Baltic Classifieds Group valdo internetinių skelbimų platformas Baltijos šalyse ir yra vienas iš rečiau minimų, bet tvirtų Lietuvos vienaragių. Flo Health, moterų sveikatos ir menstruacinio ciklo stebėjimo programėlė, vienaragiu tapo 2024 metais, pritraukusi per 200 milijonų dolerių iš General Atlantic. Įmonė teigia esanti pirmoji vien skaitmeninė vartotojiška moterų sveikatos programėlė, pasiekusi milijardo vertę.",
    },
    {
      type: "h2",
      id: "cast-ai",
      text: "Cast AI: penktasis ir šviežiausias",
    },
    {
      type: "p",
      text: "Cast AI tapo penktuoju Lietuvos vienaragiu 2026 metų sausį. Įmonė kuria debesų kaštų optimizavimo programinę įrangą, padedančią verslams sutaupyti infrastruktūros išlaidų. Nors būstinė yra Floridoje, įmonė turi lietuviškas šaknis ir didelį biurą Vilniuje, todėl pagrįstai laikoma Lietuvos vienaragiu. Tai pirmasis šalies vienaragis, kurio pagrindas yra dirbtinio intelekto era.",
    },
    {
      type: "h2",
      id: "kas-juos-vienija",
      text: "Kas vienija Lietuvos vienaragius",
    },
    {
      type: "p",
      text: "Kai pažvelgi į visus penkis, matai kelis bendrus bruožus, kurie, mano nuomone, ir yra tikroji pamoka:",
    },
    {
      type: "ol",
      items: [
        "**Globalūs nuo pirmos dienos.** Nė vienas iš jų nekūrė tik Lietuvai. Maža vidaus rinka privertė iš karto taikytis į pasaulį.",
        "**Sprendžia realią, plačią problemą.** Per brangūs drabužiai, saugumas internete, moterų sveikata, debesų kaštai. Problemos, kurias jaučia milijonai žmonių.",
        "**Stipri techninė komanda.** Lietuva turi puikų inžinerinį talentą, o šios įmonės sugebėjo jį pritraukti ir išlaikyti.",
        "**Ilgas kelias, ne staigmena.** Nė vienas netapo vienaragiu per naktį. Vinted augo dešimtmetį. Sėkmė atrodo staigi tik iš šono.",
      ],
    },
    {
      type: "h2",
      id: "kas-bus-kitas",
      text: "Kas bus kitas vienaragis?",
    },
    {
      type: "p",
      text: "Ekosistema pilna kandidatų. PVcase, saulės elektrinių projektavimo programinės įrangos kūrėja, dažnai minima kaip artimiausias būsimas vienaragis. Yra ir daugiau sparčiai augančių įmonių įvairiose srityse. Dirbtinio intelekto banga kuria naują kartą startuolių, kurie gali pasiekti mastą greičiau nei bet kada anksčiau. Su Callsy irgi einame šiuo keliu, kurdami AI balso agentus el. prekybai.",
    },
    {
      type: "h2",
      id: "ko-pasimokyti",
      text: "Ką iš to gali pasimokyti",
    },
    {
      type: "p",
      text: "Nesvarbu, ar kuri startuolį, ar tik svarstai, žinia paprasta: dydis nėra kliūtis. Jei maža Lietuva gali užauginti penkis vienaragius, tai geografija ar rinkos dydis nėra pasiteisinimas. Pradėk nuo realios problemos, galvok globaliai iš karto ir būk pasiruošęs ilgam keliui. Kitas vienaragis gali gimti bet kur, net tavo garaže.",
    },
    {
      type: "faq",
      title: "Dažni klausimai apie vienaragius",
      items: [
        {
          q: "Kiek vienaragių turi Lietuva?",
          a: "2026 metais Lietuva turi penkis vienaragius: Vinted, Nord Security, Baltic Classifieds Group, Flo Health ir Cast AI. Visų jų vertė viršija milijardą dolerių.",
        },
        {
          q: "Koks buvo pirmasis Lietuvos vienaragis?",
          a: "Pirmasis Lietuvos vienaragis buvo Vinted, naudotų drabužių prekyvietė, pasiekusi milijardo dolerių vertę 2019 metais. Vėliau jos vertė išaugo iki maždaug 5 milijardų eurų.",
        },
        {
          q: "Kas yra vienaragis versle?",
          a: "Vienaragis yra privati įmonė, kurios vertė viršija vieną milijardą dolerių. Terminą 2013 metais sugalvojo investuotoja Aileen Lee, nes tokios įmonės yra labai retos.",
        },
        {
          q: "Kodėl Lietuva turi tiek daug vienaragių?",
          a: "Mažos vidaus rinkos dėka lietuviai įkūrėjai priversti galvoti globaliai nuo pirmos dienos. Kartu šalis turi stiprų inžinerinį talentą ir sparčiai augančią ekosistemą, vertinamą apie 16 milijardų eurų.",
        },
      ],
    },
    {
      type: "cta",
      text: "Kuri startuolį ir taikaisi aukštai? Pasikalbėkim apie produktą, fundraisingą ir dirbtinį intelektą.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
  related: ["lt-startuolis", "lt-verslo-rykliai", "lt-verslas-be-kapitalo"],
};
