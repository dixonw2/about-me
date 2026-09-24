import { type ReactNode } from "react";

import styles from "./Button.module.css";

const Button = ({
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

export default Button;
