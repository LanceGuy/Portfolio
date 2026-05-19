"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
};

type Status = "idle" | "loading" | "error" | "success";

export default function GithubRepos() {
  const [status, setStatus] = useState<Status>("idle");
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const loadRepos = async () => {
      setStatus("loading");

      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to load");
        }
        const data = (await response.json()) as Repo[];
        setRepos(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    loadRepos();
  }, []);

  if (status === "loading") {
    return <p className="text-sm text-muted">Loading repositories...</p>;
  }

  if (status === "error") {
    return (
      <p className="text-sm text-muted">
        GitHub repositories are unavailable right now.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.slice(0, 6).map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl border border-ink/10 bg-surface/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-strong"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {repo.name}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted">
                {repo.description ?? "No description provided."}
              </p>
            </div>
            <span className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground">
              {repo.language ?? "Code"}
            </span>
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted">
            Updated {new Date(repo.updated_at).toLocaleDateString()}
          </p>
        </a>
      ))}
    </div>
  );
}
