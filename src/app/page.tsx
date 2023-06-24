import { fetchPosts } from "@/api/posts";
import BlogPosts from "@/containers/blogPosts";

export default async function Page() {
  const posts = await fetchPosts();

  return <BlogPosts posts={posts} />;
}
