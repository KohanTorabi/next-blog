import { Post } from "@/types/blog";
import styles from "./postCard.module.css";
import { memo, useMemo } from "react";
import Favorite from "../icons/favorite";
import Tag from "../tag";
import CustomImage from "../customImage";
import HighlightedText from "../highlightedText";
import Image from "next/image";
import { standardDate } from "@/utils/date";
import { useRouter } from "next/navigation";

interface PostCardProps {
  data: Post;
  highlightedWord?: string;
}

function PostCard({ data, highlightedWord }: PostCardProps) {
  const { id, image, likes, publishDate, tags, text, title, user } = data || {};

  const router = useRouter();

  const {
    avatar: userAvatar,
    firstName: userFirstName,
    lastName: userLastName,
  } = user || {};

  const date = useMemo(() => standardDate(publishDate), [publishDate]);

  return (
    <div className={styles.root} onClick={() => router.push(`/${id}`)}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          fill
          loader={() => image}
        />
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.title} title={title}>
            {title}
          </p>
          <p className={styles.description}>
            <HighlightedText
              text={text}
              wordToBeHighlighted={highlightedWord}
            />
          </p>
          <div className={styles.tags}>
            {tags?.map((tag, i) => (
              <Tag key={i + tag} name={tag} />
            ))}
          </div>
        </div>
        <div className={styles.moreData}>
          <div className={styles.user}>
            <CustomImage
              alt={userLastName}
              src={userAvatar}
              fallbackSrc="/person.png"
            />
            <div className={styles.userData}>
              <p className={styles.userName}>
                {userFirstName} {userLastName}
              </p>
              <p className={styles.date}>{date}</p>
            </div>
          </div>
          <div className={styles.likes}>
            {likes || 0}
            <div className={styles.likeIcon}>
              <Favorite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PostCard);
