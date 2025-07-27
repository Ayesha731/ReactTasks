import React, { useEffect, useReducer, useRef } from "react";
import useEffectOnUpdate from "../customHook/useEffectOnUpdate";
import useToggle from "../customHook/useToggle";
const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  const firstRender = useRef(false);

  // const [on, setOn] = React.useState(false);
  // function toggle() {
  //   setOn((prevOn) => !prevOn);
  // }

  const [on, toggle] = useToggle();

  // React.useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //   } else {
  //     onToggle();
  //   }
  // }, [on]);

  // 1st method

  // useEffectOnUpdate(() => {
  //   onToggle();
  // }, [on]);

  // 2nd method
  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
