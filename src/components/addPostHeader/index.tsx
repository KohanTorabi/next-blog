import styles from "./addPostHeader.module.css";
import PrimaryButton from "@/components/primaryButton";
import Back from "@/components/icons/back";
import { useRouter } from "next/navigation";

function AddPostHeader({ loading }: { loading: boolean }) {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <button onClick={() => router.back()} type="button">
          <Back />
        </button>
        New post
      </div>
      <PrimaryButton type="submit" loading={loading}>
        Publish post
      </PrimaryButton>
    </div>
  );
}

export default AddPostHeader;
