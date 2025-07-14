import React, { useState } from "react";
import "./Header.css";
const Header = ({ theme }) => {
  const [isDark, setIsDark] = useState(false);
  console.log(JSON.parse(localStorage.getItem("isDarkMode")));
  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`}></i>
          {isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
