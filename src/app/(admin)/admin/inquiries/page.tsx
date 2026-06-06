"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge";

interface InquiryItem {
  id: string;
  fullName: string;
  email: string;
  company: string;
  subject: string;
  status: string;
  createdAt: string;
  product?: { name: string; slug: string } | null;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "20" });
    if (status !== "all") params.set("status", status);
    if (search) params.set("search", search);
    fetch(`/api/admin/inquiries?${params}`)
      .then((r) => r.json())
      .then((d) => { setInquiries(d.inquiries); setTotal(d.total); })
      .finally(() => setLoading(false));
  }, [page, status, search]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-section-sm text-novu-near-black font-light">Inquiries ({total})</h1>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <input
          placeholder="Search name, email, company..."
          className="border border-novu-warm-200 rounded-xl px-4 py-2 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50 min-w-[240px]"
          value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />
        <select
          value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="border border-novu-warm-200 rounded-xl px-4 py-2 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="quoted">Quoted</option>
          <option value="negotiating">Negotiating</option>
          <option value="closed-won">Closed Won</option>
          <option value="closed-lost">Closed Lost</option>
          <option value="spam">Spam</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-novu-warm-100 overflow-hidden">
        <table className="w-full text-body-sm">
          <thead>
            <tr className="border-b border-novu-warm-100 text-novu-near-black-55 text-label-sm uppercase tracking-[0.1em]">
              <th className="text-left px-6 py-4 font-normal">Customer</th>
              <th className="text-left px-6 py-4 font-normal">Subject</th>
              <th className="text-left px-6 py-4 font-normal">Product</th>
              <th className="text-left px-6 py-4 font-normal">Status</th>
              <th className="text-left px-6 py-4 font-normal">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={5} className="px-6 py-8 text-center text-novu-near-black-55">Loading...</td></tr>}
            {!loading && inquiries.map((inq) => (
              <tr key={inq.id} className="border-b border-novu-warm-50 hover:bg-novu-warm-50/50 transition-colors">
                <td className="px-6 py-3">
                  <Link href={`/admin/inquiries/${inq.id}`} className="text-novu-near-black hover:text-novu-orange transition-colors">
                    {inq.fullName}
                  </Link>
                  <div className="text-label-sm text-novu-near-black-55">{inq.email}</div>
                </td>
                <td className="px-6 py-3 text-novu-near-black-60">{inq.subject}</td>
                <td className="px-6 py-3 text-novu-near-black-55">{inq.product?.name || "—"}</td>
                <td className="px-6 py-3"><StatusBadge status={inq.status} /></td>
                <td className="px-6 py-3 text-novu-near-black-55">{new Date(inq.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {!loading && inquiries.length === 0 && (
              <tr><td colSpan={5} className="px-6 py-8 text-center text-novu-near-black-55">No inquiries found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {total > 20 && (
        <div className="flex justify-center gap-2 mt-4">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="btn-outline text-label-sm">Previous</button>
          <span className="flex items-center px-4 text-body-sm text-novu-near-black-55">Page {page}</span>
          <button disabled={page * 20 >= total} onClick={() => setPage(page + 1)} className="btn-outline text-label-sm">Next</button>
        </div>
      )}
    </div>
  );
}
