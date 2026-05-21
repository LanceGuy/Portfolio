"use client";

import { useState } from "react";
import TimelineItem from "@/components/TimelineItem";
import type { EducationItem, ExperienceItem } from "@/lib/data";

type ExperienceEducationTabsProps = {
  experience: ExperienceItem[];
  education: EducationItem[];
};

type TabKey = "experience" | "education";

export default function ExperienceEducationTabs({
  experience,
  education,
}: ExperienceEducationTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  const isExperience = activeTab === "experience";

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-full border border-ink/10 bg-surface/90 p-1 shadow-soft">
        <button
          type="button"
          onClick={() => setActiveTab("experience")}
          aria-pressed={isExperience}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            isExperience
              ? "bg-accent text-white shadow-soft"
              : "text-muted hover:text-foreground"
          }`}
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("education")}
          aria-pressed={!isExperience}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            !isExperience
              ? "bg-accent text-white shadow-soft"
              : "text-muted hover:text-foreground"
          }`}
        >
          Education
        </button>
      </div>

      <div key={activeTab} className="grid gap-6 fade-in-up">
        {isExperience
          ? experience.map((item) => (
              <TimelineItem
                key={item.role}
                title={item.role}
                subtitle={item.company}
                date={item.date}
                imageSrc={item.imageSrc}
                imageLabel={item.imageLabel}
                highlights={item.highlights}
              />
            ))
          : education.map((item) => (
              <TimelineItem
                key={item.school}
                title={item.school}
                subtitle={item.degree}
                date={item.date}
                imageSrc={item.imageSrc}
                imageLabel={item.imageLabel}
                highlights={item.details}
              />
            ))}
      </div>
    </div>
  );
}