import { useState, type ReactNode } from "react";

import styles from "./ProjectWithThumbnail.module.css";

const Project = ({
  projectId,
  projectName,
  projectTechs,
  projectImage,
  projectSummary = "",
  children,
}: {
  projectId: string;
  projectName: string;
  projectTechs: string[];
  projectImage?: string | { src: string; alt: string };
  projectSummary?: string;
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
        <div className={styles.headingText}>
          <h2 id={projectId} className={styles.sectionTitle}>
            {projectName}
          </h2>
          <p className={styles.sectionLanguages}>
            {projectTechs.join(" | ")}
          </p>
        </div>
        {(projectImage || projectSummary) && (
          <div className={styles.preview} inert={expanded}>
            <div className={styles.previewInner}>
              <div className={`${styles.previewContent} ${!projectImage ? styles.withoutThumbnail : ""}`}>
                {projectImage && (
                  <img
                    className={styles.projectThumbnail}
                    src={typeof projectImage === "string" ? projectImage : projectImage.src}
                    alt={typeof projectImage === "string" ? "" : projectImage.alt}
                    loading="lazy"
                  />
                )}
                {projectSummary && (
                  <p className={styles.sectionSummary}>{projectSummary}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
      <div id={`${projectId}-content`} className={styles.projectPanel} inert={!expanded}>
        <div className={styles.projectDetails}>{children}</div>
      </div>
    </section>
  );
};

export default Project;


