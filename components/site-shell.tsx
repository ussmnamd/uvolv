import Link from "next/link";
import { site, services } from "@/content/site";
import { ActionLink, Arrow, Eyebrow } from "./ui";

export function Ticker() {
  const items = ["Websites with a purpose", "AI automation for everyday work", "Software built around your business", "Connected lead systems"];
  return <div className="ticker"><span className="ticker-label"><i />What we build</span><div className="ticker-window"><div className="ticker-track">{[0, 1].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{items.map(item => <span key={item}>{item}<i>✳</i></span>)}</div>)}</div></div><span className="ticker-end">Independent digital studio</span></div>;
}
export function ClosingCTA() {
  return <section className="closing-cta"><div className="closing-top"><Eyebrow light>Your next chapter</Eyebrow><span>GOOD SYSTEMS START WITH A CONVERSATION.</span></div><div className="closing-main"><h2 className="display">READY TO<br />EVOLVE<span>?</span></h2><div><p>Tell us what you are building.<br />Or what is getting in the way.</p><ActionLink href="/contact">Discuss your project</ActionLink></div></div><div className="closing-bottom"><span>WEBSITES / AUTOMATION / SOFTWARE / FUNNELS</span><span>Built with purpose. Connected by design.</span></div></section>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid"><div className="footer-intro"><Link href="/" className="footer-wordmark">uvolv<span>.</span></Link><p>Digital presence.<br />Connected operations.<br />Room to evolve.</p></div><div><h3>What we do</h3>{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div><div><h3>Explore</h3><Link href="/work">Work & systems</Link><Link href="/about">About UVOLV</Link><Link href="/#process">Our process</Link><Link href="/contact">Contact</Link></div><div className="footer-contact"><h3>Start a conversation</h3><Link href="/contact">A better system starts here.<Arrow diagonal /></Link>{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}{site.booking && <a href={site.booking} target="_blank" rel="noopener noreferrer">Book a discovery call ↗</a>}{site.whatsapp && <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} UVOLV</span><Link href="/privacy">Privacy</Link><a href="#top">Back to top ↑</a></div></footer>;
}
