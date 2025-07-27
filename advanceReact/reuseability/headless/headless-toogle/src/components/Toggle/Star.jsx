import React from "react";
import Toggle from "./Toggle";
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../customHook/useToggle";
export default function Star({ onChange }) {
  const [on, toggle] = useToggle();
  return (
    // <Toggle onToggle={onChange}>
    //   <Toggle.Button>
    //     <Toggle.On>
    //       <BsStarFill className="star filled" />
    //     </Toggle.On>
    //     <Toggle.Off>
    //       <BsStar className="star" />
    //     </Toggle.Off>
    //   </Toggle.Button>
    // </Toggle>

    <>
      {on ? (
        <BsStarFill onClick={toggle} className="star filled" />
      ) : (
        <BsStar onClick={toggle} className="star" />
      )}
    </>
  );
}
