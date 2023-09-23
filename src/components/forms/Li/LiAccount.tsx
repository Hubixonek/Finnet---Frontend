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
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <a>Moje konto</a>
        </li>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <Link to="/usersettings">Ustawienia</Link>
        </li>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <a>Usuń konto</a>
        </li>
        <li
          className={theme ? styles["dark"] : styles["light"]}
          onClick={() => setShowNav(!showNav)}>
          <a>Zmień hasło</a>
        </li>
      </ul>
    </li>
  );
};
export default LiAccount;
