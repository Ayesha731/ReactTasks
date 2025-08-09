import React from "react";
import "./PMInput.css";

const PMInput = ({
  icon,
  endIcon, // new prop for right-side icon
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  ...rest
}) => {
  return (
    <div className="input-wrapper">
      <div className={`input ${touched && error ? "error-field" : ""}`}>
        {icon && <span className="input-icon start">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
        {endIcon && <span className="input-icon end">{endIcon}</span>}
      </div>
      {touched && error && <div className="error">{error}</div>}
    </div>
  );
};

export default PMInput;
