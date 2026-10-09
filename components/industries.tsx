"use client";
import Link from "next/link";
import { useState } from "react";
import { Arrow, Eyebrow } from "./ui";
const industries = [
  { name: "Service businesses", title: "A better journey from inquiry to delivery.", text: "Connect your website, client intake, scheduling, and follow-up. Give every new inquiry a clear next step.", tags: ["Client intake", "Lead routing", "Follow-up"], href: "/services/funnels" },
  { name: "Agencies & studios", title: "More delivery. Less repeated setup.", text: "Connect client onboarding, project setup, and reporting. Add white-label automation delivery when the scope calls for it.", tags: ["Onboarding", "Client reporting", "White-label delivery"], href: "/services/ai-automation" },
  { name: "Contractors", title: "Keep the next job moving.", text: "Present your services clearly. Collect structured inquiries and connect the information your team needs to respond.", tags: ["Service websites", "Quote requests", "Job tracking"], href: "/services/websites" },
  { name: "Startups & operators", title: "Build around the problem that matters.", text: "Turn a defined operational need into a focused portal, dashboard, or software product. Start with a clear scope.", tags: ["Internal tools", "Portals", "SaaS MVPs"], href: "/services/custom-software" },
];
export function Industries() {
  const [selected, setSelected] = useState(0);
  const item = industries[selected];
  return <section className="section-wrap industry-section"><div className="section-heading"><Eyebrow>Built around your business</Eyebrow><h2 className="display">DIFFERENT BUSINESSES.<br />CONNECTED THINKING.</h2></div><div className="industry-grid"><div className="industry-tabs" role="tablist" aria-label="Business types" aria-orientation="vertical">{industries.map((industry, index) => <button key={industry.name} id={`industry-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="industry-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => { if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) { event.preventDefault(); const next = event.key === "Home" ? 0 : event.key === "End" ? industries.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + industries.length) % industries.length; setSelected(next); document.getElementById(`industry-tab-${next}`)?.focus(); } }}><span>0{index + 1}</span>{industry.name}<Arrow diagonal /></button>)}</div><div id="industry-panel" className="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${selected}`} tabIndex={0}><span className="industry-symbol" aria-hidden="true">✳</span><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href={item.href}>Explore the service <Arrow diagonal /></Link></div></div></section>;
}
