import { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import AddPostHeader from "../addPostHeader";
import Input from "../form/input";
import TagInput from "../form/tagInput";
import Tag from "../tag";
import styles from "./addPostForm.module.css";

interface AddPostFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
}

export default function AddPostForm({
  handleSubmit,
  loading,
  setTags,
  tags,
}: AddPostFormProps) {
  const handleKeyDown = (e: Event) => {
    if ("key" in e && e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const form = document.getElementById("post-form");
    form?.addEventListener("keydown", handleKeyDown);

    return () => {
      form?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit} id="post-form">
        <AddPostHeader loading={loading} />
        <div className={styles.inputContainer}>
          <label>Title</label>
          <Input name="title" type="text" required autoFocus />
        </div>
        <div className={styles.inputContainer}>
          <label>Description</label>
          <Input name="description" type="text" multiline required />
        </div>
        <div className={styles.inputContainer}>
          <label>Tags</label>
          <TagInput
            onAddTag={(tag) =>
              setTags((prevTags) =>
                prevTags.includes(tag) ? prevTags : [...prevTags, tag?.trim()]
              )
            }
          />
          <div className={styles.tags}>
            {tags.map((tag, i) => (
              <Tag
                key={tag + i}
                name={tag}
                onDelete={() =>
                  setTags((prevTags) => prevTags.filter((v) => v !== tag))
                }
                isLarge
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
