import { FaHammer } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
const LiTools = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <li>
      <a>
        <FaHammer className={styles["icons"]} />
        Narzędzia
      </a>
      <ul className={styles["submenu"]}>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <a>Oblicz podatek</a>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <a>Notatki użytkownika</a>
        </li>
      </ul>
    </li>
  );
};
export default LiTools;
