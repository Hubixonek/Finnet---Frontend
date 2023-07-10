import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import React from "react";

const RegisterLink = () => {
  return (
    <Link to="/registerform" className={styles["registerBtnSideBar"]}>
      Korzystaj z Finnet za darmo!
    </Link>
  );
};
export default RegisterLink;
