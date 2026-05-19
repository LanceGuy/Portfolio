import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const DEFAULT_GITHUB_USERNAMES = ["LanceGuy", "Habberjay"];
const AUTHENTICATED_REPO_AFFILIATIONS =
  "owner,collaborator,organization_member";

type GithubRepo = {
  id: number;
  name: string;
  full_name?: string;
  fork?: boolean;
  private: boolean;
  updated_at: string;
  owner: {
    login: string;
  };
};

async function fetchGithubRepos(
  url: string,
  token?: string
): Promise<GithubRepo[]> {
  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as GithubRepo[];
}

async function fetchGithubRepo(
  url: string,
  token?: string
): Promise<GithubRepo | null> {
  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as GithubRepo;
}

function getRepoDisplayKey(repo: GithubRepo): string {
  return repo.name.toLowerCase();
}

function shouldReplaceRepo(current: GithubRepo, next: GithubRepo): boolean {
  if (current.fork !== next.fork) {
    return Boolean(current.fork && !next.fork);
  }

  return (
    new Date(next.updated_at).getTime() > new Date(current.updated_at).getTime()
  );
}

function dedupeRepos(repos: GithubRepo[]): GithubRepo[] {
  const deduped = new Map<string, GithubRepo>();

  for (const repo of repos) {
    const key = getRepoDisplayKey(repo);
    const current = deduped.get(key);

    if (!current || shouldReplaceRepo(current, repo)) {
      deduped.set(key, repo);
    }
  }

  return [...deduped.values()];
}

function getConfiguredCollaboratorRepos(): string[] {
  return (
    process.env.GITHUB_COLLAB_REPOS?.split(",")
      .map((repo) => repo.trim())
      .filter((repo) => /^[^/\s]+\/[^/\s]+$/.test(repo)) ?? []
  );
}

function isGithubRepo(repo: GithubRepo | null): repo is GithubRepo {
  return repo !== null;
}

function getGithubUsernames(): string[] {
  const configuredUsernames = process.env.GITHUB_USERNAME?.split(",")
    .map((username) => username.trim())
    .filter(Boolean);

  return configuredUsernames?.length
    ? configuredUsernames
    : DEFAULT_GITHUB_USERNAMES;
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const usernames = getGithubUsernames();
  const configuredCollaboratorRepos = getConfiguredCollaboratorRepos();

  const [repoResponses, configuredCollaboratorRepoResponses] =
    await Promise.all([
      Promise.all(
        usernames.map((username) =>
          fetchGithubRepos(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
            token
          )
        )
      ),
      Promise.all(
        configuredCollaboratorRepos.map((repo) =>
          fetchGithubRepo(`https://api.github.com/repos/${repo}`, token)
        )
      ),
    ]);

  const authenticatedRepos = token
    ? await fetchGithubRepos(
        `https://api.github.com/user/repos?affiliation=${AUTHENTICATED_REPO_AFFILIATIONS}&sort=updated&per_page=100`,
        token
      )
    : [];

  const repos = dedupeRepos([
    ...repoResponses.flat(),
    ...configuredCollaboratorRepoResponses.filter(isGithubRepo),
    ...authenticatedRepos,
  ])
    .filter((repo) => !repo.private)
    .sort(
      (first, second) =>
        new Date(second.updated_at).getTime() -
        new Date(first.updated_at).getTime()
    );

  return NextResponse.json(repos, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
