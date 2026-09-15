import { type ReactNode } from "react";

import styles from "./TechnicalSkills.module.css";

const SkillsList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.sectionSkillsList}>{children}</ul>;
};

export default SkillsList;
