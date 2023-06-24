import { ChangeEvent, FC, memo, useRef, useState } from "react";
import styles from "./tagInput.module.css";
import Add from "@/components/icons/add";
import Input from "../input";

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInput: FC<TagInputProps> = (props) => {
  const { onAddTag } = props;

  const [value, setValue] = useState("");

  const addTag = () => {
    if (!value) return;

    onAddTag(value);
    setValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTag();
    }
  };

  return (
    <div className={styles.root}>
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onKeyDown={handleKeyPress}
        value={value}
      />
      <button onClick={addTag} disabled={value.length === 0}>
        Add
        <Add fill={value.length === 0 ? "#E7E7E7" : ""} />
      </button>
    </div>
  );
};

export default memo(TagInput);
