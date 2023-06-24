"use client";

import { Post } from "@/types/blog";
import styles from "./blogPosts.module.css";
import PostCard from "@/components/postCard";
import { useMemo, useState } from "react";
import BlogHeader from "@/components/blogHeader";
import { fetchPosts } from "@/api/posts";
import PrimaryButton from "@/components/primaryButton";
import { PAGINATION_LIMIT } from "@/constants/api";
import ErrorMessage from "@/components/errorMessage";

interface BlogPostsProps {
  posts: Post[];
}

function BlogPosts({ posts: initialPosts }: BlogPostsProps) {
  const [searchValue, setSearchValue] = useState("");

  const [error, setError] = useState<string | null>(null);

  const [posts, setPosts] = useState(initialPosts || []);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const handleChangeSearchValue = (search?: string) => {
    if (search?.length) {
      setSearchValue(search);
      handleSearchPost(1, search);
    } else {
      setPosts(initialPosts);
    }
  };

  const handleSearchPost = async (targetPage = 1, search = searchValue) => {
    setLoading(true);
    try {
      setPage(targetPage);
      const newPosts = await fetchPosts(targetPage, search?.trim());
      setPosts((prevPosts) =>
        targetPage === 1 ? newPosts : [...prevPosts, ...newPosts]
      );
    } catch (error: any) {
      setError(error?.message || "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const isLoadMorePostsVisible = useMemo(
    () => (posts || []).length !== 0 && posts?.length % PAGINATION_LIMIT === 0,
    [posts]
  );
  return (
    <div className={`root-container ${styles.root}`}>
      {error && <ErrorMessage error={error} setError={setError} />}
      <BlogHeader searchValue={handleChangeSearchValue} search={searchValue} />
      <div className={styles.posts}>
        {posts?.map((post) => (
          <PostCard key={post.id} data={post} highlightedWord={searchValue} />
        ))}
      </div>
      {isLoadMorePostsVisible && (
        <div className={styles.loadMore}>
          <PrimaryButton
            onClick={() => handleSearchPost(page + 1)}
            loading={loading}
          >
            Load more posts
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}

export default BlogPosts;
