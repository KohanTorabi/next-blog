import { fetchPostDetail } from "@/api/posts";
import PostDetail from "@/containers/postDetail";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;

  const post = await fetchPostDetail(id);

  return {
    title: post?.title || "Blog Post",
    description: post?.text?.substring(0, 120) || "Blog Post",
  };
}
export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchPostDetail(params?.id);

  return <PostDetail data={post} />;
}
