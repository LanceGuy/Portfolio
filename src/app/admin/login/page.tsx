"use client";

import { FormEvent, useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid password");
        return;
      }

      // Successful login - redirect to admin dashboard
      setPassword("");
      router.push("/admin");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-ink/10 bg-surface p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-foreground">
            Admin Access
          </h1>
          <p className="mt-2 text-sm text-muted">
            Enter your password to access the admin dashboard
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
              >
                Password
              </label>
              <input
                id="password"
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                disabled={loading}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-3 text-sm text-foreground placeholder-muted transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-accent-strong disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted">
            <a
              href="/"
              className="font-semibold text-foreground transition hover:text-accent"
            >
              Back to portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
