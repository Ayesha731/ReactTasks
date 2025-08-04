import React from "react";
import "./PMCardStyle.css";
const PMCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-icon">{cardIcon}</div>
      <div className="card-heading">
        <p className="card-text">{cardText}</p>
        <h1 className="card-heading">{cardHeading}</h1>
      </div>
      <div className="points">
        <ul>
          <li>{point1}</li>
          <li>{point2}</li>
          <li>{point3}</li>
        </ul>
      </div>
      <div className="card-btn">
        <button>
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default PMCard;
