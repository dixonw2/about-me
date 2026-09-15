import styles from "./Projects.module.css";

import Project from "./components/Project/Project";
import Description from "./components/Description/Description";
import SkillsList from "./components/TechnicalSkills/TechnicalSkills";
import GitHubLink from "./components/GitHubLink/GitHubLink";
import Image from "./components/Image/Image";

import sgMainMenu from "@/assets/projects/secret-guests/secret_guests_main_menu.png";
import sgCustomGuestsMenu from "@/assets/projects/secret-guests/secret_guests_custom_guests_menu.png";
import Gallery from "./components/Gallery/Gallery";

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
      <Description>
        This website! A website about me, whether it's professional information
        or general hobbies and interests!
      </Description>
      <SkillsList>
        <li>
          Created to learn and practice Full Stack development alongside Docker,
          Kubernetes, and Microservices.
        </li>
        <li>Web application built using React TypeScript.</li>
        <li>Music service built using FastAPI, SQLAlchemy, and PostgreSQL. </li>
        <li>Utilizes GitHub Projects as a project management tool.</li>
      </SkillsList>
      <GitHubLink link="https://github.com/dixonw2/about-me" />
    </Project>
  );
};

const SecretGuests = () => {
  return (
    <>
      <Project
        projectId="secret-guests"
        projectName="Secret Guests"
        projectTechs={["TypeScript"]}
      >
        <Description>
          A configurable plugin for the game Open Rollercoaster Tycoon 2 that
          allows the game to spawn guests with hidden Easter Egg names.
        </Description>
        <SkillsList>
          <li>Uses the OpenRCT2 plugin API and TypeScript.</li>
          <li>
            Updates config values and menu elements using functions somewhat
            similar to React state.
          </li>
        </SkillsList>
        <GitHubLink link="https://github.com/dixonw2/OpenRCT2-SecretGuests" />
        <Gallery>
          <Image src={sgMainMenu} alt="Main settings menu" />
          <Image src={sgCustomGuestsMenu} alt="Custom guests menu" />
        </Gallery>
      </Project>
      {/* <div id="images">
        <ProjectImage src={sgMainMenu} alt="Main settings menu" />
        <ProjectImage src={sgCustomGuestsMenu} alt="Custom Guests menu" />
      </div> */}
    </>
  );
};

const ShinrasBetterBestiary = () => {
  return (
    <Project
      projectId="shinras-better-bestiary"
      projectName="Shinra's Better Bestiary"
      projectTechs={["C#", "Avalonia", "Python"]}
    >
      <Description>
        An application to track the progress of oversouling Shinra's Bestiary in
        Final Fantasy X-2.
      </Description>
      <SkillsList>
        <li>
          Replicates Shinra's Bestiary in-game using the C# UI framework
          Avalonia.
        </li>
        <li>
          Fiend data JSON file built using a Python script that gets Media
          Wiki's information on each fiend.
        </li>
      </SkillsList>
      <GitHubLink link="https://github.com/dixonw2/ShinrasBetterBestiary" />
      <Gallery>
        <p>test</p>
        <p>test 2</p>
      </Gallery>
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
      <Description>
        A Minecraft plugin that adds an economy with tasks and makes the game
        more difficult.
      </Description>
      <SkillsList>
        <li>
          Has a list of tasks with a varying reward stored in a MySQL database.
        </li>
        <li>A configurable CLI item shop.</li>
        <li>
          After a configurable amount of time, mobs will begin to spawn with
          buffs.
        </li>
      </SkillsList>
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
