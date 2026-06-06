import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { FiEdit, FiEye, FiEyeOff, FiPlus } from "react-icons/fi";

export default async function AdminBlogPage() {
  const posts = await prisma.post.findMany({ orderBy: { date: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-section-sm text-novu-near-black font-light">Blog ({posts.length})</h1>
        <Link href="/admin/blog/new" className="btn-primary inline-flex items-center gap-2">
          <FiPlus className="w-4 h-4" /> New Post
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-novu-warm-100 overflow-hidden">
        <table className="w-full text-body-sm">
          <thead>
            <tr className="border-b border-novu-warm-100 text-novu-near-black-55 text-label-sm uppercase tracking-[0.1em]">
              <th className="text-left px-6 py-4 font-normal">Title</th>
              <th className="text-left px-6 py-4 font-normal">Date</th>
              <th className="text-left px-6 py-4 font-normal">Status</th>
              <th className="text-right px-6 py-4 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b border-novu-warm-50 hover:bg-novu-warm-50/50 transition-colors">
                <td className="px-6 py-3 text-novu-near-black font-medium">{p.title}</td>
                <td className="px-6 py-3 text-novu-near-black-55">
                  {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </td>
                <td className="px-6 py-3">
                  {p.published ? (
                    <span className="inline-flex items-center gap-1 text-label-sm text-green-700 bg-green-50 px-2 py-0.5 rounded-full"><FiEye className="w-3 h-3" /> Published</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-label-sm text-novu-warm-500 bg-novu-warm-100 px-2 py-0.5 rounded-full"><FiEyeOff className="w-3 h-3" /> Hidden</span>
                  )}
                </td>
                <td className="px-6 py-3 text-right">
                  <Link href={`/admin/blog/${p.id}`} className="inline-flex items-center gap-1 text-label-sm text-novu-orange hover:underline">
                    <FiEdit className="w-3 h-3" /> Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
