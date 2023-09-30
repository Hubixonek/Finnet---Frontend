import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { TThemeContext } from "../../../types/themecontext";
import { TAuthWithLogoutContext } from "../../../types/authWithLogoutContextTypes";
const LoginLink = ({ showNav, setShowNav }) => {
  const { user, logoutApiCall } = useContext(
    AuthContext
  ) as TAuthWithLogoutContext;
  const { theme } = useContext(ThemeContext) as TThemeContext;
  return (
    <div>
      {!user && (
        <Link
          to="/loginform"
          className={`${styles["loginBtnSideBar"]} ${
            theme ? styles["dark"] : styles["light"]
          }`}
          onClick={() => setShowNav(!showNav)}>
          Zaloguj się
        </Link>
      )}
      {user && (
        <Link
          className={`${styles["loginBtnSideBar"]} ${
            theme ? styles["dark"] : styles["light"]
          }`}
          onClick={logoutApiCall}>
          {" "}
          Wyloguj się
        </Link>
      )}
    </div>
  );
};
export default LoginLink;
