import { createContext, useEffect, useState } from "react";
import { LocalStorage } from "../services/LocalStorage.service";
const ThemeContext = createContext();

const ThemeContextProvider = (props: boolean) => {
  const getTheme = () => {
    return JSON.parse(LocalStorage.get("dark")) || false;
  };

  const [theme, setTheme] = useState<boolean>(getTheme);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    LocalStorage.set("dark", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
