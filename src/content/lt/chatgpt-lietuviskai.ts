import { type Article } from "../types";

/** SPOKE — kw "chatgpt lietuviškai" (12,100/mo). Built on cited research. */
export const chatgptLietuviskai: Article = {
  routeKey: "lt-chatgpt-lietuviskai",
  kind: "spoke",
  publishedAt: "2026-07-15",
  kicker: "Dirbtinis intelektas",
  lede: "Visi rašo, kad ChatGPT „puikiai moka lietuviškai\". Tyrimų skaičiai sako kitaip. Štai kiek gerai jis moka iš tikrųjų, kaip naudotis nemokamai ir be registracijos, ir kodėl dalis „ChatGPT lietuviškai\" svetainių apskritai nėra ChatGPT.",
  hero: {
    src: "/images/insights/chatgpt-lietuviskai.jpg",
    alt: "Iliustracija: du pokalbio burbulai, vienas su dirbtinio intelekto žvaigždute",
  },
  blocks: [
    {
      type: "p",
      text: "Jei ieškojai „ChatGPT lietuviškai\", greičiausiai radai dvi rūšis puslapių: tokius, kurie sako, kad viskas puikiai veikia, ir tokius, kurie siūlo „ChatGPT lietuviškai nemokamai, be registracijos\". Abu atvejai nutyli svarbiausius dalykus. Šis gidas remiasi tyrimų duomenimis, ne nuomonėmis.",
    },
    {
      type: "h2",
      id: "ar-moka",
      text: "Ar ChatGPT moka lietuviškai?",
    },
    {
      type: "p",
      text: "Taip, ir nieko nustatinėti nereikia. Parašyk lietuviškai ir jis atsakys lietuviškai, kalbą jis atpažįsta automatiškai. Sąsajos (meniu, mygtukų) kalbą galima keisti nustatymuose, bet tai atskiras dalykas nuo atsakymų kalbos.",
    },
    {
      type: "p",
      text: "Tikrasis klausimas ne „ar moka\", o **kiek gerai moka**. Čia ir prasideda įdomiausia dalis.",
    },
    {
      type: "h2",
      id: "kiek-gerai",
      text: "Kiek gerai iš tikrųjų? Skaičiai, ne nuomonės",
    },
    {
      type: "p",
      text: "Beveik visi lietuviški straipsniai (ir net Google AI apžvalga) teigia, kad ChatGPT lietuvių kalbą moka „puikiai\". Tai patogus, bet nepatikrintas teiginys. Tyrimai rodo niuansuotesnį vaizdą:",
    },
    {
      type: "table",
      caption:
        "Ką rodo vieši tyrimai apie didžiųjų kalbos modelių lietuvių kalbą.",
      head: ["Tyrimas", "Ką matavo", "Rezultatas"],
      rows: [
        [
          "[LoResLM 2026](https://aclanthology.org/2026.loreslm-1.32/)",
          "Lietuvių kalbos linksnius (305 sakinių poros)",
          "Tikslumas **0,662–0,852**. Sunkiausiai sekasi retesnės konstrukcijos.",
        ],
        [
          "[arXiv 2501.09154](https://arxiv.org/html/2501.09154v1)",
          "550 Lietuvos istorijos klausimų, 8 kalbos",
          "GPT-4o pirmavo su **0,88** tikslumu. Bet Baltijos kalbos atsilieka nuo Šiaurės šalių kalbų.",
        ],
        [
          "[Neurotechnology, arXiv 2408.12963](https://arxiv.org/pdf/2408.12963)",
          "Vienakalbis lietuviškas modelis prieš daugiakalbius",
          "Specialiai lietuvių kalbai treniruotas modelis **pranoko didesnius daugiakalbius**.",
        ],
      ],
    },
    {
      type: "p",
      text: "Perskaityk tą pirmą eilutę dar kartą. Geriausiu atveju maždaug **85% tikslumas ties linksniais**, blogiausiu, apie 66%. Tai nėra „puikiai\". Tai „gerai, bet tikrinti privalu\". Ir tas antras tyrimas atskleidžia dar vieną nemalonų faktą: tie patys modeliai su Šiaurės šalių kalbomis susitvarko geriau nei su lietuvių. Lietuvių kalba dirbtiniam intelektui vis dar yra antrarūšė, nes skaitmeninių tekstų, iš kurių jis mokosi, tiesiog mažiau.",
    },
    {
      type: "quote",
      text: "ChatGPT lietuviškai kalba gerai. Bet „gerai\" ir „puikiai\" skiria būtent tie 15%, kuriuos tu turėsi pataisyti pats.",
    },
    {
      type: "h2",
      id: "kur-klysta",
      text: "Kur ChatGPT klysta lietuviškai",
    },
    {
      type: "ul",
      items: [
        "**Linksniai.** Dažniausia ir labiausiai krintanti į akis klaida, ypač retesnėse konstrukcijose.",
        "**Neegzistuojantys žodžiai.** Modelis kartais tiesiog sukuria žodį, kuris skamba lietuviškai, bet jo nėra.",
        "**Vertalai ir anglicizmai.** Sakinio struktūra lieka angliška, tik žodžiai lietuviški. Skaitosi kaip vertimas, nes iš esmės tai ir yra vertimas.",
        "**Bendrinis turinys.** Klausk apie lietuvišką temą, ir dažnai gausi abstrakčią vandenį primenančią pastraipą.",
        "**Prasimanyti faktai.** Ten, kur lietuviško turinio internete mažai (vietos istorija, teisė, institucijos), modelis linkęs įtikinamai prasimanyti.",
      ],
    },
    {
      type: "p",
      text: "Tai ne mano nuomonė. KTU kalbos ekspertai, tarp jų VLKK narė prof. dr. Ramunė Kasperė, dar 2024-aisiais viešai konstatavo, kad modeliai generuoja lietuvių kalbą su „daug klaidų, netikslumų, neegzistuojančių žodžių\", o menkai aprašytomis lietuviškomis temomis „pateikiama informacija yra klaidinga\". Modeliai nuo tada pagerėjo, bet šablonas išliko tas pats.",
    },
    {
      type: "h2",
      id: "be-registracijos",
      text: "Ar reikia registruotis? Ne",
    },
    {
      type: "p",
      text: "Štai kur daugelis lietuviškų puslapių tave klaidina. Norint pabandyti ChatGPT, **registruotis nereikia**. Eik į chatgpt.com ir tiesiog rašyk. Jokio el. pašto, jokio slaptažodžio. Tai oficiali OpenAI funkcija, ne triukas.",
    },
    {
      type: "p",
      text: "Be paskyros riboja žinučių kiekį ir neišsaugo pokalbių istorijos. Bet svarbiausia suprasti: **pats oficialus produktas jau dabar yra nemokamas ir be registracijos.** Įsidėmėk tai, nes tuoj paaiškės, kodėl.",
    },
    {
      type: "h2",
      id: "svetaines-kurios-nera-chatgpt",
      text: "Atsargiai: „ChatGPT lietuviškai\" svetainės, kurios nėra ChatGPT",
    },
    {
      type: "p",
      text: "Google paieškoje pagal „chatgpt lietuviškai\" aukščiau už pačią OpenAI dažnai lipa tarpininkų svetainės, siūlančios „ChatGPT lietuviškai nemokamai, neribotai ir be registracijos\". Pasidomėjus, kas už jų slypi, vaizdas įdomus:",
    },
    {
      type: "ul",
      items: [
        "**Viena populiariausių** tokių svetainių priklauso **Čekijos įmonei** (Explicaire s.r.o., Plzeň). Jos pačios smulkiajame šrifte parašyta, kad „ChatGPT yra registruotas OpenAI prekės ženklas, o mūsų paslauga yra nepriklausoma alternatyva ir niekaip nesusijusi su OpenAI\". Tai parašyta po antrašte „Chat GPT lietuviškai nemokamai\".",
        "**Ta pati svetainė nenurodo, koks modelis** iš tikrųjų atsakinėja. Negali patikrinti, ar bendrauji su ChatGPT, ar su kokiu nors pigesniu modeliu.",
        "**Kita aukštai reitinguojama svetainė** su „chatgpt\" domeno pradžioje pasirodo esanti paprastas WordPress tinklaraštis, nukreipiantis tave į tą patį chatgpt.com.",
      ],
    },
    {
      type: "p",
      text: "Ar tai sukčiai? Ne. Tai realios įmonės su realiais teisiniais puslapiais. Bet pozicionavimas klaidina, o rizikos realios: tavo tekstai keliauja per nežinomą tarpininką, negali valdyti duomenų kaip OpenAI paskyroje, nežinai, koks modelis atsako, o „nemokamai ir neribotai\" praktiškai reiškia reklamą ir mokamus planus.",
    },
    {
      type: "p",
      text: "Ir čia esmė: **kiekvieną priežastį naudotis tarpininku (nemokama, be registracijos, veikia naršyklėje) jau dabar patenkina pats chatgpt.com.** Tos svetainės reitinguojasi ne todėl, kad sprendžia problemą, o todėl, kad geriau optimizuoja lietuvišką raktažodį nei OpenAI.",
    },
    {
      type: "h2",
      id: "geresne-lietuviu-kalba",
      text: "Kaip išspausti geresnę lietuvių kalbą: 7 patarimai",
    },
    {
      type: "ol",
      items: [
        "**Aiškiai paprašyk natūralios kalbos.** „Rašyk natūralia lietuvių kalba, ne vertimu iš anglų. Venk anglicizmų ir vertalų.\" Tai tiesiogiai taikosi į dažniausią silpnybę.",
        "**Įrašyk tai į nuolatinius nurodymus** (Custom Instructions), o ne į pokalbį. Vienkartinė žinutė pasimiršta, nustatymai galioja visada.",
        "**Nurodyk registrą:** dalykinis, šnekamasis ar akademinis. Modelis registro klaidų nemato, o skaitytojas mato iškart.",
        "**Dirbk dviem etapais.** Antra užklausa: „Patikrink linksnius ir ar kur nors skamba kaip vertimas.\" Tikrinti modeliui sekasi geriau nei kurti.",
        "**Duok šaltinį, o ne kliaukis atmintimi.** Įklijuok tekstą ir paprašyk juo remtis. Būtent lietuviškose temose atmintis dažniausiai ir prasimano.",
        "**Pateik savo rašymo pavyzdį.** Vienas tavo tekstas nustato toną geriau nei dešimt būdvardžių.",
        "**Niekada nepasitikėk lietuviškais faktais be šaltinio.** Vietos istorija, teisė, institucijos, tai zona, kurioje modelis klysta įtikinamiausiai.",
      ],
    },
    {
      type: "h2",
      id: "alternatyvos",
      text: "Alternatyvos",
    },
    {
      type: "p",
      text: "Sąžiningas atsakymas į klausimą „kuris AI geriausias lietuviškai\": **viešo, patikimo palyginimo tarp ChatGPT, Claude ir Gemini lietuvių kalba tiesiog nėra.** Kas teigia kitaip, spėja. Visi trys lietuviškai susikalba, visi trys klysta panašiose vietose. Aš kasdien rašau su [Claude](https://claude.ai/referral/5JaLlVfIEg) (rekomendacinė nuoroda, tau nieko nekainuoja), bet tai mano įprotis, ne išmatuotas pranašumas.",
    },
    {
      type: "p",
      text: "Yra ir specialiai lietuvių kalbai kurtų modelių: lietuviška Neurotechnology išleido atvirą LT-Llama2, apmokytą su daugiau nei 14 mlrd. lietuviškų žodžių. Būtent jis ir įrodė, kad specializuotas modelis gali pranokti didesnius daugiakalbius. Bet kasdieniam naudotojui tai kol kas ne alternatyva: tai modelis programuotojams, be patogios pokalbių programėlės.",
    },
    {
      type: "faq",
      title: "Dažni klausimai",
      items: [
        {
          q: "Ar ChatGPT moka lietuviškai?",
          a: "Taip, ir automatiškai: parašyk lietuviškai, atsakys lietuviškai. Bet tyrimai rodo apie 0,66–0,85 tikslumą ties linksniais, o lietuvių kalba atsilieka nuo Šiaurės šalių kalbų. Tai gerai, bet ne „puikiai\", tekstą visada peržiūrėk.",
        },
        {
          q: "Ar reikia registruotis norint naudotis ChatGPT?",
          a: "Ne. Eik į chatgpt.com ir rašyk, tai oficiali galimybė be paskyros. Be registracijos ribojamas žinučių kiekis ir neišsaugoma pokalbių istorija.",
        },
        {
          q: "Ar ChatGPT nemokamas?",
          a: "Taip, yra nemokama versija su ribojimais: pasiekus dienos ribą, modelis persijungia į silpnesnį. Ribos yra dinamiškos ir keičiasi, todėl tikslių skaičių neverta įsiminti. Mokami planai duoda galingiausius modelius ir didesnes ribas.",
        },
        {
          q: "Ar „ChatGPT lietuviškai be registracijos\" svetainės saugios?",
          a: "Dažniausiai tai nepriklausomi tarpininkai, ne OpenAI. Jie nenurodo, koks modelis atsako, o tavo tekstai keliauja per nežinomą trečiąją šalį. Kadangi oficialus chatgpt.com jau veikia nemokamai ir be registracijos, prasmės jais naudotis beveik nėra.",
        },
        {
          q: "Kuris dirbtinis intelektas geriausiai moka lietuviškai?",
          a: "Viešo patikimo palyginimo nėra. Vieninteliai išmatuoti signalai: GPT-4o pasiekė 0,88 tikslumą Lietuvos istorijos klausimuose, o specialiai lietuvių kalbai treniruotas modelis pranoko didesnius daugiakalbius. Praktinis patarimas: pasirink vieną, išbandyk su savo tekstais ir visada peržiūrėk.",
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
