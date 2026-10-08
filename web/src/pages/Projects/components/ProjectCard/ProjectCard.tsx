import styles from "./ProjectCard.module.css";
import type { ReactNode } from "react";

const ProjectCard = ({ children }: { children: ReactNode }) => {
  return (
    <details
      className={styles.card}
      onClick={(event) => {
        // prevents expanding the card if words get highlighted
        if (event.detail > 0 && window.getSelection()?.toString()) {
          event.preventDefault();
        }
      }}
    >
      {children}
    </details>
  );
};

export default ProjectCard;
