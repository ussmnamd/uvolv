"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Arrow } from "./ui";
type FormValues = { name: string; email: string; business: string; service: string; budget: string; timeline: string; message: string; website: string };
export function ContactForm({ deliveryEnabled, email, initialService = "", initialPackage = "" }: { deliveryEnabled: boolean; email: string; initialService?: string; initialPackage?: string }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [draft, setDraft] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus(""); setError(false);
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries()) as FormValues;
    if (values.website) return;
    if (!values.name.trim() || !values.email.trim() || values.message.trim().length < 20) { setError(true); setStatus("Add your name, email, and at least 20 characters about your project."); return; }
    const brief = `Name: ${values.name}\nEmail: ${values.email}\nBusiness: ${values.business || "Not provided"}\nService: ${values.service || "Let’s discuss"}\nPackage: ${initialPackage || "Not selected"}\nBudget: ${values.budget || "Not provided"}\nTiming: ${values.timeline || "Not provided"}\n\n${values.message}`;
    if (!deliveryEnabled) {
      setDraft(brief); setStatus("Your email draft is ready. Open it in your email app, or copy the brief below."); return;
    }
    setBusy(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, package: initialPackage }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not deliver your inquiry. Please try email or WhatsApp.");
      setStatus("Your project brief has been delivered. Thank you for getting in touch."); formRef.current?.reset();
    } catch (reason) { setError(true); setStatus(reason instanceof Error ? reason.message : "We could not deliver your inquiry. Please try email or WhatsApp."); }
    finally { setBusy(false); }
  }
  return <form className="contact-form" onSubmit={submit} ref={formRef}>
    {initialPackage && <p className="form-unconfigured">Interested in {initialPackage}. We will confirm the scope together.</p>}
    <div className="form-grid"><div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="How should we address you?" /></div><div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@business.com" /></div></div>
    <div className="form-grid"><div className="form-field"><label htmlFor="business">Business name <span>Optional</span></label><input id="business" name="business" autoComplete="organization" maxLength={160} placeholder="Your business or studio" /></div><div className="form-field"><label htmlFor="service">What do you need?</label><select id="service" name="service" defaultValue={initialService}><option value="">Let’s work it out together</option><option value="websites">A website</option><option value="ai-automation">AI automation</option><option value="custom-software">Custom software</option><option value="funnels">A sales funnel</option><option value="partnership">An agency partnership</option></select></div></div>
    <div className="form-grid"><div className="form-field"><label htmlFor="budget">Budget range <span>Optional</span></label><select id="budget" name="budget"><option value="">Not decided yet</option><option>$2,000–$3,500</option><option>$3,500–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option></select></div><div className="form-field"><label htmlFor="timeline">Ideal timing <span>Optional</span></label><select id="timeline" name="timeline"><option value="">Let’s discuss</option> <option>Within a month</option><option>Within 1–3 months</option><option>Planning ahead</option></select></div></div>
    <div className="form-field"><label htmlFor="message">Tell us about the project</label><textarea id="message" name="message" required minLength={20} maxLength={5000} rows={6} placeholder="What are you building? What is getting in the way? What would a better system look like?" /><small>A little context helps us start a useful conversation.</small></div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input name="website" id="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="form-consent">We use these details to respond to your inquiry. Read our <Link href="/privacy">privacy notice</Link>.</p>
    {!deliveryEnabled && <p className="form-unconfigured">Prepare a brief for {email}. You send it from your email app. You can also contact us directly by WhatsApp.</p>}
    <button className="form-submit" disabled={busy} type="submit">{busy ? "Delivering your brief…" : deliveryEnabled ? "Send project brief" : "Prepare email brief"}<Arrow diagonal /></button>
    <p role="status" aria-live="polite" className={`form-status${error ? " error" : ""}`}>{status}</p>
    {draft && <div className="prepared-brief"><a className="form-submit" href={`mailto:${email}?subject=${encodeURIComponent("A project for UVOLV")}&body=${encodeURIComponent(draft)}`}>Open email draft<Arrow diagonal /></a><div className="form-field" style={{ marginTop: 22 }}><label htmlFor="brief-copy">Your prepared brief</label><textarea id="brief-copy" value={draft} readOnly rows={9} /></div><button type="button" className="text-link" onClick={async () => { try { await navigator.clipboard.writeText(draft); setStatus("Your brief has been copied."); } catch { setStatus("Select the prepared brief above and copy it."); } }}>Copy project brief <Arrow /></button></div>}
  </form>;
}
