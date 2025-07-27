import React, { useContext } from "react";
import Toggle from "../Toggle/index";
import { MenuContext } from "./Menu";

export default function MenuDropdown({ children }) {
  const { open } = useContext(MenuContext);
  return (
    // <Toggle.On>
    //   <div className="menu-dropdown">{children}</div>
    // </Toggle.On>
    <>{open ? <div className="menu-dropdown">{children}</div> : null}</>
  );
}
