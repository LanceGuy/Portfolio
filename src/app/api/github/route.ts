import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const username = process.env.GITHUB_USERNAME ?? "LanceGuy";
  const token = process.env.GITHUB_TOKEN;

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=8`,
    {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      next: { revalidate: 1800 },
    }
  );

  if (!response.ok) {
    return NextResponse.json([], { status: 200 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
