import { type ReactNode } from "react";

import styles from "./ProjectSummary.module.css";

const ProjectSummary = ({ children }: { children: ReactNode }) => {
  return <p className={styles.projectSummary}>{children}</p>;
};

export default ProjectSummary;
