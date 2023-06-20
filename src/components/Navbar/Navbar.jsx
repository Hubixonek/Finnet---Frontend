import React from "react";
import styles from "../styles/Navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const loggedInUser = localStorage.getItem("user");
  // {loggedInUser ? (
  //       <div>Witamy w szeregach Finnetu {JSON.parse(loggedInUser).email}</div>
  //     ) : (
  return (
    <Navbar className={styles["navbar"]} expand="lg">
      <Navbar.Brand className={styles["brand"]} href="#">
        Finnet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className={styles["Links"]}>
          <NavLink className={styles["firstNavLink"]} href="#">
            O nas
          </NavLink>
          <NavLink
            className={styles["OtherNavs"]}
            to="/fundsform"
            activeclassname={styles["active"]}>
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
          {loggedInUser ? (
            <button className={styles["registerNav"]}>
              {JSON.parse(loggedInUser).email}
            </button>
          ) : (
            <NavLink to="/registerform">
              <button className={styles["registerNav"]}>
                Korzystaj z Finnet za darmo
              </button>
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
