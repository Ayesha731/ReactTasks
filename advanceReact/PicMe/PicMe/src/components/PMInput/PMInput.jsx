import React, { children } from "react";
import "./PMInput.css";

const PMInput = ({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="input-wrapper">
      <div className={`input ${touched && error ? "error-field" : ""}`}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {touched && error && <div className="error">{error}</div>}
    </div>
  );
};

export default PMInput;
