import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Wyatt Dixon</div>
      <ul className={styles.links}>
        <li>About</li>
        <li>Music</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
