import React from "react";
import Toggle from "../Toggle/index";
import useToggle from "../customHook/useToggle";
import { createContext } from "react";

const MenuContext = createContext();
export default function Menu({ children, onOpen, onToggle }) {
  const [open, toggleOpen] = useToggle({
    initialValue: true,
    onToggle: onOpen,
  });
  return (
    // <Toggle onToggle={onOpen}>
    //   <div className="menu">{children}</div>
    // </Toggle>
    <>
      <MenuContext.Provider value={{ open, toggleOpen }}>
        <div className="menu">{children}</div>
      </MenuContext.Provider>
    </>
  );
}

export { MenuContext };
