import type { ReactNode } from "react";

import styles from "./ProjectName.module.css";

const ProjectName = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.projectName}>{children}</h2>;
};

export default ProjectName;
