import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GithubRepos from "@/components/GithubRepos";
import Header from "@/components/Header";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";
import ExperienceEducationTabs from "@/components/ExperienceEducationTabs";
import {
  education,
  experience,
  highlights,
  profile,
  projects,
  skills,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <section
          id="home"
          className="fade-in-up grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Portfolio 2026
            </p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg text-muted sm:text-xl">{profile.role}</p>
            <p className="max-w-xl text-base leading-7 text-foreground">
              {profile.bio}
            </p>
            <p className="max-w-xl text-sm text-muted">{profile.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink/10 bg-surface/80 px-6 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-surface/80 p-6 shadow-soft">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-ink/10">
                <Image
                  src={profile.imageSrc}
                  alt={`${profile.name} profile photo`}
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">
                  Profile snapshot
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {profile.location}
                </p>
                <p className="text-sm text-muted">{profile.email}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-16 space-y-20">
          <Section
            id="projects"
            eyebrow="Selected work"
            title="Projects"
            subtitle="A snapshot of academic and game development projects, with a focus on product experience, data, and simulation."
            className="fade-in-up"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </Section>

          <Section
            id="experience"
            eyebrow="Background"
            title="Experience and Education"
            subtitle="Switch between work experience and education with a simple toggle."
            className="fade-in-up"
          >
            <ExperienceEducationTabs
              experience={experience}
              education={education}
            />
          </Section>

          <Section
            id="skills"
            eyebrow="Toolbox"
            title="Skills and Focus"
            subtitle="Modern full-stack tooling paired with product, automation, and data interests."
            className="fade-in-up"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {skills.map((group) => (
                <SkillGroup key={group.title} group={group} />
              ))}
            </div>
          </Section>

          <Section
            id="opensource"
            eyebrow="GitHub"
            title="Latest repositories"
            subtitle="Live data fetched from GitHub to keep the portfolio current."
            className="fade-in-up"
          >
            <GithubRepos />
          </Section>

          <Section
            id="contact"
            eyebrow="Let us build"
            title="Contact"
            subtitle="Send a quick note about collaborations, internships, or project ideas."
            className="fade-in-up"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <ContactForm />
              <div className="rounded-3xl border border-ink/10 bg-surface/80 p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground">
                  Reach me directly
                </h3>
                <div className="mt-4 space-y-3 text-sm text-muted">
                  <p>
                    <span className="font-semibold text-foreground">
                      Email:
                    </span>{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-accent"
                    >
                      {profile.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Phone:</span>{" "}
                    {profile.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Location:
                    </span>{" "}
                    {profile.location}
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    GitHub
                  </p>
                  {profile.github.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm font-semibold text-foreground hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
