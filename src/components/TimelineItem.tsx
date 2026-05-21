import Image from "next/image";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  date: string;
  imageSrc: string;
  imageLabel: string;
  highlights: string[];
};

export default function TimelineItem({
  title,
  subtitle,
  date,
  imageSrc,
  imageLabel,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-surface/80 p-6 shadow-soft">
      <div className="flex flex-wrap items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <Image
            src={imageSrc}
            alt={imageLabel}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
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
      </div>
    </div>
  );
}
