import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

  const statusCounts = await prisma.inquiry.groupBy({
    by: ["status"],
    _count: { id: true },
  });

  return NextResponse.json({
    totalProducts,
    publishedProducts,
    totalInquiries,
    newInquiries,
    recentInquiries,
    statusCounts: statusCounts.map((s) => ({ status: s.status, count: s._count.id })),
  });
}
