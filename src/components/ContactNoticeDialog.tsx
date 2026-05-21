"use client";

import { createPortal } from "react-dom";

export const CONTACT_NOTICE_DURATION_MS = 4500;

export type ContactNotice = {
  title: string;
  message: string;
  variant: "success" | "error";
};

type ContactNoticeDialogProps = {
  notice: ContactNotice;
  onClose: () => void;
};

export default function ContactNoticeDialog({
  notice,
  onClose,
}: ContactNoticeDialogProps) {
  return createPortal(
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
        onClick={onClose}
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
            onClick={onClose}
            aria-label="Close dialog"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
