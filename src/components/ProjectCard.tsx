import type { Project } from "@/lib/data";

const placeholderGradients = [
  "from-amber-200 via-rose-200 to-violet-200",
  "from-sky-200 via-emerald-200 to-amber-200",
  "from-rose-200 via-orange-200 to-lime-200",
];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const gradient = placeholderGradients[index % placeholderGradients.length];

  return (
    <article
      className="group fade-in-up flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-surface/80 shadow-soft transition hover:-translate-y-1 hover:shadow-strong"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative h-44 w-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
        />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {project.imageLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            {project.description}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-accent transition hover:text-accent-strong"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted">Links available on request.</p>
        )}
      </div>
    </article>
  );
}
