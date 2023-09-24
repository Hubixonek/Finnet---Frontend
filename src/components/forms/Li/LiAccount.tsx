import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { RiAccountCircleFill } from "react-icons/ri";
import styles from "../../styles/Navbar.module.scss";
interface ILiToolsProps {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
}
type TThemeContext = {
  theme: boolean;
};
const LiAccount = ({ setShowNav, showNav }: ILiToolsProps) => {
  const { theme } = useContext(ThemeContext) as TThemeContext;
  const user = useContext(AuthContext);

  return (
    <li>
      {!user ? null : (
        <a>
          <RiAccountCircleFill className={styles["icons"]} />
          <span>Konto {user.email}</span>
        </a>
      )}
      <ul className={styles["submenu"]}>
        <li
          onClick={() => setShowNav(!showNav)}
          className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/usersettings"
            className={theme ? styles["dark"] : styles["light"]}>
            Moje konto
          </Link>
        </li>
        <li
          onClick={() => setShowNav(!showNav)}
          className={theme ? styles["dark"] : styles["light"]}>
          <Link
            to="/usersettings"
            className={theme ? styles["dark"] : styles["light"]}>
            Ustawienia
          </Link>
        </li>
      </ul>
    </li>
  );
};
export default LiAccount;
