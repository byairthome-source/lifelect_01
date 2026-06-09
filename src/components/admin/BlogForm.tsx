"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface BlogFormData {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  body: string;
  coverGradient: string;
  published: boolean;
}

const GRADIENT_OPTIONS = [
  { label: "Blue-Indigo", value: "from-blue-600 to-indigo-800" },
  { label: "Emerald-Teal", value: "from-emerald-600 to-teal-800" },
  { label: "Orange-Red", value: "from-orange-600 to-red-700" },
  { label: "Violet-Purple", value: "from-violet-600 to-purple-800" },
  { label: "Cyan-Blue", value: "from-cyan-600 to-blue-800" },
  { label: "Pink-Rose", value: "from-pink-600 to-rose-800" },
];

export default function BlogForm({ initial }: { initial?: BlogFormData & { id: string } }) {
  const router = useRouter();
  const isEdit = !!initial;
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<BlogFormData>({
    title: initial?.title || "",
    slug: initial?.slug || "",
    date: initial?.date || new Date().toISOString().split("T")[0],
    tags: initial?.tags || [],
    summary: initial?.summary || "",
    body: initial?.body || "",
    coverGradient: initial?.coverGradient || GRADIENT_OPTIONS[0].value,
    published: initial?.published ?? true,
  });
  const [tagInput, setTagInput] = useState("");

  const update = (field: keyof BlogFormData, value: string | boolean | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      update("tags", [...form.tags, t]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => update("tags", form.tags.filter((t) => t !== tag));

  const generateSlug = () => {
    const s = form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    update("slug", s);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.body) {
      toast.error("Title, slug, and body are required.");
      return;
    }
    setSaving(true);
    const url = isEdit ? `/api/admin/posts/${initial!.id}` : "/api/admin/posts";
    const method = isEdit ? "PUT" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (res.ok) {
      toast.success(isEdit ? "Post updated." : "Post created.");
      router.push("/admin/blog");
      router.refresh();
    } else {
      toast.error("Failed to save post.");
    }
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {/* Title */}
      <div>
        <label className="block text-label-sm text-novu-near-black-60 mb-1.5">Title</label>
        <input
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
          onBlur={() => !form.slug && generateSlug()}
          className="w-full border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body focus:border-novu-orange"
          placeholder="Post title"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-label-sm text-novu-near-black-60 mb-1.5">Slug</label>
        <div className="flex gap-2">
          <input
            value={form.slug}
            onChange={(e) => update("slug", e.target.value)}
            className="flex-1 border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body font-mono text-label-sm focus:border-novu-orange"
            placeholder="post-slug"
          />
          <button type="button" onClick={generateSlug} className="px-4 py-2.5 text-label-sm border border-novu-warm-200 rounded-xl hover:bg-novu-warm-50 transition-colors">
            Generate
          </button>
        </div>
      </div>

      {/* Date + Cover Gradient */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-label-sm text-novu-near-black-60 mb-1.5">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body focus:border-novu-orange"
          />
        </div>
        <div>
          <label className="block text-label-sm text-novu-near-black-60 mb-1.5">Cover Gradient</label>
          <select
            value={form.coverGradient}
            onChange={(e) => update("coverGradient", e.target.value)}
            className="w-full border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body focus:border-novu-orange"
          >
            {GRADIENT_OPTIONS.map((g) => (
              <option key={g.value} value={g.value}>{g.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-label-sm text-novu-near-black-60 mb-1.5">Tags</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {form.tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 text-label-sm bg-novu-orange/10 text-novu-orange px-2.5 py-0.5 rounded-full">
              {t}
              <button type="button" onClick={() => removeTag(t)} className="hover:text-red-500">&times;</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
            className="flex-1 border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body focus:border-novu-orange"
            placeholder="Add a tag..."
          />
          <button type="button" onClick={addTag} className="px-4 py-2.5 text-label-sm border border-novu-warm-200 rounded-xl hover:bg-novu-warm-50 transition-colors">
            Add
          </button>
        </div>
      </div>

      {/* Summary */}
      <div>
        <label className="block text-label-sm text-novu-near-black-60 mb-1.5">Summary</label>
        <textarea
          value={form.summary}
          onChange={(e) => update("summary", e.target.value)}
          rows={2}
          className="w-full border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body focus:border-novu-orange"
          placeholder="Brief summary for cards and SEO"
        />
      </div>

      {/* Body */}
      <div>
        <label className="block text-label-sm text-novu-near-black-60 mb-1.5">
          Body <span className="text-novu-near-black-15">(Markdown: ## heading, **bold**, - list, 1. numbered, --- hr)</span>
        </label>
        <textarea
          value={form.body}
          onChange={(e) => update("body", e.target.value)}
          rows={20}
          className="w-full border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body font-mono text-label-sm focus:border-novu-orange"
          placeholder="Write your post content..."
        />
      </div>

      {/* Published toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => update("published", !form.published)}
          className={`relative w-11 h-6 rounded-full transition-colors ${form.published ? "bg-green-500" : "bg-novu-warm-300"}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${form.published ? "translate-x-5" : ""}`} />
        </button>
        <span className="text-body-sm text-novu-near-black-60">{form.published ? "Published" : "Draft"}</span>
      </div>

      {/* Submit */}
      <div className="flex gap-3 pt-4 border-t border-novu-warm-100">
        <button type="submit" disabled={saving} className="btn-primary">
          {saving ? "Saving..." : isEdit ? "Update Post" : "Create Post"}
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline">Cancel</button>
      </div>
    </form>
  );
}
