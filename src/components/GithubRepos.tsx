"use client";

import { useEffect, useState } from "react";

const INITIAL_REPO_COUNT = 4;

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  owner: {
    login: string;
  };
};

type Status = "idle" | "loading" | "error" | "success";

export default function GithubRepos() {
  const [status, setStatus] = useState<Status>("idle");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadRepos = async () => {
      setStatus("loading");

      try {
        const response = await fetch("/api/github", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to load");
        }
        const data = (await response.json()) as Repo[];
        setRepos(data);
        setStatus("success");
      } catch {
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

  if (status === "success" && repos.length === 0) {
    return (
      <p className="text-sm text-muted">
        No public repositories were returned from GitHub.
      </p>
    );
  }

  const visibleRepos = showAll ? repos : repos.slice(0, INITIAL_REPO_COUNT);
  const hasMoreRepos = repos.length > INITIAL_REPO_COUNT;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {visibleRepos.map((repo) => (
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
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  {repo.owner.login}
                </p>
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
      {hasMoreRepos ? (
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="text-sm font-semibold text-accent transition hover:text-accent-strong"
        >
          {showAll ? (
            "Show less"
          ) : (
            <>
              Show more{" "}
              <span className="text-muted">
                ({repos.length - INITIAL_REPO_COUNT})
              </span>
            </>
          )}
        </button>
      ) : null}
    </div>
  );
}
