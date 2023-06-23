import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  memo,
} from "react";
import styles from "./input.module.css";

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type HTMLTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type EnhanceInputProps = HTMLInputProps | HTMLTextAreaProps;

type InputProps = EnhanceInputProps & {
  multiline?: boolean;
};

const Input: FC<InputProps> = (props) => {
  const { multiline, ...otherProps } = props;

  return multiline ? (
    <textarea
      {...("rows" in otherProps ? otherProps : {})}
      className={styles.root}
    />
  ) : (
    <input {...(otherProps as HTMLInputProps)} className={styles.root}></input>
  );
};

export default memo(Input);
