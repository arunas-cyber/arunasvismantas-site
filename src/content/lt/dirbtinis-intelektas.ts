import { type Article } from "../types";

/** HUB — kw "dirbtinis intelektas" (33,100/mo, KD 2). LT flagship guide. */
export const dirbtinisIntelektas: Article = {
  routeKey: "lt-dirbtinis-intelektas",
  kind: "hub",
  publishedAt: "2026-07-13",
  kicker: "Dirbtinis intelektas",
  lede: "Kas yra dirbtinis intelektas, kaip jis iš tikrųjų veikia ir kaip pradėti juo naudotis, tiek kasdien, tiek versle. Be techninio žargono, iš praktiko, kuris su AI kuria kiekvieną dieną.",
  blocks: [
    {
      type: "p",
      text: "Dirbtinis intelektas per porą metų iš mokslinės fantastikos virto įrankiu, kurį atsiveri telefone. Bet už viso triukšmo lieka paprastas klausimas: kas tai yra ir ką realiai su juo galiu nuveikti? Šis gidas atsako be pompastikos. Su dirbtiniu intelektu kuriu kasdien, tad rašau tai, kas veikia, o ne tai, kas gražiai skamba.",
    },
    {
      type: "h2",
      id: "kas-yra-dirbtinis-intelektas",
      text: "Kas yra dirbtinis intelektas?",
    },
    {
      type: "p",
      text: "Dirbtinis intelektas (angl. artificial intelligence, AI) yra kompiuterinės sistemos, gebančios atlikti užduotis, kurioms anksčiau reikėjo žmogaus proto: suprasti kalbą, atpažinti vaizdus, rašyti tekstą, priimti sprendimus. Svarbiausia iškart suprasti vieną dalyką: tai nėra mąstanti mašina. Tai labai gera šablonų atpažinimo sistema, išmokyta iš milžiniško kiekio duomenų.",
    },
    {
      type: "p",
      text: "Kai parašai klausimą ChatGPT ar Claude, jis neieško atsakymo lentynoje. Remdamasis viskuo, ką kada nors matė, jis spėja, koks žodis logiškai eina po kito. Įspūdinga tai, kaip toli šis paprastas principas nuveda.",
    },
    {
      type: "h2",
      id: "kaip-veikia",
      text: "Kaip veikia dirbtinis intelektas?",
    },
    {
      type: "p",
      text: "Šiuolaikinį AI galima suskaidyti į tris dalis. Kai jas supranti, nustoja atrodyti kaip magija.",
    },
    {
      type: "ul",
      items: [
        "**Duomenys.** Modelis mokomas iš didžiulio kiekio teksto, vaizdų ar garso. Kuo daugiau ir kuo švaresni duomenys, tuo geresnis rezultatas.",
        "**Modelis.** Tai matematinė sistema, randanti šablonus tuose duomenyse. Didieji kalbos modeliai, tokie kaip GPT ar Claude, turi milijardus parametrų.",
        "**Užklausa (angl. prompt).** Tai, ką tu įrašai. Kuo aiškesnė ir konkretesnė užklausa, tuo naudingesnis atsakymas. Tai pirmas įgūdis, kurį verta lavinti.",
      ],
    },
    {
      type: "h2",
      id: "kur-naudojamas",
      text: "Kur dirbtinis intelektas naudojamas kasdien",
    },
    {
      type: "p",
      text: "Tikriausiai AI naudojiesi jau dabar, net to nepastebėdamas:",
    },
    {
      type: "ul",
      items: [
        "Telefono klaviatūra, spėjanti kitą žodį.",
        "Netflix ar Spotify rekomendacijos, ką žiūrėti ir klausyti.",
        "Nuotraukų paieška telefone pagal žodį jūra ar šuo.",
        "Banko sistema, pastebinti įtartiną operaciją.",
        "Pokalbių robotai įmonių svetainėse.",
      ],
    },
    {
      type: "h2",
      id: "nemokami-irankiai",
      text: "Nemokami įrankiai, nuo kurių pradėti",
    },
    {
      type: "p",
      text: "Geriausias būdas suprasti dirbtinį intelektą yra jį išbandyti. Štai keli, kuriuos gali atsiverti šiandien ir nemokamai:",
    },
    {
      type: "ul",
      items: [
        "**ChatGPT** (chat.openai.com), populiariausias pokalbių asistentas, veikia ir lietuviškai.",
        "**Claude** (claude.ai), ypač stiprus rašymui ir ilgesnėms užduotims.",
        "**Google Gemini**, patogus, nes integruotas su Google paslaugomis.",
        "**Perplexity**, paieška su AI atsakymais ir nurodytais šaltiniais.",
      ],
    },
    {
      type: "p",
      text: "Patarimas: nesirink ilgai, kuris geriausias. Pasirink vieną ir dieną kitą užduok jam realius savo darbo klausimus. Supratimas ateina iš naudojimo, ne iš skaitymo.",
    },
    {
      type: "h2",
      id: "versle",
      text: "Dirbtinis intelektas versle",
    },
    {
      type: "p",
      text: "Čia AI iš žaisliuko virsta pinigais. Nebūtina turėti technologijų įmonės, paprasčiausi pritaikymai duoda daugiausiai naudos:",
    },
    {
      type: "ul",
      items: [
        "Klientų aptarnavimas: atsakymai į dažnus klausimus be laukimo eilėje.",
        "Pardavimai: apleistų krepšelių susigrąžinimas, priminimai, tolesni kontaktai.",
        "Turinys: produktų aprašymai, el. laiškai, socialinių tinklų įrašai.",
        "Operacijos: sąskaitų tvarkymas, duomenų suvedimas, ataskaitos.",
      ],
    },
    {
      type: "p",
      text: "Callsy, įmonėje, kurią bendraįkūriau, AI balso agentai atsiliepia į skambučius ir kalbasi su klientais realiu laiku. Tai, kas prieš dvejus metus atrodė neįmanoma, šiandien veikia kiekvieną dieną.",
    },
    {
      type: "h2",
      id: "ai-agentai",
      text: "AI agentai: kitas žingsnis",
    },
    {
      type: "p",
      text: "Iki šiol kalbėjome apie asistentus, kurie atsako, kai paklausi. AI agentai eina toliau: jie patys atlieka darbą nuo pradžios iki pabaigos. Ne tik parašo el. laišką, o jį ir išsiunčia. Ne tik pasiūlo planą, o jį įgyvendina, prisijungę prie tavo įrankių.",
    },
    {
      type: "p",
      text: "Būtent čia, mano galva, slypi didžiausia artimiausių metų proga. Ir būtent apie tai daugiausiai rašau savo [įžvalgose](/izvalgos): kaip pačiam susikurti AI agentą, net neturint programavimo išsilavinimo.",
    },
    {
      type: "h2",
      id: "kaip-pradeti",
      text: "Kaip pradėti per vieną savaitę",
    },
    {
      type: "ul",
      items: [
        "**Pasirink vieną įrankį** iš aukščiau ir susikurk paskyrą.",
        "**Duok jam realią užduotį.** Ne papasakok apie save, o parašyk atsakymą šiam klientui arba sutvarkyk šį tekstą.",
        "**Tikslink.** Jei atsakymas netinka, pasakyk, kas negerai. AI gerėja iš tavo grįžtamojo ryšio to paties pokalbio metu.",
        "**Kartok kasdien savaitę.** Po septynių dienų apie dirbtinį intelektą suprasi daugiau nei iš dešimties straipsnių.",
      ],
    },
    {
      type: "quote",
      text: "Dirbtinis intelektas neatims tavo darbo. Tai padarys žmogus, kuris moka juo naudotis. Gera žinia: išmokti galima per savaitę.",
    },
    {
      type: "faq",
      title: "Dažni klausimai",
      items: [
        {
          q: "Ar dirbtinis intelektas nemokamas?",
          a: "Pagrindinės ChatGPT, Claude ir Gemini versijos yra nemokamos, ir daugumai kasdienių užduočių jų visiškai pakanka. Mokamos versijos (apie 20 eurų per mėnesį) suteikia galingesnius modelius ir daugiau galimybių, bet pradėti verta nuo nemokamų.",
        },
        {
          q: "Ar dirbtinis intelektas veikia lietuviškai?",
          a: "Taip. ChatGPT, Claude ir Gemini supranta ir rašo lietuviškai gana gerai. Su labai specifinėmis temomis anglų kalba kartais duoda tikslesnį rezultatą, bet kasdieniam darbui lietuvių kalbos visiškai užtenka.",
        },
        {
          q: "Ar dirbtinis intelektas pavojingas?",
          a: "Kaip ir bet kuri galinga technologija, jis turi rizikų: klaidingą informaciją, duomenų privatumą, piktnaudžiavimą. Kasdieniam naudotojui didžiausia rizika yra aklai pasitikėti atsakymu. AI kartais suklysta labai įtikinamai, tad svarbius faktus visada pasitikrink.",
        },
        {
          q: "Kuo skiriasi dirbtinis intelektas ir AI agentai?",
          a: "Dirbtinis intelektas yra bendras terminas. AI asistentas, pavyzdžiui, ChatGPT, atsako į klausimus. AI agentas eina toliau: jis pats atlieka veiksmus, prisijungia prie įrankių ir užbaigia užduotį be tavo įsikišimo kiekviename žingsnyje.",
        },
        {
          q: "Kaip išmokti naudotis dirbtiniu intelektu?",
          a: "Praktika, ne teorija. Pasirink vieną įrankį ir savaitę užduok jam realius savo darbo klausimus. Jei nori giliau, [naujienlaiškyje](/naujienlaiskis) dalinuosi konkrečiais pavyzdžiais, kaip su AI kuriu produktus ir agentus.",
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
};
