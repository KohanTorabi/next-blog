import { FC, memo } from "react";
import styles from "./errorMessage.module.css";

interface ErrorMessageProps {
  error: string | null;
  setError: (error: string | null) => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error, setError }) => {
  const handleClick = () => {
    setError(null);
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <p>Error: {error}</p>
    </div>
  );
};

export default memo(ErrorMessage);
