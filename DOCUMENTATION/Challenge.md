# Web Development Intern Challenge

**Last Updated:** 2026-05-21

## Challenge Summary

Build and submit a fully functional, visually clean personal portfolio website that showcases web development skills from layout to basic interactivity and deployment readiness.

- **Estimated time:** About 3 days
- **Tech stack:** Developer choice
- **Submission:** Public GitHub repository and ZIP file on Google Drive
- **Project type:** Personal portfolio website with at least Home, Projects, and Contact sections/pages

## Implemented Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Internal Next.js API routes for contact and GitHub repository data

## Requirement Checklist

| Requirement | Status | Implementation |
| --- | --- | --- |
| Home section with name | Done | Hero renders `profile.name` from `src/lib/data.ts`. |
| Profile picture | Done | Hero and header render `profile.imageSrc` using `next/image`. |
| Short bio | Done | Hero renders `profile.bio` and `profile.intro`. |
| Projects section | Done | `projects` array contains 3 projects. |
| At least 2 projects | Done | Current projects: UPC DMS, EVACSIM, FLiNG. |
| Project title, description, tech used | Done | Rendered by `src/components/ProjectCard.tsx`. |
| Project image or link | Done | Each project has an image; each project also has a link when available. |
| Contact form with name, email, message | Done | Implemented in `src/components/ContactForm.tsx`. |
| Contact form success feedback | Done | Form posts to `/api/contact` and shows a success dialog. |
| Built with web stack of choice | Done | Built with Next.js, React, TypeScript, and Tailwind CSS. |
| Responsive mobile and desktop layout | Done | Uses responsive Tailwind grid/flex utilities across sections. |
| Clean organized layout | Done | Uses reusable components for sections, cards, skills, timeline items, and dialogs. |
| Smooth navigation | Done | Header anchors navigate between sections; global CSS enables smooth scrolling. |
| Dark mode toggle | Done | Theme toggle is implemented in `ThemeToggle`. |
| Dark mode saves preference | Done | `ThemeProvider` stores preference in `localStorage` under `portfolio-theme`. |
| Dynamic GitHub repos | Done | `GithubRepos` fetches `/api/github`, which calls the GitHub REST API. |
| Animations | Done | Fade-in section animation, hover transitions, and contact dialog animation are implemented. |
| Online deployment | Ready | App is ready for Vercel or another Next.js host; add live URL after deployment. |

## Submission Checklist

- Source code is included in this repository.
- `README.md` includes a description, technologies used, setup instructions, scripts, environment variables, and deployment notes.
- Optional screenshots are not currently included.
- ZIP submission can be created from this repository after excluding `node_modules`, `.next`, and local environment files.
- Google Drive ZIP link and public GitHub repository link should be added to the submission form.

## Verification

Latest local verification run:

- `npm.cmd run lint` - passed
- `npm.cmd exec tsc -- --noEmit` - passed
- `npm.cmd run build` - passed
- Local `/` smoke test - `200 OK`
- Local `/api/contact` smoke test - `200 {"ok":true}`
- Local `/api/github` smoke test - `200 OK`

## Notes

- The contact endpoint intentionally does not send email or persist data because the challenge only requires success feedback.
- The GitHub API route filters out private repositories before returning data.
- Production builds need network access for `next/font/google` to fetch Fraunces and Space Grotesk during build.
