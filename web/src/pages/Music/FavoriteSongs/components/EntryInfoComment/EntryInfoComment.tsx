import type { ReactNode } from "react";

import styles from "./EntryInfoComment.module.css";

const EntryInfoComment = ({ children }: { children: ReactNode }) => {
  return <p className={styles.entryInfoComment}>{children}</p>;
};

export default EntryInfoComment;
