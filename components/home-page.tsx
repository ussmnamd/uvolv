import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MonitorCog } from "lucide-react";
import { Section } from "@/components/section";
import { pricingTiers } from "@/content/pricing";
import { services } from "@/content/services";
import { workItems } from "@/content/work";

export const HomePage = () => {
  return (
    <>
      <section className="container grid min-h-[86dvh] items-center gap-12 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div>
          <p className="mb-5 text-sm text-[var(--text-soft)]">
            <span className="mr-2 text-[var(--mint)]">●</span>
            AI automation, websites, funnels, and business systems
          </p>
          <h1 className="display text-6xl leading-[0.88] md:text-8xl lg:text-9xl">
            Build the system behind the sale.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            Uvolv helps SMEs, startups, and contractors turn scattered tools into polished websites, lead funnels, AI automations, and custom software that move work forward.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--mint)] px-7 py-4 text-sm font-bold text-black" href="/contact">
              Schedule on Zoom <ArrowUpRight size={16} />
            </Link>
            <Link className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white" href="/work">
              View proof
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle,rgba(131,197,190,0.16),transparent_62%)]" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0e0e0e] p-4 shadow-2xl">
            <Image
              alt="Uvolv automation dashboard mockup"
              className="h-auto w-full rounded-[22px]"
              height={920}
              priority
              src="/macbook-mockup-dashboard.png"
              width={1200}
            />
          </div>
        </div>
      </section>

      <Section
        eyebrow="What we build"
        intro="The offer is intentionally broad because the problem is usually connected: the website, funnel, CRM, software, and automation all affect the same revenue path."
        title="One team for the whole digital machine."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              className="group rounded-[24px] border border-[var(--line)] bg-white/[0.035] p-6 transition hover:border-[var(--mint)] hover:bg-white/[0.06]"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">{service.eyebrow}</p>
              <h3 className="display mt-5 text-4xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{service.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
                {service.startingFrom} <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof"
        intro="The first public case study set starts with shipped websites and an AI-assisted lead automation funnel. We will replace these with client-specific proof as assets are prepared."
        title="Live work, not theory."
      >
        <div className="space-y-4">
          {workItems.map((item) => (
            <article className="grid gap-5 border-t border-[var(--line)] py-6 md:grid-cols-[0.7fr_1fr]" key={item.title}>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--mint)]">{item.type}</p>
                <h3 className="display mt-3 text-4xl">{item.title}</h3>
              </div>
              <div>
                <p className="font-semibold text-white">{item.result}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Starting from"
        intro="Pricing stays public enough to qualify the right conversations, while each build still gets scoped around the actual business system."
        title="Packages with room to scale."
      >
        <div className="grid gap-4">
          {pricingTiers.map((tier) => (
            <article className="rounded-[24px] border border-[var(--line)] bg-white/[0.035] p-6" key={tier.name}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="display text-4xl">{tier.name}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{tier.description}</p>
                </div>
                <p className="text-lg font-bold text-[var(--mint)]">{tier.price}</p>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {tier.includes.map((item) => (
                  <p className="flex items-center gap-2 text-sm text-[var(--text-soft)]" key={item}>
                    <Check size={15} /> {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="container py-20">
        <div className="grid gap-8 border-y border-[var(--line)] py-12 md:grid-cols-3">
          {["Local SMEs", "Startups", "Contractors"].map((segment) => (
            <div key={segment}>
              <MonitorCog className="mb-6 text-[var(--mint)]" size={26} />
              <h3 className="display text-4xl">{segment}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                Built for operators who need clearer digital presence, cleaner lead flow, and less manual admin.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
