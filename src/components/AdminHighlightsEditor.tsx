"use client";

import { FormEvent, useState } from "react";
import { highlights } from "@/lib/data";

interface Highlight {
  label: string;
  value: string;
}

export default function AdminHighlightsEditor() {
  const [highlightsList, setHighlightsList] = useState<Highlight[]>(highlights);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Highlight>({
    label: "",
    value: "",
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddNew = () => {
    setFormData({ label: "", value: "" });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setFormData(highlightsList[index]);
    setEditingId(index);
    setShowForm(true);
  };

  const handleDelete = async (index: number) => {
    if (confirm("Are you sure you want to delete this highlight?")) {
      const newList = highlightsList.filter((_, i) => i !== index);
      setHighlightsList(newList);
      await saveHighlights(newList);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    try {
      let newList = [...highlightsList];

      if (editingId !== null) {
        // Update existing highlight
        newList[editingId] = formData;
      } else {
        // Add new highlight
        newList.push(formData);
      }

      setHighlightsList(newList);
      await saveHighlights(newList);

      setShowForm(false);
      setFormData({ label: "", value: "" });
      setEditingId(null);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving highlight:", error);
      alert("Failed to save highlight");
    } finally {
      setSaving(false);
    }
  };

  const saveHighlights = async (highlightsData: Highlight[]) => {
    const response = await fetch("/api/admin/data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        section: "highlights",
        data: highlightsData,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save highlights");
    }
  };

  return (
    <div className="space-y-6">
      {success && (
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
          <p className="text-sm text-green-600">Highlight saved successfully!</p>
        </div>
      )}

      {/* Add Button */}
      {!showForm && (
        <button
          onClick={handleAddNew}
          className="rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong"
        >
          + Add Highlight
        </button>
      )}

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-ink/10 bg-canvas p-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Label
            </label>
            <input
              type="text"
              required
              value={formData.label}
              onChange={(e) => setFormData({ ...formData, label: e.target.value })}
              placeholder="e.g., Based in"
              className="mt-2 w-full rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Value
            </label>
            <input
              type="text"
              required
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              placeholder="e.g., Cebu, Philippines"
              className="mt-2 w-full rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="flex-1 rounded-lg border border-ink/10 py-2 text-sm font-semibold text-foreground transition hover:bg-ink/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong disabled:opacity-50"
            >
              {saving ? "Saving..." : editingId !== null ? "Update Highlight" : "Add Highlight"}
            </button>
          </div>
        </form>
      )}

      {/* Highlights List */}
      <div className="space-y-2">
        {highlightsList.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-ink/10 bg-canvas p-4"
          >
            <div>
              <h4 className="font-semibold text-foreground">{highlight.label}</h4>
              <p className="mt-1 text-sm text-muted">{highlight.value}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="rounded-lg border border-ink/10 px-3 py-1 text-xs font-semibold text-foreground transition hover:bg-ink/5"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="rounded-lg border border-red-500/20 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-500/10"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
