import { type Article } from "../types";

/** SPOKE (EN) — kw "what is openclaw" (~14,800/mo, decaying). Research-backed. */
export const whatIsOpenclaw: Article = {
  routeKey: "en-what-is-openclaw",
  kind: "spoke",
  publishedAt: "2026-07-15",
  kicker: "AI agents",
  lede: "OpenClaw became the fastest-growing repository in GitHub history, then the hype collapsed. Most explanations blame security. They're wrong. Here's what OpenClaw actually is, what really killed the excitement, and whether you should run it.",
  hero: {
    src: "/images/insights/openclaw.jpg",
    alt: "Illustration: a central AI hub connected by lines to surrounding chat bubbles",
  },
  blocks: [
    {
      type: "p",
      text: "In about five months, OpenClaw went from nothing to the most-starred software project on GitHub, passing React's decade-long total. Then the excitement drained away. Almost every post-mortem blames the security vulnerabilities. That story is wrong, or at least incomplete, and the real one is far more useful if you're thinking about building your own AI assistant.",
    },
    {
      type: "h2",
      id: "what-it-is",
      text: "What OpenClaw actually is",
    },
    {
      type: "p",
      text: "First, kill the biggest misconception: **OpenClaw is not an AI model.** It's not a competitor to ChatGPT or Claude. It's a **gateway**: a small program that runs on your own machine and connects a model you already pay for to your messaging apps and your operating system.",
    },
    {
      type: "p",
      text: "That's the whole trick, and it's a good one. Instead of another web app, your assistant lives in **WhatsApp, Telegram, Slack, Discord, Signal, iMessage**, and around 25 other platforms you already use. You text it like a person. It can run shell commands, handle files, read email, manage your calendar, scrape the web, and chain multi-step jobs in the background.",
    },
    {
      type: "table",
      caption: "OpenClaw at a glance. Verified from the repo and official docs.",
      head: ["", ""],
      rows: [
        ["Created by", "Peter Steinberger (Austrian developer, previously PSPDFKit)"],
        ["Launched", "24 November 2025 (originally under a different name)"],
        ["License", "MIT, open source, written in TypeScript and Swift"],
        ["Popularity", "~383,000 GitHub stars, fastest-growing repo in GitHub history"],
        ["Runs on", "Your own machine (macOS, Linux, Windows), Node.js, port 18789"],
        ["The model", "Bring your own: Claude, GPT, Gemini, DeepSeek, or a local model"],
        ["Still maintained?", "Yes. v2026.7.1 shipped 13 July 2026, 532 contributors"],
      ],
    },
    {
      type: "p",
      text: "It's worth being blunt about the innovation here, because the AI experts quoted in TechCrunch were. Artem Sorokin: *\"From an AI research perspective, this is nothing novel.\"* John Hammond of Huntress put it harder: *\"OpenClaw is still just a wrapper to ChatGPT, or Claude, or whatever AI model you stick to it.\"*",
    },
    {
      type: "quote",
      text: "OpenClaw's breakthrough was never intelligence. It was distribution and access. It made agents feel personal by putting them in your WhatsApp. The capability ceiling is still whatever your model can do.",
    },
    {
      type: "h2",
      id: "what-really-killed-it",
      text: "What actually killed the hype (it wasn't security)",
    },
    {
      type: "p",
      text: "Here's the part almost nobody leads with. On **4 April 2026, Anthropic cut off Claude Pro and Max subscriptions from third-party harnesses**, OpenClaw included. Before that date, people were running effectively unlimited agent workloads on a flat $20 to $200 per month subscription. After it, they paid metered API rates.",
    },
    {
      type: "p",
      text: "Reported costs jumped **10x to 50x** for heavy users. Hacker News filled with people who burned through $200 within an hour. Boris Cherny, who leads Claude Code, explained it plainly: *\"our subscriptions weren't built for the usage patterns of these third-party tools.\"*",
    },
    {
      type: "p",
      text: "Sit with what that means. **The software didn't change between February and April. The economics did.** And the casual user base evaporated within days. The dream of an always-on personal agent was, for a few glorious months, being quietly subsidised by a pricing loophole. When the true cost of running an agent that never sleeps became visible, most people discovered they didn't want it that much.",
    },
    {
      type: "p",
      text: "I build AI agents commercially, so let me put it in terms I use daily: an agent's unit economics are not a detail you optimise later. They are the product. OpenClaw is the largest public demonstration of that lesson we've ever had.",
    },
    {
      type: "h2",
      id: "the-localhost-fallacy",
      text: "The localhost fallacy",
    },
    {
      type: "p",
      text: "The security story is real, but it's more interesting than \"the code was bad.\" OpenClaw was designed to run **locally**, where its gateway on port 18789 is perfectly safe, because only your machine can reach it.",
    },
    {
      type: "p",
      text: "Then people wanted their assistant available when their laptop was shut. So they deployed it to a cloud server. And that port became reachable from the internet. Reports put the number of publicly exposed instances in the **hundreds of thousands**.",
    },
    {
      type: "p",
      text: "The security model was coherent. The deployment broke it. Most of those vulnerabilities weren't authored by anyone, they were **deployed into existence** by users making one reasonable-sounding convenience decision. That's a lesson worth more than any CVE list.",
    },
    {
      type: "h2",
      id: "the-cve-number",
      text: "About that scary CVE number",
    },
    {
      type: "p",
      text: "You'll see \"543 CVEs\" quoted as proof OpenClaw is catastrophically insecure. I'm going to be honest in a way most articles aren't: **that number is misleading.** About 92% of them come from a single security research organisation. This is what happens when the most-starred repo in history becomes a trophy target: researchers pile in.",
    },
    {
      type: "p",
      text: "Competing tools have fewer CVEs partly because far fewer people are looking. That doesn't make OpenClaw safe, some of the flaws were genuinely severe, including a 9.9-severity privilege escalation and an attack where merely visiting a website could hijack your local agent. But volume of CVEs is a measure of attention as much as of quality.",
    },
    {
      type: "h2",
      id: "the-unfixable-part",
      text: "The part you can't patch",
    },
    {
      type: "p",
      text: "The genuinely serious issue isn't any single bug. Security researchers demonstrated an attack that needed **no exploit at all**: an email pretending to be from a team lead, asking for access during a fake production incident. The agent helpfully forwarded credentials in plaintext. No CVE was filed, because nothing was broken. It worked exactly as designed.",
    },
    {
      type: "p",
      text: "This is what Simon Willison calls the **lethal trifecta**: private data, plus untrusted content, plus the ability to take actions. Combine all three and you have a problem no patch fixes. You can only shrink the blast radius. Every security source agrees on one rule: **never run OpenClaw on your primary computer.** Use a VM, a container, or a spare machine.",
    },
    {
      type: "h2",
      id: "is-it-dead",
      text: "So is it dead?",
    },
    {
      type: "p",
      text: "No, and this surprises people. Version 2026.7.1 shipped on 13 July 2026, with over 500 contributors in that release alone. Its creator joined OpenAI in February 2026, and the project moved to a non-profit foundation that still stewards it actively.",
    },
    {
      type: "p",
      text: "**The hype died. The project didn't.** What changed is who it's for: it went from a viral toy that everyone installed to infrastructure that serious people run deliberately, in sandboxes, with spending caps.",
    },
    {
      type: "h2",
      id: "should-you-use-it",
      text: "Should you actually run it?",
    },
    {
      type: "ul",
      items: [
        "**Yes, if** you want to genuinely understand personal AI agents, you'll run it in a VM or on a spare machine, you'll set a hard spending cap, and you treat it as an experiment rather than a butler for your real life.",
        "**No, if** you want to install it on your work laptop, connect it to your real email, and let it act unattended. That's the configuration every security researcher is warning about.",
        "**Costs:** the software is free (MIT). You pay for model API usage. Self-hosted personal use is commonly reported around **$6-13/month**, heavier automation well over $100.",
        "**Skill needed:** installing it is genuinely easy, there's a one-line installer and a wizard. **Securing it is not.** Those are different skills, and the second one is the one that matters.",
      ],
    },
    {
      type: "h2",
      id: "the-real-lesson",
      text: "The real lesson",
    },
    {
      type: "p",
      text: "OpenClaw proved the demand and the ceiling at the same time. 383,000 stars say people desperately want a personal AI assistant. The rest of the story says the bottleneck was never the model's intelligence.",
    },
    {
      type: "p",
      text: "**The bottleneck is trust boundaries.** What is this thing allowed to touch? Whose messages can instruct it? What can it spend? No amount of clever prompting fixes that, because it isn't a prompting problem. This is exactly why, when I teach people to build their own AI assistant, the valuable skill isn't \"build an agent.\" Anyone can install one in five minutes. The valuable skill is **scoping an agent**: deciding what it may never do.",
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "What is OpenClaw in simple terms?",
          a: "An open-source program that runs on your own computer and connects an AI model you already pay for (like Claude or GPT) to your messaging apps. Instead of a website, your AI assistant lives in WhatsApp or Telegram and can act on your files, email, and calendar. It is not an AI model itself.",
        },
        {
          q: "Is OpenClaw free?",
          a: "The software is free and MIT-licensed. But you pay for the AI model's API usage, which is the real cost. Personal self-hosted use is commonly reported at roughly $6-13 per month; heavy automation runs well over $100.",
        },
        {
          q: "Can I use my Claude subscription with OpenClaw?",
          a: "No, not since 4 April 2026, when Anthropic cut off Pro and Max subscriptions from third-party tools. You now need pay-as-you-go API billing. This cost change, not security, is what collapsed the casual user base.",
        },
        {
          q: "Is OpenClaw safe?",
          a: "Not by default, and not on your main computer. It's reasonably safe in a virtual machine with allowlists, verified skills only, a spending cap, and the gateway never exposed to the internet. The deepest risk is architectural, not a bug: an agent with private data, untrusted input, and the ability to act can be socially engineered.",
        },
        {
          q: "Do I need to be a programmer to use OpenClaw?",
          a: "To install it, no, there's a one-line installer and a setup wizard. To secure and operate it responsibly, effectively yes. Installing is easy; scoping it safely is the hard part.",
        },
        {
          q: "Is OpenClaw dead?",
          a: "No. The hype died, not the project. Version 2026.7.1 shipped in July 2026 with over 500 contributors, and a non-profit foundation stewards it after the creator joined OpenAI.",
        },
      ],
    },
    {
      type: "cta",
      text: "Want to build your own AI assistant, scoped properly so it's actually useful and not a liability? Let's talk.",
      label: "Book a call",
      href: "/en/call",
    },
  ],
  related: ["en-artificial-intelligence", "en-best-ai-apps"],
};
