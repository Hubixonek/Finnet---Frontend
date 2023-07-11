import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

const RegisterLink = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div>
        {!user && (
          <Link to="/registerform" className={styles["registerBtnSideBar"]}>
            Korzystaj z Finnet za darmo!
          </Link>
        )}
      </div>
    </>
  );
};
export default RegisterLink;
