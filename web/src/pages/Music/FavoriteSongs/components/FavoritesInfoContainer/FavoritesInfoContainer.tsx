import { type ReactNode } from "react";

import styles from "./FavoritesInfoContainer.module.css";

const FavoritesInfo = ({ children }: { children: ReactNode }) => {
  return <div className={styles.infoContainer}>{children}</div>;
};

export default FavoritesInfo;
