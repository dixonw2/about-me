import { useState, type ReactNode } from "react";

import styles from "./ProjectCard.module.css";

// const ProjectCard = ({
//   projectId,
//   projectName,
//   projectTechs,
//   projectImage,
//   projectSummary,
//   children,
// }: {
//   projectId: string;
//   projectName: string;
//   projectTechs: string[];
// projectImage: { src: string; alt: string };
//   projectSummary: string;
//   children: ReactNode;
// }) => {
const ProjectCard = ({ children }: { children: ReactNode }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <details className={styles.section}>{children}</details>
    // <section
    //   aria-labelledby={projectId}
    //   className={`${styles.section} ${isOpen ? styles.sectionExpanded : ""}`}
    // >
    //   <header
    //     className={styles.sectionHeading}
    //     role="button"
    //     tabIndex={0}
    //     aria-expanded={isOpen}
    //     aria-controls={`${projectId}-content`}
    //     onKeyDown={(event) => {
    //       if (event.key === "Enter" || event.key === " ") {
    //         event.preventDefault();
    //         setIsOpen((prev) => !prev);
    //       }
    //     }}
    //     onClick={() => setIsOpen((prev) => !prev)}
    //     // Prevent multiple clicks from selecting text in the header
    //     onMouseDown={(event) => {
    //       if (event.detail > 1) {
    //         event.preventDefault();
    //       }
    //     }}
    //   >
    //     <div className={styles.sectionHeadingTitle}>
    //       <h2 id={projectId} className={styles.sectionTitle}>
    //         {projectName}
    //       </h2>
    //       <h3 className={styles.sectionLanguages}>
    //         {projectTechs.join(" | ")}
    //       </h3>
    //     </div>
    //     {!isOpen && (
    //       <div className={styles.sectionHeadingSubHeading}>
    //         <img
    //           src={projectImage.src}
    //           alt={projectImage.alt}
    //           className={styles.sectionHeadingSubHeadingImg}
    //         />
    //         <p className={styles.sectionHeadingSubHeadingSummary}>
    //           {projectSummary}
    //         </p>
    //       </div>
    //     )}
    //   </header>
    //   <div className={styles.projectPanel} inert={!isOpen}>
    //     <div className={styles.projectDetails}>{children}</div>
    //   </div>
    // </section>
  );
};

export default ProjectCard;
