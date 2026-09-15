import type { ReactNode } from "react";
import styles from "./Gallery.module.css";

const Gallery = ({ children }: { children: ReactNode }) => {
  return <div className={styles.gallery}>{children}</div>;
};

export default Gallery;
