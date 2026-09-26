import { type ReactNode } from "react";

import styles from "./FavoritesSubtitle.module.css";

const FavoritesSubtitle = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.pageInfo}>{children}</h2>;
};

export default FavoritesSubtitle;
