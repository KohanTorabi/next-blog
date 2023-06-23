import AddCircleFilled from "../icons/addCircleFilled";
import PrimaryButton from "../primaryButton";
import SearchPost from "../search";
import styles from "./blogHeader.module.css";

interface BlogHeaderProps {
  search: string;
  searchValue: (value: string) => void;
}

function BlogHeader({ searchValue, search }: BlogHeaderProps) {
  return (
    <div className={styles.root}>
      <SearchPost search={search} onSubmit={searchValue} />
      <PrimaryButton icon={<AddCircleFilled />}>Add new post</PrimaryButton>
    </div>
  );
}

export default BlogHeader;
