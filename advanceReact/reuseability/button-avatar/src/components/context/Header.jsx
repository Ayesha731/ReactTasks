import React from "react";
import { ThemeContext } from "./Context";
import { useContext } from "react";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`${theme}-theme`}>
      {/* <h1>{`${value} Theme`}</h1> */}
      {/* <h1>{value === "light" ? "Light" : "Dark"} Theme</h1> */}
      <h1>{theme ? theme[0].toUpperCase() + theme.slice(1) : "Theme"} Theme</h1>
    </header>
  );
};

export default Header;
