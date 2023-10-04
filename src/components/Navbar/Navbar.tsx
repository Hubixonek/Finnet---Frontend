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

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  const { theme }: any = useContext(ThemeContext);

  return (
    <>
      <Nav showNav={showNav} setShowNav={setShowNav} />
      <div
        className={`${styles["sidebar"]} ${showNav ? styles["show"] : ""} ${
          theme ? styles["dark"] : styles["light"]
        }`}>
        <div className={styles["liList"]}>
          <ul>
            <LiWallet
              showNav={showNav}
              setShowNav={setShowNav}
              handleClick={handleClick}
            />
            <LiOperations showNav={showNav} setShowNav={setShowNav} />
            <LiTools showNav={showNav} setShowNav={setShowNav} />
            <LiAccount showNav={showNav} setShowNav={setShowNav} />
            <LiFinnetPro />
          </ul>
          <RegisterLink showNav={showNav} setShowNav={setShowNav} />
          <LoginLink showNav={showNav} setShowNav={setShowNav} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
