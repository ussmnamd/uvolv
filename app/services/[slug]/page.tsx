import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { getServiceBySlug, services } from "@/content/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return services.map((service) => ({ slug: service.slug }));
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHeader eyebrow={service.eyebrow} intro={service.summary} title={service.title} />
      <section className="container grid gap-10 pb-24 md:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-[28px] border border-[var(--line)] bg-white/[0.035] p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">Starting from</p>
          <p className="display mt-4 text-5xl">{service.startingFrom}</p>
        </aside>
        <div>
          <p className="max-w-3xl text-xl leading-9 text-[var(--text-soft)]">{service.detail}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-white/[0.035] p-5" key={outcome}>
                <Check className="text-[var(--mint)]" size={18} />
                <span className="text-sm font-semibold">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
