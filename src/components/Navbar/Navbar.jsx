import React from "react";
import styles from "../styles/Navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../api/userinfo.api";

const NavigationBar = () => {
  const { user, logoutUser } = useUserContext();
  console.log("Wartość user:", user);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Navbar className={styles["navbar"]} expand="lg">
      <Navbar.Brand className={styles["brand"]} href="#">
        Finnet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className={styles["Links"]}>
          {user ? (
            <NavLink onClick={handleLogout} className={styles["navLink"]}>
              Wyloguj się
            </NavLink>
          ) : (
            <NavLink className={styles["navLink"]} to="/loginform">
              Zaloguj
            </NavLink>
          )}
          <NavLink to="/registerform">
            <button className={styles["registerNav"]}>
              Korzystaj z Finnet za darmo
            </button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
