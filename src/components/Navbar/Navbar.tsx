import { useContext, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav/Nav";
import LoginLink from "../forms/LoginLink/LoginLink";
import RegisterLink from "../forms/RegisterLink/RegisterLink";
import { ThemeContext } from "../../contexts/ThemeContext";
import LiWallet from "../forms/Li/LiWallet";
import LiOperations from "../forms/Li/LiOperations";
import LiTools from "../forms/Li/LiTools";
import LiAccount from "../forms/Li/LiAccount";
const NavigationBar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Nav showNav={showNav} setShowNav={setShowNav} />
      <div
        className={`${styles["sidebar"]} ${showNav ? styles["show"] : ""} ${
          theme ? styles["dark"] : styles["light"]
        }`}>
        <div>
          <ul>
            <LiWallet />
            <LiOperations />
            <LiTools />
            <LiAccount />
          </ul>
          <LoginLink />
          <RegisterLink />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
