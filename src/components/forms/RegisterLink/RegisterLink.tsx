import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

const RegisterLink = ({ setShowNav, showNav }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div>
        {!user && (
          <Link
            to="/registerform"
            className={styles["registerBtnSideBar"]}
            onClick={() => setShowNav(!showNav)}>
            Korzystaj z Finnet za darmo
          </Link>
        )}
      </div>
    </>
  );
};
export default RegisterLink;
