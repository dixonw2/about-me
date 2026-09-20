import { type ReactNode } from "react";

import styles from "./ProjectSummary.module.css";

const ProjectSummary = ({
  features,
  children,
}: {
  features: string[];
  children: ReactNode;
}) => {
  return (
    <div className={styles.projectSummaryContainer}>
      <p className={styles.summary}>{children}</p>
      <p className={styles.features}>{features.join(" • ")}</p>
    </div>
  );
};

export default ProjectSummary;
