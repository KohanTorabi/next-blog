import AddPost from "@/containers/addPost";

export const metadata = {
  title: "Add post",
  description: "You can add post here",
};

export default async function AddPostPage() {
  return <AddPost />;
}
