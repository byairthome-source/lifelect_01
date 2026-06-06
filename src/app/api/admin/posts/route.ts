import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getAdminPosts } from "@/lib/blog";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const posts = await getAdminPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const post = await prisma.post.create({
    data: {
      slug: body.slug,
      title: body.title,
      date: new Date(body.date),
      tags: JSON.stringify(body.tags || []),
      summary: body.summary,
      body: body.body,
      coverGradient: body.coverGradient,
      published: body.published ?? true,
    },
  });
  return NextResponse.json(post, { status: 201 });
}
