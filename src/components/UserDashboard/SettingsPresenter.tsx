import styles from "../styles/Settings.module.scss";
import MyAccountPresenter from "./MyAccountPresenter";
import { useState, useContext } from "react";
import AccountSettingsPresenter from "./AccountSettingsPresenter";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TThemeContext } from "../../types/themecontext";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../../services/ProtectedRoute.service";

const SettingsPresenter = () => {
  const { theme } = useContext(ThemeContext) as TThemeContext;
  const [selectedTab, setSelectedTab] = useState("myAccount");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleTabChange = (tabName: string) => {
    setSelectedTab(tabName);
  };
  const myAccount = "myAccount";
  const accountSettings = "accountSettings";
  return (
    <>
      <ProtectedRoute accessBy="authenticated">
        {!user ? (
          navigate("/")
        ) : (
          <div
            className={`${styles["container"]} ${
              theme ? styles["dark"] : styles["light"]
            }`}>
            <div className={styles["itemGroup"]}>
              <ul
                className={
                  theme ? styles["darkBorder"] : styles["lightBorder"]
                }>
                <h1>Ustawienia</h1>
                <li onClick={() => handleTabChange(myAccount)}>Moje konto</li>
                <li onClick={() => handleTabChange(accountSettings)}>
                  Ustawienia konta
                </li>
              </ul>
            </div>
            {selectedTab === myAccount && <MyAccountPresenter />}
            {selectedTab === accountSettings && <AccountSettingsPresenter />}
          </div>
        )}
      </ProtectedRoute>
    </>
  );
};

export default SettingsPresenter;
