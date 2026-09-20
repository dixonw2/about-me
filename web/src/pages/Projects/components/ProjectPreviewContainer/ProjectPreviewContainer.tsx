import { type ReactNode } from "react";

import styles from "./ProjectPreviewContainer.module.css";

const ProjectPreviewContainer = ({ children }: { children: ReactNode }) => {
  return (
    <summary
      className={styles.preview}
      onMouseDown={(event) => {
        // prevent double click selecting words
        if (event.detail > 1) {
          event.preventDefault();
        }
      }}
    >
      {children}
    </summary>
  );
};

export default ProjectPreviewContainer;
