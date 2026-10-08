import type { ReactNode } from "react";

import styles from "./EntryRetrospective.module.css";

const EntryRetrospective = ({ children }: { children: ReactNode }) => {
  return <p className={styles.entryRetrospective}>{children}</p>;
};

export default EntryRetrospective;
