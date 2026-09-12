import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageHeader}>Projects</h1>
      <section aria-labelledby="secret-guests">
        <div className={styles.sectionHeading}>
          <h2 id="secret-guests" className={styles.sectionTitle}>
            <a
              href="https://github.com/dixonw2/OpenRCT2-SecretGuests"
              target="_blank"
            >
              OpenRCT2: Secret Guests
            </a>
          </h2>
          <h4 className={styles.sectionLanguages}>TypeScript</h4>
        </div>
        <p className={styles.sectionDescription}>
          A plugin for the game Open Rollercoaster Tycoon 2 that allows the game
          to spawn guests with hidden Easter Egg names.
        </p>
        <ul className={styles.sectionList}>
          <li>
            Provides a whitelist/blacklist for names the player doesn't want to
            spawn.
          </li>
          <li>
            Allows the player to change the max amount of guests to spawn, how
            guests per name, and the chance for a guest to spawn.
          </li>
          <li>
            Allows the player to add custom Easter Egg names with their own
            actions.
          </li>
        </ul>
        <p><a href="https://github.com/dixonw2/OpenRCT2-SecretGuests"></a></p>
      </section>
    </main>
  );
};

export default Projects;
