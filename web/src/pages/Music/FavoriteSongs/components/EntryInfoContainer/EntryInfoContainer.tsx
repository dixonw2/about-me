import { type ReactNode } from "react";

import styles from "./EntryInfoContainer.module.css";

const EntryInfoContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.entryInfoContainer}>{children}</div>;
};

export default EntryInfoContainer;
