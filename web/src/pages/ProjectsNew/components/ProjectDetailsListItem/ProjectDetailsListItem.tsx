import { type ReactNode } from "react";

// import styles from "./ProjectDetailsListItem.module.css";

const ProjectDetailsListItem = ({ children }: { children: ReactNode }) => {
  return <li>{children}</li>;
};

export default ProjectDetailsListItem;
