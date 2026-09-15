import { useState, type ReactNode } from "react";
import styles from "./Projects.module.css";

const Project = ({
  projectId,
  projectName,
  projectTechs,
  children,
}: {
  projectId: string;
  projectName: string;
  projectTechs: string[];
  children: ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      aria-labelledby={projectId}
      className={`${styles.section} ${expanded ? styles.sectionExpanded : ""}`}
    >
      <header
        className={styles.sectionHeading}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={`${projectId}-content`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setExpanded((prev) => !prev);
          }
        }}
        onClick={() => setExpanded((prev) => !prev)}
        // Prevent multiple clicks from selecting text in the header
        onMouseDown={(event) => {
          if (event.detail > 1) {
            event.preventDefault();
          }
        }}
      >
        <h2 id={projectId} className={styles.sectionTitle}>
          {projectName}
        </h2>
        <h4 className={styles.sectionLanguages}>{projectTechs.join(" | ")}</h4>
      </header>
      <div className={styles.projectPanel} inert={!expanded}>
        <div className={styles.projectDetails}>{children}</div>
      </div>
    </section>
  );
};

const ProjectDescription = ({ children }: { children: ReactNode }) => {
  return <p className={styles.sectionDescription}>{children}</p>;
};

const ProjectSkillsList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.sectionSkillsList}>{children}</ul>;
};

const GitHubLink = ({ link }: { link: string }) => {
  return (
    <a
      className={styles.sectionLink}
      aria-label="View project on GitHub"
      href={link}
      target="_blank"
    >
      <svg
        viewBox="0 0 1024 1024"
        width={48}
        height={48}
        aria-hidden="true"
        focusable="false"
      >
        <circle className={styles.githubHitArea} cx="512" cy="512" r="512" />
        <path
          className={styles.githubPath}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          transform="scale(64)"
        />
      </svg>
    </a>
  );
};

const AboutMe = () => {
  return (
    <Project
      projectId="about-me"
      projectName="About Me"
      projectTechs={[
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Python",
        "FastAPI",
      ]}
    >
      <ProjectDescription>
        This website! A website about me, whether it's professional information
        or general hobbies and interests!
      </ProjectDescription>
      <ProjectSkillsList>
        <li>
          Created to learn and practice Full Stack development alongside Docker,
          Kubernetes, and Microservices.
        </li>
        <li>Web application built using React TypeScript.</li>
        <li>Music service built using FastAPI, SQLAlchemy, and PostgreSQL. </li>
        <li>Utilizes GitHub Projects as a project management tool.</li>
      </ProjectSkillsList>
      <GitHubLink link="https://github.com/dixonw2/about-me" />
    </Project>
  );
};

const SecretGuests = () => {
  return (
    <Project
      projectId="secret-guests"
      projectName="Secret Guests"
      projectTechs={["TypeScript"]}
    >
      <ProjectDescription>
        A configurable plugin for the game Open Rollercoaster Tycoon 2 that
        allows the game to spawn guests with hidden Easter Egg names.
      </ProjectDescription>
      <ProjectSkillsList>
        <li>Uses the OpenRCT2 plugin API and TypeScript.</li>
        <li>
          Updates config values and menu elements using functions somewhat
          similar to React state.
        </li>
      </ProjectSkillsList>
      <GitHubLink link="https://github.com/dixonw2/OpenRCT2-SecretGuests" />
    </Project>
  );
};

const ShinrasBetterBestiary = () => {
  return (
    <Project
      projectId="shinras-better-bestiary"
      projectName="Shinra's Better Bestiary"
      projectTechs={["C#", "Avalonia", "Python"]}
    >
      <ProjectDescription>
        An application to track the progress of oversouling Shinra's Bestiary in
        Final Fantasy X-2.
      </ProjectDescription>
      <ProjectSkillsList>
        <li>
          Replicates Shinra's Bestiary in-game using the C# UI framework
          Avalonia.
        </li>
        <li>
          Fiend data JSON file built using a Python script that gets Media
          Wiki's information on each fiend.
        </li>
      </ProjectSkillsList>
      <GitHubLink link="https://github.com/dixonw2/ShinrasBetterBestiary" />
    </Project>
  );
};

const HeretechsUtil = () => {
  return (
    <Project
      projectId="heretechs-util"
      projectName="Heretechs Util"
      projectTechs={["Java", "MySQL"]}
    >
      <ProjectDescription>
        A Minecraft plugin that adds an economy with tasks and makes the game
        more difficult.
      </ProjectDescription>
      <ProjectSkillsList>
        <li>
          Has a list of tasks with a varying reward stored in a MySQL database.
        </li>
        <li>A configurable CLI item shop.</li>
        <li>
          After a configurable amount of time, mobs will begin to spawn with
          buffs.
        </li>
      </ProjectSkillsList>
      <GitHubLink link="https://github.com/dixonw2/HeretechsUtil" />
    </Project>
  );
};

const Projects = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageHeader}>Projects</h1>
      <AboutMe />
      <SecretGuests />
      <ShinrasBetterBestiary />
      <HeretechsUtil />
    </main>
  );
};

export default Projects;
