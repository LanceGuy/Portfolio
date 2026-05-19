import { profile } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/90 text-sm font-semibold text-white">
            {profile.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="text-xs text-muted">{profile.role}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.github[0].href}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition hover:-translate-y-0.5 hover:shadow-soft sm:block"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
