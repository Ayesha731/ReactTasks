import React from "react";
import "./MenuButton.css";
import Menu from "./Menu";

const MenuButton = ({ toggle, children,open }) => {
  return (
    <div>
      <h1>Menu Button</h1>
      {/* <button onClick={onClick}>{buttonText}</button> */}
      <button onClick={toggle}>{children}</button>
    </div>
  );
};

export default MenuButton;
