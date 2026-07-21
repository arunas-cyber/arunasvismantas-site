import { type Article } from "../types";

/** Hub — kw "how to use claude ai" / "claude ai for beginners". Beginner guide, founder POV. */
export const howToUseClaude: Article = {
  routeKey: "en-how-to-use-claude",
  kind: "hub",
  publishedAt: "2026-07-21",
  kicker: "Building with AI",
  lede: "I run a company on Claude. I write, plan, research, and even build software with it every day, and I am not an engineer. If you are opening Claude for the first time and wondering what to actually do with it, this is the guide I wish I had. No jargon, just what works.",
  blocks: [
    {
      type: "p",
      text: "Claude is an AI assistant built by **Anthropic**. You talk to it in plain English, it answers, and it can help you write, think, research, summarise, code, and automate a huge range of everyday work. If you have used ChatGPT, the basic idea is familiar. What surprises most beginners is how much further you can take it once you know the few features that matter.",
    },
    {
      type: "p",
      text: "I use Claude to draft emails, pressure-test decisions, turn messy notes into clear documents, research competitors, and build entire products at [Callsy](https://callsy.ai). This guide walks you from your very first message to the handful of features that turn Claude from a chatbot into a genuine work tool.",
    },
    {
      type: "h2",
      id: "what-is-claude",
      text: "What is Claude, exactly?",
    },
    {
      type: "p",
      text: "Claude is a family of large language models you access through a chat interface. You type a request, Claude responds, and you keep the conversation going. It reads and writes text, understands images and documents you upload, searches the web when needed, and can work through long, multi-step tasks without losing the thread.",
    },
    {
      type: "p",
      text: "Anthropic's angle is safety and reliability. Claude is trained to be helpful, honest, and hard to push into nonsense. In practice that means it is a strong pick for real work: long documents, careful reasoning, and tasks where you need the output to actually be correct rather than just confident.",
    },
    {
      type: "h2",
      id: "claude-vs-chatgpt",
      text: "Claude vs ChatGPT: which should a beginner pick?",
    },
    {
      type: "p",
      text: "This is the first question almost everyone asks, so here is the honest answer: you can do great work with either, and you do not have to choose forever. They are more alike than different. That said, there are tendencies worth knowing.",
    },
    {
      type: "ul",
      items: [
        "**Claude** tends to shine at long-form writing, nuanced reasoning, working with large documents, and writing or editing code. Its tone is often more natural and less robotic out of the box.",
        "**ChatGPT** has a wider ecosystem of extras (image generation, a large plugin and GPT store, voice), and more people have written tutorials for it.",
        "**My take:** if your work is writing, thinking, analysis, and building, start with Claude. If you want an all-in-one toy box with image generation baked in, ChatGPT is a fine first stop. Most serious users end up keeping both open.",
      ],
    },
    {
      type: "h2",
      id: "the-models",
      text: "The Claude models: Opus, Sonnet, and Haiku",
    },
    {
      type: "p",
      text: "Claude comes in three sizes, named like coffee. You do not need to overthink this, but knowing the difference saves you money and time. Bigger models are smarter but slower and pricier; smaller ones are fast and cheap.",
    },
    {
      type: "table",
      caption: "The three Claude models and when to use each",
      head: ["Model", "Best for", "Feel"],
      rows: [
        [
          "Opus",
          "Hard problems, deep reasoning, big projects, coding",
          "The most capable, worth it when quality matters most",
        ],
        [
          "Sonnet",
          "Everyday work: writing, research, analysis",
          "The balanced default most people should live in",
        ],
        [
          "Haiku",
          "Quick, simple, high-volume tasks",
          "The fastest and cheapest, great for speed",
        ],
      ],
    },
    {
      type: "p",
      text: "Practical rule for beginners: **stay on Sonnet for daily work, reach for Opus when a task is genuinely hard or important.** In the chat interface you can switch models from a dropdown near the message box. You rarely need to think about it more than that.",
    },
    {
      type: "h2",
      id: "getting-started",
      text: "How to start using Claude (free)",
    },
    {
      type: "p",
      text: "Getting going takes about two minutes. There is nothing to install to try it.",
    },
    {
      type: "ol",
      items: [
        "Go to **claude.ai** in your browser and sign up with an email or Google account.",
        "You land in a chat window. Type a question or request in the box at the bottom and press enter. That is it, you are using Claude.",
        "Install the mobile app (iOS or Android) and the desktop app if you want Claude on every device. Your conversations sync across all of them.",
      ],
    },
    {
      type: "p",
      text: "The free plan is genuinely useful and enough to learn on. You get a daily amount of usage that resets, access to a capable model, and the core features. When you find yourself hitting limits or wanting the most powerful model all day, that is the signal to upgrade.",
    },
    {
      type: "table",
      caption: "Claude plans at a glance (2026)",
      head: ["Plan", "Price", "Who it is for"],
      rows: [
        ["Free", "$0", "Trying Claude and light daily use"],
        ["Pro", "$20/mo", "Daily users who want more usage and top models"],
        ["Max", "from $100/mo", "Heavy users and builders who live in Claude all day"],
        ["Team / API", "Varies", "Companies and developers building on Claude"],
      ],
    },
    {
      type: "h2",
      id: "first-conversation",
      text: "Your first conversation: how to actually prompt",
    },
    {
      type: "p",
      text: "You do not need to learn 'prompt engineering'. You need to communicate like you would with a sharp new colleague who has no context. The quality of what you get back is mostly about the quality of what you put in. A few habits do 90% of the work:",
    },
    {
      type: "ul",
      items: [
        "**Give context.** Say who you are, who it is for, and what good looks like. 'Write a cold email' is weak. 'I run an AI voice-agent startup. Write a short cold email to a Shopify store owner offering a free pilot, friendly and specific, no hype' is strong.",
        "**Ask for a format.** 'Give me five options', 'as a table', 'in bullet points', 'under 100 words'. Claude follows structure instructions well.",
        "**Iterate, do not restart.** If the first answer is 80% there, say what to change: 'shorter, warmer, drop the third point'. The conversation is the tool, not a single perfect prompt.",
        "**Give it your material.** Paste your notes, upload the document, share the draft. Claude is far more useful working with your real content than inventing from nothing.",
        "**Tell it to ask you questions.** 'Ask me anything you need before you start.' This one line dramatically improves the result on anything complex.",
      ],
    },
    {
      type: "h2",
      id: "key-features",
      text: "The features that make Claude click",
    },
    {
      type: "p",
      text: "Most beginners use Claude as a chat box and never touch the features that change everything. These are the ones worth learning early.",
    },
    {
      type: "h3",
      text: "Projects",
    },
    {
      type: "p",
      text: "A Project is a dedicated workspace where you store instructions and files that Claude should always keep in mind. Put your company background, your writing style, or a big reference document in a Project once, and every chat inside it starts with that context. This is the single biggest upgrade to how useful Claude feels.",
    },
    {
      type: "h3",
      text: "Artifacts",
    },
    {
      type: "p",
      text: "When Claude produces something substantial (a document, a table, a working mini-app, a piece of code), it opens in a side panel called an Artifact that you can edit, iterate on, and even run. It turns a chat into a live workspace instead of a wall of text.",
    },
    {
      type: "h3",
      text: "Files, images, and web search",
    },
    {
      type: "p",
      text: "Drag in a PDF, spreadsheet, screenshot, or image and ask questions about it. Claude reads all of them. It can also search the web for current information when a task needs facts newer than its training. For a beginner, 'summarise this 40-page PDF and pull out the three numbers I care about' is a magic-feeling first win.",
    },
    {
      type: "h3",
      text: "Connectors",
    },
    {
      type: "p",
      text: "Connectors let Claude plug into other tools (your calendar, drive, and many apps) so it can act on your behalf, not just talk. This is where Claude stops being a chatbot and starts being an assistant. It is powered by an open standard called MCP, which is worth knowing the name of even as a beginner.",
    },
    {
      type: "h2",
      id: "claude-code",
      text: "Claude Code: building software without being an engineer",
    },
    {
      type: "p",
      text: "This is the part I care about most. **Claude Code** is a version of Claude that runs in your terminal and can build real software: it writes files, runs commands, and ships features while you describe what you want in plain English. I built this entire website with it, and I do not write code from scratch.",
    },
    {
      type: "p",
      text: "It is more advanced than the chat interface, so it is not where you start on day one. But knowing it exists reframes what Claude is for. If you have ever wanted to build a tool, a site, or an automation and assumed you needed to hire a developer, that assumption is now negotiable. I compared it to the other main tool in [Claude Code vs Cursor](/en/insights/claude-code-vs-cursor).",
    },
    {
      type: "h2",
      id: "use-cases",
      text: "What a non-engineer actually does with Claude all day",
    },
    {
      type: "p",
      text: "To make this concrete, here is the real work I push through Claude as a founder, none of which requires any technical skill:",
    },
    {
      type: "ul",
      items: [
        "**Writing:** emails, posts, landing-page copy, investor updates, this kind of article. Draft, cut, sharpen.",
        "**Thinking:** talking through a decision, listing the risks, arguing the other side, stress-testing a plan before I commit.",
        "**Research:** competitor breakdowns, market questions, turning a messy web of tabs into one clear summary.",
        "**Documents:** turning a voice memo or rough notes into a clean brief, contract summary, or spec.",
        "**Building:** internal tools, the website, small automations, all through Claude Code.",
      ],
    },
    {
      type: "h2",
      id: "beginner-mistakes",
      text: "Common beginner mistakes to skip",
    },
    {
      type: "ul",
      items: [
        "**Being too vague.** The number-one cause of disappointing answers. Add context and a target.",
        "**Trusting facts blindly.** Claude is strong but not infallible. For anything that matters (numbers, names, legal, medical), verify. Ask it for sources.",
        "**Starting over instead of steering.** Refine the answer you have; do not scrap the whole chat and re-prompt from zero.",
        "**Ignoring Projects.** If you keep pasting the same background every time, you are doing it the hard way.",
        "**One-and-done.** The best results come from a back-and-forth, not a single shot.",
      ],
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Is Claude free to use?",
          a: "Yes. Claude has a free plan at claude.ai that is enough to learn on and handle light daily use. Paid plans (Pro from $20/month, Max from $100/month) unlock more usage and the most powerful models for people who use it heavily.",
        },
        {
          q: "Is Claude better than ChatGPT?",
          a: "Neither is universally better. Claude tends to excel at long-form writing, careful reasoning, working with large documents, and coding, with a more natural tone. ChatGPT has a broader ecosystem including image generation. For writing, thinking, and building, Claude is an excellent first choice, and many people use both.",
        },
        {
          q: "Do I need to know how to code to use Claude?",
          a: "No. Claude is used entirely in plain English. You can get enormous value writing, researching, and analysing without any technical skill. Even Claude Code, which builds software, is driven by describing what you want rather than writing code yourself.",
        },
        {
          q: "Which Claude model should a beginner use?",
          a: "Stay on Sonnet for everyday work; it is the balanced default. Switch to Opus when a task is genuinely hard or important, and use Haiku for quick, simple, high-volume tasks. You can change models from a dropdown in the chat.",
        },
        {
          q: "What can Claude do that a beginner would not expect?",
          a: "Read and summarise long PDFs and spreadsheets, remember your context through Projects, produce editable documents and mini-apps as Artifacts, search the web, connect to your other tools through Connectors, and build real software through Claude Code.",
        },
      ],
    },
    {
      type: "cta",
      text: "I build and ship products with Claude as a non-technical founder. If you want to talk through using AI in your own work or company, book a call.",
      label: "Book a call",
      href: "/en/call",
    },
  ],
  related: [
    "en-personal-ai-assistant",
    "en-claude-code-vs-cursor",
    "en-artificial-intelligence",
  ],
};
