import React, { useContext } from "react";
import { MenuContext } from "./Menu";

const MenuDropdown = ({ children }) => {
  const { open, menuId } = useContext(MenuContext);
  return open ? (
    <div className="menu-dropdown" aria-hidden={!open} id={menuId}>
      {/* {items.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))} */}

      {children}

      {/* {React.Children.map(children, (child) => {
        return React.cloneElement(child, { toggle, open });
      })} */}
    </div>
  ) : null;
};

export default MenuDropdown;
