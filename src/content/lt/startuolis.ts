import { type Article } from "../types";

/** HUB — kw "startuolis" (480/mo). LT gidas startuolio kūrimui. */
export const startuolis: Article = {
  routeKey: "lt-startuolis",
  kind: "hub",
  publishedAt: "2026-07-21",
  kicker: "Startuoliai",
  lede: "Kas yra startuolis, kuo jis skiriasi nuo įprasto verslo, kaip finansuojamas ir kaip pradėti savąjį. Praktinis gidas iš penkis kartus startuolius kūrusio įkūrėjo, be teorijos ir be pompastikos.",
  blocks: [
    {
      type: "p",
      text: "Žodis „startuolis\" Lietuvoje skamba kas antrame pokalbyje apie verslą. Bet jei paklausi dešimties žmonių, kas tai yra, gausi dešimt skirtingų atsakymų. Vieni mano, kad tai bet kokia nauja įmonė, kiti, kad būtinai kažkas su programėle. Nė vienas atsakymas nėra visiškai teisingas. Šiame gide paaiškinu, kas yra startuolis iš tikrųjų, remdamasis ne teorija, o dvidešimčia metų ir penkiais verslais, kuriuos kūriau pats.",
    },
    {
      type: "h2",
      id: "kas-yra-startuolis",
      text: "Kas yra startuolis?",
    },
    {
      type: "p",
      text: "Startuolis (angl. startup) yra jauna įmonė, sukurta ieškoti verslo modelio, kurį galima greitai ir dideliu mastu išplėsti. Svarbiausias žodis čia yra „mastas\". Startuolis nuo pradžių projektuojamas taip, kad galėtų augti daug greičiau nei įprastas verslas ir aptarnauti ne miestą ar šalį, o visą pasaulį.",
    },
    {
      type: "p",
      text: "Geriausią apibrėžimą pateikė investuotojas Paulius Grahamas: startuolis yra įmonė, sukurta greitam augimui. Ne bet kokia nauja įmonė yra startuolis. Kirpykla ar kavinė yra puikus verslas, bet ne startuolis, nes jų augimą riboja fizinė vieta ir žmogaus laikas. Startuolis ieško modelio, kuris augtų net kai tu miegi.",
    },
    {
      type: "h2",
      id: "skiriasi-nuo-verslo",
      text: "Kuo startuolis skiriasi nuo įprasto verslo",
    },
    {
      type: "p",
      text: "Skirtumas ne dydyje ir ne technologijoje, o pačioje augimo logikoje. Įprastas verslas siekia pelno nuo pirmos dienos ir auga tiesiškai. Startuolis dažnai sąmoningai atsisako pelno, kad investuotų į augimą, ir siekia eksponentinės kreivės.",
    },
    {
      type: "table",
      caption: "Startuolis prieš įprastą verslą",
      head: ["Bruožas", "Startuolis", "Įprastas verslas"],
      rows: [
        ["Tikslas", "Greitas, didelio masto augimas", "Stabilus pelnas"],
        ["Rinka", "Globali nuo pradžių", "Vietinė ar nacionalinė"],
        ["Finansavimas", "Investuotojai, rizikos kapitalas", "Savi pinigai, bankas, pajamos"],
        ["Rizika", "Aukšta (dauguma žlunga)", "Vidutinė"],
        ["Augimas", "Eksponentinis", "Tiesiškas"],
        ["Pavyzdys", "Vinted, Nord Security", "Kavinė, kirpykla, agentūra"],
      ],
    },
    {
      type: "p",
      text: "Čia svarbu vienas dalykas, kurio niekas nesako garsiai: startuolis nėra „geriau\" už įprastą verslą. Tai tiesiog kitoks žaidimas su kitokia rizika. Dauguma startuolių žlunga. Kavinė su gera vieta ir šeimininku uždirbs pinigų daug patikimiau. Startuolio kelią renkasi tie, kas nori pabandyti sukurti kažką, kas galėtų būti labai didelis.",
    },
    {
      type: "h2",
      id: "etapai",
      text: "Startuolio etapai: nuo idėjos iki masto",
    },
    {
      type: "p",
      text: "Kiekvienas startuolis pereina panašius etapus. Nesvarbu, ar kuri programėlę, ar AI agentą, kelias atrodo panašiai:",
    },
    {
      type: "ol",
      items: [
        "**Idėja ir problema.** Viskas prasideda ne nuo idėjos, o nuo problemos, kurią kažkas realiai jaučia. Jei problema neskauda, produkto niekas nepirks.",
        "**MVP (minimalus veikiantis produktas).** Paprasčiausia versija, kuri išsprendžia problemą. Tikslas ne tobulumas, o greitai pamatyti, ar žmonės tai naudoja.",
        "**Produkto ir rinkos atitikimas (angl. product-market fit).** Momentas, kai klientai patys grįžta, rekomenduoja ir moka. Tai svarbiausias etapas. Iki jo neverta pilti pinigų į augimą.",
        "**Augimas ir mastas.** Tik radus atitikimą, verta investuoti į marketingą, komandą ir pardavimus. Anksčiau tai tik degina pinigus.",
      ],
    },
    {
      type: "p",
      text: "Dažniausia klaida, kurią mačiau ir pats dariau, yra šokti į ketvirtą etapą prieš pasiekiant trečią. Samdyti žmones, leisti pinigus reklamai ir plėstis, kai produkto dar niekas iš tikrųjų nenori. Pardavimai visada eina pirma produkto, ne atvirkščiai.",
    },
    {
      type: "h2",
      id: "finansavimas",
      text: "Kaip finansuojami startuoliai",
    },
    {
      type: "p",
      text: "Startuolio finansavimas turi savo pakopas. Kiekviena atitinka tam tikrą įmonės brandą:",
    },
    {
      type: "ul",
      items: [
        "**Savi pinigai (angl. bootstrapping).** Augi iš savų lėšų ir pajamų. Lėčiau, bet išlaikai visą įmonės kontrolę. Daug stipriausių verslų prasideda būtent taip.",
        "**Verslo angelai.** Privatūs investuotojai, dažnai patys buvę įkūrėjai, investuojantys savo pinigus ankstyvame etape mainais už įmonės dalį.",
        "**Pre-seed ir seed raundai.** Pirmosios rimtos investicijos iš fondų, kai jau turi MVP ir pirmus klientus. Lietuvoje čia veikia tokie fondai kaip Practica Capital, Iron Wolf, Coinvest.",
        "**Rizikos kapitalas (angl. venture capital).** Didesni raundai (Series A, B ir toliau), kai reikia auginti mastą. Investuoja tarptautiniai VC fondai.",
        "**Akseleratoriai.** Programos, kurios duoda nedidelę investiciją, mentorystę ir tinklą mainais už įmonės dalį. Su Callsy baigėme FirstPick AI akseleratorių ir 500 Global Eurasia programą, ir tai davė daugiau nei pinigai: ryšius ir discipliną.",
      ],
    },
    {
      type: "p",
      text: "Vienas dalykas, kurį noriu pasakyti aiškiai: investicija nėra sėkmės ženklas. Tai įrankis. Daug įkūrėjų vaikosi raundų kaip trofėjų, nors realiai kiekvienas raundas atiduoda įmonės dalį ir prideda spaudimo. Pinigus verta imti tada, kai tiksliai žinai, kur juos investuosi augimui, ne anksčiau.",
    },
    {
      type: "h2",
      id: "lietuvos-ekosistema",
      text: "Lietuvos startuolių ekosistema",
    },
    {
      type: "p",
      text: "Lietuva mažai kam už ribų atrodo kaip startuolių šalis, bet skaičiai kalba kitaip. Dealroom duomenimis, Lietuvos startuolių ekosistema 2026 metais vertinama apie 16 milijardų eurų. Per dešimtmetį nuo 2014 metų ši vertė išaugo beveik 39 kartus, o tai geriausias rezultatas visoje Vidurio ir Rytų Europoje.",
    },
    {
      type: "p",
      text: "Mažiau nei trijų milijonų gyventojų šalyje veikia per tūkstantį startuolių, įdarbinančių apie 20 000 žmonių. Ir svarbiausia: Lietuva jau užaugino penkis vienaragius, tai yra startuolius, viršijusius milijardo dolerių vertę. Tai Vinted, Nord Security, Baltic Classifieds Group, Flo Health ir Cast AI. Apie kiekvieną iš jų rašau atskirame straipsnyje.",
    },
    {
      type: "p",
      text: "Kodėl tokia maža šalis pagimdo tiek stiprių įmonių? Mano nuomone, atsakymas paprastas: maža vidaus rinka priverčia galvoti globaliai nuo pirmos dienos. Lietuvis įkūrėjas negali sau leisti kurti tik Lietuvai, nes rinka per maža. Tad iš karto taikosi į pasaulį. Būtent tai ir yra startuolio mąstysena.",
    },
    {
      type: "h2",
      id: "kaip-pradeti",
      text: "Kaip pradėti savo startuolį",
    },
    {
      type: "p",
      text: "Nemokysiu tave rašyti verslo plano, nes pirmais mėnesiais jo niekam nereikia. Vietoj to, štai ką daryčiau, jei pradėčiau iš naujo:",
    },
    {
      type: "ol",
      items: [
        "**Rask realią problemą, ne idėją.** Kalbėk su žmonėmis, kurie tą problemą jaučia. Jei jie sako „būtų gerai\", to negana. Turi girdėti „man to reikia dabar\".",
        "**Parduok prieš kurdamas.** Pabandyk parduoti sprendimą dar prieš jį sukurdamas. Jei niekas nemoka, produkto verti nereikia. Tai pigiausias būdas patikrinti idėją.",
        "**Kurk mažiausią versiją.** Ne tobulą, o veikiančią. Paleisk greitai ir stebėk, ką žmonės realiai daro, ne ką sako.",
        "**Naudok dirbtinį intelektą.** Šiandien vienas žmogus su AI gali padaryti tai, kam anksčiau reikėjo komandos. Prototipą, tekstus, net kodą. Tai didžiausias pokytis startuoliams per dešimtmetį.",
        "**Ieškok grįžtančių klientų.** Vienkartinis pardavimas nėra verslas. Ieškok modelio, kur klientas grįžta ir moka reguliariai.",
      ],
    },
    {
      type: "h2",
      id: "klaidos",
      text: "Dažniausios startuolių klaidos",
    },
    {
      type: "ul",
      items: [
        "**Produktas prieš klientą.** Metų metus tobulinti produktą, kurio niekas neprašė. Klasika.",
        "**Vaikytis investicijų vietoj pajamų.** Raundas nėra sėkmė. Mokantis klientas yra.",
        "**Per anksti plėstis.** Samdyti ir deginti pinigus prieš radus produkto ir rinkos atitikimą.",
        "**Ignoruoti skaičius.** Nežinoti savo maržos, kliento įsigijimo kainos ir grąžos. Be skaičių valdai aklai.",
        "**Kurti vienam.** Stiprus bendraįkūrėjis ir komanda pakelia daug daugiau nei vienišas genijus.",
      ],
    },
    {
      type: "faq",
      title: "Dažni klausimai apie startuolius",
      items: [
        {
          q: "Kas yra startuolis paprastais žodžiais?",
          a: "Startuolis yra jauna įmonė, sukurta greitai ir dideliu mastu augti. Skirtingai nei įprastas verslas, jis nuo pradžių taikosi į globalią rinką ir dažnai finansuojamas investuotojų. Ne kiekviena nauja įmonė yra startuolis: kavinė ar kirpykla yra verslas, bet ne startuolis.",
        },
        {
          q: "Kuo startuolis skiriasi nuo verslo?",
          a: "Įprastas verslas siekia stabilaus pelno ir auga tiesiškai vietinėje rinkoje. Startuolis siekia eksponentinio augimo globalioje rinkoje, dažnai atsisakydamas ankstyvo pelno, kad investuotų į plėtrą. Startuolio rizika didesnė, bet ir potencialas didesnis.",
        },
        {
          q: "Kaip finansuojami startuoliai Lietuvoje?",
          a: "Finansavimo pakopos: savi pinigai, verslo angelai, pre-seed ir seed raundai iš fondų (pvz., Practica Capital, Iron Wolf), rizikos kapitalas didesniuose raunduose ir akseleratoriai, kurie duoda investiciją bei mentorystę mainais už įmonės dalį.",
        },
        {
          q: "Kiek vienaragių turi Lietuva?",
          a: "2026 metais Lietuva turi penkis vienaragius, tai yra startuolius, viršijusius milijardo dolerių vertę: Vinted, Nord Security, Baltic Classifieds Group, Flo Health ir Cast AI.",
        },
        {
          q: "Ar verta kurti startuolį Lietuvoje?",
          a: "Taip. Lietuvos ekosistema yra viena sparčiausiai augančių Vidurio ir Rytų Europoje, vertinama apie 16 milijardų eurų. Yra stiprus fondų, akseleratorių ir talentų tinklas, o maža vidaus rinka priverčia galvoti globaliai nuo pirmos dienos.",
        },
      ],
    },
    {
      type: "cta",
      text: "Kuri startuolį ir nori pasitarti dėl produkto, fundraisingo ar dirbtinio intelekto panaudojimo? Pasikalbėkim.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
  related: [
    "lt-vienaragiai-lietuvoje",
    "lt-verslas-be-kapitalo",
    "lt-verslo-rykliai",
  ],
};
