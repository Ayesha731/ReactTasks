import React, { useId } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import { createContext } from "react";

const MenuContext = createContext();
const Menu = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const menuId = useId();

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggle ,menuId}}>
      <div className="menu" role="menu">
        {/* <MenuButton buttonText={buttonText} onClick={toggle} />

      {open && <MenuDropdown items={items} />} */}
        {/* {children} */}

        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            open,
            toggle,
          });
        })}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuContext };
