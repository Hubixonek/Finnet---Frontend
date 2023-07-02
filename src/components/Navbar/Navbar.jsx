import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Navbar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import { FaWallet, FaHammer } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUserContext } from "../../api/userinfo.api";
const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showListOne, setShowListOne] = useState(false);
  const [showListTwo, setShowListTwo] = useState(false);
  const [showListOther, setShowListOther] = useState(false);

  const showListOneHandler = () => {
    setShowListOne(!showListOne);
  };

  const showListTwoHandler = () => {
    setShowListTwo(!showListTwo);
  };
  const showListOtherHandler = () => {
    setShowListOther(!showListOther);
  };
  return (
    <div>
      <nav className={styles["navbar"]}>
        <label>
          <FaBars
            className={styles["hamburger"]}
            onClick={() => setShowNav(!showNav)}
          />
        </label>
        <div className={styles["logo"]}>
          <span>Finnet</span>
        </div>
        <div className={styles["buttonGroup"]}>
          <div className={styles["signInButton"]}>
            <Link to="/loginform">Zaloguj</Link>
          </div>
          <div className={styles["registerNav"]}>
            <Link to="/registerform">Korzystaj z Finnet za darmo</Link>
          </div>
        </div>
      </nav>
      <div className={`${styles["sidebar"]} ${showNav ? styles["show"] : ""}`}>
        <div className={styles["dropdownContainer"]}>
          <ul
            className={
              showListTwo ? `${styles["menu"]} active` : styles["menu"]
            }>
            <li>
              <a onClick={showListOneHandler}>
                {" "}
                <FaWallet className={styles["icons"]} />
                Portfel
              </a>
              {showListOne ? (
                <ul className={styles["menu"]}>
                  <li className={styles["menuItem"]}>
                    <a>Przelicz kursy walut</a>
                  </li>
                  <li className={styles["menuItem"]}>
                    <a onClick={showListOtherHandler}>Lokaty </a>
                    {showListOther ? (
                      <ul>
                        <li>
                          <a>
                            {" "}
                            <FaWallet className={styles["icons"]} />
                            Załóż lokatę
                          </a>
                        </li>
                      </ul>
                    ) : null}
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <a onClick={showListTwoHandler}>
                <FaHammer className={styles["icons"]} />
                Narzędzia
              </a>
              {showListTwo ? (
                <ul className={styles["menu"]}>
                  <li className={styles["menuItem"]}>
                    <a>Oblicz podatek</a>
                  </li>
                  <li className={styles["menuItem"]}>
                    <a>Notatki użytkownika</a>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default NavigationBar;
