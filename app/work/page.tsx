import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { workItems } from "@/content/work";

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Work"
        intro="The first public work page starts with shipped proof. As project assets are gathered, this becomes a full case study library."
        title="Live websites and an AI sales funnel."
      />
      <section className="container grid gap-5 pb-24">
        {workItems.map((item) => (
          <article className="rounded-[28px] border border-[var(--line)] bg-white/[0.035] p-8 md:p-10" key={item.title}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">{item.type}</p>
            <h2 className="display mt-5 text-5xl">{item.title}</h2>
            <p className="mt-5 max-w-3xl text-lg text-white">{item.result}</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
