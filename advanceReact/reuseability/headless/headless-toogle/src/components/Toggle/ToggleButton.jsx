import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }) {
  const { on, toggle } = React.useContext(ToggleContext);
  return <div onClick={toggle}>{children}</div>;
}
