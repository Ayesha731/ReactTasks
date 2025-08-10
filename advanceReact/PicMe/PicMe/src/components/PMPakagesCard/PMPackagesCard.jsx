import React from "react";
import "./PMPackagesCardStyle.css";
import DiamondIcon from "../../assets/icons/DiamondIcon";
import BenzeneIcon from "../../assets/icons/BenzeneIcon";
import ButaneIcon from "../../assets/icons/ButaneIcon";
import { Colors } from "../../constants/Colors";
import PMButton from "../PMButton/PMButton";
import { NavLink } from "react-router-dom";

const PMPackagesCard = ({ type, className }) => {
  const packageData = {
    Basic: {
      color: Colors.basicCardColor,
      icon: <DiamondIcon />,
      heading: "Basic",
      price: "$10",
      points: ["2 days Package", "Up to 8 Photos", "Up to 1 Video"],
    },
    Essential: {
      color: Colors.essentailCardColor,
      icon: <BenzeneIcon />,
      heading: "Essential",
      price: "$14",
      points: ["4 days Package", "Up to 25 Photos", "Up to 4 Videos"],
    },
    Premium: {
      color: Colors.premiumCardColor,
      icon: <ButaneIcon />,
      heading: "Premium",
      price: "$30",
      points: ["6 days Package", "Up to 40 Photos", "Up to 6 Videos"],
    },
  };

  const selectedPackage = packageData[type];
  if (!selectedPackage) return null;

  return (
    <div
      className={`card-wrapper ${className || ""}`}
      style={{ backgroundColor: selectedPackage.color }}
    >
      {/* Icon */}
      <div className="card-icon">{selectedPackage.icon}</div>

      <div className="card-content">
        <p className="card-text">{selectedPackage.heading}</p>
        <h1 className="card-title">{selectedPackage.price}</h1>
      </div>
      <div className="points">
        <ul>
          {selectedPackage.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Button at Bottom */}
      <div className="card-btn">
        <PMButton varient="outline">
          <NavLink to="/login" className="nav-link">
            <span className="btn-text" style={{ fontWeight: "bold" }}>
              SELECTED
            </span>
          </NavLink>
        </PMButton>
      </div>
    </div>
  );
};

export default PMPackagesCard;
