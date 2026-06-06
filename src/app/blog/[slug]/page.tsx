import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
