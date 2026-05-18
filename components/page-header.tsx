type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export const PageHeader = ({ eyebrow, title, intro }: PageHeaderProps) => {
  return (
    <header className="container py-20 md:py-28">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--mint)]">{eyebrow}</p>
      <h1 className="display max-w-5xl text-6xl leading-[0.9] md:text-8xl">{title}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{intro}</p>
    </header>
  );
};
