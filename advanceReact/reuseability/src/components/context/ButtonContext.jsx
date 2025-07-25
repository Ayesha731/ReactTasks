import React from "react";
import { ThemeContext } from "./Context";
const ButtonContext = () => {
  const value = React.useContext(ThemeContext);
  return <button className={`${value}-theme`}>Switch Theme</button>;
};

export default ButtonContext;
