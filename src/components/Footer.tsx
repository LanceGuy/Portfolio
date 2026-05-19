"use client";

import { profile } from "@/lib/data";
import { useState } from "react";
import AdminLoginModal from "./AdminLoginModal";

export default function Footer() {
  const [loginOpen, setLoginOpen] = useState(false);
  
  // Extract "Guy" from "Lance Daniel S. Guy"
  const nameParts = profile.name.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  const firstPart = nameParts.slice(0, -1).join(" ");

  return (
    <footer className="border-t border-ink/10 bg-surface/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">
            {firstPart}{" "}
            <button
              onClick={() => setLoginOpen(true)}
              className="cursor-pointer transition-colors hover:text-accent"
              aria-label="Admin access"
              title="Admin access"
            >
              {lastName}
            </button>
          </p>
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
      
      <AdminLoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </footer>
  );
}
