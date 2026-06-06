import { getPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogListClient posts={posts} />;
}
