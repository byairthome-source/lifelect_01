"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

interface Customer {
  id: string;
  email: string;
  fullName: string;
  company: string | null;
  phone: string | null;
  totalInquiries: number;
  lastInquiryAt: string;
  createdAt: string;
}

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    fetch(`/api/admin/customers?${params}`)
      .then((r) => r.json())
      .then(setCustomers)
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div>
      <h1 className="text-section-sm text-novu-near-black font-light mb-6">Customers ({customers.length})</h1>

      <div className="flex items-center gap-2 mb-4">
        <FiSearch className="w-4 h-4 text-novu-near-black-55" />
        <input
          placeholder="Search by name, email, or company..."
          className="border border-novu-warm-200 rounded-xl px-4 py-2 text-body-sm text-novu-near-black focus:outline-none focus:border-novu-orange/50 min-w-[280px]"
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-2xl border border-novu-warm-100 overflow-hidden">
        <table className="w-full text-body-sm">
          <thead>
            <tr className="border-b border-novu-warm-100 text-novu-near-black-55 text-label-sm uppercase tracking-[0.1em]">
              <th className="text-left px-6 py-4 font-normal">Name</th>
              <th className="text-left px-6 py-4 font-normal">Company</th>
              <th className="text-left px-6 py-4 font-normal">Email</th>
              <th className="text-left px-6 py-4 font-normal">Phone</th>
              <th className="text-left px-6 py-4 font-normal">Inquiries</th>
              <th className="text-left px-6 py-4 font-normal">Last Contact</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={6} className="px-6 py-8 text-center text-novu-near-black-55">Loading...</td></tr>}
            {!loading && customers.map((c) => (
              <tr key={c.id} className="border-b border-novu-warm-50 hover:bg-novu-warm-50/50 transition-colors">
                <td className="px-6 py-3 text-novu-near-black font-medium">{c.fullName}</td>
                <td className="px-6 py-3 text-novu-near-black-60">{c.company || "—"}</td>
                <td className="px-6 py-3 text-novu-near-black-55">{c.email}</td>
                <td className="px-6 py-3 text-novu-near-black-55">{c.phone || "—"}</td>
                <td className="px-6 py-3 text-novu-near-black">{c.totalInquiries}</td>
                <td className="px-6 py-3 text-novu-near-black-55">{new Date(c.lastInquiryAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {!loading && customers.length === 0 && (
              <tr><td colSpan={6} className="px-6 py-8 text-center text-novu-near-black-55">No customers yet. They will appear automatically when inquiries are submitted.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
