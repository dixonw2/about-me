import type { ReactNode } from "react";
import styles from "./SongLinks.module.css";

const SongLinks = ({ children }: { children: ReactNode }) => {
  return <div className={styles.links}>{children}</div>;
};

export default SongLinks;
