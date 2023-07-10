import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { RiLoginBoxLine } from "react-icons/ri";
const LoginLink = () => {
  return (
    <ul>
      <Link to="/loginform" className={styles["loginBtnSideBar"]}>
        {" "}
        <RiLoginBoxLine className={styles["icons"]} />
        Zaloguj się
      </Link>
    </ul>
  );
};
export default LoginLink;