"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");

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
      alert("Thanks for reaching out! Your message has been received.");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-foreground" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-12 rounded-2xl border border-ink/10 bg-white px-4 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
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
          className="h-12 rounded-2xl border border-ink/10 bg-white px-4 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
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
          className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
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
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-emerald-600">
          Message sent successfully.
        </p>
      ) : null}
    </form>
  );
}
