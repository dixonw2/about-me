import { type ReactNode } from "react";

import styles from "./YearButton.module.css";

const YearButton = ({
  selected = false,
  children,
  onClick,
}: {
  selected?: boolean;
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      aria-pressed={selected}
      className={`${styles.button} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default YearButton;
