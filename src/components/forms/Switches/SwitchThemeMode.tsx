import { useState } from "react";
import styles from "../../styles/SwitchTheme.module.scss";

const SwitchThemeMode = () => {
  const [theme, setTheme] = useState(false);


  
  return (
    <>
      <div className={`form-check form-switch ${styles["switch"]}`}>
        <input
          className={`form-check-input `}
          type="checkbox"

          id="flexSwitchCheckDefaultNBP"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefaultNBP">
          Tryb dzień
        </label>
      </div>
    </>
  );
};
export default SwitchThemeMode;
