import { FaWallet } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
const LiWallet = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <li>
      <a>
        <FaWallet className={styles["icons"]} />
        Portfel
      </a>
      <ul className={styles["submenu"]}>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/newwallet"
            className={theme ? styles["dark"] : styles["light"]}>
            Załóż portfel
          </Link>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/compositionstructure"
            className={theme ? styles["dark"] : styles["light"]}>
            Skład i struktura
          </Link>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/fundsform"
            className={theme ? styles["dark"] : styles["light"]}>
            Przelicz kursy walut
          </Link>
        </li>

        <li className={theme ? styles["dark"] : styles["light"]}>
          <a>Lokaty</a>
          <li
            className={`${styles["secondSubmenu"]} ${
              theme ? styles["dark"] : styles["light"]
            }`}>
            <a className={theme ? styles["dark"] : styles["light]"]}>
              Załóż lokatę
            </a>
            <a className={theme ? styles["dark"] : styles["light]"]}>
              Dodaj odsetki z lokaty
            </a>
            <a className={theme ? styles["dark"] : styles["light]"]}>
              Zamknij lokatę
            </a>
          </li>
        </li>
      </ul>
    </li>
  );
};

export default LiWallet;
