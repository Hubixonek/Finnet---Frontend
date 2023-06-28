import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaCalculator,
  FaStickyNote,
  FaUser,
  FaBlog,
} from "react-icons/fa";
import styles from "../styles/Icons.module.scss";

const SideBar = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          position: "fixed",
          width: "12%",
        },
      }}>
      <Menu>
        <SubMenu label="Portfel">
          <MenuItem component={<Link to="/fundsform" />}>
            <FaWallet className={styles["menu-icon"]} />{" "}
            <span>Przelicz kursy walut</span>
          </MenuItem>
          <SubMenu label="Lokaty">
            <MenuItem>
              <FaWallet className={styles["menu-icon"]} />{" "}
              <span>Załóż lokatę</span>
            </MenuItem>
          </SubMenu>
        </SubMenu>

        <SubMenu label="Narzędzia">
          <MenuItem>
            <FaCalculator className={styles["menu-icon"]} />{" "}
            <span>Oblicz podatek</span>
          </MenuItem>
          <MenuItem>
            <FaStickyNote className={styles["menu-icon"]} />
            <span>Notatki użytkownika</span>
          </MenuItem>
        </SubMenu>
        <MenuItem>
          <FaUser className={styles["menu-icon"]} /> <span>Konto</span>
        </MenuItem>
        <MenuItem>
          <FaBlog className={styles["menu-icon"]} /> <span>Blog</span>
        </MenuItem>
        <MenuItem component={<Link to="registerform" />}>
          Zarejestruj się
        </MenuItem>
        <MenuItem component={<Link to="loginform" />}>Zaloguj</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
