# Maintenance

**Last Updated:** 2026-05-21

## Table of Contents

- [Routine Updates](#routine-updates)
- [Content Changes](#content-changes)
- [Dependency Management](#dependency-management)
- [Operational Checks](#operational-checks)
- [Troubleshooting](#troubleshooting)

## Routine Updates

- Review and update project, experience, and skills content quarterly in [src/lib/data.ts](src/lib/data.ts).
- Validate that links in the Projects and GitHub sections are still active.
- Re-run `npm run lint`, `npm exec tsc -- --noEmit`, and `npm run build` before deploying changes.

## Content Changes

- Profile details, highlights, and section copy live in [src/lib/data.ts](src/lib/data.ts).
- Section headings and layout copy live in [src/app/page.tsx](src/app/page.tsx).
- Global visual tokens and animation timing live in [src/app/globals.css](src/app/globals.css).

## Dependency Management

- Update dependencies in [package.json](package.json) and run `npm install` to refresh the lockfile.
- After major upgrades, verify local dev with `npm run dev` and production builds with `npm run build`.

## Operational Checks

- Confirm the GitHub API route returns data by visiting `/api/github` locally.
- Confirm collaborator repositories appear only when `GITHUB_TOKEN` is configured, and confirm private repositories are not returned.
- Confirm the contact route returns `{ "ok": true }` by posting to `/api/contact`.
- Confirm the contact form still shows the portal success dialog after a successful submission.

## Troubleshooting

- **GitHub repositories missing:** Validate `GITHUB_USERNAME` in your local environment file and confirm GitHub is reachable.
- **Collaborator repositories missing:** Set `GITHUB_TOKEN` in your local environment file or deployment settings, then restart the app. The route only returns public repositories.
- **Dark mode not persisting:** Clear browser storage and toggle the theme again to reset the `portfolio-theme` key.
- **Build fails while fetching fonts:** Ensure the build environment can access Google Fonts, because `next/font/google` downloads Fraunces and Space Grotesk during production builds.
