import { NextResponse } from "next/server";

/**
 * Webinar registration → MailerLite.
 * Set MAILERLITE_API_KEY and MAILERLITE_GROUP_ID in Vercel env.
 * (ConvertKit is a drop-in swap: change the fetch URL + payload.)
 *
 * If the key isn't configured yet, it returns ok so the funnel flow still
 * works end to end in preview — it just doesn't persist the signup.
 */
export async function POST(req: Request) {
  let body: { name?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Neteisingas el. paštas" }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey) {
    // Not wired yet — let the funnel proceed but flag it in the response/logs.
    console.warn("MAILERLITE_API_KEY not set; registration not persisted.");
    return NextResponse.json({ ok: true, persisted: false });
  }

  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        ...(name ? { fields: { name } } : {}),
        ...(groupId ? { groups: [groupId] } : {}),
      }),
    });

    if (!res.ok && res.status !== 422) {
      const text = await res.text();
      console.error("MailerLite error", res.status, text);
      return NextResponse.json(
        { error: "Nepavyko užregistruoti. Bandykite dar kartą." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, persisted: true });
  } catch (err) {
    console.error("MailerLite request failed", err);
    return NextResponse.json(
      { error: "Nepavyko užregistruoti. Bandykite dar kartą." },
      { status: 502 },
    );
  }
}
