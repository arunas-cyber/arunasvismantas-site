import { NextResponse } from "next/server";
import { loopsUpsert } from "@/lib/loops";

/**
 * Webinar registration → Loops (same list as the newsletter, tagged by source).
 * Set LOOPS_API_KEY in Vercel env. If it is missing the flow still succeeds so
 * the funnel works in preview; it just does not persist the signup.
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
    return NextResponse.json(
      { error: "Neteisingas el. paštas" },
      { status: 400 },
    );
  }

  const result = await loopsUpsert({
    email,
    firstName: name,
    source: "webinar",
    userGroup: "webinar",
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Nepavyko užregistruoti. Bandykite dar kartą." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true, persisted: result.persisted });
}
