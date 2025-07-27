import React, { useContext } from "react";
import { ThemeContext } from "./Context";
const ButtonContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ButtonContext;
