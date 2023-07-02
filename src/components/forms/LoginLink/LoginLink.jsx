import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { FiLogIn } from "react-icons/Fi";
const LoginLink = () => {
  return (
    <ul>
      <Link to="/loginform" className={styles["loginBtnSideBar"]}>
        {" "}
        <FiLogIn className={styles["icons"]} />
        Zaloguj się
      </Link>
    </ul>
  );
};
export default LoginLink;
