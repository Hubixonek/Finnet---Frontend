import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "../forms/SideBar/Sidebar";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);

  return (
    <div>
      <nav className={styles["navbar"]}>
        <label>
          <FaBars
            className={styles["hamburger"]}
            onClick={() => setShowNav(!showNav)}
          />
        </label>
        <div className={styles["logo"]}>
          <span>Finnet</span>
        </div>
      </nav>
      <Sidebar show={showNav} />
    </div>
  );
};

export default NavigationBar;
