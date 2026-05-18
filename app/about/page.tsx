import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        intro="Uvolv is built for operators who need practical digital systems, not vague innovation theatre."
        title="A build partner for businesses ready to operate cleaner."
      />
      <Section
        eyebrow="Positioning"
        intro="The agency sits between web design, automation, and software because most business bottlenecks do not respect those categories."
        title="Design the front. Fix the back."
      >
        <div className="space-y-6 text-lg leading-8 text-[var(--text-muted)]">
          <p>
            Uvolv creates the public website, the conversion path, and the internal system behind it. That means the work can start at branding and landing pages, then continue into CRM flows, AI automation, dashboards, and custom software.
          </p>
          <p>
            The goal is simple: make the business easier to trust, easier to contact, and easier to run.
          </p>
        </div>
      </Section>
    </SiteShell>
  );
}
