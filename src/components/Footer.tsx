"use client";

import { profile } from "@/lib/data";
export default function Footer() {
  
  
  // Extract "Guy" from "Lance Daniel S. Guy"
  const nameParts = profile.name.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  const firstPart = nameParts.slice(0, -1).join(" ");

  return (
    <footer className="border-t border-ink/10 bg-surface/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{firstPart} {lastName}</p>
          <p>{profile.location}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-foreground hover:text-accent"
          >
            {profile.email}
          </a>
          <span>{profile.phone}</span>
        </div>
      </div>
      
      
    </footer>
  );
}
