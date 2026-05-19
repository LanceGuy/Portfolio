# API

**Last Updated:** 2026-05-19

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

**Purpose:** Returns public GitHub repositories for the configured username.

**Request:**

```bash
curl http://localhost:3000/api/github
```

**Response:** A list of GitHub repository objects from the GitHub REST API.

**Notes:**
- The route uses the Edge runtime and caches responses for 30 minutes.
- If the GitHub API call fails, the route returns an empty array with status 200.
- See implementation details in [src/app/api/github/route.ts](src/app/api/github/route.ts).

## Environment Variables

- `GITHUB_USERNAME` (defaults to `LanceGuy`)
- `GITHUB_TOKEN` (optional to avoid GitHub rate limits)

Variables are defined in [.env.example](.env.example).
