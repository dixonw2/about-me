import styles from "./ProjectThumbnail.module.css";

const ProjectThumbnail = ({
  image,
}: {
  image?: { src: string; alt: string };
}) => {
  return (
    <span>
      {image && (
        <img src={image!.src} alt={image!.alt} className={styles.projectImg} />
      )}
    </span>
  );
};

export default ProjectThumbnail;
