import type { ReactNode } from "react";

import styles from "./YearsButtonsContainer.module.css";

const YearsButtonsContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.yearsButtonContainer}>{children}</div>;
};

export default YearsButtonsContainer;
