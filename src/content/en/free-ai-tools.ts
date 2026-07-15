import { type Article } from "../types";

/** SPOKE (EN) — counterpart of lt-nemokamas-dirbtinis-intelektas. */
export const freeAiTools: Article = {
  routeKey: "en-free-ai-tools",
  kind: "spoke",
  publishedAt: "2026-07-13",
  kicker: "Artificial intelligence",
  lede: "The best free AI tools in 2026. No marketing spin: what each one actually does, where the free tier really ends, the privacy reality, and where to start today.",
  hero: {
    src: "/images/insights/nemokamas-dirbtinis-intelektas.jpg",
    alt: "Illustration: a toolbox of AI tools with a sparkle, representing free AI tools",
  },
  blocks: [
    {
      type: "p",
      text: "Good news: you don't have to pay to start using AI. The most powerful tools all have free tiers that are more than enough for most everyday work. Here are seven worth having, and an honest note on where the free part ends.",
    },
    {
      type: "p",
      text: "**For transparency:** the Claude link is a referral link. It costs you nothing and gives me a small bonus. It's here because I use Claude every day, not because of the referral.",
    },
    {
      type: "p",
      text: "One tip up front: don't pick all of them. Choose one or two from this list and do real work with them for a week. More than two tools at the start just scatters your attention.",
    },
    {
      type: "h2",
      id: "assistants",
      text: "Chat assistants (the most versatile)",
    },
    {
      type: "ul",
      items: [
        "**ChatGPT** (chat.openai.com). The most popular and versatile. The free tier handles writing, questions, ideas, and translation.",
        "**[Claude](https://claude.ai/referral/5JaLlVfIEg)**. Especially strong at writing, longer texts, and working with documents. My daily pick for creative work.",
        "**Google Gemini** (gemini.google.com). Convenient because it's integrated with Gmail, Docs, and Drive.",
      ],
    },
    {
      type: "h2",
      id: "search",
      text: "AI-powered search",
    },
    {
      type: "ul",
      items: [
        "**Perplexity** (perplexity.ai). Like Google, but it gives you an answer with cited sources right away. Great when you need to check something fast and verify where it came from.",
        "**Microsoft Copilot** (copilot.microsoft.com). Genuinely generous free tier: web answers with citations, image generation, and a free reasoning mode (Think Deeper).",
      ],
    },
    {
      type: "h2",
      id: "images-audio",
      text: "Images, audio, and more",
    },
    {
      type: "ul",
      items: [
        "**Gemini and Microsoft Designer** let you generate images from text for free (with daily limits).",
        "**OpenAI Whisper** (open-source) transcribes audio, including Lithuanian, and runs locally, so it's unlimited and private.",
      ],
    },
    {
      type: "h2",
      id: "where-free-ends",
      text: "Where the free tier ends",
    },
    {
      type: "p",
      text: "Free tiers almost always limit three things: how many messages you can send per day, which model you get (the smartest ones stay paid), and how fast you get answers at peak times. For everyday use, that's usually fine.",
    },
    {
      type: "p",
      text: "Paying (typically around $20/month) is worth it only when you hit a real limit: you use a tool for hours a day, or you need the top model for hard work. Start free and upgrade only when you feel the wall.",
    },
    {
      type: "h2",
      id: "privacy",
      text: "One thing to know about privacy",
    },
    {
      type: "p",
      text: "Most free tiers may train on what you type by default. So never paste passwords, ID numbers, bank details, or client data into a free AI tool. In ChatGPT and Gemini you can turn training off in settings, or use a temporary/incognito chat. For businesses, pasting customer data into a consumer AI can be a GDPR problem, so treat anything you type as if it could be read.",
    },
    {
      type: "h2",
      id: "start-today",
      text: "Where to start today",
    },
    {
      type: "ol",
      items: [
        "**Create an account** on ChatGPT or Claude. Takes a minute.",
        "**Give it a real task.** Not a test, but something real: write a reply to this customer, or clean up this text.",
        "**Refine in the chat.** If the answer isn't right, say what's wrong. It gets better immediately.",
      ],
    },
    {
      type: "quote",
      text: "The most expensive AI tool is the one you never opened. Start with a free one, and start today.",
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can you really use AI for free?",
          a: "Yes. ChatGPT, Gemini, Copilot, Claude, and Perplexity all have genuine free tiers that are enough for most everyday tasks. You only need to pay for the smartest models or very heavy use.",
        },
        {
          q: "Which free AI tool is best?",
          a: "For general use, ChatGPT and Claude. For cited facts, Perplexity or Copilot. For anything inside Gmail or Docs, Gemini. Pick one, try it for a week, and switch if it doesn't fit your work.",
        },
        {
          q: "Are the free versions safe to use?",
          a: "Safe to use, but don't feed them sensitive or confidential information. Some services may use your chats to train their models. Turn off training in settings or use a temporary chat.",
        },
        {
          q: "Which one should I start with?",
          a: "ChatGPT or Claude. Both are versatile and free. Pick one, spend a week asking it real questions from your work, and you'll understand AI better than from ten articles.",
        },
      ],
    },
    {
      type: "cta",
      text: "Want to move from using AI to building with it, your own AI agent or an AI solution for your business? Let's talk.",
      label: "Book a call",
      href: "/en/call",
    },
  ],
  related: ["en-artificial-intelligence"],
};
