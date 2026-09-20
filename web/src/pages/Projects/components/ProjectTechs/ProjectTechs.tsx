import styles from "./ProjectTechs.module.css";

const ProjectTechs = ({ techs }: { techs: string[] }) => {
  return <h3 className={styles.projectTechs}>{techs.join(" | ")}</h3>;
};

export default ProjectTechs;
