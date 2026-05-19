# Setup

**Last Updated:** 2026-05-19

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install Dependencies](#install-dependencies)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Build and Start](#build-and-start)
- [Linting](#linting)
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

## Troubleshooting

- If the GitHub section shows no repositories, verify `GITHUB_USERNAME` in your local environment file and confirm the GitHub API is reachable.
- If you hit GitHub rate limits, set `GITHUB_TOKEN` in your local environment file and restart the dev server.
