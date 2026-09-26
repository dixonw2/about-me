import { type ReactNode } from "react";

import styles from "./FavoritesTitle.module.css";

const FavoritesTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
};

export default FavoritesTitle;
