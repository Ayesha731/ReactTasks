import React, { useEffect } from "react";

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle }) {
  const [on, setOn] = React.useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  useEffect(() => {
    onToggle();
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
