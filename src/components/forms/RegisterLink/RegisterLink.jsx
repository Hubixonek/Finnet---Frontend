import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { FiLogIn } from "react-icons/Fi";
const RegisterLink = () => {
  return (
    <Link to="/registerform" className={styles["registerBtnSideBar"]}>
      Korzystaj z Finnet za darmo!
    </Link>
  );
};
export default RegisterLink;
