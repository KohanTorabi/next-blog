import { FC, memo, useCallback } from "react";
import styles from "./input.module.css";
import { HTMLInputProps, InputProps, HTMLTextAreaProps } from "./types";

const Input: FC<InputProps> = (props) => {
  const { multiline, ...otherProps } = props;

  const renderContent = useCallback(() => {
    if (multiline)
      return (
        <textarea
          {...(otherProps as HTMLTextAreaProps)}
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
