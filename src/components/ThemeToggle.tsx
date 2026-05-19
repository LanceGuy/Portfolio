"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-ink/10 bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition hover:-translate-y-0.5 hover:shadow-soft"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
