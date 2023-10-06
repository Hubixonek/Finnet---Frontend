import { MouseEventHandler, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { TThemeContext } from "../../../types/themecontext";

type TLoginLinkProps = {
  handleClick: MouseEventHandler;
};
type TAuthContext = {
  user: {};
  logoutApiCall: (value: {}) => void;
};

const LoginLink = ({ handleClick }: TLoginLinkProps) => {
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
          onClick={handleClick}>
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
