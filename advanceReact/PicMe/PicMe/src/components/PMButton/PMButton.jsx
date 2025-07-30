import React from "react";
import "./PMButtonStyle.css";
import classNames from "classnames";
const PMButton = ({ children, varient, ...rest }) => {
  let checkVarient = varient ? `button-${varient}` : "";

  const allClasses = classNames(checkVarient);
  return (
    <div className="btn">
      <button className={allClasses} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default PMButton;
