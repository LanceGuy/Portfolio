"use client";

import { useEffect, useState } from "react";
import ContactNoticeDialog, {
  CONTACT_NOTICE_DURATION_MS,
  type ContactNotice,
} from "@/components/ContactNoticeDialog";

const initialState = {
  name: "",
  email: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_SUCCESS_NOTICE: ContactNotice = {
  title: "Message sent",
  message:
    "Thanks for reaching out. Your message has been received and I'll get back to you soon.",
  variant: "success",
};

const CONTACT_ERROR_NOTICE: ContactNotice = {
  title: "Something went wrong",
  message:
    "Your message could not be sent right now. Please try again in a moment.",
  variant: "error",
};

const fieldClassName =
  "border border-ink/10 bg-surface px-4 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState<ContactNotice | null>(null);
  const [successfulSubmissions, setSuccessfulSubmissions] = useState(0);

  useEffect(() => {
    if (!notice) {
      return;
    }

    const dismissTimer = window.setTimeout(() => {
      setNotice(null);
    }, CONTACT_NOTICE_DURATION_MS);

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

      const nextSubmissionCount = successfulSubmissions + 1;
      setStatus("success");
      setFormData(initialState);
      setSuccessfulSubmissions(nextSubmissionCount);
      window.dispatchEvent(
        new CustomEvent("contact:submitted", {
          detail: {
            submissionCount: nextSubmissionCount,
            submittedAt: new Date().toISOString(),
          },
        })
      );
      setNotice(CONTACT_SUCCESS_NOTICE);
    } catch {
      setStatus("error");
      setNotice(CONTACT_ERROR_NOTICE);
    }
  };

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
            className={`h-12 rounded-2xl ${fieldClassName}`}
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
            className={`h-12 rounded-2xl ${fieldClassName}`}
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
            className={`rounded-2xl py-3 ${fieldClassName}`}
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

      {notice ? (
        <ContactNoticeDialog
          notice={notice}
          onClose={() => setNotice(null)}
        />
      ) : null}
    </>
  );
}
