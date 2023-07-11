import { useContext, useState } from "react";
import styles from "../../styles/SwitchTheme.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";

const SwitchThemeMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <>
      <div className={`form-check form-switch ${styles["switch"]}`}>
        <input
          className={`form-check-input `}
          type="checkbox"
          onChange={handleClick}
          id="flexSwitchCheckDefaultNBP"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefaultNBP">
          Tryb {`${theme ? 'nocny' : 'dzienny'}`}
        </label>
      </div>
    </>
  );
};
export default SwitchThemeMode;
