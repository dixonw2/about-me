import type { ReactNode } from "react";
import styles from "./NativeProject.module.css";

type ChildrenProps = { children: ReactNode };

export default function Project({ children }: ChildrenProps) {
  return <details className={styles.project}>{children}</details>;
}

// Keep this as the first child of Project: summary is the native toggle.
export function ProjectTitle({ children }: ChildrenProps) {
  return <summary className={styles.title}>{children}</summary>;
}

export function ProjectName({ children }: ChildrenProps) {
  return <span className={styles.name}>{children}</span>;
}

export function ProjectTechs({ children }: ChildrenProps) {
  return <span className={styles.techs}>{children}</span>;
}

export function Preview({ children }: ChildrenProps) {
  return <span className={styles.preview}>{children}</span>;
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return <img className={styles.image} src={src} alt={alt} />;
}

export function ProjectSummary({ children }: ChildrenProps) {
  return <span className={styles.summary}>{children}</span>;
}

export function Body({ children }: ChildrenProps) {
  return <div className={styles.body}>{children}</div>;
}
