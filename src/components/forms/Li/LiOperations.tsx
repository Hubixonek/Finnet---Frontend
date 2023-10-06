import { FaDollarSign } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "../../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import { MouseEventHandler, useContext } from "react";
import { TThemeContext } from "../../../types/themecontext";

interface ILiOperationsProps {
  handleClick: MouseEventHandler;
}

const LiOperations = ({ handleClick }: ILiOperationsProps) => {
  const { theme } = useContext(ThemeContext) as TThemeContext;
  return (
    <li>
      <a>
        <FaDollarSign className={styles["icons"]} />
        Operacje
      </a>
      <ul className={styles["submenu"]}>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={handleClick}>
          <Link to="/" className={theme ? styles["dark"] : styles["light"]}>
            Historia i modyfikacja operacji
          </Link>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/"
            className={theme ? styles["dark"] : styles["light"]}
            onClick={handleClick}>
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
              onClick={handleClick}>
              Wpłata
            </Link>
            <Link
              to="/deposit"
              className={theme ? styles["dark"] : styles["light]"]}
              onClick={handleClick}>
              Wypłata
            </Link>
            <Link
              to="/"
              className={theme ? styles["dark"] : styles["light]"]}
              onClick={handleClick}>
              Uzgodnij stan konta
            </Link>
          </li>
        </li>
      </ul>
    </li>
  );
};
export default LiOperations;
