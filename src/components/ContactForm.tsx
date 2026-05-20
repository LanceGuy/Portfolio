"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

type Notice = {
  title: string;
  message: string;
  variant: "success" | "error";
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState<Notice | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [successfulSubmissions, setSuccessfulSubmissions] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!notice) {
      return;
    }

    const dismissTimer = window.setTimeout(() => {
      setNotice(null);
    }, 4500);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNotice(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(dismissTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [notice]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setFormData(initialState);
      setSuccessfulSubmissions((count) => count + 1);
      window.dispatchEvent(
        new CustomEvent("contact:submitted", {
          detail: {
            submissionCount: successfulSubmissions + 1,
            submittedAt: new Date().toISOString(),
          },
        })
      );
      setNotice({
        title: "Message sent",
        message:
          "Thanks for reaching out. Your message has been received and I’ll get back to you soon.",
        variant: "success",
      });
    } catch {
      setStatus("error");
      setNotice({
        title: "Something went wrong",
        message:
          "Your message could not be sent right now. Please try again in a moment.",
        variant: "error",
      });
    }
  };

  const noticeDialog = isMounted && notice
    ? createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-notice-title"
          aria-describedby="contact-notice-message"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-ink/75 backdrop-blur-md"
            aria-label="Close message dialog"
            onClick={() => setNotice(null)}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-ink/10 bg-surface p-6 text-foreground shadow-strong popup-rise">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,102,58,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.06),transparent_50%)]" />
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent via-accent-strong to-accent opacity-90" />
            <div className="relative flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  notice.variant === "success"
                    ? "bg-accent text-white"
                    : "bg-red-500 text-white"
                }`}
                aria-hidden="true"
              >
                {notice.variant === "success" ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 6-12 12" />
                    <path d="m6 6 12 12" />
                  </svg>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p id="contact-notice-title" className="text-lg font-semibold">
                  {notice.title}
                </p>
                <p id="contact-notice-message" className="mt-2 text-sm text-muted">
                  {notice.message}
                </p>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-ink/10">
                  <div className="h-full w-full origin-left animate-[notice-progress_4.5s_linear] bg-accent" />
                </div>
              </div>

              <button
                type="button"
                className="rounded-full border border-ink/10 px-3 py-2 text-sm font-medium text-muted transition hover:border-accent hover:text-foreground"
                onClick={() => setNotice(null)}
                aria-label="Close dialog"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
        data-submit-count={successfulSubmissions}
      >
        <div className="grid gap-2">
          <label
            className="text-sm font-semibold text-foreground"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border border-ink/10 bg-surface px-4 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Your full name"
          />
        </div>
        <div className="grid gap-2">
          <label
            className="text-sm font-semibold text-foreground"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border border-ink/10 bg-surface px-4 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="you@example.com"
          />
        </div>
        <div className="grid gap-2">
          <label
            className="text-sm font-semibold text-foreground"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="rounded-2xl border border-ink/10 bg-surface px-4 py-3 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Tell me about your project or opportunity"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
      </form>

      {noticeDialog}
    </>
  );
}
