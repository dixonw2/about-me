import styles from "./ProjectThumbnail.module.css";

const ProjectThumbnail = ({
  image,
  className,
}: {
  image?: { src: string; alt: string };
  className?: string;
}) => (
  <span style={{ minWidth: "12rem", textAlign: "center" }}>
    {image && (
      <img
        src={image.src}
        alt={image.alt}
        className={[styles.projectImg, className].filter(Boolean).join(" ")}
      />
    )}
  </span>
);

export default ProjectThumbnail;
