import { type Article } from "../types";

/** Spoke — kw "oxylabs vienaragis" / "bootstrap startuolis". Founder lesson, Oxylabs case. */
export const oxylabsBootstrap: Article = {
  routeKey: "lt-oxylabs-bootstrap",
  kind: "spoke",
  publishedAt: "2026-07-24",
  kicker: "Startuoliai",
  lede: "2026 metų liepą Oxylabs pardavė dalį įmonės ir tapo vertas 3,1 milijardo eurų. Įdomiausia ne suma, o kelias: vienuolika metų be nė vieno išorinio investuotojo. Štai ką ši istorija sako kiekvienam įkūrėjui apie bootstrap, kontrolę ir tinkamą laiką.",
  blocks: [
    {
      type: "p",
      text: "Dauguma vienaragių gimsta taip: šviežia idėja, ankstyvas rizikos kapitalo raundas, paskui dar keli, ir po kelerių metų milijardo vertė, pastatyta ant investuotojų pinigų. Oxylabs padarė priešingai. Vilniaus įmonė vienuolika metų augo tik iš savo pajamų, o pirmą kartą išorinį kapitalą pritraukė tik 2026 metų liepą, jau būdama milijardinė. Tai reta ir labai pamokoma istorija.",
    },
    {
      type: "h2",
      id: "kas-nutiko",
      text: "Kas tiksliai nutiko",
    },
    {
      type: "p",
      text: "Oxylabs pardavė dalį įmonės privataus kapitalo fondui Warburg Pincus. Sandorio skaičiai kalba patys už save.",
    },
    {
      type: "table",
      caption: "Oxylabs sandoris (2026 m. liepa)",
      head: ["Rodiklis", "Reikšmė"],
      rows: [
        ["Investicija", "113,6 mln. € (130 mln. $)"],
        ["Vertinimas", "3,1 mlrd. € (3,6 mlrd. $)"],
        ["Investuotojas", "Warburg Pincus"],
        ["Išorinių raundų iki tol", "0 (vienuolika metų bootstrap)"],
        ["Metinis pajamų tempas", "~350 mln. $"],
        ["Klientų", "daugiau nei 350 tūkst. technologijų komandų"],
      ],
    },
    {
      type: "p",
      text: "Tai pirmoji išorinė investicija per visą įmonės istoriją. Po sandorio Oxylabs tapo šeštuoju Lietuvos vienaragiu ir antra vertingiausia privačia šalies įmone iškart po Vinted. Visą [Lietuvos vienaragių sąrašą rasi čia](/izvalgos/vienaragiai-lietuvoje).",
    },
    {
      type: "h2",
      id: "kas-yra-oxylabs",
      text: "Kas yra Oxylabs ir kodėl būtent dabar",
    },
    {
      type: "p",
      text: "Oxylabs įkurta 2015 metais Tesonet ekosistemoje, toje pačioje, iš kurios išaugo ir Nord Security. Pradžioje tai buvo aukštos klasės tarpinių serverių (proxy) paslauga. Šiandien įmonė save vadina interneto intelekto (web intelligence) platforma ir apdoroja milijardus užklausų per dieną: renka viešus interneto duomenis, tokius kaip kainos, paieškos rezultatai ar produktų informacija.",
    },
    {
      type: "p",
      text: "Laikas nebuvo atsitiktinis. Dirbtinio intelekto modeliams ir agentams reikia gyvų, viešų interneto duomenų milžinišku mastu, o statiškos, iš anksto suindeksuotos informacijos nebeužtenka. Oxylabs tiekia būtent tą infrastruktūrą, todėl AI banga jos verslą pastūmėjo tiksliai tada, kai rinka buvo pasiruošusi už tai mokėti.",
    },
    {
      type: "h2",
      id: "kodel-bootstrap-retas",
      text: "Kodėl bootstrap iki milijardo yra retenybė",
    },
    {
      type: "p",
      text: "Bootstrap reiškia augti be išorinių investicijų, tik iš to, ką uždirbi. Skamba patraukliai, bet realybėje iki milijardo taip prieina vienetai. Priežastis paprasta: rizikos kapitalas leidžia deginti pinigus dabar, kad užimtum rinką greičiau nei konkurentai. Bootstrap tokios prabangos neturi, todėl kiekvienas žingsnis turi būti pelningas.",
    },
    {
      type: "p",
      text: "Būtent todėl dauguma startuolių renkasi investuotojus, ir būtent todėl Oxylabs istorija tokia įspūdinga. Jie pasiekė mastą, kurį dauguma pasiekia tik su dešimtimis milijonų svetimų pinigų, neatidavę beveik nieko.",
    },
    {
      type: "h2",
      id: "ka-bootstrap-duoda",
      text: "Ką bootstrap duoda įkūrėjui",
    },
    {
      type: "ol",
      items: [
        "**Kontrolė.** Nėra investuotojų valdyboje, kurie diktuotų tempą ar spaustų parduoti. Sprendimus priima įkūrėjai.",
        "**Nuosavybė.** Kai galiausiai parduodi dalį, tavo rankose lieka kur kas didesnis gabalas. Milijardai, priklausantys tau, o ne išskaidyti per penkis raundus, yra visai kitas skaičius.",
        "**Disciplina.** Kai augi iš savo pinigų, negali slėptis už augimo bet kokia kaina. Verslas nuo pirmos dienos turi būti sveikas.",
        "**Derybų galia.** Kai pinigų nereikia, gali laukti tinkamo partnerio ir tinkamos kainos. Oxylabs derybas vedė iš stiprios, ne iš beviltiškos pozicijos.",
      ],
    },
    {
      type: "h2",
      id: "kada-neveikia",
      text: "Kada bootstrap neveikia",
    },
    {
      type: "p",
      text: "Būčiau nesąžiningas, jei sakyčiau, kad bootstrap tinka visiems. Netinka. Yra verslų, kur be didelio kapitalo tiesiog nėra šanso.",
    },
    {
      type: "ul",
      items: [
        "**Kapitalui imlūs produktai.** Jei reikia statyti gamyklą, gabenti fizinį produktą ar metus kurti technologiją be pajamų, savų pinigų nepakaks.",
        "**Rinkos, kur laimi greičiausias.** Kai laimėtojas pasiima viską, o konkurentai lekia su milijonais, lėtas bootstrap tempas gali kainuoti visą rinką.",
        "**Ilgas kelias iki pajamų.** Giliosios technologijos ar biotech, kur iki pirmo kliento praeina metai, be investuotojų sunkiai išgyvena.",
      ],
    },
    {
      type: "p",
      text: "Oxylabs turėjo laimingą derinį: didelę paklausą, greitas pajamas ir produktą, kurį galima plėsti be milžiniškų fiksuotų kaštų. Ne kiekvienas verslas toks. Todėl teisingas klausimas ne bootstrap ar rizikos kapitalas apskritai, o kas tinka būtent tavo verslui.",
    },
    {
      type: "h2",
      id: "ka-pasiimti",
      text: "Ką iš to pasiimti",
    },
    {
      type: "p",
      text: "Man, kaip įkūrėjui, Oxylabs istorijoje svarbiausia ne suma, o kantrybė. Vienuolika metų kantriai statyti pelningą verslą be triukšmo, o tada, kai rinka pasisuka tavo linkme, peršokti į milijardų lygą. Tai priminimas, kad rizikos kapitalas nėra nei vienintelis kelias, nei sėkmės matas. Su Callsy kuriame AI balso agentus el. prekybai ir irgi kiekvieną sprendimą matuojame ne pritraukta suma, o tuo, ar verslas sveikas. Pinigai, kuriuos uždirbi, beveik visada stipresni nei pinigai, kuriuos pasiskolini.",
    },
    {
      type: "faq",
      title: "Dažni klausimai",
      items: [
        {
          q: "Kiek Oxylabs verta?",
          a: "2026 metų liepą Oxylabs įvertinta 3,1 milijardo eurų (apie 3,6 milijardo dolerių), kai dalį įmonės nusipirko fondas Warburg Pincus. Tai antra vertingiausia privati Lietuvos įmonė po Vinted.",
        },
        {
          q: "Ar Oxylabs yra vienaragis?",
          a: "Taip. 2026 metų liepą Oxylabs tapo šeštuoju Lietuvos vienaragiu, tai yra privačia įmone, verta daugiau nei milijardą dolerių.",
        },
        {
          q: "Ką reiškia bootstrap?",
          a: "Bootstrap reiškia auginti verslą be išorinių investicijų, tik iš uždirbtų pajamų. Oxylabs taip augo vienuolika metų iki pat pirmo išorinio raundo.",
        },
        {
          q: "Kodėl Oxylabs pritraukė investiciją tik dabar?",
          a: "Įmonė vienuolika metų buvo pelninga, tad kapitalo nereikėjo. Dirbtinio intelekto banga smarkiai išaugino interneto duomenų paklausą, todėl atėjo tinkamas metas paspartinti augimą su stipraus partnerio pagalba.",
        },
      ],
    },
    {
      type: "cta",
      text: "Kuri startuolį ir galvoji apie bootstrap ar investuotojus? Pasikalbėkim apie produktą, pinigus ir dirbtinį intelektą.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
  related: ["lt-vienaragiai-lietuvoje", "lt-startuolis", "lt-verslas-be-kapitalo"],
};
