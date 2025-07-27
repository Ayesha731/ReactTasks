import React, { useContext } from "react";
import Button from "../Button/Button";
import Toggle from "../Toggle/index";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
  const { toggleOpen } = useContext(MenuContext);
  return (
    // <Toggle.Button>
    //   <Button>{children}</Button>
    // </Toggle.Button>
    <>
      <Button onClick={toggleOpen}>{children}</Button>
    </>
  );
}
