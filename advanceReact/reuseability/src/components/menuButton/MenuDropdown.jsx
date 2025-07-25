import React, { useContext } from "react";
import { MenuContext } from "./Menu";

const MenuDropdown = ({ children, open, toggle }) => {
  const open1 = useContext(MenuContext);
  return open1 ? (
    <div className="menu-dropdown">
      {/* {items.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))} */}

      {/* {children} */}

      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { toggle, open });
      })}
    </div>
  ) : null;
};

export default MenuDropdown;
