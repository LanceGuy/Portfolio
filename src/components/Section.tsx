type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className ?? ""}`.trim()}>
      <div className="mb-8">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
