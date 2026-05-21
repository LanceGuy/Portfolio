# API

**Last Updated:** 2026-05-21

## Table of Contents

- [Overview](#overview)
- [POST /api/contact](#post-apicontact)
- [GET /api/github](#get-apigithub)
- [Environment Variables](#environment-variables)

## Overview

The application exposes two internal API routes used by the UI. Both routes live under [src/app/api](src/app/api) and return JSON.

## POST /api/contact

**Purpose:** Accepts contact form submissions and returns a success response.

**Request:**

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","message":"Hello"}'
```

**Response:**

```json
{
  "ok": true
}
```

**Notes:** This endpoint does not persist data or send email. It exists to satisfy the portfolio challenge requirements.

## GET /api/github

**Purpose:** Returns public GitHub repositories for the configured usernames and exact public repositories listed in `GITHUB_COLLAB_REPOS`. When `GITHUB_TOKEN` is set, it also includes public repositories where the token owner is an owner, collaborator, or organization member.

**Request:**

```bash
curl http://localhost:3000/api/github
```

**Response:** A list of GitHub repository objects from the GitHub REST API.

**Notes:**
- The route uses the Edge runtime and is forced dynamic.
- GitHub fetches use `cache: "no-store"`, and the response sets `Cache-Control: no-store`.
- Without `GITHUB_TOKEN`, the route falls back to public repositories from the configured usernames and exact public repositories listed in `GITHUB_COLLAB_REPOS`.
- With `GITHUB_TOKEN`, the route requests authenticated repositories using `owner`, `collaborator`, and `organization_member` affiliations.
- Private repositories are filtered out before returning data to the client.
- Repositories with the same display name are deduplicated, preferring non-forks and then the most recently updated repository.
- If the GitHub API call fails, the route returns an empty array with status 200.
- See implementation details in [src/app/api/github/route.ts](src/app/api/github/route.ts).

## Environment Variables

- `GITHUB_USERNAME` (comma-separated usernames; defaults to `LanceGuy,Habberjay`)
- `GITHUB_COLLAB_REPOS` (optional comma-separated exact public repositories, for example `owner/repo`)
- `GITHUB_TOKEN` (optional; enables public collaborator and organization-member repositories and helps avoid rate limits)

Variables are defined in [.env.example](.env.example).
