import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { Themeprovider, useTheme };
