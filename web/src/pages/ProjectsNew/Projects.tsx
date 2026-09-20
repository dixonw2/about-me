import styles from "./Projects.module.css";

import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectPreviewContainer from "./components/ProjectPreviewContainer/ProjectPreviewContainer";
import ProjectHeading from "./components/ProjectHeader/ProjectHeading";
import ProjectName from "./components/ProjectName/ProjectName";
import ProjectTechs from "./components/ProjectTechs/ProjectTechs";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import ProjectThumbnail from "./components/ProjectThumbnail/ProjectThumbnail";
import ProjectSummary from "./components/ProjectSummary/ProjectSummary";
import ProjectBody from "./components/ProjectBody/ProjectBody";
import ProjectDescription from "./components/ProjectDescription/ProjectDescription";
import ProjectDetailsList from "./components/ProjectDetailsList/ProjectDetailsList";
import ProjectDetailsListItem from "./components/ProjectDetailsListItem/ProjectDetailsListItem";
import Gallery from "./components/Gallery/Gallery";
import GitHubLink from "./components/GitHubLink/GitHubLink";

import sgMainMenu from "@/assets/projects/secret-guests/secret_guests_main_menu.png";
import sgCustomGuestsMenu from "@/assets/projects/secret-guests/secret_guests_custom_guests_menu.png";
import sbbMainMenu from "@/assets/projects/shinras-better-bestiary/sbbMainMenu.png";
// import sbbClearOversouled from "@/assets/projects/shinras-better-bestiary/sbbClearOversouled.png";
// import sbbFiendStats from "@/assets/projects/shinras-better-bestiary/sbbFiendStats.png";
// import sbbViaInfinitoFloors from "@/assets/projects/shinras-better-bestiary/sbbViaInfinitoFloors.png";

const AboutMe = () => {
  const thumbnail = { src: "", alt: "" };
  const images = [thumbnail];
  return (
    <ProjectCard>
      <ProjectPreviewContainer>
        <ProjectHeading>
          <ProjectName>About Me</ProjectName>
          <ProjectTechs
            techs={[
              "HTML",
              "CSS",
              "TypeScript",
              "React",
              "PostgreSQL",
              "Python",
              "FastAPI",
            ]}
          />
        </ProjectHeading>
        <ProjectInfo>
          <ProjectThumbnail image={thumbnail} />
          <ProjectSummary>
            This website! A website about me, whether it's professional
            information or general hobbies and interests!
          </ProjectSummary>
        </ProjectInfo>
      </ProjectPreviewContainer>
      <ProjectBody>
        <ProjectDescription>
          This is a website I'm building for practical experience in Full Stack
          development alongside Docker, Kubernetes, and Microservices.
        </ProjectDescription>
        <ProjectDetailsList>
          <ProjectDetailsListItem>
            Web application built using React TypeScript.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            Music service built using FastAPI, SQLAlchemy, and PostgreSQL.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            Utilizes GitHub Projects as a project management tool.
          </ProjectDetailsListItem>
        </ProjectDetailsList>
        <Gallery images={images} />
        <GitHubLink src="https://github.com/dixonw2/about-me" />
      </ProjectBody>
    </ProjectCard>
  );
};

const SecretGuests = () => {
  const thumbnail = { src: sgMainMenu, alt: "Main settings menu" };
  const images = [
    thumbnail,
    { src: sgCustomGuestsMenu, alt: "Custom guests menu" },
  ];

  return (
    <ProjectCard>
      <ProjectPreviewContainer>
        <ProjectHeading>
          <ProjectName>Secret Guests</ProjectName>
          <ProjectTechs techs={["TypeScript"]} />
        </ProjectHeading>
        <ProjectInfo>
          <ProjectThumbnail image={thumbnail} />
          <ProjectSummary>
            A configurable OpenRCT2 plugin that spawns guests with hidden Easter
            Egg names.
          </ProjectSummary>
        </ProjectInfo>
      </ProjectPreviewContainer>
      <ProjectBody>
        <ProjectDescription>
          Secret Guests is a plugin for the game Open Rollercoaster Tycoon 2.
        </ProjectDescription>
        <ProjectDetailsList>
          <ProjectDetailsListItem>
            Built using TypeScript and the OpenRCT2 plugin API.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            Uses a React-like state design, where setting a value updates the
            relevant UI elements as well using wrapper methods.
          </ProjectDetailsListItem>
        </ProjectDetailsList>
        <Gallery images={images} />
        <GitHubLink src="https://github.com/dixonw2/OpenRCT2-SecretGuests" />
      </ProjectBody>
    </ProjectCard>
  );
};

