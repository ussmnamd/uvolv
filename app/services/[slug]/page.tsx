import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/site";
import { ActionLink, Eyebrow, PageIntro } from "@/components/ui";
import { SystemVisual } from "@/components/system-visual";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const service = services.find(item => item.slug === slug);
  return { title: service?.title || "Service not found", description: service?.description, alternates: { canonical: `/services/${slug}` } };
}
async function ServicePage({ params }: Props) {
  const { slug } = await params; const service = services.find(item => item.slug === slug); if (!service) notFound();
  const variant = service.slug === "websites" ? "website" : service.slug === "custom-software" ? "dashboard" : "leads";
  return <><PageIntro label={`${service.number} / ${service.label}`} title={service.headline} description={service.intro} /><div className="section-wrap inner-section"><div className={`service-detail-visual surface-${service.color}`}><SystemVisual variant={variant} /></div><div className="detail-grid"><div><Eyebrow>A defined purpose</Eyebrow><h2 className="display">BUILT FOR<br />THE WAY YOU WORK.</h2><p>{service.fits}</p><p className="boundary-note">{service.boundary}</p><ActionLink href={`/contact?service=${service.slug}`}>Discuss this service</ActionLink></div><div><Eyebrow>What we can build</Eyebrow><ul className="detail-list">{service.outcomes.map((outcome, index) => <li key={outcome}><span>0{index + 1}</span>{outcome}</li>)}</ul></div></div><div className="detail-grid"><div><Eyebrow>How it comes together</Eyebrow><h2 className="display">A CLEAR PLAN.<br />A WORKING SYSTEM.</h2><p>We agree on the scope, technical requirements, and delivery before the build starts.</p></div><ol className="detail-list">{service.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></div><div className="related-section"><Eyebrow>See the idea in practice</Eyebrow><h2 className="display">LESS THEORY. MORE CONTEXT.</h2><ActionLink href={`/work/${service.example}`} secondary>Explore a system example</ActionLink></div></div></>;
}
export { ServicePage as default };
