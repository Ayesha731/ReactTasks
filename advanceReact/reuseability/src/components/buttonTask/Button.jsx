import React from "react";
import "./Button.css";
import classNames from "classnames";
const Button = ({ children, varient, className, size, ...rest }) => {
  console.log(varient);
  console.log(size);
  console.log(rest);
  let sizeClass = size ? `button-${size}` : "";
  let checkVarient = varient ? `button-${varient}` : "";
  // size === "lg" ? (sizeClass = "button-large") : "";
  // size === "sm" ? (sizeClass = "button-small") : "";
  const allClasses = classNames(sizeClass, className, checkVarient);
  console.log(allClasses);

  return (
    <>
      <div className="btn">
        {/* ********************ONE METHOD************** */}
        {/* <button
          onClick={props.onClick}
          onDoubleClick={props.onDoubleClick}
          style={props.style}
          className={props.className}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          {props.children}
        </button> */}

        {/* ********************2nd METHOD************** */}
        {/* <button className={`${sizeClass} ${className}`} {...rest}>
          {children}
        </button> */}

        {/* ********************3rd METHOD************** */}
        <button className={allClasses} {...rest}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
