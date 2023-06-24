import { useRouter } from "next/navigation";
import AddCircleFilled from "../icons/addCircleFilled";
import PrimaryButton from "../primaryButton";
import SearchPost from "../search";
import styles from "./blogHeader.module.css";

interface BlogHeaderProps {
  search: string;
  searchValue: (value: string) => void;
}

function BlogHeader({ searchValue, search }: BlogHeaderProps) {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <SearchPost search={search} onSubmit={searchValue} />
      <PrimaryButton
        icon={<AddCircleFilled />}
        onClick={() => router.push("/add-post")}
      >
        Add new post
      </PrimaryButton>
    </div>
  );
}

export default BlogHeader;
