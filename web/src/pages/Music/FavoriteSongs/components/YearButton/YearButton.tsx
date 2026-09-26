import { type ReactNode } from "react";

import styles from "./YearButton.module.css";

const YearButton = ({
  children,
  onClick,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default YearButton;
