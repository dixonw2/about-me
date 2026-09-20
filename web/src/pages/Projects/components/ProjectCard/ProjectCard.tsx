import styles from "./ProjectCard.module.css";
import type { ReactNode } from "react";

const ProjectCard = ({ children }: { children: ReactNode }) => {
  return <details className={styles.card}>{children}</details>;
};

export default ProjectCard;
