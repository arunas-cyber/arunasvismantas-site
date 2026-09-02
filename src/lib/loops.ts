/**
 * Loops.so contact capture. One helper for every email form on the site
 * (newsletter, webinar, lead magnets) so everything lands in one Loops list.
 *
 * Set LOOPS_API_KEY in Vercel env. If it is missing the call is a no-op that
 * still returns ok, so forms work end to end in preview without persisting.
 *
 * Uses the upsert endpoint: creating the same email twice is safe (no error).
 */
const LOOPS_UPSERT_URL = "https://app.loops.so/api/v1/contacts/update";

export async function loopsUpsert(input: {
  email: string;
  firstName?: string;
  /** Where the signup came from, e.g. "newsletter" or "webinar". */
  source?: string;
  /** Loops user group, for segmenting lists. */
  userGroup?: string;
}): Promise<{ ok: boolean; persisted: boolean; error?: string }> {
  const key = process.env.LOOPS_API_KEY;
  if (!key) {
    console.warn("LOOPS_API_KEY not set; contact not persisted.");
    return { ok: true, persisted: false };
  }

  try {
    const res = await fetch(LOOPS_UPSERT_URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        subscribed: true,
        source: input.source ?? "arunasvismantas.eu",
        ...(input.firstName ? { firstName: input.firstName } : {}),
        ...(input.userGroup ? { userGroup: input.userGroup } : {}),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Loops error", res.status, text);
      return { ok: false, persisted: false, error: "subscribe_failed" };
    }
    return { ok: true, persisted: true };
  } catch (err) {
    console.error("Loops request failed", err);
    return { ok: false, persisted: false, error: "subscribe_failed" };
  }
}
