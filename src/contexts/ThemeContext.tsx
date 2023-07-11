import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
