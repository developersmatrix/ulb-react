import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [navBarToggled, setNavBarToggled] = useState(false);

  const toggleNavbar = () => {
    setNavBarToggled((prevState) => {
      return !prevState;
    });
  };
  return (
    <header className={styles.header}>
      <div>
        <Link
          className={styles["brand-link"]}
          to="/"
          onClick={navBarToggled && toggleNavbar}
        >
          TMC Virajpet
        </Link>
      </div>
      <nav
        className={
          navBarToggled
            ? `${styles["main-nav"]} ${styles["toggle-nav"]}`
            : styles["main-nav"]
        }
      >
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            <Link
              className={styles["nav-link"]}
              to="/as"
              onClick={toggleNavbar}
            >
              Dashboard
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link
              className={styles["nav-link"]}
              to="/revenue-assets"
              onClick={toggleNavbar}
            >
              Revenue Assets
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link
              className={styles["nav-link"]}
              to="/collection"
              onClick={toggleNavbar}
            >
              Collection
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link
              className={styles["nav-link"]}
              to="/schemes-and-works"
              onClick={toggleNavbar}
            >
              Schemes and works
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link
              className={styles["nav-link"]}
              to="/misc"
              onClick={toggleNavbar}
            >
              Misc
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          navBarToggled
            ? `${styles["nav-toggle"]} ${styles["toggle-ham"]}`
            : styles["nav-toggle"]
        }
        onClick={toggleNavbar}
      >
        <div className={styles["hamburger"]}></div>
      </div>
    </header>
  );
};

export default Navbar;
