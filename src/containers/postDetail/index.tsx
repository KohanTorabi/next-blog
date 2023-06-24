"use client";

import { Post } from "@/types/blog";
import styles from "./postDetail.module.css";
import { memo, useMemo } from "react";
import Image from "next/image";
import { standardDate } from "@/utils/date";
import Tag from "@/components/tag";
import CustomImage from "@/components/customImage";
import Favorite from "@/components/icons/favorite";
import Head from "next/head";

interface PostDetailsProps {
  data: Post;
}

function PostDetails({ data }: PostDetailsProps) {
  const { image, likes, publishDate, tags, text, title, user } = data || {};
  const {
    avatar: userAvatar,
    firstName: userFirstName,
    lastName: userLastName,
  } = user || {};

  const date = useMemo(() => standardDate(publishDate), [publishDate]);

  return (
    <div className={`root-container ${styles.root}`}>
      <h1 className={styles.title} title={title}>
        {title}
      </h1>

      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          fill
          loader={() => image}
        />
      </div>
      <p className={styles.date}>Published At: {date}</p>
      <p className={styles.description}>{text}</p>
      {tags?.length > 0 && (
        <div className={styles.tags}>
          Tags:
          {tags?.map((tag, i) => (
            <Tag key={i + tag} name={tag} isLarge />
          ))}
        </div>
      )}
      <div className={styles.spacer} />
      <div className={styles.moreData}>
        <div className={styles.user}>
          Published by:
          <CustomImage
            alt={userLastName}
            src={userAvatar}
            fallbackSrc="/person.png"
          />
          <p className={styles.userName}>
            {userFirstName} {userLastName}
          </p>
        </div>
        <div className={styles.likes}>
          Likes: {likes || 0}
          <div className={styles.likeIcon}>
            <Favorite width="20" height="16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PostDetails);
