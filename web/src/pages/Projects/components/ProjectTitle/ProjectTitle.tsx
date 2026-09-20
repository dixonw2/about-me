import type { ReactNode } from "react";

import styles from "./ProjectTitle.module.css";

// const ProjectTitle = ({
//   isOpen,
//   onClick,
//   children,
// }: {
//   isOpen: boolean;
//   onClick: () => void;
//   children: ReactNode;
// }) => {
//   return (
//     <header
//       className={styles.sectionHeading}
//       role="button"
//       tabIndex={0}
//       aria-expanded={isOpen}
//       aria-controls={`${projectId}-content`}
//       onKeyDown={(event) => {
//         if (event.key === "Enter" || event.key === " ") {
//           event.preventDefault();
//           onClick();
//         }
//       }}
//       onClick={() => onClick()}
//       // Prevent multiple clicks from selecting text in the header
//       onMouseDown={(event) => {
//         if (event.detail > 1) {
//           event.preventDefault();
//         }
//       }}
//     >
//       {children}
//     </header>
//   );
// };

const ProjectTitle = ({ children }: { children: ReactNode }) => {
  return <summary>{children}</summary>;
};

export default ProjectTitle;
