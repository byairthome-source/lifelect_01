import { getPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogListClient posts={posts} />;
}
