import { useState, type ReactNode } from "react";

import styles from "./Project.module.css";

const Project = ({
  projectId,
  projectName,
  projectTechs,
  children,
}: {
  projectId: string;
  projectName: string;
  projectTechs: string[];
  children: ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      aria-labelledby={projectId}
      className={`${styles.section} ${expanded ? styles.sectionExpanded : ""}`}
    >
      <header
        className={styles.sectionHeading}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={`${projectId}-content`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setExpanded((prev) => !prev);
          }
        }}
        onClick={() => setExpanded((prev) => !prev)}
        // Prevent multiple clicks from selecting text in the header
        onMouseDown={(event) => {
          if (event.detail > 1) {
            event.preventDefault();
          }
        }}
      >
        <h2 id={projectId} className={styles.sectionTitle}>
          {projectName}
        </h2>
        <h4 className={styles.sectionLanguages}>{projectTechs.join(" | ")}</h4>
      </header>
      <div className={styles.projectPanel} inert={!expanded}>
        <div className={styles.projectDetails}>{children}</div>
      </div>
    </section>
  );
};

export default Project;
