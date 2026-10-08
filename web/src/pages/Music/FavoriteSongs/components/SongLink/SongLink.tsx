import type { ReactNode } from "react";
import styles from "./SongLink.module.css";

const SongLink = ({ src, children }: { src: string; children: ReactNode }) => {
  return (
    <a className={styles.link} href={src} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
      <span className={styles.screenReaderOnly}> (opens in a new tab)</span>
    </a>
  );
};

export default SongLink;
