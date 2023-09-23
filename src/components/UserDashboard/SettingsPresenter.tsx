import { Link } from "react-router-dom";
import styles from "../styles/Settings.module.scss";
import MyAccountPresenter from "./MyAccountPresenter";
import { useState, useContext } from "react";
import AccountSettingsPresenter from "./AccountSettingsPresenter";
import { ThemeContext } from "../../contexts/ThemeContext";
import FinnetProPresenter from "./FinnetProPresenter";

const SettingsPresenter = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("myAccount");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <div className={styles["itemGroup"]}>
        <ul className={theme ? styles["darkBorder"] : styles["lightBorder"]}>
          <h1>Ustawienia</h1>
          <li onClick={() => handleTabChange("myAccount")}>Moje konto</li>
          <li onClick={() => handleTabChange("accountSettings")}>
            Ustawienia konta
          </li>
          <li onClick={() => handleTabChange("finnetPro")}>Finnet PRO</li>
        </ul>
      </div>
      {selectedTab === "myAccount" && <MyAccountPresenter />}
      {selectedTab === "accountSettings" && <AccountSettingsPresenter />}
      {selectedTab === "finnetPro" && <FinnetProPresenter />}
    </div>
  );
};

export default SettingsPresenter;
