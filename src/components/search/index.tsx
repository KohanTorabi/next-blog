import React, { useCallback, useState } from "react";
import styles from "./search.module.css";
import Search from "../icons/search";
import { debounce } from "lodash";

interface SearchPostProps {
  search: string;
  onSubmit: (v: string) => void;
}

const SearchPost: React.FC<SearchPostProps> = ({ search, onSubmit }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSubmit(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedHandleSearchInputChange = useCallback(
    debounce(handleInputChange, 500),
    []
  );

  return (
    <div className={`${styles.root} ${search ? styles["has-value"] : ""}`}>
      <div className={styles.icon}>
        <Search fill={search ? "black" : ""} />
      </div>
      <input
        type="text"
        onChange={optimizedHandleSearchInputChange}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchPost;
