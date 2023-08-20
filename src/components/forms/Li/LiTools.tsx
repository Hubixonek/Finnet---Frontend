import { FaHammer } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
interface ILiToolsProps {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
}
type TThemeContext = {
  theme: boolean;
};
const LiTools = ({ setShowNav, showNav }: ILiToolsProps) => {
  const { theme } = useContext(ThemeContext) as TThemeContext;

  return (
    <li>
      <a>
        <FaHammer className={styles["icons"]} />
        Narzędzia
      </a>
      <ul className={styles["submenu"]}>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <a>Oblicz podatek</a>
        </li>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <a>Notatki użytkownika</a>
        </li>
      </ul>
    </li>
  );
};
export default LiTools;
