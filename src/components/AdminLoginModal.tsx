"use client";

import { useEffect, useState } from "react";

type AdminLoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AdminLoginModal({
  isOpen,
  onClose,
}: AdminLoginModalProps) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setPassword("");
    setMessage("");
    onClose();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Admin access is not configured for this portfolio yet.");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-login-title"
      onMouseDown={handleClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-ink/10 bg-surface p-6 text-foreground shadow-strong"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Private area
            </p>
            <h2
              id="admin-login-title"
              className="mt-2 text-2xl font-semibold text-foreground"
            >
              Admin access
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-lg leading-none text-muted transition hover:border-accent hover:text-accent"
            aria-label="Close admin login"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-foreground">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 rounded-2xl border border-ink/10 bg-white px-4 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              autoComplete="current-password"
              autoFocus
              required
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-accent-strong"
          >
            Continue
          </button>
        </form>

        {message ? (
          <p className="mt-4 rounded-2xl bg-ink/5 px-4 py-3 text-sm text-muted">
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
