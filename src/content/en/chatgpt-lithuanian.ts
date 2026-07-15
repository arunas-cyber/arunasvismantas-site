import { type Article } from "../types";

/** SPOKE (EN) — counterpart of lt-chatgpt-lietuviskai. */
export const chatgptLithuanian: Article = {
  routeKey: "en-chatgpt-lithuanian",
  kind: "spoke",
  publishedAt: "2026-07-15",
  kicker: "Artificial intelligence",
  lede: "Everyone writes that ChatGPT handles Lithuanian \"perfectly\". The research says otherwise. Here is how good it actually is, how to use it free without signing up, and why some \"ChatGPT in Lithuanian\" sites are not ChatGPT at all.",
  hero: {
    src: "/images/insights/chatgpt-lietuviskai.jpg",
    alt: "Illustration: two speech bubbles, one containing an AI sparkle",
  },
  blocks: [
    {
      type: "p",
      text: "This is a case study in what happens when a language is small on the internet. Lithuanian has about three million speakers, and that scarcity shows up directly in how well AI handles it. If you work in any smaller language, the pattern here will look familiar.",
    },
    {
      type: "h2",
      id: "does-it-work",
      text: "Does ChatGPT speak Lithuanian?",
    },
    {
      type: "p",
      text: "Yes, and you don't need to configure anything. Write in Lithuanian and it answers in Lithuanian; language detection is automatic. You can change the interface language in settings, but that's separate from the language of the replies.",
    },
    {
      type: "p",
      text: "The real question isn't whether it works. It's **how well** it works. That's where it gets interesting.",
    },
    {
      type: "h2",
      id: "how-good",
      text: "How good is it really? Numbers, not opinions",
    },
    {
      type: "p",
      text: "Almost every article on this (and even Google's own AI Overview) claims ChatGPT handles Lithuanian \"perfectly\". That's convenient and unverified. The research shows something more nuanced:",
    },
    {
      type: "table",
      caption: "What public research shows about LLMs and Lithuanian.",
      head: ["Study", "What it measured", "Result"],
      rows: [
        [
          "[LoResLM 2026](https://aclanthology.org/2026.loreslm-1.32/)",
          "Lithuanian grammatical cases (305 sentence pairs)",
          "Accuracy **0.662–0.852**. Rarer constructions are hardest.",
        ],
        [
          "[arXiv 2501.09154](https://arxiv.org/html/2501.09154v1)",
          "550 Lithuanian history questions across 8 languages",
          "GPT-4o led with **0.88** accuracy. But Baltic languages trail Nordic ones.",
        ],
        [
          "[Neurotechnology, arXiv 2408.12963](https://arxiv.org/pdf/2408.12963)",
          "A Lithuanian-only model vs larger multilingual ones",
          "The language-specific model **beat bigger multilingual models**.",
        ],
      ],
    },
    {
      type: "p",
      text: "Read that first row again. At best roughly **85% accuracy on grammatical cases**, at worst about 66%. That isn't \"perfect\". It's \"good, but you must check it\". And the second study exposes something uncomfortable: the same models do better in Nordic languages than in Baltic ones. Lithuanian is still a second-class citizen to AI, simply because there is less digitised text to learn from.",
    },
    {
      type: "quote",
      text: "ChatGPT speaks Lithuanian well. The difference between \"well\" and \"perfectly\" is exactly the 15% you'll have to fix yourself.",
    },
    {
      type: "h2",
      id: "where-it-fails",
      text: "Where it goes wrong",
    },
    {
      type: "ul",
      items: [
        "**Grammatical cases.** Lithuanian has seven, and they're the most common and most visible failure, especially in rarer constructions.",
        "**Invented words.** It occasionally produces a word that sounds Lithuanian but doesn't exist.",
        "**Calques and anglicisms.** The sentence structure stays English and only the words are Lithuanian. It reads like a translation, because it essentially is one.",
        "**Generic filler.** Ask about a Lithuanian topic and you often get an abstract, watery paragraph.",
        "**Fabricated facts.** Where Lithuanian content online is thin (local history, law, institutions), the model invents convincingly.",
      ],
    },
    {
      type: "p",
      text: "This isn't just my opinion. Language experts at KTU, including Prof. Ramunė Kasperė, a member of the State Commission of the Lithuanian Language, publicly noted back in 2024 that these models produce Lithuanian with \"many errors, inaccuracies, non-existent words\", and that on thinly documented Lithuanian topics \"the information provided is wrong\". Models have improved since, but the pattern holds.",
    },
    {
      type: "h2",
      id: "no-signup",
      text: "Do you need an account? No",
    },
    {
      type: "p",
      text: "Here's what most pages on this topic get wrong. You **don't need to register** to try ChatGPT. Go to chatgpt.com and start typing. No email, no password. That's an official OpenAI feature, not a workaround.",
    },
    {
      type: "p",
      text: "Without an account, message limits are tighter and your history isn't saved. But the key point is this: **the official product is already free and signup-free.** Remember that, because it matters in a moment.",
    },
    {
      type: "h2",
      id: "the-wrapper-sites",
      text: "The \"ChatGPT in Lithuanian\" sites that aren't ChatGPT",
    },
    {
      type: "p",
      text: "Search \"chatgpt lietuviškai\" in Lithuania and you'll often find intermediary sites ranking above OpenAI itself, offering \"ChatGPT in Lithuanian, free, unlimited, no registration\". Look into who runs them and it gets interesting:",
    },
    {
      type: "ul",
      items: [
        "**One of the most popular** is run by a **Czech company** (Explicaire s.r.o., Plzeň). Its own fine print states that \"ChatGPT is a registered trademark of OpenAI; our service is an independent alternative and is not connected to OpenAI in any way\" — printed under a headline that says \"Chat GPT in Lithuanian, free\".",
        "**That same site doesn't disclose which model** actually answers you. You cannot verify whether you're talking to ChatGPT or something cheaper.",
        "**Another high-ranking result**, with \"chatgpt\" at the start of its domain, turns out to be an ordinary WordPress blog that funnels you to chatgpt.com anyway.",
      ],
    },
    {
      type: "p",
      text: "Are these scams? No. They're real companies with real legal pages. But the positioning misleads, and the risks are real: your text passes through an unknown intermediary, you get none of OpenAI's data controls, you don't know which model replies, and \"free and unlimited\" in practice means ads and paid upsells.",
    },
    {
      type: "p",
      text: "Which leads to the punchline: **every reason to use one of these wrappers (free, no signup, works in a browser) is already satisfied by chatgpt.com itself.** They rank because they out-SEO OpenAI on a Lithuanian keyword, not because they solve a problem.",
    },
    {
      type: "h2",
      id: "better-lithuanian",
      text: "7 ways to get better Lithuanian out of it",
    },
    {
      type: "ol",
      items: [
        "**Explicitly ask for natural language.** \"Write in natural Lithuanian, not translated from English. Avoid anglicisms and calques.\" This targets the most common failure directly.",
        "**Put it in Custom Instructions**, not in the chat. A one-off message gets forgotten; settings persist.",
        "**Specify the register:** professional, conversational, or academic. The model can't see register errors. Your readers can.",
        "**Work in two passes.** Second prompt: \"Check the grammatical cases and flag anything that reads like a translation.\" Models are better at checking than at producing.",
        "**Give it the source instead of relying on memory.** Paste the text and ask it to work from that. Memory is exactly where it invents on local topics.",
        "**Provide a sample of your own writing.** One real example sets the tone better than ten adjectives.",
        "**Never trust local facts without a source.** Local history, law, institutions: that's where it's wrong most convincingly.",
      ],
    },
    {
      type: "h2",
      id: "alternatives",
      text: "Alternatives",
    },
    {
      type: "p",
      text: "The honest answer to \"which AI is best in Lithuanian\": **there is no credible public comparison of ChatGPT, Claude, and Gemini in Lithuanian.** Anyone claiming otherwise is guessing. All three manage it, and all three fail in similar places. I write with [Claude](https://claude.ai/referral/5JaLlVfIEg) daily (referral link, costs you nothing), but that's my habit, not a measured advantage.",
    },
    {
      type: "p",
      text: "There are also Lithuanian-specific models: the Lithuanian company Neurotechnology released an open LT-Llama2 trained on more than 14 billion Lithuanian tokens. It's the model that proved a specialised model can beat bigger multilingual ones. For everyday users, though, it isn't an alternative yet: it's a model for developers, with no consumer chat app.",
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Does ChatGPT speak Lithuanian?",
          a: "Yes, automatically: write in Lithuanian and it replies in Lithuanian. But research shows roughly 0.66–0.85 accuracy on grammatical cases, and Lithuanian trails Nordic languages. It's good, not perfect, so always review the output.",
        },
        {
          q: "Do you need an account to use ChatGPT?",
          a: "No. Go to chatgpt.com and start typing; using it without an account is an official option. Without one, message limits are tighter and your history isn't saved.",
        },
        {
          q: "Is ChatGPT free?",
          a: "Yes, there's a free tier with limits: once you hit the cap, it switches to a lighter model. The limits are dynamic and change often, so exact numbers aren't worth memorising. Paid plans give the most capable models and higher limits.",
        },
        {
          q: "Are the \"ChatGPT in Lithuanian, no signup\" sites safe?",
          a: "They're mostly independent intermediaries, not OpenAI. They don't disclose which model answers, and your text passes through an unknown third party. Since the official chatgpt.com already works free and without registration, there's little reason to use them.",
        },
        {
          q: "Which AI is best at Lithuanian?",
          a: "No credible public comparison exists. The only measured signals: GPT-4o reached 0.88 accuracy on Lithuanian history questions, and a Lithuanian-specific model beat larger multilingual ones. Practical advice: pick one, test it on your own text, and always review.",
        },
      ],
    },
    {
      type: "cta",
      text: "Want to apply AI in your business, or build your own AI agent? Let's talk.",
      label: "Book a call",
      href: "/en/call",
    },
  ],
  related: ["en-artificial-intelligence", "en-free-ai-tools"],
};
