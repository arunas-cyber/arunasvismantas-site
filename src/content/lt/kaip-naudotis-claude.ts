import { type Article } from "../types";

/** Hub — kw "kaip naudotis claude". Gidas pradedantiesiems, įkūrėjo perspektyva. */
export const kaipNaudotisClaude: Article = {
  routeKey: "lt-kaip-naudotis-claude",
  kind: "hub",
  publishedAt: "2026-07-21",
  kicker: "Kuriu su AI",
  lede: "Aš valdau įmonę su Claude. Kasdien su juo rašau, planuoju, tyrinėju ir net kuriu programinę įrangą, nors nesu programuotojas. Jei ką tik atsidarei Claude ir galvoji, ką su juo iš tikrųjų daryti, tai gidas, kurio pats norėjau pradžioje. Be žargono, tik tai, kas veikia.",
  blocks: [
    {
      type: "p",
      text: "Claude yra dirbtinio intelekto asistentas, kurį sukūrė kompanija **Anthropic**. Su juo kalbiesi paprasta kalba, jis atsako ir padeda rašyti, mąstyti, tyrinėti, apibendrinti, programuoti bei automatizuoti daugybę kasdienių darbų. Jei naudojaisi ChatGPT, pati idėja pažįstama. Daugumą pradedančiųjų nustebina tai, kiek toliau gali nueiti, kai išmoksti kelias tikrai svarbias funkcijas.",
    },
    {
      type: "p",
      text: "Aš su Claude rašau laiškus, tikrinu sprendimus, netvarkingas pastabas paverčiu aiškiais dokumentais, tiriu konkurentus ir kuriu ištisus produktus [Callsy](https://callsy.ai). Šis gidas veda nuo pačios pirmos žinutės iki tų kelių funkcijų, kurios Claude iš pokalbių roboto paverčia rimtu darbo įrankiu.",
    },
    {
      type: "h2",
      id: "kas-yra-claude",
      text: "Kas yra Claude iš tikrųjų?",
    },
    {
      type: "p",
      text: "Claude yra didžiųjų kalbos modelių šeima, kurią pasiekia per pokalbių langą. Įrašai užklausą, Claude atsako, o tu tęsi pokalbį. Jis skaito ir rašo tekstą, supranta įkeltus paveikslėlius ir dokumentus, prireikus ieško informacijos internete ir gali nuosekliai atlikti ilgas, kelių žingsnių užduotis nepametęs minties.",
    },
    {
      type: "p",
      text: "Anthropic akcentas yra saugumas ir patikimumas. Claude apmokytas būti naudingas, sąžiningas ir sunkiai išmušamas iš vėžių. Praktiškai tai reiškia, kad jis puikiai tinka rimtam darbui: ilgiems dokumentams, atsargiam mąstymui ir užduotims, kur atsakymas turi būti tikrai teisingas, o ne tik įtikinamai skambantis.",
    },
    {
      type: "h2",
      id: "claude-ar-chatgpt",
      text: "Claude ar ChatGPT: ką rinktis pradedančiajam?",
    },
    {
      type: "p",
      text: "Tai pirmas klausimas, kurį užduoda beveik visi, tad atsakysiu sąžiningai: puikų darbą nuveiksi su bet kuriuo, ir nereikia rinktis visam gyvenimui. Jie panašesni nei skirtingi. Vis dėlto verta žinoti tendencijas.",
    },
    {
      type: "ul",
      items: [
        "**Claude** dažniausiai stipresnis rašant ilgus tekstus, mąstant niuansuotai, dirbant su didelais dokumentais ir rašant ar taisant kodą. Jo tonas iškart natūralesnis, mažiau robotiškas.",
        "**ChatGPT** turi platesnę papildinių ekosistemą (paveikslėlių generavimas, didelė GPT parduotuvė, balsas) ir daugiau apie jį parašyta gidų.",
        "**Mano nuomonė:** jei tavo darbas yra rašymas, mąstymas, analizė ir kūrimas, pradėk nuo Claude. Jei nori vieno įrankio su viskuo iš karto, įskaitant paveikslėlius, ChatGPT irgi tinkama pirma stotelė. Dauguma rimtų naudotojų galiausiai laiko atsidarę abu.",
      ],
    },
    {
      type: "h2",
      id: "modeliai",
      text: "Claude modeliai: Opus, Sonnet ir Haiku",
    },
    {
      type: "p",
      text: "Claude ateina trijų dydžių, pavadintų tarsi kava. Nereikia per daug galvoti, bet skirtumo žinojimas sutaupo pinigų ir laiko. Didesni modeliai protingesni, bet lėtesni ir brangesni; mažesni greiti ir pigūs.",
    },
    {
      type: "table",
      caption: "Trys Claude modeliai ir kada kurį rinktis",
      head: ["Modelis", "Kam geriausia", "Pojūtis"],
      rows: [
        [
          "Opus",
          "Sudėtingoms problemoms, giliam mąstymui, dideliems projektams, kodui",
          "Galingiausias, vertas ten, kur kokybė svarbiausia",
        ],
        [
          "Sonnet",
          "Kasdieniam darbui: rašymui, tyrimams, analizei",
          "Subalansuotas standartas, kuriame verta gyventi",
        ],
        [
          "Haiku",
          "Greitoms, paprastoms, gausioms užduotims",
          "Greičiausias ir pigiausias, puikus, kai reikia tempo",
        ],
      ],
    },
    {
      type: "p",
      text: "Praktinė taisyklė pradedančiajam: **kasdieniam darbui likti su Sonnet, o Opus imti tada, kai užduotis tikrai sunki ar svarbi.** Pokalbių lange modelį gali pakeisti iš sąrašo prie žinutės laukelio. Daugiau apie tai galvoti beveik neprireiks.",
    },
    {
      type: "h2",
      id: "kaip-pradeti",
      text: "Kaip pradėti naudotis Claude (nemokamai)",
    },
    {
      type: "p",
      text: "Pradžia užtrunka apie dvi minutes. Kad išbandytum, nieko diegti nereikia.",
    },
    {
      type: "ol",
      items: [
        "Naršyklėje atverk **claude.ai** ir užsiregistruok su el. paštu arba Google paskyra.",
        "Atsidursi pokalbių lange. Apačioje esančiame laukelyje įrašyk klausimą ar užklausą ir spausk enter. Viskas, jau naudojiesi Claude.",
        "Įsidiek programėlę telefone (iOS ar Android) ir kompiuteryje, jei nori Claude visur. Pokalbiai sinchronizuojasi visuose įrenginiuose.",
      ],
    },
    {
      type: "p",
      text: "Nemokamas planas tikrai naudingas ir pakankamas mokytis. Gauni dienos kiekį, kuris atsinaujina, prieigą prie galingo modelio ir pagrindines funkcijas. Kai pradedi remtis į limitus arba nori galingiausio modelio visą dieną, tai ženklas, kad laikas atsinaujinti.",
    },
    {
      type: "table",
      caption: "Claude planai trumpai (2026)",
      head: ["Planas", "Kaina", "Kam skirtas"],
      rows: [
        ["Nemokamas", "0 EUR", "Išbandymui ir lengvam kasdieniam naudojimui"],
        ["Pro", "20 USD/mėn.", "Kasdieniams naudotojams, norintiems daugiau ir geriausių modelių"],
        ["Max", "nuo 100 USD/mėn.", "Intensyviems naudotojams ir kūrėjams, gyvenantiems Claude"],
        ["Team / API", "Priklauso", "Įmonėms ir kūrėjams, statantiems ant Claude"],
      ],
    },
    {
      type: "h2",
      id: "pirmas-pokalbis",
      text: "Pirmas pokalbis: kaip iš tikrųjų rašyti užklausas",
    },
    {
      type: "p",
      text: "Nereikia mokytis jokio „užklausų inžinerijos“ meno. Reikia bendrauti taip, kaip su nauju gabiu kolega, kuris nežino jokio konteksto. Ką gausi atgal, daugiausia priklauso nuo to, ką įdėsi. Kelie įpročiai atlieka 90 % darbo:",
    },
    {
      type: "ul",
      items: [
        "**Duok kontekstą.** Pasakyk, kas esi, kam skirta ir kaip atrodo geras rezultatas. „Parašyk šaltą laišką“ silpna. „Vadovauju AI balso agentų startuoliui. Parašyk trumpą šaltą laišką „Shopify“ parduotuvės savininkui, siūlantį nemokamą bandymą, draugišką ir konkretų, be pompastikos“ stipru.",
        "**Prašyk formato.** „Duok penkis variantus“, „lentele“, „punktais“, „iki 100 žodžių“. Claude gerai laikosi struktūros nurodymų.",
        "**Tobulink, o ne pradėk iš naujo.** Jei pirmas atsakymas 80 % geras, pasakyk, ką keisti: „trumpiau, šilčiau, išmesk trečią punktą“. Įrankis yra pats pokalbis, ne viena tobula užklausa.",
        "**Duok savo medžiagą.** Įklijuok pastabas, įkelk dokumentą, pasidalink juodraščiu. Su tavo tikru turiniu Claude kur kas naudingesnis nei kurdamas iš nieko.",
        "**Liepk užduoti tau klausimus.** „Paklausk visko, ko reikia, prieš pradėdamas.“ Ši viena eilutė smarkiai pagerina rezultatą su bet kuo sudėtingesniu.",
      ],
    },
    {
      type: "h2",
      id: "svarbios-funkcijos",
      text: "Funkcijos, dėl kurių Claude tikrai suveikia",
    },
    {
      type: "p",
      text: "Dauguma pradedančiųjų naudoja Claude kaip pokalbių langelį ir nė nepaliečia funkcijų, kurios viską pakeičia. Šias verta išmokti anksti.",
    },
    {
      type: "h3",
      text: "Projektai",
    },
    {
      type: "p",
      text: "Projektas yra atskira darbo erdvė, kur laikai nurodymus ir failus, kuriuos Claude visada turi turėti omenyje. Vieną kartą į Projektą įdedi savo įmonės kontekstą, rašymo stilių ar didelį dokumentą, ir kiekvienas pokalbis jame prasideda su tuo kontekstu. Tai didžiausias vienas šuolis, kiek Claude tampa naudingas.",
    },
    {
      type: "h3",
      text: "Artefaktai",
    },
    {
      type: "p",
      text: "Kai Claude sukuria ką nors rimtesnio (dokumentą, lentelę, veikiančią mini programėlę, kodo gabalą), tai atsidaro šoniniame skydelyje, vadinamame artefaktu, kurį gali redaguoti, tobulinti ir net paleisti. Pokalbis virsta gyva darbo erdve, o ne teksto siena.",
    },
    {
      type: "h3",
      text: "Failai, paveikslėliai ir paieška internete",
    },
    {
      type: "p",
      text: "Įtempk PDF, skaičiuoklę, ekrano nuotrauką ar paveikslėlį ir klausk apie juos. Claude visus perskaito. Prireikus jis gali ieškoti internete šviežesnės informacijos, nei turi savo mokyme. Pradedančiajam „apibendrink šį 40 puslapių PDF ir ištrauk tris man svarbius skaičius“ yra magiškas pirmas laimėjimas.",
    },
    {
      type: "h3",
      text: "Jungtys",
    },
    {
      type: "p",
      text: "Jungtys leidžia Claude prisijungti prie kitų įrankių (tavo kalendoriaus, disko ir daugybės programų), kad jis galėtų veikti tavo vardu, o ne tik kalbėtis. Čia Claude nustoja būti pokalbių robotu ir tampa asistentu. Tai veikia atviru standartu, vadinamu MCP, kurio pavadinimą verta žinoti net pradedančiajam.",
    },
    {
      type: "h2",
      id: "claude-code",
      text: "Claude Code: programų kūrimas nebūnant programuotoju",
    },
    {
      type: "p",
      text: "Tai dalis, kuri man rūpi labiausiai. **Claude Code** yra Claude versija, veikianti tavo terminale ir gebanti kurti tikrą programinę įrangą: ji rašo failus, vykdo komandas ir kuria funkcijas, kol tu paprasta kalba apsakai, ko nori. Šią svetainę visą pastačiau su juo, o kodo iš nulio nerašau.",
    },
    {
      type: "p",
      text: "Jis sudėtingesnis už pokalbių langą, tad ne nuo jo pradedi pirmą dieną. Bet žinojimas, kad jis egzistuoja, pakeičia supratimą, kam Claude apskritai skirtas. Jei kada norėjai susikurti įrankį, svetainę ar automatizaciją ir manei, kad reikia samdyti programuotoją, ta prielaida jau derėtina. Palyginau jį su kitu pagrindiniu įrankiu (kol kas EN kalba): [Claude Code vs Cursor](/en/insights/claude-code-vs-cursor).",
    },
    {
      type: "h2",
      id: "panaudojimai",
      text: "Ką ne programuotojas iš tikrųjų kasdien daro su Claude",
    },
    {
      type: "p",
      text: "Kad būtų konkretu, štai tikras darbas, kurį kaip įkūrėjas varau per Claude ir kuriam nereikia jokių techninių įgūdžių:",
    },
    {
      type: "ul",
      items: [
        "**Rašymas:** laiškai, įrašai, nusileidimo puslapių tekstai, atnaujinimai investuotojams, tokie straipsniai kaip šis. Rašyk, karpyk, aštrink.",
        "**Mąstymas:** apkalbėti sprendimą, išvardyti rizikas, argumentuoti priešingą pusę, patikrinti planą prieš įsipareigojant.",
        "**Tyrimai:** konkurentų išklotinės, rinkos klausimai, netvarkingos kraštinės su daugybe skirtukų pavertimas viena aiškia santrauka.",
        "**Dokumentai:** balso žinutės ar juodraštinių pastabų pavertimas tvarkinga santrauka, sutarties apžvalga ar specifikacija.",
        "**Kūrimas:** vidiniai įrankiai, svetainė, mažos automatizacijos, visa tai per Claude Code.",
      ],
    },
    {
      type: "h2",
      id: "klaidos",
      text: "Dažnos pradedančiųjų klaidos, kurių verta išvengti",
    },
    {
      type: "ul",
      items: [
        "**Per didelis miglotumas.** Pagrindinė prastų atsakymų priežastis. Pridėk kontekstą ir tikslą.",
        "**Aklas pasitikėjimas faktais.** Claude stiprus, bet neklystantis. Kur svarbu (skaičiai, vardai, teisė, sveikata), pasitikrink. Prašyk šaltinių.",
        "**Pradėti iš naujo užuot vairavus.** Tobulink turimą atsakymą, o ne mesk visą pokalbį ir rašyk iš nulio.",
        "**Projektų ignoravimas.** Jei kaskart klijuoji tą patį kontekstą, dirbi sunkiuoju keliu.",
        "**Vienas šūvis.** Geriausi rezultatai ateina iš dialogo, ne iš vienintelės užklausos.",
      ],
    },
    {
      type: "faq",
      title: "Dažniausiai užduodami klausimai",
      items: [
        {
          q: "Ar Claude nemokamas?",
          a: "Taip. Claude turi nemokamą planą svetainėje claude.ai, kurio pakanka mokytis ir lengvam kasdieniam naudojimui. Mokami planai (Pro nuo 20 USD/mėn., Max nuo 100 USD/mėn.) atrakina daugiau naudojimo ir galingiausius modelius intensyviems naudotojams.",
        },
        {
          q: "Ar Claude geresnis už ChatGPT?",
          a: "Nė vienas nėra universaliai geresnis. Claude dažniausiai stipresnis rašant ilgus tekstus, atsargiai mąstant, dirbant su didelais dokumentais ir programuojant, jo tonas natūralesnis. ChatGPT turi platesnę ekosistemą, įskaitant paveikslėlių generavimą. Rašymui, mąstymui ir kūrimui Claude yra puikus pirmas pasirinkimas, o daugelis naudoja abu.",
        },
        {
          q: "Ar reikia mokėti programuoti, kad naudočiausi Claude?",
          a: "Ne. Claude naudojamas visiškai paprasta kalba. Milžinišką naudą gausi rašydamas, tyrinėdamas ir analizuodamas be jokių techninių įgūdžių. Net Claude Code, kuris kuria programinę įrangą, valdomas apsakant, ko nori, o ne rašant kodą.",
        },
        {
          q: "Kurį Claude modelį rinktis pradedančiajam?",
          a: "Kasdieniam darbui likti su Sonnet, tai subalansuotas standartas. Perjunk į Opus, kai užduotis tikrai sunki ar svarbi, o Haiku naudok greitoms, paprastoms, gausioms užduotims. Modelį gali pakeisti iš sąrašo pokalbyje.",
        },
        {
          q: "Ką Claude moka, ko pradedantysis nesitikėtų?",
          a: "Skaityti ir apibendrinti ilgus PDF bei skaičiuokles, prisiminti tavo kontekstą per Projektus, kurti redaguojamus dokumentus ir mini programėles kaip artefaktus, ieškoti internete, jungtis prie kitų tavo įrankių per Jungtis ir kurti tikrą programinę įrangą per Claude Code.",
        },
      ],
    },
    {
      type: "cta",
      text: "Kaip netechninis įkūrėjas kuriu ir leidžiu produktus su Claude. Jei nori apkalbėti, kaip panaudoti AI savo darbe ar įmonėje, rezervuok pokalbį.",
      label: "Rezervuoti pokalbį",
      href: "/konsultacija",
    },
  ],
  related: [
    "lt-dirbtinis-intelektas",
    "lt-chatgpt-lietuviskai",
    "lt-kas-yra-openclaw",
  ],
};
