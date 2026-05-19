"use client";

import { FormEvent, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { Project } from "@/lib/data";

export default function AdminProjectManager() {
  const [projectsList, setProjectsList] = useState<Project[]>(projects);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<Project & { image?: string }>>({
    title: "",
    description: "",
    tech: [],
    imageLabel: "",
    links: [],
    image: undefined,
  });
  const [techInput, setTechInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddNew = () => {
    setFormData({
      title: "",
      description: "",
      tech: [],
      imageLabel: "",
      links: [],
      image: undefined,
    });
    setEditingId(null);
    setShowForm(true);
    setTechInput("");
  };

  const handleEdit = (index: number) => {
    setFormData(projectsList[index]);
    setTechInput(projectsList[index].tech.join(", "));
    setEditingId(index);
    setShowForm(true);
  };

  const handleDelete = async (index: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const newList = projectsList.filter((_, i) => i !== index);
      setProjectsList(newList);
      await saveProjects(newList);
    }
  };

  const handleAddTech = () => {
    if (techInput.trim()) {
      const newTech = [
        ...(formData.tech || []),
        techInput.trim(),
      ];
      setFormData({ ...formData, tech: newTech });
      setTechInput("");
    }
  };

  const handleRemoveTech = (index: number) => {
    const newTech = formData.tech?.filter((_, i) => i !== index) || [];
    setFormData({ ...formData, tech: newTech });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("file", file);
      formDataObj.append("type", "project");

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Upload failed");
      }

      const data = await response.json();
      setFormData({ ...formData, image: data.path });
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

    try {
      let newList = [...projectsList];

      if (editingId !== null) {
        // Update existing project
        newList[editingId] = formData as Project;
      } else {
        // Add new project
        newList.push(formData as Project);
      }

      setProjectsList(newList);
      await saveProjects(newList);

      setShowForm(false);
      setFormData({
        title: "",
        description: "",
        tech: [],
        imageLabel: "",
        links: [],
      });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project");
    } finally {
      setSaving(false);
    }
  };

  const saveProjects = async (projectsData: Project[]) => {
    const response = await fetch("/api/admin/data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        section: "projects",
        data: projectsData,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save projects");
    }
  };

  return (
    <div className="space-y-6">
      {/* Add Button */}
      {!showForm && (
        <button
          onClick={handleAddNew}
          className="rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong"
        >
          + Add New Project
        </button>
      )}

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-ink/10 bg-canvas p-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Project Title
            </label>
            <input
              type="text"
              required
              value={formData.title || ""}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="mt-2 w-full rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Description
            </label>
            <textarea
              required
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="mt-2 w-full rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Image Label
            </label>
            <input
              type="text"
              required
              value={formData.imageLabel || ""}
              onChange={(e) =>
                setFormData({ ...formData, imageLabel: e.target.value })
              }
              placeholder="e.g., Dashboard screenshot"
              className="mt-2 w-full rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
            />
          </div>

          {/* Project Image Upload */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Project Image
            </label>
            <div className="mt-2 space-y-3">
              {formData.image ? (
                <div className="relative h-40 w-full rounded-lg border border-ink/10 overflow-hidden bg-surface">
                  <img
                    src={formData.image}
                    alt="Project preview"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, image: undefined });
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 rounded-lg bg-red-500/20 px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-500/30"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="rounded-lg border-2 border-dashed border-ink/10 p-4 text-center">
                  <p className="text-xs text-muted">No image uploaded yet</p>
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
              Technologies
            </label>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTech();
                  }
                }}
                placeholder="Enter tech stack"
                className="flex-1 rounded-lg border border-ink/10 bg-surface px-4 py-2 text-sm text-foreground"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="rounded-lg bg-ink/10 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-ink/20"
              >
                Add
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs text-accent"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(i)}
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
              disabled={saving || uploading}
              className="flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong disabled:opacity-50"
            >
              {saving ? "Saving..." : editingId !== null ? "Update Project" : "Add Project"}
            </button>
          </div>
        </form>
      )}

      {/* Projects List */}
      <div className="space-y-3">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="flex items-start justify-between rounded-lg border border-ink/10 bg-canvas p-4"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full bg-ink/10 px-2 py-1 text-xs text-muted"
                  >
                    {tech}
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
        ))}
      </div>
    </div>
  );
}
