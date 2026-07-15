import { type Article } from "../types";

/** HUB (EN) — counterpart of lt-dirbtinis-intelektas. */
export const artificialIntelligence: Article = {
  routeKey: "en-artificial-intelligence",
  kind: "hub",
  publishedAt: "2026-07-13",
  kicker: "Artificial intelligence",
  lede: "What artificial intelligence is, how it actually works, and how to start using it, both day to day and in business. No jargon, from someone who builds with AI every day.",
  hero: {
    src: "/images/insights/dirbtinis-intelektas.jpg",
    alt: "Illustration: an AI robot, a speech bubble, and neural-network nodes",
  },
  blocks: [
    {
      type: "p",
      text: "In two years, artificial intelligence went from science fiction to a tool you open on your phone. But underneath the noise sits a simple question: what is it, and what can I actually do with it? This guide answers that without the hype. I build with AI every day, so I write what works, not what sounds good.",
    },
    {
      type: "h2",
      id: "what-is-ai",
      text: "What is artificial intelligence?",
    },
    {
      type: "p",
      text: "Artificial intelligence (AI) is computer systems that can do tasks once thought to need a human mind: understand language, recognize images, write text, make decisions. The key thing to grasp first: it is not a thinking machine. It is a very good pattern-recognition system, trained on enormous amounts of data.",
    },
    {
      type: "p",
      text: "When you ask ChatGPT or Claude a question, it doesn't look up an answer on a shelf. Based on everything it has ever seen, it predicts which word logically comes next. What's astonishing is how far that simple principle goes.",
    },
    {
      type: "h2",
      id: "how-it-works",
      text: "How does AI work?",
    },
    {
      type: "p",
      text: "Modern AI breaks into three parts. Once you understand them, it stops feeling like magic.",
    },
    {
      type: "ul",
      items: [
        "**Data.** The model is trained on huge amounts of text, images, or audio. The more and the cleaner the data, the better the result.",
        "**The model.** A mathematical system that finds patterns in that data. Large language models like GPT or Claude have billions of parameters.",
        "**The prompt.** What you type in. The clearer and more specific the prompt, the more useful the answer. This is the first skill worth practicing.",
      ],
    },
    {
      type: "h2",
      id: "everyday-use",
      text: "Where AI is used every day",
    },
    {
      type: "p",
      text: "You are probably already using AI without noticing:",
    },
    {
      type: "ul",
      items: [
        "Your phone keyboard predicting the next word.",
        "Netflix or Spotify recommendations.",
        "Photo search by a word like beach or dog.",
        "Your bank flagging a suspicious transaction.",
        "Chatbots on company websites.",
      ],
    },
    {
      type: "h2",
      id: "free-tools",
      text: "Free tools to start with",
    },
    {
      type: "p",
      text: "The best way to understand AI is to try it. A few you can open today, for free:",
    },
    {
      type: "ul",
      items: [
        "**ChatGPT** (chat.openai.com) — the most popular, most all-round assistant.",
        "**Claude** (claude.ai) — especially strong at writing and longer tasks.",
        "**Google Gemini** — handy because it's built into Google's apps.",
        "**Perplexity** — search with AI answers and cited sources.",
      ],
    },
    {
      type: "p",
      text: "Tip: don't agonize over which is best. Pick one and spend a couple of days asking it real questions from your own work. Understanding comes from use, not reading. I go deeper in [the best free AI tools](/en/insights/free-ai-tools).",
    },
    {
      type: "h2",
      id: "ai-in-business",
      text: "AI in business",
    },
    {
      type: "p",
      text: "This is where AI turns from a toy into money. You don't need a tech company; the simplest applications deliver the most:",
    },
    {
      type: "ul",
      items: [
        "Customer service: instant answers to common questions, no queue.",
        "Sales: recovering abandoned carts, reminders, follow-ups.",
        "Content: product descriptions, emails, social posts.",
        "Operations: invoicing, data entry, reporting.",
      ],
    },
    {
      type: "p",
      text: "At Callsy, the company I co-founded, AI voice agents answer calls and talk to customers in real time. What seemed impossible two years ago now runs every single day.",
    },
    {
      type: "h2",
      id: "ai-agents",
      text: "AI agents: the next step",
    },
    {
      type: "p",
      text: "So far we've talked about assistants that respond when you ask. AI agents go further: they do the work end to end. Not just draft the email, but send it. Not just suggest a plan, but carry it out by connecting to your tools.",
    },
    {
      type: "p",
      text: "In my view, this is where the biggest opportunity of the next few years sits. It's also what I write about most.",
    },
    {
      type: "h2",
      id: "how-to-start",
      text: "How to start in one week",
    },
    {
      type: "ul",
      items: [
        "**Pick one tool** from above and create an account.",
        "**Give it a real task.** Not tell me about yourself, but write a reply to this customer or clean up this text.",
        "**Refine.** If the answer isn't right, say what's wrong. AI improves from your feedback within the same conversation.",
        "**Repeat daily for a week.** After seven days you'll understand AI better than ten articles could teach you.",
      ],
    },
    {
      type: "quote",
      text: "AI won't take your job. A person who knows how to use it will. The good news: you can learn the basics in a week.",
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Is artificial intelligence free?",
          a: "The core versions of ChatGPT, Claude, and Gemini are free and, for most everyday tasks, entirely enough. Paid versions (around $20/month) unlock more powerful models and higher limits, but it's worth starting with the free tiers.",
        },
        {
          q: "What's the difference between AI and AI agents?",
          a: "Artificial intelligence is the umbrella term. An AI assistant, like ChatGPT, answers questions. An AI agent goes further: it takes actions, connects to your tools, and completes a task without you stepping in at every stage.",
        },
        {
          q: "Is AI dangerous?",
          a: "Like any powerful technology it has risks: misinformation, data privacy, misuse. For an everyday user, the biggest risk is blindly trusting an answer. AI sometimes gets things wrong very convincingly, so always verify anything important.",
        },
        {
          q: "How do I learn to use AI?",
          a: "Practice, not theory. Pick one tool and spend a week asking it real questions from your own work. If you want to go deeper, I share concrete examples in my newsletter of how I build products and agents with AI.",
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
  related: ["en-free-ai-tools"],
};
