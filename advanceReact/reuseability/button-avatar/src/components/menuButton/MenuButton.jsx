import React, { useContext } from "react";
import "./MenuButton.css";
import Menu from "./Menu";
import { MenuContext } from "./Menu";
const MenuButton = ({ children }) => {
  const { toggle, open,menuId } = useContext(MenuContext);
  return (
    <div>
      <h1>Menu Button</h1>
      {/* <button onClick={onClick}>{buttonText}</button> */}
      <button onClick={toggle} aria-expanded={open} aria-haspopup="true"
      aria-controls={menuId}
      >
        {children}
      </button>
    </div>
  );
};

export default MenuButton;
