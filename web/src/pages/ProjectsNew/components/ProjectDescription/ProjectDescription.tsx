import { type ReactNode } from "react";

// import styles from "./ProjectDescription.module.css";

const ProjectDescription = ({ children }: { children: ReactNode }) => {
  return <p>{children}</p>;
};

export default ProjectDescription;
