import React from "react";
import "./Avatar.css";
import { IoPersonSharp } from "react-icons/io5";
import classNames from "classnames";
const Avatar = ({ src, alt, children, varient }) => {
  let checkVarient = varient ? `button-${varient}` : "";
  const allClasses = classNames(checkVarient);
  console.log(allClasses);
  if (src) {
    return (
      <div className="avatar">
        <img src={src} alt={alt} />
      </div>
    );
  }
  if (children) {
    return <div className="avatar avatar-letters ">{children}</div>;
  } else {
    return (
      <div className="avatar avatar-icon">
        <IoPersonSharp />
      </div>
    );
  }
};

export default Avatar;
