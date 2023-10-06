import { FaHammer } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { MouseEventHandler, useContext } from "react";
import styles from "../../styles/Navbar.module.scss";
import { TThemeContext } from "../../../types/themecontext";
interface ILiToolsProps {
  handleClick: MouseEventHandler;
}

const LiTools = ({ handleClick }: ILiToolsProps) => {
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
          onClick={handleClick}>
          <a>Oblicz podatek</a>
        </li>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={handleClick}>
          <a>Notatki użytkownika</a>
        </li>
      </ul>
    </li>
  );
};
export default LiTools;
