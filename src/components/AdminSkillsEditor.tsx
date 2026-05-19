"use client";

import { FormEvent, useState } from "react";
import {
  addTrimmedItem,
  removeListItem,
  saveAdminSection,
  upsertListItem,
} from "@/lib/adminClient";
import { skills, type SkillGroup } from "@/lib/data";

export default function AdminSkillsEditor() {
  const [skillsList, setSkillsList] = useState<SkillGroup[]>(skills);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<SkillGroup>({
    title: "",
    items: [],
  });
  const [itemInput, setItemInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddNew = () => {
    setFormData({ title: "", items: [] });
    setEditingId(null);
    setShowForm(true);
    setItemInput("");
  };

  const handleEdit = (index: number) => {
    setFormData(skillsList[index]);
    setEditingId(index);
    setShowForm(true);
    setItemInput("");
  };

  const handleDelete = async (index: number) => {
    if (confirm("Are you sure you want to delete this skill group?")) {
      const newList = removeListItem(skillsList, index);
      setSkillsList(newList);
      await saveAdminSection("skills", newList);
    }
  };

  const handleAddItem = () => {
    if (!itemInput.trim()) {
      return;
    }

    setFormData({
      ...formData,
      items: addTrimmedItem(formData.items, itemInput),
    });
    setItemInput("");
  };

  const handleRemoveItem = (index: number) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert("Please enter a group title");
      return;
    }

    if (formData.items.length === 0) {
      alert("Please add at least one skill");
      return;
    }

    setSaving(true);

    try {
      const newList = upsertListItem(skillsList, formData, editingId);
      setSkillsList(newList);
      await saveAdminSection("skills", newList);

      setShowForm(false);
      setFormData({ title: "", items: [] });
      setEditingId(null);
      setItemInput("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("Failed to save skills");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {success && (
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
          <p className="text-sm text-green-600">Skills saved successfully!</p>
        </div>
      )}

      {/* Add Button */}
      {!showForm && (
        <button
          onClick={handleAddNew}
          className="rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong"
        >
          + Add Skill Group
        </button>
      )}

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-ink/10 bg-canvas p-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Group Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Programming"
              className="mt-2 w-full rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Skills
            </label>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                value={itemInput}
                onChange={(e) => setItemInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddItem();
                  }
                }}
                placeholder="Enter skill name"
                className="flex-1 rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="rounded-lg bg-ink/10 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-ink/20"
              >
                Add
              </button>
            </div>

            {/* Skills Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.items.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs text-accent"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(i)}
                    className="font-bold hover:opacity-70"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
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
              {saving ? "Saving..." : editingId !== null ? "Update Group" : "Add Group"}
            </button>
          </div>
        </form>
      )}

      {/* Skills List */}
      <div className="space-y-3">
        {skillsList.map((group, index) => (
          <div
            key={index}
            className="rounded-lg border border-ink/10 bg-canvas p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{group.title}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-ink/10 px-2 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="ml-4 flex gap-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}
