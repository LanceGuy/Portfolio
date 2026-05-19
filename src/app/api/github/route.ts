import { NextResponse } from "next/server";

export const runtime = "edge";

const GITHUB_USERNAMES = ["LanceGuy", "Habberjay"];
const PREFERRED_DUPLICATE_OWNER = "habberjay";
const REVALIDATE_SECONDS = 1800;

type GithubRepo = {
  id: number;
  name: string;
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
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as GithubRepo[];
}

function getRepoKey(repo: GithubRepo): string {
  return repo.name.toLowerCase();
}

function dedupeRepos(repos: GithubRepo[]): GithubRepo[] {
  const deduped = new Map<string, GithubRepo>();

  for (const repo of repos) {
    const key = getRepoKey(repo);
    const existing = deduped.get(key);
    const ownerIsPreferred =
      repo.owner.login.toLowerCase() === PREFERRED_DUPLICATE_OWNER;
    const existingOwnerIsPreferred =
      existing?.owner.login.toLowerCase() === PREFERRED_DUPLICATE_OWNER;

    const repoIsNewer =
      !existing ||
      new Date(repo.updated_at).getTime() >
        new Date(existing.updated_at).getTime();

    if (
      !existing ||
      (ownerIsPreferred && !existingOwnerIsPreferred) ||
      (ownerIsPreferred === existingOwnerIsPreferred && repoIsNewer)
    ) {
      deduped.set(key, repo);
    }
  }

  return [...deduped.values()];
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  const repoResponses = await Promise.all(
    GITHUB_USERNAMES.map((username) =>
      fetchGithubRepos(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        token
      )
    )
  );
  const authenticatedRepos = token
    ? await fetchGithubRepos(
        "https://api.github.com/user/repos?affiliation=owner,collaborator,organization_member&sort=updated&per_page=100",
        token
      )
    : [];

  const repos = dedupeRepos([...repoResponses.flat(), ...authenticatedRepos])
    .sort(
      (first, second) =>
        new Date(second.updated_at).getTime() -
        new Date(first.updated_at).getTime()
    );

  return NextResponse.json(repos);
}
