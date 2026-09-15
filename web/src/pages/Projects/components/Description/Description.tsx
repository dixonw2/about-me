import { type ReactNode } from "react";

import styles from "./Description.module.css";

const Description = ({ children }: { children: ReactNode }) => {
  return <p className={styles.sectionDescription}>{children}</p>;
};

export default Description;
