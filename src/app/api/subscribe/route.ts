import { NextResponse } from "next/server";
import { loopsUpsert } from "@/lib/loops";

/** Newsletter signup → Loops. Set LOOPS_API_KEY in Vercel env. */
export async function POST(req: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const result = await loopsUpsert({
    email,
    source: body.source ?? "newsletter",
    userGroup: "newsletter",
  });

  if (!result.ok) {
    return NextResponse.json({ error: "subscribe_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, persisted: result.persisted });
}
