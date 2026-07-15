import { type Article } from "../types";

/** Pillar — kw "kaip sukurti verslą", from the LOGIN 2025 talk transcript. */
export const verslasBeKapitalo: Article = {
  routeKey: "lt-verslas-be-kapitalo",
  kind: "hub",
  publishedAt: "2026-07-13",
  kicker: "Verslo kūrimas",
  lede: "LOGIN 2025 konferencijoje pasidalinau tuo, ką per 20 metų ir penkis verslus išmokau apie kūrimą nuo nulio. Štai esmė vienoje vietoje: konkrečios pamokos, realūs pavyzdžiai ir įrankiai, be gražių bendrų frazių.",
  hero: {
    src: "/images/hero-stage.jpg",
    alt: "Arunas Vismantas skaito pranešimą LOGIN 2025 konferencijos scenoje",
  },
  blocks: [
    {
      type: "p",
      text: "Statistika negailestinga: apie **90% verslų žlunga nepasiekę 100 000 eurų pajamų**, o 20-30% užsidaro jau per pirmus metus. Idėja atrodo nereali, viskas kunkuliuoja, o paskui realybė pradeda smogti. Šiame straipsnyje surinkau tai, ką pats išmokau kurdamas verslus Lietuvoje ir užsienyje, tą pačią medžiagą, kurią pristačiau LOGIN 2025 scenoje pilnai salei žmonių.",
    },
    {
      type: "video",
      youtubeId: "dDxAc3GPziU",
      title: "Nuo 0 iki 100k: kaip sukurti verslą be didelio kapitalo (LOGIN 2025)",
      uploadDate: "2025-08-29",
      duration: "PT29M37S",
    },
    {
      type: "p",
      text: "Trumpai apie kontekstą: esu serijinis kūrėjas, nors save mieliau vadinu serijiniu testuotoju. Pritraukiau daugiau nei 3 mln. eurų rizikos kapitalo technologijų startuoliams, kūriau Podbase ir [iDenfy](https://www.idenfy.com) platformas, dvi skaitmeninio marketingo agentūras, o dabar auginu [Callsy](https://callsy.ai). Ne viskas pavyko, bet iš kiekvieno karto liko pamoka. Štai svarbiausios.",
    },
    {
      type: "h2",
      id: "pinigai-arba-laikas",
      text: "1. Turi arba pinigų, arba laiko",
    },
    {
      type: "p",
      text: "Pirma pamoka pati paprasčiausia ir dažniausiai ignoruojama. Kurdamas verslą tu arba turi pinigų, arba turi laiko. Turi pinigų, gali samdyti žmones, kurie padės sukurti produktą, išeiti į rinką, suktis su marketingu ir pardavimais. Turi laiko, viską teks išmokti ir padaryti pačiam.",
    },
    {
      type: "p",
      text: "Blogiausia padėtis, kai neturi nei vieno, nei kito. Idealiu atveju turi abu, bet realiai verslą įmanoma pastatyti ir tik su laiku, ir tik su pinigais. Svarbu tik sąžiningai įsivertinti, kurį iš jų turi, ir pagal tai planuoti.",
    },
    {
      type: "h2",
      id: "pardavimai-pries-produkta",
      text: "2. Pardavimai ateina prieš produktą",
    },
    {
      type: "p",
      text: "Didžiausia klaida, kurią matau Lietuvoje: žmonės tiki, kad reikia sukurti kažką nuostabaus, ir klientai patys ateis. Tai vadinama product-led growth, ir šiandien jis beveik nebeveikia, nebent tiksliai žinai savo auditoriją ir kaip iki jos prieiti. Kur kas patikimiau pradėti nuo pardavimų: pirma parduok, tada kurk.",
    },
    {
      type: "p",
      text: "Kai su Burgos įkūrėjais kūrėme Podbase, spausdinimo pagal poreikį platformą telefonų aksesuarams, per tris mėnesius turėjome tik pusiau veikiantį MVP. Vis tiek ėjome į rinką ir kalbėjomės su kūrėjais. Pirmas klientas patikėjo, per pirmą mėnesį gavome apie 1000 užsakymų, ir viskas sugriuvo: operacijos, gamyba, sąskaitos. Bet būtent tada supranti svarbiausią dalyką.",
    },
    {
      type: "quote",
      text: "Versle ne tik nesėkmė yra problema. Sėkmė irgi yra problema. Ir dažniausiai būtent ji labiausiai patikrina tavo sistemą.",
    },
    {
      type: "p",
      text: "MVP šiais laikais sudėtingėja, su visiškai brokuotu produktu ateiti nebegalima, prarasi pasitikėjimą. Bet jei nuolat iteruoji ir taisai, verta leisti produktą į rinką kuo greičiau. Su Podbase per 18 mėnesių taip pasiekėme 100 000 eurų mėnesines pasikartojančias pajamas. Nebūtina parduoti vien idėjos, parduok veikiantį MVP, o kažkas didelio gali gimti per ateinančius 12-18 mėnesių.",
    },
    {
      type: "h2",
      id: "nebijok-klausti",
      text: "3. Nebijok klausti ir prašyti",
    },
    {
      type: "p",
      text: "2018 metais kūrėme [iDenfy](https://www.idenfy.com), nuotolinio vartotojų identifikavimo (KYC) platformą. Neturėjome nei marketingo žinių, nei go-to-market strategijos, nei didelės pardavimų patirties. Bet turėjome laiko ir ambicijos. Tad tiesiog rašiau įvairiems pasauliniams technologijų portalams: Forrester, Gartner, Markets and Markets.",
    },
    {
      type: "p",
      text: "Markets and Markets atrašė, kad kaip tik ruošia ataskaitą, ir įtraukė mus tarp 10 geriausių pasaulio tos technologijos kūrėjų, šalia kelių milijardų vertės įmonių. Per naktį gavome apie 50 užklausų. Kitas pavyzdys su Callsy: turėjome teisinį klausimą, nenorėjau leisti pinigų advokatams, tad tiesiog parašiau Sorainen. Advokatė atsiliepė ir nemokamai viską paaiškino.",
    },
    {
      type: "p",
      text: "Pamoka aiški: jei neturi pinigų, visada gali klausti ir prašyti. Žmonės padeda, tikrai padeda. Ir sėkmė lydi tuos, kurie to nebijo daryti.",
    },
    {
      type: "h2",
      id: "kainodara-ir-marzos",
      text: "4. Kainodara: 3x taisyklė ir maržos",
    },
    {
      type: "p",
      text: "Per mėnesį pakalbinu apie 50 verslo savininkų, ir daugelis apie kainodarą galvoja stebėtinai mažai. Paprasta taisyklė: jei tavo savikaina nėra bent 3 kartus mažesnė už pardavimo kainą, turi rimtą problemą. Anksčiau ar vėliau tapsi limituotas ir nebegalėsi augti.",
    },
    {
      type: "p",
      text: "Orientuokis į verslus, kurių maržingumas didesnis nei 60%, idealiu atveju 70-80%. Be maržos nėra augimo galimybės (scaleability), o be jos tai tampa amatu, ne verslu. Pilna Lietuvos verslų, kurie įstrigo ties 20-30 tūkst. eurų apyvarta: jie tiesiog nebegali sau leisti nei marketingo, nei geresnių specialistų, ir augimas sustoja.",
    },
    {
      type: "h2",
      id: "griztantys-klientai",
      text: "5. Grįžtantys klientai svarbesni už naujus",
    },
    {
      type: "p",
      text: "Antra kainodaros pusė yra grįžtančių klientų rodiklis. Sveikiausi ir greičiausiai augantys verslai yra paremti prenumerata ar dažnu vartojimu: SaaS, B2B, dažnai perkami produktai. Priežastis paprasta, kliento pritraukimo kaštai (CAC) turi atsipirkti per jo gyvavimo vertę (LTV).",
    },
    {
      type: "p",
      text: "Kūrėme telemedicinos startuolį Smart Vision. Verslo modelis veikė, turėjome finansavimą, bet naujo kliento pritraukimas kainuodavo 50-70 eurų, o klientai per porą metų pirkdavo tik vieną du kartus. Kai LTV lygus CAC, augti ir plėstis į naujas rinkas tampa be galo sunku, prireikia labai didelių investicijų.",
    },
    {
      type: "p",
      text: "Kai Didžiojoje Britanijoje vysčiau kavinių tinklą, net turistiniame Londone 60-70% pajamų ateidavo iš lojalių, reguliarių klientų, ir tik 30-40% iš praeivių. Tie 60% padengia kaštus, o likę 30-40% yra tavo pelnas. Ši logika veikia beveik kiekviename versle.",
    },
    {
      type: "h2",
      id: "funelis",
      text: "6. Pažink savo pardavimų funelį",
    },
    {
      type: "p",
      text: "Funelis skamba kaip keiksmažodis, bet jei turi verslą ir nežinai savo klientų pritraukimo funelio, turi problemą arba neišnaudoji potencialo. Geras pavyzdys, su kuriuo dirbome, nišinis kvepalų prekės ženklas. Parduoti kvepalus internetu sunku, kvapo juk neužuosi. Todėl sudėliojome stiprų pasiūlymą.",
    },
    {
      type: "ol",
      items: [
        "**Maža pirma transakcija.** Mėgintuvėliai už kelis eurus, kad klientas galėtų išbandyti ir susipažinti su prekės ženklu, tai eliminuoja riziką.",
        "**El. pašto marketingas.** Po pirmo pirkimo prasideda automatizuota laiškų seka.",
        "**Tikslinės reklamos ir turinys.** Adsai ir kontentas, kurie grąžina klientą.",
      ],
    },
    {
      type: "p",
      text: "Rezultatas: kiekvienas į marketingą investuotas euras grąžina beveik aštuonis. Per dviejų mėnesių perspektyvą taip pasiekiame apie 60 000 eurų apyvartą be jokių sudėtingų sprendimų. Esmė ta, kad jei esi nežinomas prekės ženklas, pradėk nuo mažo pasiūlymo, kuris eliminuoja riziką pirkėjui. Kai žmonės išbandys ir patiks, galėsi statyti ant to.",
    },
    {
      type: "h2",
      id: "turinys",
      text: "7. Turinys ir marketingas laimi",
    },
    {
      type: "p",
      text: "Dirbdamas šalia Burgos įkūrėjų supratau vieną dalyką: nors jų produktas yra tech aksesuarai, tikroji stiprybė kitur. Pirma, jie turi itin stiprų marketingo skyrių su savo produkcijos studija. Antra, jie patys gamina savo produkciją. Iš šono to nepamatysi, bet būtent tai duoda 20-30% maržos pranašumą, kuris leidžia agresyviai auginti verslą. Neabejoju, kad Burga jau yra arba netrukus taps vienaragiu.",
    },
    {
      type: "p",
      text: "Išvada paprasta: jei neturi didelio reklamos biudžeto, turinį reikia kurti, ir organinį, ir mokamą. Reikia strategijos ir kūrybinės krypties. El. pašto marketingas Lietuvoje vis dar smarkiai neišnaudojamas, o šiandien jis jau privalomas.",
    },
    {
      type: "h2",
      id: "irankiai",
      text: "8. Įrankiai, nuo kurių pradėti",
    },
    {
      type: "p",
      text: "Nereikia brangios sistemos. Beveik visi šie įrankiai turi nemokamą arba pigų planą, ir jų visiškai pakanka pastatyti kažką gero. Svarbiausia netobulinti be galo, o testuoti: sukurk landing puslapį, įmesk 500 eurų į Facebook reklamą ir sužinosi daugiau nei mėnesį poliruodamas idėją galvoje.",
    },
    {
      type: "table",
      caption: "Įrankiai jaunam verslui. Beveik visi turi nemokamą planą.",
      head: ["Įrankis", "Kam"],
      rows: [
        ["Shopify", "El. parduotuvė ir greitas idėjos testavimas."],
        ["Meta (Facebook/Instagram)", "Reklamos kanalas numeris vienas."],
        ["Google Ads + Workspace", "Tiesioginiai pardavimai ir el. paštas (~5 EUR/mėn.)."],
        ["Apollo", "Per 300 mln. kontaktų bazė šaltajam kontaktui."],
        ["LinkedIn", "Augantis, mažai išnaudojamas B2B kanalas."],
        ["Canva / Framer", "Dizainas ir svetainės be dizainerio."],
        ["CRM (nemokamas planas)", "Klientų informacijos valdymas."],
        ["Revolut", "Verslo bankininkystė."],
        ["Notion", "Užduotys ir procesai."],
      ],
    },
    {
      type: "p",
      text: "Ir svarbiausia: nefokusuok į logotipą, spalvas ar prekės ženklą pačioje pradžioje. Niekam tai dar nerūpi. Juoda, balta ir viena spalva, ir pirmyn. Obsesiškai fokusuok į vieną dalyką, pasiūlymą (offerį): koks jis, koks tavo funelis su tuo pasiūlymu ir kiek kainuoja pritraukti pirmą klientą.",
    },
    {
      type: "h2",
      id: "kaip-gime-callsy",
      text: "Kaip iš viso to gimė Callsy",
    },
    {
      type: "p",
      text: "Su broliu buvome įkūrę el. prekybos projektą, kuris per 12 mėnesių pasiekė 300 000 eurų apyvartą, organiškai ir su Facebook reklama, be išorinių investicijų. Lūžis įvyko tada, kai tiesiog pradėjau skambinti žmonėms, kurie užsuko į svetainę, bet nenusipirko, taip vadinamiems apleistiems krepšeliams.",
    },
    {
      type: "p",
      text: "Apie 70% pirkėjų palieka krepšelį. Kai paskambini, sužinai neįtikėtinai daug: kodėl žmonės perka arba neperka. Sėsdavau ir kasdien padarydavau po 10-20 skambučių. Pakoregavome pasiūlymą, produktą, kainodarą, ir viskas išsprogo. Būtent iš šios istorijos gimė Callsy: AI agentas, kuris automatiškai apskambina apleistus krepšelius, pasiūlo personalizuotą nuolaidą ir susigrąžina prarastas pajamas. Verslas dažnai gimsta ne iš genialios idėjos, o iš nuobodaus, kartojamo darbo.",
    },
    {
      type: "quote",
      text: "Gamtos dėsnis paprastas: kas neauga, tas miršta. Versle lygiai taip pat. Todėl niekada nesustok bandyti, kartoti ir tobulinti.",
    },
    {
      type: "faq",
      title: "Dažni klausimai",
      items: [
        {
          q: "Ar tikrai galima sukurti verslą be didelio kapitalo?",
          a: "Taip, bet turi turėti arba pinigų, arba laiko. Neturint pinigų viską reikės išmokti ir padaryti pačiam, o augimą kurti per pardavimus, prašymą ir organinį marketingą. Mano paties verslai, pasiekę 100 000 eurų ir daugiau, prasidėjo be didelių investicijų.",
        },
        {
          q: "Nuo ko pradėti kuriant verslą?",
          a: "Nuo pasiūlymo (offerio) ir pardavimų, ne nuo tobulo produkto ar logotipo. Sudėliok aiškų pasiūlymą, sukurk paprastą landing puslapį, įmesk nedidelį biudžetą į reklamą ir žiūrėk, ar žmonės perka. Testuok, o ne tobulink galvoje.",
        },
        {
          q: "Kokia marža turėtų būti versle?",
          a: "Bent 3 kartus tarp savikainos ir pardavimo kainos, arba 60-80% maržingumas. Mažesnė marža reiškia, kad negalėsi sau leisti marketingo ir talentų, ir augimas sustos.",
        },
        {
          q: "Kodėl grįžtantys klientai tokie svarbūs?",
          a: "Nes naujo kliento pritraukimas kainuoja, ir tos išlaidos turi atsipirkti per kliento gyvavimo vertę. Verslai su grįžtančiais klientais ir prenumerata auga sveikiausiai, nes lojalūs klientai padengia kaštus, o nauji tampa pelnu.",
        },
      ],
    },
    {
      type: "cta",
      text: "Turi verslą ir įstrigai, ar nori pasiekti tą 100 000 eurų ribą? Pasidalinsiu patirtimi. Pakalbėkime.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
};
