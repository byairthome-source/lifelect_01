"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge";
import TagInput from "@/components/admin/TagInput";

const STATUS_OPTIONS = ["new", "contacted", "quoted", "negotiating", "closed-won", "closed-lost", "spam"];

interface InquiryDetail {
  id: string;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  tags: string;
  notes: string;
  productId: string;
  product?: { name: string; slug: string } | null;
  createdAt: string;
}

interface HistoryItem {
  id: string;
  inquiryId: string;
  subject: string;
  status: string;
  createdAt: string;
}

export default function InquiryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [inquiry, setInquiry] = useState<InquiryDetail | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [status, setStatus] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [followUpAt, setFollowUpAt] = useState("");

  useEffect(() => {
    fetch(`/api/admin/inquiries/${params.id}`)
      .then((r) => r.json())
      .then((d) => {
        setInquiry(d.inquiry);
        setHistory(d.customerHistory || []);
        setStatus(d.inquiry.status);
        setTags(d.inquiry.tags ? d.inquiry.tags.split(",").filter(Boolean) : []);
        setNotes(d.inquiry.notes || "");
        setFollowUpAt(d.inquiry.followUpAt ? d.inquiry.followUpAt.split("T")[0] : "");
      })
      .finally(() => setLoading(false));
  }, [params.id]);

  async function handleSave() {
    setSaving(true);
    await fetch(`/api/admin/inquiries/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, tags: tags.join(","), notes, followUpAt: followUpAt || null }),
    });
    setSaving(false);
    router.refresh();
  }

  if (loading) return <div className="text-novu-near-black-55 p-8">Loading...</div>;
  if (!inquiry) return <div className="text-novu-near-black-55 p-8">Inquiry not found.</div>;

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/inquiries" className="text-novu-near-black-55 hover:text-novu-near-black">← Back</Link>
        <h1 className="text-section-sm text-novu-near-black font-light">Inquiry Detail</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-novu-warm-100 p-6">
            <h2 className="text-body-lg text-novu-near-black mb-4">{inquiry.subject}</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-body-sm"><span className="text-novu-near-black-55">From</span><span className="text-novu-near-black">{inquiry.fullName} &lt;{inquiry.email}&gt;</span></div>
              {inquiry.company && <div className="flex justify-between text-body-sm"><span className="text-novu-near-black-55">Company</span><span className="text-novu-near-black">{inquiry.company}</span></div>}
              {inquiry.phone && <div className="flex justify-between text-body-sm"><span className="text-novu-near-black-55">Phone</span><span className="text-novu-near-black">{inquiry.phone}</span></div>}
              {inquiry.product && <div className="flex justify-between text-body-sm"><span className="text-novu-near-black-55">Product</span><Link href={`/products/${inquiry.product.slug}`} className="text-novu-orange hover:underline">{inquiry.product.name}</Link></div>}
              <div className="flex justify-between text-body-sm"><span className="text-novu-near-black-55">Date</span><span className="text-novu-near-black">{new Date(inquiry.createdAt).toLocaleString()}</span></div>
            </div>
            <hr className="my-4 border-novu-warm-100" />
            <p className="text-body text-novu-near-black-60 leading-relaxed whitespace-pre-wrap">{inquiry.message}</p>
          </div>

          {/* Customer history */}
          {history.length > 0 && (
            <div className="bg-white rounded-2xl border border-novu-warm-100 p-6">
              <h3 className="text-body-lg text-novu-near-black mb-3">Previous Inquiries ({history.length})</h3>
              <div className="space-y-3">
                {history.map((h: HistoryItem) => (
                  <div key={h.id} className="flex justify-between text-body-sm border-b border-novu-warm-50 pb-2">
                    <div><span className="text-novu-near-black">{h.subject}</span><span className="text-novu-near-black-55 ml-2">{new Date(h.createdAt).toLocaleDateString()}</span></div>
                    <StatusBadge status={h.status} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-novu-warm-100 p-6 space-y-4">
            <h3 className="text-body-lg text-novu-near-black">Manage</h3>
            <div>
              <label className="block text-label-sm text-novu-near-black-55 mb-1.5 uppercase tracking-[0.1em]">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full border border-novu-warm-200 rounded-xl px-3 py-2 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50">
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-label-sm text-novu-near-black-55 mb-1.5 uppercase tracking-[0.1em]">Tags</label>
              <TagInput tags={tags} onChange={setTags} />
            </div>
            <div>
              <label className="block text-label-sm text-novu-near-black-55 mb-1.5 uppercase tracking-[0.1em]">Follow-up Date</label>
              <input type="date" value={followUpAt} onChange={(e) => setFollowUpAt(e.target.value)} className="w-full border border-novu-warm-200 rounded-xl px-3 py-2 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50" />
            </div>
            <div>
              <label className="block text-label-sm text-novu-near-black-55 mb-1.5 uppercase tracking-[0.1em]">Internal Notes</label>
              <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border border-novu-warm-200 rounded-xl px-3 py-2 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50 resize-none" />
            </div>
            <button onClick={handleSave} disabled={saving} className="btn-primary w-full">
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