const ShinrasBetterBestiary = () => {
  const thumbnail = { src: sbbMainMenu, alt: "Main screen" };
  const images = [thumbnail];
  // const images = [
  //   thumbnail,
  //   { src: sbbClearOversouled, alt: "Clear oversoul prompt" },
  //   { src: sbbFiendStats, alt: "Stats screen for a fiend" },
  //   {
  //     src: sbbViaInfinitoFloors,
  //     alt: "Via Infinito Floors for remaining fiends",
  //   },
  // ];
  return (
    <ProjectCard>
      <ProjectPreviewContainer>
        <ProjectHeading>
          <ProjectName>Shinra's Better Bestiary</ProjectName>
          <ProjectTechs techs={["C#", "Avalonia", "Python"]} />
        </ProjectHeading>
        <ProjectInfo>
          <ProjectThumbnail image={thumbnail} />
          <ProjectSummary>
            An application to track the progress of oversouling Shinra's
            Bestiary in Final Fantasy X-2.
          </ProjectSummary>
        </ProjectInfo>
      </ProjectPreviewContainer>
      <ProjectBody>
        <ProjectDescription>
          In the game Final Fantasy X-2, there's a list of enemies (fiends) in
          the game called Shinra's Bestiary. If you "oversoul" every fiend that
          can be oversouled in the game, you get the Achievement/Trophy{" "}
          <em>Monster Master</em>, as well as the Garment Grid <em>The End</em>.
          To oversoul a fiend, you have to kill a certain amount of fiends of
          the same type/species.
          <br /> <br />
          This application helps keep track of those fiends. It allows the user
          to mark fiends oversouled and shows where the remaining fiends can be
          found.
        </ProjectDescription>
        <ProjectDetailsList>
          <ProjectDetailsListItem>
            Replicates Shinra's Bestiary in-game using the C# UI framework
            Avalonia.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            Fiend data JSON file built using a Python script that gets Media
            Wiki's information on each fiend.
          </ProjectDetailsListItem>
        </ProjectDetailsList>
        <Gallery images={images} />
        <GitHubLink src="https://github.com/dixonw2/ShinrasBetterBestiary" />
      </ProjectBody>
    </ProjectCard>
  );
};

const HeretechsUtil = () => {
  const thumbnail = { src: "", alt: "" };
  const images = [thumbnail];
  return (
    <ProjectCard>
      <ProjectPreviewContainer>
        <ProjectHeading>
          <ProjectName>Heretechs Util</ProjectName>
          <ProjectTechs techs={["Java", "MySQL"]} />
        </ProjectHeading>
        <ProjectInfo>
          <ProjectThumbnail image={thumbnail} />
          <ProjectSummary>
            A Minecraft plugin that adds an economy with tasks and makes the
            game more difficult.
          </ProjectSummary>
        </ProjectInfo>
      </ProjectPreviewContainer>
      <ProjectBody>
        <ProjectDescription>
          A few of my friends and I wanted to play Minecraft, but we always
          found it difficult to find the motivation to keep playing after a
          while, so I created this plugin.
          <br /> <br />
          There is a list of tasks, each task varying in difficulty and how many
          points the player is awarded for completing it. With those points, the
          player can buy an item from the shop, accessible via command.
          Additionally, after a certain amount of time, mobs will begin to spawn
          with additional health and potion effects. If a player dies, every
          player dies and the whole world has to be reset.
        </ProjectDescription>
        <ProjectDetailsList>
          <ProjectDetailsListItem>
            List of tasks stored in a MySQL database.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            Item shop is populated from the config.yml file, taking into account
            subcategories.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            Time for mobs to begin spawning is also configurable via config.yml.
          </ProjectDetailsListItem>
          <ProjectDetailsListItem>
            When a new world is started, players get assigned new tasks, but
            their points persist between worlds.
          </ProjectDetailsListItem>
        </ProjectDetailsList>
        <Gallery images={images} />
        <GitHubLink src="https://github.com/dixonw2/HeretechsUtil" />
      </ProjectBody>
    </ProjectCard>
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
