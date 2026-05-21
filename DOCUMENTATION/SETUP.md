# Setup

**Last Updated:** 2026-05-21

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install Dependencies](#install-dependencies)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Build and Start](#build-and-start)
- [Linting](#linting)
- [Type Checking](#type-checking)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js LTS
- npm (bundled with Node.js)

## Install Dependencies

```bash
npm install
```

## Environment Variables

Copy the example file and update values as needed:

```bash
copy .env.example .env.local
```

Available variables are defined in [.env.example](.env.example).

`GITHUB_USERNAME` accepts a comma-separated list of usernames. `GITHUB_COLLAB_REPOS` accepts exact public repositories in `owner/repo` format for collaborator projects that should appear even without token discovery. `GITHUB_TOKEN` is optional. Without it, the GitHub section shows public repositories from the configured usernames plus any exact repositories in `GITHUB_COLLAB_REPOS`. With it, the API can also show public repositories where the token owner is an owner, collaborator, or organization member. Private repositories are filtered out.

## Run Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build and Start

```bash
npm run build
npm run start
```

## Linting

```bash
npm run lint
```

## Type Checking

```bash
npm exec tsc -- --noEmit
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks the npm shim:

```bash
npm.cmd exec tsc -- --noEmit
```

## Troubleshooting

- If the GitHub section shows no repositories, verify `GITHUB_USERNAME` in your local environment file and confirm the GitHub API is reachable.
- If collaborated repositories are missing, set `GITHUB_TOKEN` in your local environment file and restart the dev server, or add exact public repos to `GITHUB_COLLAB_REPOS`.
- If you hit GitHub rate limits, set `GITHUB_TOKEN` in your local environment file and restart the dev server.
- If `next build` cannot fetch Google Fonts, rerun the build with network access or build in an environment that can reach `fonts.googleapis.com`.
