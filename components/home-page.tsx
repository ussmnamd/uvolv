import Link from "next/link";
import { services, packages, processSteps, faqs } from "@/content/site";
import { ActionLink, Arrow, Eyebrow } from "./ui";
import { HeroShowcase } from "./system-visual";
import { Reveal } from "./reveal";
import { Industries } from "./industries";
import { ClientWorkGrid } from "./client-work";

export function ServicesSection() {
  return <section className="section-wrap services-section" id="services"><div className="section-heading"><Eyebrow>What we do</Eyebrow><div className="heading-with-copy"><h2 className="display">ONE TEAM.<br />THE WHOLE SYSTEM.</h2><p>Your website, your tools, and your daily work are connected. We build with the whole picture in mind.</p></div></div><div className="service-grid">{services.map(service => <Link className="service-item" href={`/services/${service.slug}`} key={service.slug}><div className="service-top"><span>{service.number} /</span><Arrow diagonal /></div><h3 className="display">{service.title}</h3><h4>{service.short}</h4><p>{service.description}</p><span className="service-link">Explore {service.title.toLowerCase()} <span>↗</span></span></Link>)}</div></section>;
}
export function ProcessSection() {
  return <section id="process" className="section-wrap process-section"><div className="section-heading"><Eyebrow>From idea to everyday use</Eyebrow><div className="heading-with-copy"><h2 className="display">CLEAR AT EVERY STEP.<br />YOURS AT THE END.</h2><p>You know what we are building, how we will deliver it, and what happens after launch.</p></div></div><div className="process-grid">{processSteps.map((step, index) => <div className="process-step" key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p><span className="step-output">{step.output}</span></div>)}</div></section>;
}
export function PackagesSection() {
  return <section className="section-wrap packages-section" id="packages"><div className="section-heading"><Eyebrow>Automation engagements</Eyebrow><div className="heading-with-copy"><h2 className="display">A CLEAR SCOPE.<br />A SOLID START.</h2><p>Defined automation packages, with room for a custom scope. Websites, funnels, and software are scoped to your project.</p></div></div><div className="packages-grid">{packages.map((tier, index) => <article className={`package${index === 1 ? " featured" : ""}`} key={tier.name}><div className="package-heading"><span>0{index + 1} / {tier.name}</span><span>{index === 1 ? "CONNECTED WORKFLOWS" : ""}</span></div><h3 className="display">{tier.name}</h3><p>{tier.summary}</p><div className="package-price">{tier.price}<small>{tier.note}</small></div><ul>{tier.features.map(feature => <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>)}</ul><div className="package-delivery"><span>Delivery window</span><strong>{tier.delivery}</strong></div><details><summary>Scope boundaries</summary><p>{tier.exclusion}</p></details><Link href={`/contact?package=${tier.name.toLowerCase()}`} className="package-action">Discuss {tier.name}<Arrow diagonal /></Link></article>)}</div><p className="package-footnote">Third-party subscriptions and usage fees are separate. Final scope and delivery dates are agreed before work starts.</p></section>;
}
export function FAQSection() {
  return <section className="section-wrap faq-section"><div><Eyebrow>A few useful answers</Eyebrow><h2 className="display">BEFORE WE<br />GET STARTED.</h2></div><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>;
}
export function HomePage() {
  return <>
    <header className="hero section-wrap"><Reveal><Eyebrow>Digital presence. Connected operations.</Eyebrow><div className="hero-grid"><h1 className="display">BUILD THE SYSTEM<br />BEHIND <span className="hero-last">THE SALE<span className="mint-dot">.</span></span></h1><div className="hero-side"><span className="hero-side-number">WE THINK BEYOND THE WEBSITE.</span><p>Websites, AI automations, and custom software that work together. Built around your business. Ready for what comes next.</p><Link href="/about" className="text-link">A little about us <Arrow diagonal /></Link></div></div><div className="hero-actions"><ActionLink href="/contact">Discuss your project</ActionLink><Link href="/work" className="text-link">Explore our work <Arrow /></Link><span className="hero-assurance">Clear scope.<br />A considered build. A proper handover.</span></div></Reveal></header>
    <Reveal className="showcase-wrap"><HeroShowcase /></Reveal>
    <div className="capability-strip"><span>Good design gets attention.</span><span className="mint-spark" aria-hidden="true">✳</span><span>Good systems keep things moving.</span></div>
    <Reveal><ServicesSection /></Reveal>
    <section className="vision-section"><div className="vision-copy"><Eyebrow light>The way we see it</Eyebrow><h2 className="display">YOUR WEBSITE IS<br />JUST THE BEGINNING.</h2><p>A good website opens the door. The system behind it turns an inquiry into a clear next step.</p><p>We connect your digital presence to your operations, so the work moves forward with less repeated effort.</p><ActionLink href="/services">See the bigger picture</ActionLink></div><div className="vision-graphic"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center">u<span>.</span></div><span className="orbit-label label-one">YOUR WEBSITE</span><span className="orbit-label label-two">YOUR TOOLS</span><span className="orbit-label label-three">YOUR WORKFLOW</span><span className="vision-graphic-note">CONNECTED BY DESIGN</span></div></section>
    <section className="section-wrap work-section" id="work"><div className="section-heading"><Eyebrow>Selected website projects</Eyebrow><div className="heading-with-copy"><h2 className="display">DIFFERENT BUSINESSES.<br />A CONSIDERED BUILD.</h2><div><p>Digital experiences shaped around the business, the offer, and the next conversation.</p><Link href="/work" className="text-link">Explore work & systems <Arrow diagonal /></Link></div></div></div><ClientWorkGrid /></section>
    <Reveal><Industries /></Reveal>
    <Reveal><ProcessSection /></Reveal>
    <section className="partnership-section section-wrap"><div><Eyebrow>For agency partners</Eyebrow><h2 className="display">YOUR BRAND.<br />OUR SYSTEMS THINKING.</h2></div><div><p>Offer connected websites, automations, and business systems under your brand. We agree on the scope, responsibilities, and handover.</p><ActionLink href="/contact?interest=partnership">Talk about a partnership</ActionLink></div><span aria-hidden="true" className="partnership-symbol">↗</span></section>
    <Reveal><PackagesSection /></Reveal>
    <FAQSection />
  </>;
}
