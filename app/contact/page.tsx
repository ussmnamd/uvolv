import { Mail, MessageCircle, Video } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        intro="Start with a Zoom call, an audit request, WhatsApp, email, or the form. The first conversation is about finding the highest-leverage build."
        title="Tell us what needs to work better."
      />
      <section className="container grid gap-8 pb-24 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          {[
            { icon: Video, label: "Schedule on Zoom", href: siteConfig.scheduleUrl },
            { icon: MessageCircle, label: "WhatsApp", href: siteConfig.whatsapp },
            { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` }
          ].map((item) => (
            <a className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white/[0.035] p-5" href={item.href} key={item.label}>
              <item.icon className="text-[var(--mint)]" size={20} />
              <span className="font-semibold">{item.label}</span>
            </a>
          ))}
        </div>
        <form className="rounded-[28px] border border-[var(--line)] bg-white/[0.035] p-6 md:p-8" id="audit">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input className="rounded-2xl border border-[var(--line)] bg-black/30 px-4 py-3 text-white outline-none focus:border-[var(--mint)]" name="name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input className="rounded-2xl border border-[var(--line)] bg-black/30 px-4 py-3 text-white outline-none focus:border-[var(--mint)]" name="email" type="email" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              What do you need built?
              <textarea className="min-h-36 rounded-2xl border border-[var(--line)] bg-black/30 px-4 py-3 text-white outline-none focus:border-[var(--mint)]" name="message" />
            </label>
            <button className="rounded-full bg-[var(--mint)] px-7 py-4 text-sm font-bold text-black" type="submit">
              Request an audit
            </button>
          </div>
        </form>
      </section>
    </SiteShell>
  );
}
