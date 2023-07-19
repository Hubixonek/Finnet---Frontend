import React, { useContext, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWallet, FaHammer } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import LoginLink from "../forms/LoginLink/LoginLink";
import RegisterLink from "../forms/RegisterLink/RegisterLink";
import SwitchThemeMode from "../forms/Switches/SwitchThemeMode";
import AuthContext from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
const NavigationBar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showListWallet, setShowListWallet] = useState<boolean>(false);
  const [showListTools, setShowListTools] = useState<boolean>(false);
  const [showListWalletOther, setShowWalletOther] = useState<boolean>(false);
  const [showListAccount, setListAccount] = useState<boolean>(false);

  const { theme } = useContext(ThemeContext);

  const user = useContext(AuthContext);
  const showListWalletHandler = () => {
    setShowListWallet(!showListWallet);
  };

  const showListToolsHandler = () => {
    setShowListTools(!showListTools);
  };

  const showListWalletOtherHandler = () => {
    setShowWalletOther(!showListWalletOther);
  };

  const showListAccountHandler = () => {
    setListAccount(!showListAccount);
  };

  const handleWalletHover = () => {
    setShowListWallet(true);
  };

  const handleWalletLeave = () => {
    setShowListWallet(false);
  };

  const handleToolsHover = () => {
    setShowListTools(true);
  };

  const handleToolsLeave = () => {
    setShowListTools(false);
  };

  const handleWalletOtherHover = () => {
    setShowWalletOther(true);
  };

  const handleWalletOtherLeave = () => {
    setShowWalletOther(false);
  };

  const handleAccountHover = () => {
    setListAccount(true);
  };

  const handleAccountLeave = () => {
    setListAccount(false);
  };

  return (
    <>
      <Nav showNav={showNav} setShowNav={setShowNav} />
      <div
        className={`${styles["sidebar"]} ${showNav ? styles["show"] : ""} ${
          theme ? styles["dark"] : styles["light"]
        }`}>
        <div>
          <ul>
            <li
              onMouseEnter={handleWalletHover}
              onMouseLeave={handleWalletLeave}>
              <a onClick={showListWalletHandler}>
                <FaWallet className={styles["icons"]} />
                Portfel
              </a>
              {showListWallet && (
                <ul className={styles["submenu"]}>
                  <li className={theme ? styles["dark"] : styles["light"]}>
                    <Link
                      to="/cycki"
                      className={theme ? styles["dark"] : styles["light"]}>
                      Załóż portfel
                    </Link>
                  </li>
                  <li className={theme ? styles["dark"] : styles["light"]}>
                    <Link
                      to="/fundsform"
                      className={theme ? styles["dark"] : styles["light"]}>
                      Przelicz kursy walut
                    </Link>
                  </li>

                  <li
                    className={theme ? styles["dark"] : styles["light"]}
                    onMouseEnter={handleWalletOtherHover}
                    onMouseLeave={handleWalletOtherLeave}>
                    <a onClick={showListWalletOtherHandler}>Lokaty</a>
                    {showListWalletOther && (
                      <li
                        className={`${styles["secondSubmenu"]} ${
                          theme ? styles["dark"] : styles["light"]
                        }`}>
                        <a
                          className={theme ? styles["dark"] : styles["light]"]}>
                          Załóż lokatę
                        </a>
                        <a
                          className={theme ? styles["dark"] : styles["light]"]}>
                          Dodaj odsetki z lokaty
                        </a>
                        <a
                          className={theme ? styles["dark"] : styles["light]"]}>
                          Zamknij lokatę
                        </a>
                      </li>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li onMouseEnter={handleToolsHover} onMouseLeave={handleToolsLeave}>
              <a onClick={showListToolsHandler}>
                <FaHammer className={styles["icons"]} />
                Narzędzia
              </a>
              {showListTools && (
                <ul className={styles["submenu"]}>
                  <li className={theme ? styles["dark"] : styles["light"]}>
                    <a>Oblicz podatek</a>
                  </li>
                  <li className={theme ? styles["dark"] : styles["light"]}>
                    <a>Notatki użytkownika</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={handleAccountHover}
              onMouseLeave={handleAccountLeave}>
              {!user ? null : (
                <a onClick={showListAccountHandler}>
                  <RiAccountCircleFill className={styles["icons"]} />
                  Konto {user.email}
                </a>
              )}
              {showListAccount && user && (
                <ul className={styles["submenu"]}>
                  <li className={theme ? styles["dark"] : styles["light"]}>
                    <a>Usuń konto</a>
                  </li>
                  <li className={theme ? styles["dark"] : styles["light"]}>
                    <a>Zmień hasło</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <LoginLink />
          <RegisterLink />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
