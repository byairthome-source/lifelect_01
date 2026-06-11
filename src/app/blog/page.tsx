import type { Metadata } from "next";
import { getPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Window Cleaning Insights",
  description:
    "Industry insights, product guides, and best practices for robotic window cleaning. Stay informed about the latest in automated facade maintenance.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Lifelect Window Cleaning Insights",
    description:
      "Industry insights, product guides, and best practices for robotic window cleaning.",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogListClient posts={posts} />;
}
