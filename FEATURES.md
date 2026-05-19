# Features

**Last Updated:** 2026-05-19

## Table of Contents

- [Overview](#overview)
- [Hero and Profile Snapshot](#hero-and-profile-snapshot)
- [Projects Showcase](#projects-showcase)
- [Experience and Education](#experience-and-education)
- [Skills and Focus Areas](#skills-and-focus-areas)
- [GitHub Repositories](#github-repositories)
- [Contact Workflow](#contact-workflow)
- [Theme Toggle](#theme-toggle)

## Overview

The portfolio delivers a single-page experience that highlights profile details, projects, career history, and contact options. Content is primarily static with a live GitHub section for freshness.

## Hero and Profile Snapshot

**User value:** Introduces the portfolio owner and provides quick context for recruiters and collaborators.

**Implementation:**
- Hero content is defined in [src/lib/data.ts](src/lib/data.ts) and rendered in [src/app/page.tsx](src/app/page.tsx).
- The profile snapshot card uses local data and reusable layout utilities in [src/components/Section.tsx](src/components/Section.tsx).

## Projects Showcase

**User value:** Presents key projects with tech stacks and descriptions.

**Implementation:**
- Project metadata comes from [src/lib/data.ts](src/lib/data.ts).
- Cards are rendered using [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx) within the Projects section in [src/app/page.tsx](src/app/page.tsx).

## Experience and Education

**User value:** Communicates professional background and academic history.

**Implementation:**
- Entries are defined in [src/lib/data.ts](src/lib/data.ts).
- The timeline layout is handled by [src/components/TimelineItem.tsx](src/components/TimelineItem.tsx) inside [src/app/page.tsx](src/app/page.tsx).

## Skills and Focus Areas

**User value:** Summarizes technical strengths and interests.

**Implementation:**
- Skill groups are stored in [src/lib/data.ts](src/lib/data.ts).
- UI rendering is handled by [src/components/SkillGroup.tsx](src/components/SkillGroup.tsx).

## GitHub Repositories

**User value:** Shows recent public work without manual updates.

**Implementation:**
- [src/components/GithubRepos.tsx](src/components/GithubRepos.tsx) fetches `/api/github` on the client and renders cards.
- The API route in [src/app/api/github/route.ts](src/app/api/github/route.ts) requests repository data from GitHub and caches it for 30 minutes.

## Contact Workflow

**User value:** Enables visitors to send a quick message with minimal friction.

**Implementation:**
- The form is implemented in [src/components/ContactForm.tsx](src/components/ContactForm.tsx).
- Submissions are sent to `/api/contact`, which returns a JSON success response. See [src/app/api/contact/route.ts](src/app/api/contact/route.ts).
- The success message is client-side and does not send email.

## Theme Toggle

**User value:** Allows visitors to switch between light and dark modes.

**Implementation:**
- Theme state is stored in local storage and applied to the document root by [src/components/ThemeProvider.tsx](src/components/ThemeProvider.tsx).
- The toggle UI is implemented in [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx).
