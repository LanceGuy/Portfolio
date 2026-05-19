# Portfolio Website

**Last Updated:** 2026-05-19

Modern, responsive portfolio built for the Skills Showcase Challenge. It highlights projects, experience, skills, and contact details while showcasing optional enhancements like dark mode and live GitHub repo fetching.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Documentation Map](#documentation-map)
- [Deployment](#deployment)

## Overview

This project delivers a single-page portfolio experience with clear navigation, responsive layouts, and a visual system optimized for a professional presentation.

## Tech Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Key Features

- Home, Projects, and Contact sections that satisfy the challenge requirements
- Experience, Education, Skills, and GitHub sections for added depth
- Dark mode toggle with stored preference
- Responsive layout and animated section entrances
- Contact form with client-side success feedback

## Quick Start

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Copy the example file and update values as needed:

```bash
copy .env.example .env.local
```

Optional values:

- `GITHUB_USERNAME` (comma-separated usernames; defaults to `LanceGuy,Habberjay`)
- `GITHUB_COLLAB_REPOS` (optional comma-separated exact public repositories, for example `owner/repo`)
- `GITHUB_TOKEN` (optional; also enables public collaborator and organization-member repositories)

Without `GITHUB_TOKEN`, the GitHub section falls back to public repositories from the configured usernames plus any exact repositories in `GITHUB_COLLAB_REPOS`. With a token, the API can include public repositories where the token owner is an owner, collaborator, or organization member. Private repositories are filtered out.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production bundle
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint

## Documentation Map

- [ARCHITECTURE.md](ARCHITECTURE.md) - System design and data flow
- [FEATURES.md](FEATURES.md) - User-facing features mapped to implementation
- [SETUP.md](SETUP.md) - Development and deployment setup
- [API.md](API.md) - API endpoint specifications
- [MAINTENANCE.md](MAINTENANCE.md) - Operational guidance and troubleshooting

## Deployment

Deploy on Vercel or any Node.js hosting provider that supports Next.js. Set optional GitHub environment variables in the deployment configuration.
