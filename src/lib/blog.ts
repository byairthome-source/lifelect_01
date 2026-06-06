import { prisma } from "@/lib/prisma";
import type { BlogPost } from "@/data/blog";

interface PrismaPost {
  id: string;
  slug: string;
  title: string;
  date: Date;
  tags: string;
  summary: string;
  body: string;
  coverGradient: string;
  published: boolean;
}

function mapToBlogPost(p: PrismaPost): BlogPost {
  return {
    slug: p.slug,
    title: p.title,
    date: p.date.toISOString().split("T")[0],
    tags: JSON.parse(p.tags) as string[],
    summary: p.summary,
    body: p.body,
    coverGradient: p.coverGradient,
  };
}

// ── Public ──

export async function getPosts(): Promise<BlogPost[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
  });
  return posts.map(mapToBlogPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const p = await prisma.post.findUnique({
    where: { slug, published: true },
  });
  if (!p) return null;
  return mapToBlogPost(p);
}

// ── Admin ──

export async function getAdminPosts(): Promise<BlogPost[]> {
  const posts = await prisma.post.findMany({
    orderBy: { date: "desc" },
  });
  return posts.map(mapToBlogPost);
}

export async function getAdminPostById(id: string) {
  return prisma.post.findUnique({ where: { id } });
}
