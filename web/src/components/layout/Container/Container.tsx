import { type ReactNode } from "react";
import styles from "./Container.module.css";

const Container = ({ children }: { children: ReactNode }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
