import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { CtaBand } from "@/components/cta-band";

type SiteShellProps = {
  children: React.ReactNode;
};

export const SiteShell = ({ children }: SiteShellProps) => {
  const tickerItems = [...siteConfig.ticker, ...siteConfig.ticker];

  return (
    <div>
      <div className="overflow-hidden border-b border-white/5 bg-[var(--bg-outer)]">
        <div className="flex items-center">
          <div className="shrink-0 px-6 py-3">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="text-xs font-bold uppercase">Ongoing</span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="ticker-track flex w-max py-3">
              {tickerItems.map((item, index) => (
                <span
                  className="whitespace-nowrap px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]"
                  key={`${item}-${index}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="site-canvas">
        <nav className="container flex items-center justify-between py-6">
          <Link className="display text-3xl" href="/">
            {siteConfig.brand}
          </Link>
          <div className="hidden items-center gap-8 text-sm text-[var(--text-muted)] md:flex">
            {siteConfig.nav.map((item) => (
              <Link className="transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-[var(--mint)] hover:text-[var(--mint)]"
            href="/contact"
          >
            Schedule <ArrowUpRight size={15} />
          </Link>
        </nav>

        {children}
        <CtaBand />

        <footer className="container flex flex-col gap-6 border-t border-[var(--line)] py-10 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>Uvolv builds websites, automations, funnels, and business systems.</p>
          <div className="flex gap-5">
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
          </div>
        </footer>
      </main>
    </div>
  );
};
