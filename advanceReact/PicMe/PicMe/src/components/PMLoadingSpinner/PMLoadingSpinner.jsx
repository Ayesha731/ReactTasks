import React from "react";
import "./PMLoadingSpinnerStyle.css";

const PMLoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="dots-loading-container">
      <div className="dots-spinner">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      {text && <p className="dots-loading-text">{text}</p>}
    </div>
  );
};

export default PMLoadingSpinner;
