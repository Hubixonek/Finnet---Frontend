import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
const Nav = ({ setShowNav, showNav }) => {
  const { user, logoutApiCall } = useContext(AuthContext);

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
          {user && <Link>{user.email}</Link>}
          {!user && <Link to="/loginform">Zaloguj</Link>}
        </div>
        <div className={styles["registerNav"]}>
          {!user && <Link to="/registerform">Korzystaj z Finnet za darmo</Link>}
          <div>
            {user && (
              <Link
                onClick={() => {
                  logoutApiCall();
                }}>
                Wyloguj się
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
