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
import LiFinnetPro from "../forms/Li/LiFinnetPro";
import LiDebtors from "../forms/Li/LiDebtors";

const NavBar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  const { theme }: any = useContext(ThemeContext);

  return (
    <>
      <Nav handleClick={handleClick} />
      <div
        className={`${styles["sidebar"]} ${showNav ? styles["show"] : ""} ${
          theme ? styles["dark"] : styles["light"]
        }`}>
        <div className={styles["liList"]}>
          <ul>
            <LiWallet handleClick={handleClick} />
            <LiOperations handleClick={handleClick} />
            <LiTools handleClick={handleClick} />
            <LiAccount handleClick={handleClick} />
            <LiFinnetPro />
            <LiDebtors />
          </ul>
          <RegisterLink handleClick={handleClick} />
          <LoginLink handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
