import { type ReactNode } from "react";

import styles from "./ProjectBody.module.css";

const ProjectBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

export default ProjectBody;
