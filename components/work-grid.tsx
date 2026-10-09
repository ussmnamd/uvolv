import Link from "next/link";
import { projects } from "@/content/site";
import { SystemVisual } from "./system-visual";
import { Arrow } from "./ui";
export function WorkGrid({ limit }: { limit?: number }) {
  return <div className="work-grid">{projects.slice(0, limit).map((project, index) => <Link href={`/work/${project.slug}`} className={`work-card work-${project.color}`} key={project.slug}><div className="work-visual"><span className="work-type">{project.type} / 0{index + 1}</span><SystemVisual variant={project.visual} compact /><span className="work-open"><Arrow diagonal /></span></div><div className="work-caption"><div><span>{project.category}</span><h3>{project.name}</h3></div><Arrow diagonal /></div></Link>)}</div>;
}
