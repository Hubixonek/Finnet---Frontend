import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
const Nav = ({ setShowNav, showNav }) => {
  return (
    <nav className={styles["navbar"]}>
      <label>
        <FaBars
          onClick={() => setShowNav(!showNav)}
          className={styles["hamburger"]}
        />
      </label>
      <div className={styles["logo"]}>
        <span>Finnet</span>
      </div>
      <div className={styles["buttonGroup"]}>
        <div className={styles["signInButton"]}>
          <Link to="/loginform">Zaloguj</Link>
        </div>
        <div className={styles["registerNav"]}>
          <Link to="/registerform">Korzystaj z Finnet za darmo</Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
