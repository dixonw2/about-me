import styles from "./Heading.module.css";

const Heading = ({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) => {
  return (
    <header
      className={styles.sectionHeading}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-controls="TEST"
      //   aria-controls={`${projectId}-content`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      onClick={() => onClick()}
      // Prevent multiple clicks from selecting text in the header
      onMouseDown={(event) => {
        if (event.detail > 1) {
          event.preventDefault();
        }
      }}
    >
      <div className={styles.sectionHeadingTitle}>
        <h2 id={projectId} className={styles.sectionTitle}>
          {projectName}
        </h2>
        <h3 className={styles.sectionLanguages}>{projectTechs.join(" | ")}</h3>
      </div>
      {!expanded && (
        <div className={styles.sectionHeadingSubHeading}>
          <img
            src={projectImage.src}
            alt={projectImage.alt}
            className={styles.sectionHeadingSubHeadingImg}
          />
          <p className={styles.sectionHeadingSubHeadingSummary}>
            {projectSummary}
          </p>
        </div>
      )}
    </header>
  );
};

export default Heading;
