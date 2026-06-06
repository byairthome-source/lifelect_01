"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiPlus, FiTrash2, FiUpload } from "react-icons/fi";
import toast from "react-hot-toast";

interface SpecItem { key: string; value: string; unit: string; }
interface FeatureItem { icon: string; title: string; description: string; }

interface ProductFormData {
  id?: string;
  name: string; slug: string; series: string; subtitle: string; summary: string;
  description: string; coverColor: string; image: string; published: boolean;
  specs: SpecItem[];
  features: FeatureItem[];
  images: string[];
}

type FormUpdateValue = string | boolean | SpecItem[] | FeatureItem[] | string[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImageObj = { url: string; sortOrder: number; [k: string]: any };

interface Props {
  initial?: {
    id?: string; name?: string; slug?: string; series?: string; subtitle?: string;
    summary?: string; description?: string; coverColor?: string; image?: string;
    published?: boolean;
    specs?: SpecItem[];
    features?: FeatureItem[];
    images?: ImageObj[];
  };
  isEdit?: boolean;
}

export default function ProductForm({ initial, isEdit }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<ProductFormData>({
    name: "", slug: "", series: "M Series", subtitle: "", summary: "",
    description: "", coverColor: "from-slate-600 to-slate-800", image: "", published: true,
    specs: [{ key: "", value: "", unit: "" }],
    features: [{ icon: "", title: "", description: "" }],
    images: [],
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (initial) {
      const imgs = initial.images?.length
        ? [...initial.images].sort((a, b) => a.sortOrder - b.sortOrder).map((i) => i.url)
        : initial.image ? [initial.image] : [];
      setForm({
        name: initial.name || "", slug: initial.slug || "", series: initial.series || "M Series",
        subtitle: initial.subtitle || "", summary: initial.summary || "", description: initial.description || "",
        coverColor: initial.coverColor || "from-slate-600 to-slate-800", image: initial.image || "",
        published: initial.published ?? true,
        specs: initial.specs?.length ? initial.specs : [{ key: "", value: "", unit: "" }],
        features: initial.features?.length ? initial.features : [{ icon: "", title: "", description: "" }],
        images: imgs,
      });
    }
  }, [initial]);

  const update = (field: string, value: FormUpdateValue) => setForm((f) => ({ ...f, [field]: value }));

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    let successCount = 0;
    const urls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const fd = new FormData();
      fd.append("file", files[i]);
      try {
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        if (res.ok) {
          const data = await res.json();
          urls.push(data.url);
          successCount++;
        } else {
          const err = await res.json().catch(() => ({ error: "Upload failed" }));
          toast.error(err.error || "Upload failed");
        }
      } catch {
        toast.error("Network error uploading image");
      }
    }

    if (urls.length > 0) {
      setForm((prev) => {
        const newImages = [...prev.images, ...urls];
        return { ...prev, images: newImages, image: prev.image || urls[0] };
      });
      toast.success(`${successCount} image${successCount > 1 ? "s" : ""} uploaded`);
    }

    setUploading(false);
    e.target.value = "";
  }

  function removeImage(index: number) {
    setForm((prev) => {
      const removed = prev.images[index];
      const newImages = prev.images.filter((_, i) => i !== index);
      return { ...prev, images: newImages, image: prev.image === removed ? (newImages[0] || "") : prev.image };
    });
  }

  function setAsPrimary(index: number) {
    setForm((prev) => ({ ...prev, image: prev.images[index] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const url = isEdit ? `/api/admin/products/${initial?.id}` : "/api/admin/products";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          image: form.images[0] || form.image,
          specs: form.specs.filter((s) => s.key),
          features: form.features.filter((f) => f.title),
        }),
      });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error || "Save failed"); }
      router.push("/admin/products");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  const inputClass = "w-full border border-novu-warm-200 rounded-xl px-4 py-2.5 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors bg-white";
  const labelClass = "block text-label-sm text-novu-near-black-55 mb-1.5 uppercase tracking-[0.1em]";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <div className="bg-red-50 text-red-700 text-body-sm px-4 py-3 rounded-xl">{error}</div>}

      {/* Basic Info */}
      <div className="bg-white rounded-2xl border border-novu-warm-100 p-6 space-y-4">
        <h2 className="text-body-lg text-novu-near-black mb-2">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelClass}>Name *</label><input required className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} /></div>
          <div><label className={labelClass}>Slug *</label><input required className={inputClass} value={form.slug} onChange={(e) => update("slug", e.target.value)} /></div>
          <div>
            <label className={labelClass}>Series</label>
            <select className={inputClass} value={form.series} onChange={(e) => update("series", e.target.value)}>
              <option>M Series</option><option>D Series</option><option>BO Series</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Published</label>
            <label className="flex items-center gap-2 mt-2 cursor-pointer">
              <input type="checkbox" checked={form.published} onChange={(e) => update("published", e.target.checked)} className="w-4 h-4 rounded accent-novu-orange" />
              <span className="text-body-sm text-novu-near-black-55">Visible on public site</span>
            </label>
          </div>
        </div>
        <div><label className={labelClass}>Subtitle</label><input required className={inputClass} value={form.subtitle} onChange={(e) => update("subtitle", e.target.value)} /></div>
        <div><label className={labelClass}>Summary (card preview)</label><textarea rows={2} className={inputClass} value={form.summary} onChange={(e) => update("summary", e.target.value)} /></div>
        <div><label className={labelClass}>Description (full)</label><textarea rows={4} className={inputClass} value={form.description} onChange={(e) => update("description", e.target.value)} /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelClass}>Cover Color (Tailwind gradient)</label><input className={inputClass} value={form.coverColor} onChange={(e) => update("coverColor", e.target.value)} placeholder="from-slate-600 to-slate-800" /></div>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="bg-white rounded-2xl border border-novu-warm-100 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-body-lg text-novu-near-black">Product Images</h2>
          <label className="btn-outline cursor-pointer whitespace-nowrap text-label-sm">
            <FiUpload className="w-4 h-4" />
            {uploading ? "Uploading..." : "Upload Image"}
            <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" disabled={uploading} />
          </label>
        </div>
        {form.images.length === 0 ? (
          <p className="text-body-sm text-novu-near-black-40 py-8 text-center border-2 border-dashed border-novu-warm-200 rounded-xl">
            No images yet. Upload product photos to display in the gallery.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {form.images.map((url, i) => (
              <div key={i} className={`relative group rounded-xl overflow-hidden border-2 ${form.image === url ? "border-novu-orange" : "border-novu-warm-100"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={`Product image ${i + 1}`} className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  {form.image !== url && (
                    <button type="button" onClick={() => setAsPrimary(i)} className="bg-white text-novu-near-black text-xs px-2 py-1 rounded-md hover:bg-novu-orange hover:text-white transition-colors">
                      Set Primary
                    </button>
                  )}
                  <button type="button" onClick={() => removeImage(i)} className="bg-red-500 text-white p-1.5 rounded-md hover:bg-red-600 transition-colors">
                    <FiTrash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                {form.image === url && (
                  <span className="absolute top-2 left-2 bg-novu-orange text-white text-xs px-2 py-0.5 rounded-full">Primary</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Specs */}
      <div className="bg-white rounded-2xl border border-novu-warm-100 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-body-lg text-novu-near-black">Specifications</h2>
          <button type="button" onClick={() => update("specs", [...form.specs, { key: "", value: "", unit: "" }])} className="text-label-sm text-novu-orange hover:underline flex items-center gap-1"><FiPlus className="w-3 h-3" /> Add</button>
        </div>
        {form.specs.map((spec, i) => (
          <div key={i} className="flex gap-3 items-start">
            <input className={inputClass} placeholder="Key" value={spec.key} onChange={(e) => { const s = [...form.specs]; s[i] = { ...s[i], key: e.target.value }; update("specs", s); }} />
            <input className={inputClass} placeholder="Value" value={spec.value} onChange={(e) => { const s = [...form.specs]; s[i] = { ...s[i], value: e.target.value }; update("specs", s); }} />
            <input className={`${inputClass} w-24`} placeholder="Unit" value={spec.unit} onChange={(e) => { const s = [...form.specs]; s[i] = { ...s[i], unit: e.target.value }; update("specs", s); }} />
            <button type="button" onClick={() => update("specs", form.specs.filter((_, j) => j !== i))} className="p-2.5 text-novu-near-black-55 hover:text-red-500"><FiTrash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl border border-novu-warm-100 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-body-lg text-novu-near-black">Features</h2>
          <button type="button" onClick={() => update("features", [...form.features, { icon: "", title: "", description: "" }])} className="text-label-sm text-novu-orange hover:underline flex items-center gap-1"><FiPlus className="w-3 h-3" /> Add</button>
        </div>
        {form.features.map((feat, i) => (
          <div key={i} className="flex gap-3 items-start">
            <input className={`${inputClass} w-20`} placeholder="Icon" value={feat.icon} onChange={(e) => { const f = [...form.features]; f[i] = { ...f[i], icon: e.target.value }; update("features", f); }} />
            <input className={inputClass} placeholder="Title" value={feat.title} onChange={(e) => { const f = [...form.features]; f[i] = { ...f[i], title: e.target.value }; update("features", f); }} />
            <textarea className={inputClass} placeholder="Description" rows={2} value={feat.description} onChange={(e) => { const f = [...form.features]; f[i] = { ...f[i], description: e.target.value }; update("features", f); }} />
            <button type="button" onClick={() => update("features", form.features.filter((_, j) => j !== i))} className="p-2.5 text-novu-near-black-55 hover:text-red-500"><FiTrash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="btn-primary">{saving ? "Saving..." : isEdit ? "Update Product" : "Create Product"}</button>
        <button type="button" onClick={() => router.back()} className="btn-outline">Cancel</button>
      </div>
    </form>
  );
}
