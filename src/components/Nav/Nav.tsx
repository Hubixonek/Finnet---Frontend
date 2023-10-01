import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import SwitchThemeMode from "../forms/Switches/SwitchThemeMode";
import { TThemeContext } from "../../types/themecontext";
import { TAuthWithLogoutContext } from "../../types/authWithLogoutContextTypes";
interface INavProps {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
}

const Nav = ({ setShowNav, showNav }: INavProps) => {
  const { user, logoutApiCall } = useContext(
    AuthContext
  ) as TAuthWithLogoutContext;
  const { theme } = useContext(ThemeContext) as TThemeContext;
  return (
    <div>
      <nav
        className={`${styles["navbar"]} ${
          theme ? styles["dark"] : styles["light"]
        } `}>
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
            {user && (
              <a className={`${theme ? styles["dark"] : styles["light"]}`}>
                {user.email}
              </a>
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
                <a
                  onClick={() => {
                    logoutApiCall();
                  }}>
                  Wyloguj się!
                </a>
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
