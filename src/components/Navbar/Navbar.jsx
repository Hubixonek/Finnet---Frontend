import React from "react";
import styles from "../styles/Navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar className={styles["navbar"]}  expand="lg">
      <Navbar.Brand className={styles["brand"]} href="#">
        Finnet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className={styles["Links"]}>
          <NavLink className={styles["firstNavLink"]} href="#" active>
            O nas
          </NavLink>
          <NavLink
            className={styles["OtherNavs"]}
            to="/fundsform"
            activeClassName={styles["active"]}>
            Funds
          </NavLink>
          <NavLink className={styles["OtherNavs"]} to="/blog">
            Blog
          </NavLink>
          <NavLink className={styles["OtherNavs"]} href="#">
            Subskrypcje
          </NavLink>

          <NavLink className={styles["navLink"]} to="/loginform">
            Zaloguj
          </NavLink>
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
