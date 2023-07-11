import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { RiLoginBoxLine } from "react-icons/ri";
import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
const LoginLink = () => {
  const { user, logoutApiCall } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <ul>
        {!user && (
          <Link
            to="/loginform"
            className={`${styles["loginBtnSideBar"]} ${
              theme ? styles["dark"] : styles["light"]
            }`}>
            <RiLoginBoxLine className={styles["icons"]} />
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
            <RiLoginBoxLine className={styles["icons"]} />
            Wyloguj się
          </Link>
        )}
      </ul>
    </div>
  );
};
export default LoginLink;
