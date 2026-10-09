import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={`action-link${secondary ? " secondary" : ""}`}><span className="action-icon"><Arrow diagonal /></span><span className="action-label">{children}</span></Link>;
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " light" : ""}`}><span aria-hidden="true" />{children}</p>;
}
export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <header className="page-intro section-wrap"><Eyebrow>{label}</Eyebrow><h1 className="display page-title whitespace-pre-line">{title}</h1><p className="lead">{description}</p></header>;
}
