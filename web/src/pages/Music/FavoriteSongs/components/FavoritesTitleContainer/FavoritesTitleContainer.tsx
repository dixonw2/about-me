import { type ReactNode } from "react";

import styles from "./FavoritesTitleContainer.module.css";

const FavoritesTitleContainer = ({
  visible = true,
  children,
}: {
  visible?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`${styles.introHeader} ${visible ? "" : styles.introHeaderCollapsed}`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className={styles.introHeaderInner}>
        <div className={styles.titleContainer}>{children}</div>
      </div>
    </div>
  );
};

export default FavoritesTitleContainer;
