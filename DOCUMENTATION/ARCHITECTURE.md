# Architecture

**Last Updated:** 2026-05-19

## Table of Contents

- [System Overview](#system-overview)
- [Component Map](#component-map)
- [Data Flow](#data-flow)
- [API Surface](#api-surface)
- [Configuration](#configuration)
- [Styling and Theming](#styling-and-theming)
- [Operational Notes](#operational-notes)

## System Overview

This portfolio is a single-page Next.js App Router application that renders static content from local data and enriches it with live GitHub repository data. The UI is component-driven and styled with Tailwind CSS and custom CSS variables.

## Component Map

```
Browser
  -> Next.js App Router
    -> Root layout (fonts, theme provider)
    -> Page sections (hero, projects, experience, skills, GitHub, contact)
    -> UI components (cards, section wrappers, timeline items)
    -> API routes (contact, GitHub)
```

- Entry points: [src/app/layout.tsx](src/app/layout.tsx), [src/app/page.tsx](src/app/page.tsx)
- Component library: [src/components](src/components)
- Static content: [src/lib/data.ts](src/lib/data.ts)
- API routes: [src/app/api/contact/route.ts](src/app/api/contact/route.ts), [src/app/api/github/route.ts](src/app/api/github/route.ts)

## Data Flow

1. **Static content**
   - The page imports profile, projects, experience, education, and skills from [src/lib/data.ts](src/lib/data.ts).
2. **Client-side enrichment**
   - [src/components/GithubRepos.tsx](src/components/GithubRepos.tsx) requests live repository data from `/api/github`.
3. **Contact submission**
   - [src/components/ContactForm.tsx](src/components/ContactForm.tsx) sends a POST request to `/api/contact` and shows a client-side success alert.

## API Surface

- `/api/github` fetches GitHub repositories using server-side fetch with a 30-minute revalidation window. See [src/app/api/github/route.ts](src/app/api/github/route.ts).
- `/api/contact` returns a JSON success response without persisting data. See [src/app/api/contact/route.ts](src/app/api/contact/route.ts).

## Configuration

- Framework and build: [package.json](package.json), [next.config.ts](next.config.ts)
- TypeScript: [tsconfig.json](tsconfig.json)
- Styling: [postcss.config.mjs](postcss.config.mjs), [src/app/globals.css](src/app/globals.css)
- Linting: [eslint.config.mjs](eslint.config.mjs)
- Environment variables: [.env.example](.env.example)

## Styling and Theming

- Global design tokens are defined as CSS variables in [src/app/globals.css](src/app/globals.css).
- Theme toggling is handled by a client-side context provider and persisted in local storage. See [src/components/ThemeProvider.tsx](src/components/ThemeProvider.tsx) and [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx).
- Fonts are loaded with Next.js font optimization in [src/app/layout.tsx](src/app/layout.tsx).

## Operational Notes

- The GitHub API route uses the Edge runtime and caches responses for 30 minutes.
- The contact route does not send email or store submissions.
