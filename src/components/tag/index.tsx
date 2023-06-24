import Cross from "../icons/cross";
import styles from "./tag.module.css";

interface TagProps {
  name: string;
  onDelete?: () => void;
  isLarge?: boolean;
}

export default function Tag({ name, onDelete, isLarge }: TagProps) {
  return (
    <div className={`${styles.root} ${isLarge ? styles.large : ""}`}>
      {onDelete && (
        <button onClick={onDelete} className={styles.deleteButton}>
          <Cross />
        </button>
      )}
      {name}
    </div>
  );
}
