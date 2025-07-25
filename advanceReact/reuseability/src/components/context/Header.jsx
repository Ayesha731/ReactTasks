import React from "react";
import { ThemeContext } from "./Context";
const Header = () => {
  const value = React.useContext(ThemeContext);

  return (
    <header className={`${value}-theme`}>
      {/* <h1>{`${value} Theme`}</h1> */}
      <h1>{value === "light" ? "Light" : "Dark"} Theme</h1>
      {/* <h1>{value[0].toUpperCase() + value.slice(1)} Theme</h1> */}
    </header>
  );
};

export default Header;
