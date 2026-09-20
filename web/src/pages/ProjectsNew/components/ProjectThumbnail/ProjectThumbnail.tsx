import styles from "./ProjectThumbnail.module.css";

const ProjectThumbnail = ({
  image,
}: {
  image: { src: string; alt: string };
}) => {
  return <img src={image.src} alt={image.alt} className={styles.projectImg} />;
};

export default ProjectThumbnail;
