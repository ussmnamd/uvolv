import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { PageIntro, Eyebrow, ActionLink } from "@/components/ui";
import { SystemVisual } from "@/components/system-visual";
import Image from "next/image";
import { clientWork } from "@/components/client-work";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return [...projects, ...clientWork].map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = [...projects, ...clientWork].find(project => project.slug === slug); return { title: item?.name || "Project not found", description: item?.summary, alternates: { canonical: `/work/${slug}` } }; }
async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const client = clientWork.find(item => item.slug === slug);
  if (client) return <><PageIntro label={`Website delivery / ${client.category}`} title={client.name.toUpperCase()} description={client.summary} /><div className="section-wrap inner-section"><div className={`client-detail-brand client-${client.slug}`}><Image src={client.image} alt={`${client.name} brand mark`} width={280} height={180} style={{ objectFit: "contain" }} /></div><div className="detail-grid"><div><Eyebrow>The delivery</Eyebrow><h2 className="display">BUILT AROUND<br />THE BUSINESS.</h2><p>{client.summary}</p><p className="boundary-note">{client.note}</p><a className="text-link" href={client.url} target="_blank" rel="noopener noreferrer">Visit the website ↗</a></div><div><Eyebrow>Project scope</Eyebrow><ul className="detail-list">{client.scope.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div></div><ActionLink href="/contact">Discuss your website</ActionLink></div></>;
  const project = projects.find(item => item.slug === slug); if (!project) notFound();
  return <><PageIntro label={`${project.type} / ${project.category}`} title={project.title} description={project.summary} /><div className="section-wrap inner-section"><div className={`service-detail-visual surface-${project.color}`}><SystemVisual variant={project.visual} /></div><div className="detail-grid"><div><Eyebrow>The problem</Eyebrow><h2 className="display">A CLEARER WAY<br />TO MOVE FORWARD.</h2><p>{project.problem}</p><p className="boundary-note">{project.boundary}</p></div><div><Eyebrow>The workflow</Eyebrow><ol className="detail-list">{project.workflow.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></div></div><div className="related-section"><h2 className="display">HAVE A SIMILAR CHALLENGE?</h2><ActionLink href="/contact">Talk through your project</ActionLink></div></div></>;
}
export { ProjectPage as default };
