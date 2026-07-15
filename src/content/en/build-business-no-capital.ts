import { type Article } from "../types";

/** PILLAR (EN) — counterpart of lt-verslas-be-kapitalo, from the LOGIN 2025 talk. */
export const buildBusinessNoCapital: Article = {
  routeKey: "en-build-business-no-capital",
  kind: "hub",
  publishedAt: "2026-07-13",
  kicker: "Building companies",
  lede: "I gave this talk on stage at LOGIN 2025: what 20 years and five companies taught me about building from zero. The lessons, the real examples, and the tools, with no filler.",
  hero: {
    src: "/images/hero-stage.jpg",
    alt: "Arunas Vismantas speaking on stage at the LOGIN 2025 conference",
  },
  blocks: [
    {
      type: "p",
      text: "The statistics are brutal: around **90% of businesses fail before ever reaching €100K in revenue**, and 20-30% close within their first year. The idea looks unstoppable, everything feels electric, and then reality starts landing punches. Here is what I've learned building companies in Lithuania and abroad, the same material I presented on stage at LOGIN 2025 to a full room.",
    },
    {
      type: "video",
      youtubeId: "dDxAc3GPziU",
      title: "From 0 to 100k: how to build a business without much capital (LOGIN 2025)",
      uploadDate: "2025-08-29",
      duration: "PT29M37S",
    },
    {
      type: "p",
      text: "A quick word on where this comes from. I'm a serial founder, though I prefer serial tester. I've raised more than €3M in venture capital for tech startups, built the Podbase and [iDenfy](https://www.idenfy.com) platforms and two digital marketing agencies, and today I'm building [Callsy](https://callsy.ai). Not everything worked, but every attempt left a lesson. Here are the ones that matter most.",
    },
    {
      type: "h2",
      id: "money-or-time",
      text: "1. You have either money or time",
    },
    {
      type: "p",
      text: "The first lesson is the simplest and most ignored. When you build a business, you either have money or you have time. With money, you can hire people to build the product and go to market. With time, you'll learn and do all of it yourself.",
    },
    {
      type: "p",
      text: "The worst position is having neither. Ideally you have both, but a business can be built with only time, or only money. What matters is being honest about which one you actually have, and planning around it.",
    },
    {
      type: "h2",
      id: "sales-before-product",
      text: "2. Sales come before product",
    },
    {
      type: "p",
      text: "The biggest mistake I see: the belief that you build something amazing and customers will come. That's product-led growth, and today it barely works unless you know your audience precisely. It's far safer to start from sales: sell first, then build.",
    },
    {
      type: "p",
      text: "When I built Podbase with the founders of Burga, a print-on-demand platform for phone accessories, we had a half-working MVP after three months. We went to market anyway. Our first client believed in us, we got about 1,000 orders in the first month, and everything broke: operations, manufacturing, invoicing. But that's when you learn the most important thing.",
    },
    {
      type: "quote",
      text: "In business, failure isn't the only problem. Success is a problem too. And it's usually success that stress-tests your system the hardest.",
    },
    {
      type: "p",
      text: "You can't ship something completely broken anymore, you'll lose trust. But if you iterate relentlessly, launch as fast as possible. With Podbase we reached €100K in monthly recurring revenue within 18 months. You don't have to sell an idea; sell a working MVP, and something bigger can grow over the next 12-18 months.",
    },
    {
      type: "h2",
      id: "dont-be-afraid-to-ask",
      text: "3. Don't be afraid to ask",
    },
    {
      type: "p",
      text: "In 2018 we were building iDenfy, a remote identity verification (KYC) platform. We had no marketing knowledge, no go-to-market strategy, and little sales experience. But we had time and ambition. So I wrote to global tech media: Forrester, Gartner, Markets and Markets.",
    },
    {
      type: "p",
      text: "Markets and Markets replied that they were preparing a report and included us among the top 10 creators of that technology worldwide, next to multi-billion-dollar companies. Overnight we got around 50 inbound leads. Another example, with Callsy: I didn't want to spend on lawyers, so I emailed Sorainen. A lawyer replied and explained everything for free. The lesson: if you don't have money, you can always ask. People help, they really do.",
    },
    {
      type: "h2",
      id: "pricing-and-margins",
      text: "4. Pricing: the 3x rule and margins",
    },
    {
      type: "p",
      text: "I talk to about 50 business owners a month, and most think surprisingly little about pricing. Simple rule: if your cost isn't at least 3x below your selling price, you have a serious problem. Sooner or later you'll hit a ceiling and won't be able to grow.",
    },
    {
      type: "p",
      text: "Aim for businesses with margins above 60%, ideally 70-80%. Without margin there's no room to scale, and without scale it's a craft, not a business. Plenty of businesses get stuck at €20-30K in turnover: they can't afford marketing or better talent, so growth stalls.",
    },
    {
      type: "h2",
      id: "returning-customers",
      text: "5. Returning customers matter more than new ones",
    },
    {
      type: "p",
      text: "The other half of pricing is your returning-customer rate. The healthiest, fastest-growing businesses run on subscriptions or frequent purchases: SaaS, B2B, high-repeat products. The reason is simple, your customer acquisition cost (CAC) has to be repaid by lifetime value (LTV).",
    },
    {
      type: "p",
      text: "We built a telemedicine startup, Smart Vision. The model worked and we had funding, but acquiring a customer cost €50-70, and they only bought once or twice over a couple of years. When LTV equals CAC, growing becomes brutally hard. When I ran a café chain in the UK, even in touristy London 60-70% of revenue came from loyal regulars, and only 30-40% from passers-by. That 60% covers your costs; the rest is profit. This logic works in almost every business.",
    },
    {
      type: "h2",
      id: "the-funnel",
      text: "6. Know your funnel",
    },
    {
      type: "p",
      text: "If you have a business and don't know your customer acquisition funnel, you're leaving money on the table. A good example: a niche perfume brand we worked with. Selling perfume online is hard, you can't smell it. So we built a strong offer:",
    },
    {
      type: "ol",
      items: [
        "**A small first transaction.** Sample vials for a few euros, so the customer can try the brand. This eliminates the risk.",
        "**Email marketing.** After the first purchase, an automated sequence kicks in.",
        "**Targeted ads and content.** The ads and content that bring the customer back.",
      ],
    },
    {
      type: "p",
      text: "The result: every euro into marketing returns nearly eight. Over two months we reach around €60K in turnover with no complicated tricks. If you're an unknown brand, start with a small offer that removes the buyer's risk. Once people try it and love it, you build on top.",
    },
    {
      type: "h2",
      id: "content-wins",
      text: "7. Content and marketing win",
    },
    {
      type: "p",
      text: "Working alongside the founders of Burga, I understood something. Their product is tech accessories, but their real strength is elsewhere: an exceptionally strong marketing team with their own production studio, and they manufacture their own product. That gives them a 20-30% margin edge that lets them grow aggressively. If you don't have a big ad budget, you have to create content, organic and paid, with a strategy behind it. Email marketing is still massively underused, and today it's mandatory.",
    },
    {
      type: "h2",
      id: "tools",
      text: "8. The tools to start with",
    },
    {
      type: "p",
      text: "You don't need an expensive stack. Almost all of these have a free or cheap plan. The key is not to polish endlessly but to test: build a landing page, put €500 into Facebook ads, and you'll learn more than a month of perfecting the idea in your head.",
    },
    {
      type: "table",
      caption: "Tools for a young business. Almost all have a free plan.",
      head: ["Tool", "For"],
      rows: [
        ["Shopify", "Online store and fast idea testing."],
        ["Meta (Facebook/Instagram)", "Advertising channel number one."],
        ["Google Ads + Workspace", "Direct sales and email (~€5/mo)."],
        ["Apollo", "A 300M+ contact database for cold outreach."],
        ["LinkedIn", "A growing, underused B2B channel."],
        ["Canva / Framer", "Design and websites without a designer."],
        ["CRM (free plan)", "Managing customer information."],
        ["Revolut", "Business banking."],
        ["Notion", "Tasks and processes."],
      ],
    },
    {
      type: "p",
      text: "And most importantly: don't obsess over the logo or colors at the start. Nobody cares yet. Black, white, one color, and go. Obsess over one thing instead, your offer: what it is, what your funnel around it looks like, and how much it costs to acquire the first customer.",
    },
    {
      type: "h2",
      id: "how-callsy-was-born",
      text: "How all of this became Callsy",
    },
    {
      type: "p",
      text: "With my brother I once built an e-commerce project that reached €300K in turnover within 12 months, organically and with Facebook ads, no outside investment. The breakthrough came when I started calling people who visited the site but didn't buy, the abandoned carts.",
    },
    {
      type: "p",
      text: "About 70% of shoppers abandon their cart. When you call them, you learn an incredible amount about why people buy or don't. I'd make 10-20 calls a day, adjusted the offer, the product, the pricing, and it exploded. That's exactly where Callsy was born: an AI agent that automatically calls abandoned carts, offers a personalized discount, and recovers lost revenue. A business is often born not from a genius idea, but from boring, repeated work.",
    },
    {
      type: "quote",
      text: "Nature's law is simple: what doesn't grow, dies. Business is the same. So never stop trying, repeating, and improving.",
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can you really build a business without much capital?",
          a: "Yes, but you need either money or time. Without money, you'll learn and do everything yourself and grow through sales, asking, and organic marketing. My own businesses that reached €100K and beyond started without big investment.",
        },
        {
          q: "How do I start a business?",
          a: "Start from the offer and sales, not a perfect product or logo. Build a clear offer, make a simple landing page, put a small budget into ads, and see if people buy. Test, don't perfect in your head.",
        },
        {
          q: "What margin should a business have?",
          a: "At least 3x between cost and selling price, or 60-80% margin. A lower margin means you can't afford marketing or talent, and growth stalls.",
        },
        {
          q: "Why do returning customers matter so much?",
          a: "Because acquiring a new customer costs money, and that has to be repaid over their lifetime value. Businesses with returning customers and subscriptions grow the healthiest: loyal customers cover your costs, and new ones become profit.",
        },
      ],
    },
    {
      type: "cta",
      text: "Have a business and feel stuck, or want to reach that €100K mark? I'll share what I've learned. Let's talk.",
      label: "Book a call",
      href: "/en/call",
    },
  ],
};
