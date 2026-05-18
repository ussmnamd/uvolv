import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const CtaBand = () => {
  return (
    <section className="container py-20">
      <div className="grid gap-8 rounded-[28px] border border-[var(--line)] bg-[var(--surface-strong)] p-8 text-[var(--black)] md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em]">Ready for a real system?</p>
          <h2 className="display mt-4 text-5xl leading-[0.9] md:text-7xl">Book the Uvolv audit.</h2>
        </div>
        <div className="flex flex-col justify-end gap-4">
          <p className="text-sm leading-6 text-black/70">
            We will review your website, lead flow, repeated work, and software gaps, then map the fastest path to a build that pays attention to operations.
          </p>
          <Link
            href="/contact#audit"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--black)] px-6 py-3 text-sm font-bold text-white"
          >
            Request an audit <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
