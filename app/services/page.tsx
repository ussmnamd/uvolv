import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        intro="Every service is built around one outcome: make the business easier to find, easier to buy from, and easier to operate."
        title="Websites, funnels, software, and automation under one roof."
      />
      <section className="container grid gap-5 pb-24 md:grid-cols-2">
        {services.map((service) => (
          <Link className="group rounded-[28px] border border-[var(--line)] bg-white/[0.035] p-8" href={`/services/${service.slug}`} key={service.slug}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">{service.eyebrow}</p>
            <h2 className="display mt-5 text-5xl">{service.title}</h2>
            <p className="mt-5 text-sm leading-6 text-[var(--text-muted)]">{service.summary}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
              Open service <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
            </span>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
