import { FC, memo, useCallback } from "react";
import styles from "./input.module.css";
import { HTMLInputProps, InputProps } from "./types";

const Input: FC<InputProps> = (props) => {
  const { multiline, ...otherProps } = props;

  const renderContent = useCallback(() => {
    if (multiline)
      return (
        <textarea
          {...("rows" in otherProps ? otherProps : {})}
          className={styles.root}
        />
      );

    return (
      <input {...(otherProps as HTMLInputProps)} className={styles.root} />
    );
  }, [multiline, otherProps]);

  return renderContent();
};

export default memo(Input);
