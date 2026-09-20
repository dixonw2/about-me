import styles from "./Projects.module.css";
import Project, {
  Body,
  Preview,
  ProjectImage,
  ProjectName,
  ProjectSummary,
  ProjectTechs,
  ProjectTitle,
} from "./components/NativeProject/NativeProject";
import Description from "./components/Description/Description";
import SkillsList from "./components/TechnicalSkills/TechnicalSkills";
import Gallery from "./components/Gallery/Gallery";
import GitHubLink from "./components/GitHubLink/GitHubLink";
import sgMainMenu from "@/assets/projects/secret-guests/secret_guests_main_menu.png";
import sgCustomGuestsMenu from "@/assets/projects/secret-guests/secret_guests_custom_guests_menu.png";

function SecretGuests() {
  const thumbnail = { src: sgMainMenu, alt: "Main settings menu" };
  const images = [
    thumbnail,
    { src: sgCustomGuestsMenu, alt: "Custom guests menu" },
  ];

  return (
    <Project>
      <ProjectTitle>
        <ProjectName>Secret Guests</ProjectName>
        <ProjectTechs>TypeScript</ProjectTechs>
        <Preview>
          <ProjectImage src={thumbnail.src} alt={thumbnail.alt} />
          <ProjectSummary>
            A configurable plugin for Open Rollercoaster Tycoon 2 that allows
            the game to spawn guests with hidden Easter Egg names.
          </ProjectSummary>
        </Preview>
      </ProjectTitle>
      <Body>
        <Description>
          Configure Easter Egg guests through the plugin's settings and custom
          guests menus.
        </Description>
        <SkillsList>
          <li>Uses the OpenRCT2 plugin API and TypeScript.</li>
          <li>
            Updates config values and menu elements using functions somewhat
            similar to React state.
          </li>
        </SkillsList>
        <Gallery images={images} />
        <GitHubLink link="https://github.com/dixonw2/OpenRCT2-SecretGuests" />
      </Body>
    </Project>
  );
}

export default function ProjectsNative() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageHeader}>Projects</h1>
      <SecretGuests />
    </main>
  );
}
