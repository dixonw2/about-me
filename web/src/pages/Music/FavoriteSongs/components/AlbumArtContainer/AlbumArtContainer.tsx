import { type ReactNode } from "react";

import styles from "./AlbumArtContainer.module.css";

const AlbumArtContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.albumArtContainer}>{children}</div>;
};

export default AlbumArtContainer;
