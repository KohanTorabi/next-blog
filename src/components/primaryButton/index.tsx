import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
  memo,
} from "react";
import styles from "./primaryButton.module.css";

interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: ReactElement;
  loading?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { icon, loading, children, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={`${styles.root} ${loading ? styles.loading : ""}`}
      disabled={loading}
    >
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <div>{children}</div>
          {icon && <div className={styles.icon}>{icon}</div>}
        </>
      )}
    </button>
  );
};

export default memo(PrimaryButton);
