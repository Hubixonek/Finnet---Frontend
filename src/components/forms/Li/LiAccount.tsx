import AuthContext from "../../../contexts/AuthContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { RiAccountCircleFill } from "react-icons/ri";
import styles from "../../styles/Navbar.module.scss";
import { useContext } from "react";

const LiAccount = () => {
  const { theme } = useContext(ThemeContext);
  const user = useContext(AuthContext);
  return (
    <li>
      {!user ? null : (
        <a>
          <RiAccountCircleFill className={styles["icons"]} />
          Konto {user.email}
        </a>
      )}
      <ul className={styles["submenu"]}>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <a>Usuń konto</a>
        </li>
        <li className={theme ? styles["dark"] : styles["light"]}>
          <a>Zmień hasło</a>
        </li>
      </ul>
    </li>
  );
};
export default LiAccount;
