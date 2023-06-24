"use client";

import styles from "./addPost.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/errorMessage";
import { createPost } from "@/api/posts";
import AddPostForm from "@/components/addPostForm";
import { Post } from "@/types/blog";
import { DEFAULT_POST_IMAGE, DEFAULT_USER_ID } from "@/constants/api";

function AddPost() {
  const router = useRouter();

  const [tags, setTags] = useState<string[]>([]);

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const nowDate = new Date();

    const postData: Partial<Post> = {
      title: title?.trim(),
      text: description?.trim(),
      tags,
      image: DEFAULT_POST_IMAGE,
      publishDate: nowDate.toISOString(),
      userId: DEFAULT_USER_ID,
    };

    try {
      await createPost(postData);
      router.push("/");
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`root-container ${styles.root}`}>
      {error && <ErrorMessage error={error} setError={setError} />}
      <AddPostForm
        tags={tags}
        setTags={setTags}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddPost;
