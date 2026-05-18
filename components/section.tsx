import { clsx } from "clsx";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ id, eyebrow, title, intro, children, className }: SectionProps) => {
  return (
    <section id={id} className={clsx("container py-20 md:py-28", className)}>
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
          {intro ? <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-muted)]">{intro}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
