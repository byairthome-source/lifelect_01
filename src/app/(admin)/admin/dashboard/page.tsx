import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import StatusBadge from "@/components/admin/StatusBadge";
import { FiBox, FiMessageSquare, FiTrendingUp } from "react-icons/fi";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const [totalProducts, publishedProducts, totalInquiries, newInquiries, recentInquiries] =
    await Promise.all([
      prisma.product.count(),
      prisma.product.count({ where: { published: true } }),
      prisma.inquiry.count(),
      prisma.inquiry.count({ where: { status: "new" } }),
      prisma.inquiry.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { product: { select: { name: true } } },
      }),
    ]);

  const stats = [
    { label: "Total Products", value: totalProducts, sub: `${publishedProducts} published`, icon: FiBox, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Inquiries", value: totalInquiries, sub: `${newInquiries} new`, icon: FiMessageSquare, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "New This Week", value: newInquiries, sub: "Pending action", icon: FiTrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div>
      <h1 className="text-section-sm text-novu-near-black font-light mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-6 border border-novu-warm-100">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
            </div>
            <div className="text-section-sm text-novu-near-black font-light">{s.value}</div>
            <div className="text-label-sm text-novu-near-black-55 mt-1">{s.label}</div>
            <div className="text-label-sm text-novu-near-black-15 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-novu-warm-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-novu-warm-100">
          <h2 className="text-body-lg text-novu-near-black">Recent Inquiries</h2>
        </div>
        <table className="w-full text-body-sm">
          <thead>
            <tr className="border-b border-novu-warm-50 text-novu-near-black-55 text-label-sm uppercase tracking-[0.1em]">
              <th className="text-left px-6 py-3 font-normal">Customer</th>
              <th className="text-left px-6 py-3 font-normal">Subject</th>
              <th className="text-left px-6 py-3 font-normal">Product</th>
              <th className="text-left px-6 py-3 font-normal">Status</th>
              <th className="text-left px-6 py-3 font-normal">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentInquiries.map((inq) => (
              <tr key={inq.id} className="border-b border-novu-warm-50 hover:bg-novu-warm-50/50 transition-colors">
                <td className="px-6 py-3 text-novu-near-black">{inq.fullName}</td>
                <td className="px-6 py-3 text-novu-near-black-60">{inq.subject}</td>
                <td className="px-6 py-3 text-novu-near-black-55">{inq.product?.name || "—"}</td>
                <td className="px-6 py-3"><StatusBadge status={inq.status} /></td>
                <td className="px-6 py-3 text-novu-near-black-55">
                  {new Date(inq.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {recentInquiries.length === 0 && (
              <tr><td colSpan={5} className="px-6 py-8 text-center text-novu-near-black-55">No inquiries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
