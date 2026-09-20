import { type ReactNode } from "react";

import styles from "./ProjectInfo.module.css";

const ProjectInfo = ({ children }: { children: ReactNode }) => {
  return <div className={styles.info}>{children}</div>;
};

export default ProjectInfo;
