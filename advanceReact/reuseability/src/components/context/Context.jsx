import React, { useState } from "react";
import "./Context.css";
import Header from "./Header";
import ButtonContext from "./ButtonContext";

// create the context
const ThemeContext = React.createContext();

const Context = () => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className="container dark-theme">
        {/* <h1>Context Api</h1> */}
        <Header />
        <ButtonContext />
      </div>
    </ThemeContext.Provider>
  );
};

export default Context;
export { ThemeContext };
