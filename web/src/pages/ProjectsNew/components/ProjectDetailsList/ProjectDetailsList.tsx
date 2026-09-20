import { type ReactNode } from "react";

// import styles from "./ProjectDetailsList.module.css";

const ProjectDetailsList = ({ children }: { children: ReactNode }) => {
  return <ul>{children}</ul>;
};

export default ProjectDetailsList;
