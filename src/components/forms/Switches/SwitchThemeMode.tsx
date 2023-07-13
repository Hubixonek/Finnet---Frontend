import { useContext } from "react";
import styles from "../../styles/SwitchTheme.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const SwitchThemeMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = () => {
    toggleTheme();
  };

  document.body.className = `${theme ? styles["dark"] : ''}`

  return (
    <div
      className={`${styles["switch"]} ${
        theme ? styles["switchPosition"] : styles["switchPositionAgain"]
      }`}>
      {theme ? (
        <BsFillMoonFill onClick={handleClick}></BsFillMoonFill>
      ) : (
        <BsSunFill onClick={handleClick}></BsSunFill>
      )}
    </div>
  );
};
export default SwitchThemeMode;
