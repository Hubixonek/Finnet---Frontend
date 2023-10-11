import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { TThemeContext } from "../../../types/themecontext";

import { useContext } from "react";
const LiDebtors = () => {
  const { theme } = useContext(ThemeContext) as TThemeContext;

  return (
    <li>
      <Link
        to="/debtorslist"
        className={theme ? styles["dark"] : styles["light"]}>
        <FaThList className={styles["icons"]} />
        <span>Lista dłużników</span>
      </Link>
    </li>
  );
};
export default LiDebtors;
