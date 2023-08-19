import { FaDollarSign } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "../../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
const LiOperations = ({ showNav, setShowNav }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li>
      <a>
        <FaDollarSign className={styles["icons"]} />
        Operacje
      </a>
      <ul className={styles["submenu"]}>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <Link to="/" className={theme ? styles["dark"] : styles["light"]}>
            Historia i modyfikacja operacji
          </Link>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/"
            className={theme ? styles["dark"] : styles["light"]}
            onClick={() => setShowNav(!showNav)}>
            Kupno walorów
          </Link>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <a>Operacje gotówkowe</a>
          <li
            className={`${styles["secondSubmenu"]} ${
              theme ? styles["dark"] : styles["light"]
            }`}>
            <Link
              to="/deposit"
              className={theme ? styles["dark"] : styles["light]"]}
              onClick={() => setShowNav(!showNav)}>
              Wpłata
            </Link>
            <Link
              to="/"
              className={theme ? styles["dark"] : styles["light]"]}
              onClick={() => setShowNav(!showNav)}>
              Wypłata
            </Link>
            <Link
              to="/"
              className={theme ? styles["dark"] : styles["light]"]}
              onClick={() => setShowNav(!showNav)}>
              Uzgodnij stan konta
            </Link>
          </li>
        </li>
      </ul>
    </li>
  );
};
export default LiOperations;
