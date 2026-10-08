import type { ReactNode } from "react";

import styles from "./SongList.module.css";

const SongList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default SongList;
