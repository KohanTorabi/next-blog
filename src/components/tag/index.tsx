import styles from "./tag.module.css";

export default function Tag({ name }: { name: string }) {
  return <div className={styles.root}>{name}</div>;
}
