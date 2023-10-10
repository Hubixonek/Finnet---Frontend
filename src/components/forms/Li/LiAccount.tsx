import { MouseEventHandler, useContext } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { RiAccountCircleFill } from "react-icons/ri";
import styles from "../../styles/Navbar.module.scss";
import { TThemeContext } from "../../../types/themecontext";
import ProtectedRoute from "../../../services/ProtectedRoute.service";
interface ILiToolsProps {
  handleClick: MouseEventHandler;
}
type TAuthContext = {
  user: {
    email: string;
  };
};
const LiAccount = ({ handleClick }: ILiToolsProps) => {
  const { theme } = useContext(ThemeContext) as TThemeContext;
  const { user } = useContext(AuthContext) as TAuthContext;
  const navigate = useNavigate();

  return (
    <>
      {!user ? null : (
        <li>
          <a>
            <RiAccountCircleFill className={styles["icons"]} />
            <span>Konto</span>
          </a>
          <ul className={styles["submenu"]}>
            <li
              onClick={handleClick}
              className={theme ? styles["dark"] : styles["light"]}>
              <Link
                to="/usersettings"
                className={theme ? styles["dark"] : styles["light"]}>
                Moje konto
              </Link>
            </li>
            <li
              onClick={handleClick}
              className={theme ? styles["dark"] : styles["light"]}>
              <Link
                to="/usersettings"
                className={theme ? styles["dark"] : styles["light"]}>
                Ustawienia
              </Link>
            </li>
          </ul>
        </li>
      )}
    </>
  );
};
export default LiAccount;
