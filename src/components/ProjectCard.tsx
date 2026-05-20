import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="group fade-in-up flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-surface/80 shadow-soft transition hover:-translate-y-1 hover:shadow-strong"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative h-44 w-full">
        <Image
          src={project.imageSrc}
          alt={project.imageLabel}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/20 dark:bg-ink/40 group-hover:bg-transparent dark:group-hover:bg-transparent transition-colors duration-200" />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black dark:bg-black dark:text-white">
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
