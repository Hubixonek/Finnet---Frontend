import React, { useContext, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWallet, FaHammer } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import LoginLink from "../forms/LoginLink/LoginLink";
import RegisterLink from "../forms/RegisterLink/RegisterLink";
import SwitchThemeMode from "../forms/Switches/SwitchThemeMode";
import AuthContext from "../../contexts/AuthContext";
const NavigationBar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showListWallet, setShowListWallet] = useState<boolean>(false);
  const [showListTools, setShowListTools] = useState<boolean>(false);
  const [showListWalletOther, setShowWalletOther] = useState<boolean>(false);
  const [showListAccount, setListAccount] = useState<boolean>(false);

  const { user, logoutApiCall } = useContext(AuthContext);

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
  const hideAllLists = () => {
    setListAccount(false);
    setShowListTools(false);
    setShowListWallet(false);
    setShowWalletOther(false);
  };
  return (
    <>
      <Nav showNav={showNav} setShowNav={setShowNav} />
      <div className={`${styles["sidebar"]} ${showNav ? styles["show"] : ""}`}>
        <div className={styles["dropdownContainer"]}>
          <ul
            className={
              showListTools ? `${styles["menu"]} active` : styles["menu"]
            }>
            <li>
              <a onClick={showListWalletHandler}>
                {" "}
                <FaWallet className={styles["icons"]} />
                Portfel
              </a>
              {showListWallet ? (
                <ul className={styles["menu"]}>
                  <li className={styles["menuItem"]}>
                    <Link to="/fundsform">Przelicz kursy walut</Link>
                  </li>
                  <li className={styles["menuItem"]}>
                    <a onClick={showListWalletOtherHandler}>Lokaty </a>
                    {showListWalletOther ? (
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
              <a onClick={showListToolsHandler}>
                <FaHammer className={styles["icons"]} />
                Narzędzia
              </a>
              {showListTools ? (
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
            <li>
              {!user ? null : 
                <a onClick={showListAccountHandler}>
                  <RiAccountCircleFill className={styles["icons"]} />
                  Konto {user.email}
                </a>
              }
              {showListAccount ? (
                <ul className={styles["menu"]}>
                  <li className={styles["menuItem"]}>
                    <a>Usuń konto</a>
                  </li>
                  <li className={styles["menuItem"]}>
                    <a>Zmień hasło</a>
                  </li>
                </ul>
              ) : null}
            </li>
            <LoginLink />
            {user ? null : <RegisterLink />}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
