import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BlogForm from "@/components/admin/BlogForm";

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (!post) notFound();

  const initial = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: post.date.toISOString().split("T")[0],
    tags: JSON.parse(post.tags) as string[],
    summary: post.summary,
    body: post.body,
    coverGradient: post.coverGradient,
    published: post.published,
  };

  return (
    <div>
      <h1 className="text-section-sm text-novu-near-black font-light mb-6">Edit Blog Post</h1>
      <BlogForm initial={initial} />
    </div>
  );
}
