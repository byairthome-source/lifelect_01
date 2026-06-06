import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const inquiry = await prisma.inquiry.findUnique({
    where: { id: params.id },
    include: { product: { select: { name: true, slug: true } } },
  });
  if (!inquiry) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Get customer history
  const customerHistory = await prisma.inquiry.findMany({
    where: { email: inquiry.email, id: { not: inquiry.id } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ inquiry, customerHistory });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { status, tags, notes, followUpAt } = body;

  const data: Record<string, unknown> = {};
  if (status !== undefined) data.status = status;
  if (tags !== undefined) data.tags = tags;
  if (notes !== undefined) data.notes = notes;
  if (followUpAt !== undefined) data.followUpAt = followUpAt ? new Date(followUpAt) : null;

  const inquiry = await prisma.inquiry.update({ where: { id: params.id }, data });
  return NextResponse.json(inquiry);
}
