import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { TThemeContext } from "../../../types/themecontext";

type TLoginLinkProps = {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
};
type TAuthContext = {
  user: {};
  logoutApiCall: (value: {}) => void;
};

const LoginLink = ({ showNav, setShowNav }: TLoginLinkProps) => {
  const { user, logoutApiCall } = useContext(AuthContext) as TAuthContext;
  const { theme } = useContext(ThemeContext) as TThemeContext;
  return (
    <div>
      {!user && (
        <Link
          to="/loginform"
          className={`${styles["loginBtnSideBar"]} ${
            theme ? styles["dark"] : styles["light"]
          }`}
          onClick={() => setShowNav(!showNav)}>
          Zaloguj się
        </Link>
      )}
      {user && (
        <a
          className={`${styles["loginBtnSideBar"]} ${
            theme ? styles["dark"] : styles["light"]
          }`}
          onClick={logoutApiCall}>
          Wyloguj się
        </a>
      )}
    </div>
  );
};
export default LoginLink;
