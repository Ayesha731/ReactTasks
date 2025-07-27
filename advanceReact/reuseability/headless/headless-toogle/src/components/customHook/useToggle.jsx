import React from "react";
import useEffectOnUpdate from "../customHook/useEffectOnUpdate";
export default function useToggle(initilValue = false, onToggle = () => {}) {
  const [on, setOn] = React.useState(initilValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  useEffectOnUpdate(onToggle, [on]);
  return [on, toggle];
}
