import type { ReactNode } from "react";

import styles from "./ProjectHeading.module.css";

const ProjectHeading = ({ children }: { children: ReactNode }) => {
  return <header className={styles.heading}>{children}</header>;
};

export default ProjectHeading;
