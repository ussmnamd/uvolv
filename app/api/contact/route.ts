import { createHash } from "node:crypto";
import { validateInquiry, createRateLimiter } from "@/lib/contact.mjs";
import { site } from "@/content/site";
export const runtime = "nodejs";
const allow = createRateLimiter();
const globalAllow = createRateLimiter({ max: 60, windowMs: 60_000, capacity: 1 });
export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const requestOrigin = `${requestUrl.protocol}//${request.headers.get("host") || requestUrl.host}`;
  const origin = request.headers.get("origin");
  if (origin && origin !== requestOrigin && origin !== new URL(site.url).origin) return Response.json({ error: "Send the inquiry from this website." }, { status: 403 });
  if (!(request.headers.get("content-type") || "").includes("application/json")) return Response.json({ error: "Provide a valid project brief." }, { status: 415 });
  let data;
  try { const raw = await request.text(); if (Buffer.byteLength(raw) > 16_384) return Response.json({ error: "The project brief is too large." }, { status: 413 }); data = JSON.parse(raw); }
  catch { return Response.json({ error: "We could not read the project brief." }, { status: 400 }); }
  const result = validateInquiry(data);
  if (result.error || !result.value) return Response.json({ error: result.error }, { status: 400 });
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return Response.json({ error: `Please email your project brief to ${site.email}, or contact us by WhatsApp.` }, { status: 503 });
  const key = createHash("sha256").update(result.value.email.toLowerCase()).digest("hex");
  if (!allow(key) || !globalAllow("all")) return Response.json({ error: "Please wait before sending another inquiry, or contact us directly." }, { status: 429, headers: { "Retry-After": "900" } });
  try {
    if (new URL(url).protocol !== "https:") throw new Error("HTTPS is required.");
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.CONTACT_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` } : {}) }, body: JSON.stringify({ ...result.value, receivedAt: new Date().toISOString(), source: "uvolv-website" }), signal: AbortSignal.timeout(10_000), redirect: "error" });
    if (!response.ok) throw new Error("Delivery failed.");
    return Response.json({ delivered: true });
  } catch { return Response.json({ error: `We could not deliver your inquiry. Please email ${site.email} or use WhatsApp.` }, { status: 502 }); }
}
