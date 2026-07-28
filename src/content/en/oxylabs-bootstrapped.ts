import { type Article } from "../types";

/** Spoke — kw "oxylabs unicorn" / "bootstrapped to a billion". Founder lesson, Oxylabs case. */
export const oxylabsBootstrapped: Article = {
  routeKey: "en-oxylabs-bootstrapped",
  kind: "spoke",
  publishedAt: "2026-07-24",
  kicker: "Startups",
  lede: "In July 2026 Oxylabs sold a slice of the company at a 3.1 billion euro valuation. The headline is not the number. It is the path: eleven years without a single outside investor. Here is what that story tells every founder about bootstrapping, control, and timing.",
  blocks: [
    {
      type: "p",
      text: "Most unicorns are built the same way: a fresh idea, an early venture round, then a few more, and a billion-dollar valuation stacked on other people's money. Oxylabs did the opposite. The Vilnius company grew for eleven years on its own revenue and took outside capital for the first time only in July 2026, when it was already worth billions. That is rare, and it is worth studying.",
    },
    {
      type: "h2",
      id: "what-happened",
      text: "What actually happened",
    },
    {
      type: "p",
      text: "Oxylabs sold a minority stake to the private equity firm Warburg Pincus. The numbers speak for themselves.",
    },
    {
      type: "table",
      caption: "The Oxylabs deal (July 2026)",
      head: ["Metric", "Value"],
      rows: [
        ["Investment", "130M $ (113.6M €)"],
        ["Valuation", "3.6B $ (3.1B €)"],
        ["Investor", "Warburg Pincus"],
        ["Outside rounds before this", "0 (eleven years bootstrapped)"],
        ["Annual revenue run rate", "~350M $"],
        ["Customers", "more than 350,000 technology teams"],
      ],
    },
    {
      type: "p",
      text: "This was the first outside investment in the company's entire history. After the deal Oxylabs became Lithuania's sixth unicorn and the second most valuable private company in the country, right behind Vinted.",
    },
    {
      type: "h2",
      id: "what-is-oxylabs",
      text: "What Oxylabs is, and why now",
    },
    {
      type: "p",
      text: "Oxylabs was founded in 2015 inside the Tesonet ecosystem, the same one that produced Nord Security. It started as a premium proxy service. Today it calls itself a web intelligence platform and handles billions of requests a day, collecting public web data such as prices, search results, and product information.",
    },
    {
      type: "p",
      text: "The timing was not an accident. AI models and agents need live, public web data at enormous scale, and static, pre-indexed information no longer cuts it. Oxylabs supplies exactly that infrastructure, so the AI wave pushed its business forward at the precise moment the market was ready to pay for it.",
    },
    {
      type: "h2",
      id: "why-bootstrapping-is-rare",
      text: "Why bootstrapping to a billion is so rare",
    },
    {
      type: "p",
      text: "Bootstrapping means growing with no outside money, only what you earn. It sounds attractive, but almost no one reaches a billion this way. The reason is simple: venture capital lets you burn money now to take a market faster than your competitors. Bootstrapping has no such luxury, so every step has to be profitable.",
    },
    {
      type: "p",
      text: "That is why most startups raise, and it is why the Oxylabs story is so striking. They reached a scale that most companies only hit with tens of millions of someone else's money, and they gave away almost nothing to get there.",
    },
    {
      type: "h2",
      id: "what-bootstrapping-gives",
      text: "What bootstrapping gives a founder",
    },
    {
      type: "ol",
      items: [
        "**Control.** No investors on the board setting the pace or pushing you to sell. The founders make the calls.",
        "**Ownership.** When you finally do sell a stake, you keep a far bigger piece. Billions that belong to you, rather than split across five rounds, is a completely different number.",
        "**Discipline.** When you grow on your own cash, you cannot hide behind growth at any cost. The business has to be healthy from day one.",
        "**Leverage.** When you do not need the money, you can wait for the right partner and the right price. Oxylabs negotiated from strength, not from desperation.",
      ],
    },
    {
      type: "h2",
      id: "when-it-fails",
      text: "When bootstrapping does not work",
    },
    {
      type: "p",
      text: "I would be dishonest if I said bootstrapping fits everyone. It does not. Some businesses simply have no shot without serious capital.",
    },
    {
      type: "ul",
      items: [
        "**Capital-intensive products.** If you need to build a factory, ship a physical product, or spend years building technology with no revenue, your own cash will not cover it.",
        "**Winner-takes-all markets.** When the winner takes everything and rivals are racing with millions, a slow bootstrapped pace can cost you the whole market.",
        "**Long road to revenue.** Deep tech or biotech, where the first customer is years away, rarely survives without investors.",
      ],
    },
    {
      type: "p",
      text: "Oxylabs had a lucky combination: strong demand, fast revenue, and a product it could scale without huge fixed costs. Not every business is like that. So the real question is not bootstrapping versus venture capital in the abstract, but which one fits your business.",
    },
    {
      type: "h2",
      id: "the-takeaway",
      text: "The takeaway",
    },
    {
      type: "p",
      text: "For me as a founder, the most important thing in the Oxylabs story is not the sum, it is the patience. Eleven years quietly building a profitable business, then jumping into the billions the moment the market turned their way. It is a reminder that venture capital is neither the only path nor a measure of success. At Callsy we build AI voice agents for ecommerce, and we also judge every decision not by how much we raised but by whether the business is healthy. Money you earn is almost always stronger than money you borrow.",
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "How much is Oxylabs worth?",
          a: "In July 2026 Oxylabs was valued at 3.1 billion euros (about 3.6 billion dollars) when Warburg Pincus bought a minority stake. It is the second most valuable private company in Lithuania after Vinted.",
        },
        {
          q: "Is Oxylabs a unicorn?",
          a: "Yes. In July 2026 Oxylabs became Lithuania's sixth unicorn, meaning a private company worth more than one billion dollars.",
        },
        {
          q: "What does bootstrapped mean?",
          a: "Bootstrapping means growing a business with no outside investment, funded only by the revenue it earns. Oxylabs grew this way for eleven years before its first outside round.",
        },
        {
          q: "Why did Oxylabs raise money only now?",
          a: "The company was profitable for eleven years and did not need capital. The AI wave sharply increased demand for web data, so it became the right moment to accelerate growth with a strong partner.",
        },
      ],
    },
    {
      type: "cta",
      text: "Building a startup and weighing bootstrapping against raising? Let's talk product, money, and AI.",
      label: "Book a call",
      href: "/en/call",
    },
  ],
  related: [
    "en-build-business-no-capital",
    "en-500-global",
    "en-personal-ai-assistant",
  ],
};
