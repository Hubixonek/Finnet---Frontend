import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import SwitchThemeMode from "../forms/Switches/SwitchThemeMode";


const Nav = ({ setShowNav, showNav }) => {
  const { user, logoutApiCall } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <nav
        className={`${styles["navbar"]} ${
          theme ? styles["dark"] : styles["light"]
        } `}>
        <label>
          <FaBars
            onClick={() =>   setShowNav(!showNav)}
            className={styles["hamburger"]}
          />
        </label>
        <div className={styles["logo"]}>
          <span>Finnet</span>
        </div>
        <div className={styles["buttonGroup"]}>
          <div className={styles["signInButton"]}>
            {user && (
              <Link className={`${theme ? styles["dark"] : styles["light"]}`}>
                {user.email}
              </Link>
            )}
            {!user && (
              <Link
                to="/loginform"
                className={`${theme ? styles["dark"] : styles["light"]}`}>
                Zaloguj
              </Link>
            )}
          </div>
          <div className={styles["registerNav"]}>
            {!user && (
              <Link to="/registerform">Korzystaj z Finnet za darmo</Link>
            )}
            <div>
              {user && (
                <Link
                  onClick={() => {
                    logoutApiCall();
                  }}>
                  Wyloguj się!
                </Link>
              )}
            </div>
          </div>
        </div>
        <SwitchThemeMode />
      </nav>
    </div>
  );
};
export default Nav;
