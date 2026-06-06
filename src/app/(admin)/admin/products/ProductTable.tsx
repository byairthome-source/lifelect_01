"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit, FiEye, FiEyeOff, FiPlus, FiTrash2 } from "react-icons/fi";

interface ProductRow {
  id: string; name: string; slug: string; series: string; image: string | null; published: boolean;
}

export default function ProductTable({ products: initialProducts }: { products: ProductRow[] }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      router.refresh();
    } else {
      alert("Delete failed");
    }
    setDeleting(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-section-sm text-novu-near-black font-light">Products ({products.length})</h1>
        <Link href="/admin/products/new" className="btn-primary inline-flex items-center gap-2">
          <FiPlus className="w-4 h-4" /> New Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-novu-warm-100 overflow-hidden">
        <table className="w-full text-body-sm">
          <thead>
            <tr className="border-b border-novu-warm-100 text-novu-near-black-55 text-label-sm uppercase tracking-[0.1em]">
              <th className="text-left px-6 py-4 font-normal">Product</th>
              <th className="text-left px-6 py-4 font-normal">Series</th>
              <th className="text-left px-6 py-4 font-normal">Slug</th>
              <th className="text-left px-6 py-4 font-normal">Status</th>
              <th className="text-right px-6 py-4 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-novu-warm-50 hover:bg-novu-warm-50/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {p.image && <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover border" />}
                    <span className="text-novu-near-black font-medium">{p.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-novu-near-black-60">{p.series}</td>
                <td className="px-6 py-3 text-novu-near-black-55 font-mono text-label-sm">{p.slug}</td>
                <td className="px-6 py-3">
                  {p.published ? (
                    <span className="inline-flex items-center gap-1 text-label-sm text-green-700 bg-green-50 px-2 py-0.5 rounded-full"><FiEye className="w-3 h-3" /> Published</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-label-sm text-novu-warm-500 bg-novu-warm-100 px-2 py-0.5 rounded-full"><FiEyeOff className="w-3 h-3" /> Hidden</span>
                  )}
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/products/${p.id}`} className="inline-flex items-center gap-1 text-label-sm text-novu-orange hover:underline">
                      <FiEdit className="w-3 h-3" /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id, p.name)}
                      disabled={deleting === p.id}
                      className="inline-flex items-center gap-1 text-label-sm text-red-500 hover:text-red-700 disabled:opacity-50"
                    >
                      <FiTrash2 className="w-3 h-3" /> {deleting === p.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
