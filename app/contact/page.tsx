import type { Metadata } from "next";
import { PageIntro, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { site, services, packages } from "@/content/site";
export const metadata: Metadata = { title: "Discuss your project", description: "Tell UVOLV about your website, automation, software, or lead system. Contact info@uvolv.com or WhatsApp +92 333 2153959.", alternates: { canonical: "/contact" } };
export const dynamic = "force-dynamic";
async function ContactPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const chosen = typeof params.service === "string" && services.some(service => service.slug === params.service) ? params.service : params.interest === "partnership" ? "partnership" : "";
  const selectedPackage = typeof params.package === "string" ? packages.find(tier => tier.name.toLowerCase() === params.package)?.name || "" : "";
  return <><PageIntro label="Start a conversation" title={"WHAT IS YOUR\nNEXT BIG STEP?"} description="Tell us what you want to build, improve, or connect. We will start with the problem and find a practical direction." /><div className="section-wrap contact-layout"><aside className="contact-aside"><Eyebrow>A useful first conversation</Eyebrow><h2 className="display">NO PERFECT BRIEF<br />REQUIRED.</h2><p>A rough idea is enough to start. A little context helps us understand the business behind the project.</p><ul><li><span>01</span>Tell us about the business and the challenge.</li><li><span>02</span>We identify what needs a closer look.</li><li><span>03</span>We agree on a sensible next step.</li></ul><div className="contact-direct"><a href={`mailto:${site.email}`}>{site.email} ↗</a><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp +92 333 2153959 ↗</a>{site.booking && <a href={site.booking} target="_blank" rel="noopener noreferrer">Book a discovery call ↗</a>}</div></aside><ContactForm deliveryEnabled={Boolean(process.env.CONTACT_WEBHOOK_URL)} email={site.email} initialService={chosen} initialPackage={selectedPackage} /></div></>;
}
export { ContactPage as default };
