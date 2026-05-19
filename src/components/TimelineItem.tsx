type TimelineItemProps = {
  title: string;
  subtitle: string;
  date: string;
  highlights: string[];
};

export default function TimelineItem({
  title,
  subtitle,
  date,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-surface/80 p-6 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
        <span className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-semibold text-foreground">
          {date}
        </span>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
