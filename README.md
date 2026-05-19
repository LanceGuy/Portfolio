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

- `GITHUB_USERNAME` (defaults to `LanceGuy`)
- `GITHUB_TOKEN` (optional to avoid GitHub rate limits)

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
