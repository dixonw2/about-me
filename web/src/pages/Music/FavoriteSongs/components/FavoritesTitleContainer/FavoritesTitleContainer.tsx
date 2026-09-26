import { type ReactNode } from "react";

import styles from "./FavoritesTitleContainer.module.css";

const FavoritesTitleContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.titleContainer}>{children}</div>;
};

export default FavoritesTitleContainer;
