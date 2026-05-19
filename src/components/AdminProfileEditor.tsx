"use client";

import { FormEvent, useRef, useState } from "react";
import { profile } from "@/lib/data";

export default function AdminProfileEditor() {
  const [bio, setBio] = useState(profile.bio);
  const [intro, setIntro] = useState(profile.intro);
  const [role, setRole] = useState(profile.role);
  const [location, setLocation] = useState(profile.location);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "profile");

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Upload failed");
      }

      const data = await response.json();
      setProfileImage(data.path);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/admin/data", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section: "profile",
          data: {
            bio,
            intro,
            role,
            location,
            email,
            phone,
            profileImage: profileImage || null,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Profile Image Upload */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Profile Image
        </label>
        <div className="mt-2 space-y-3">
          {profileImage ? (
            <div className="relative h-48 w-48 rounded-lg border border-ink/10 overflow-hidden bg-canvas">
              <img
                src={profileImage}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setProfileImage(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="absolute top-2 right-2 rounded-lg bg-red-500/20 px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-500/30"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="rounded-lg border-2 border-dashed border-ink/10 p-6 text-center">
              <p className="text-sm text-muted">No image uploaded yet</p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="w-full text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-accent file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white file:cursor-pointer disabled:opacity-50"
          />
          {uploading && <p className="text-xs text-muted">Uploading...</p>}
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Professional Role
        </label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-2 text-sm text-foreground"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Bio
        </label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-2 text-sm text-foreground"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Intro / Tagline
        </label>
        <textarea
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          rows={3}
          className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-2 text-sm text-foreground"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-2 text-sm text-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-2 text-sm text-foreground"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-ink/10 bg-canvas px-4 py-2 text-sm text-foreground"
        />
      </div>

      {success && (
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
          <p className="text-sm text-green-600">Profile updated successfully!</p>
        </div>
      )}

      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
