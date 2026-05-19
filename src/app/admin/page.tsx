"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminProjectManager from "@/components/AdminProjectManager";
import AdminProfileEditor from "@/components/AdminProfileEditor";
import AdminSkillsEditor from "@/components/AdminSkillsEditor";
import AdminHighlightsEditor from "@/components/AdminHighlightsEditor";

type AdminTab = "projects" | "profile" | "skills" | "highlights";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("profile");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verify admin session
    const verifySession = async () => {
      try {
        const response = await fetch("/api/admin/data");
        if (response.status === 401) {
          router.push("/admin/login");
          return;
        }
        if (!response.ok) {
          throw new Error("Failed to verify session");
        }
        setLoading(false);
      } catch {
        router.push("/admin/login");
      }
    };

    verifySession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch {
      return;
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-ink/10 border-t-accent"></div>
          <p className="mt-4 text-sm text-muted">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      {/* Admin Header */}
      <header className="border-b border-ink/10 bg-surface/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Admin Dashboard
            </h1>
            <p className="text-xs text-muted">Manage your portfolio content</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-ink/10 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-ink/5"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex gap-2 border-b border-ink/10">
          {(["profile", "projects", "skills", "highlights"] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition ${
                  activeTab === tab
                    ? "border-b-2 border-accent text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Tab Content */}
        <div className="rounded-2xl border border-ink/10 bg-surface/50 p-8">
          {activeTab === "profile" && <AdminProfileEditor />}
          {activeTab === "projects" && <AdminProjectManager />}
          {activeTab === "skills" && <AdminSkillsEditor />}
          {activeTab === "highlights" && <AdminHighlightsEditor />}
        </div>
      </main>
    </div>
  );
}
