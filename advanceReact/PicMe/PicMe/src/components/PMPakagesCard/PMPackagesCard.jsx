import React from "react";
import "./PMPackagesCardStyle.css";
import DiamondIcon from "../../assets/icons/DiamondIcon";
import BenzeneIcon from "../../assets/icons/BenzeneIcon";
import ButaneIcon from "../../assets/icons/ButaneIcon";
import PMButton from "../PMButton/PMButton";
import { NavLink } from "react-router-dom";

const PMPackagesCard = ({ type, className, packageData }) => {
  // If packageData is provided (from API), use it; otherwise use default static data
  if (packageData) {
    return (
      <div className={`card-wrapper ${className || ""}`}>
        {/* Icon */}
        <div className="card-icon">
          <DiamondIcon />
        </div>

        <div className="card-content">
          <p className="card-text">{packageData.name || "Package"}</p>
          <h1 className="card-title">
            {packageData.price ? `$${packageData.price}` : "$0"}
          </h1>
        </div>

        <div className="points">
          <ul>
            {packageData.description && <li>{packageData.description}</li>}
            {packageData.delivery_days != null && (
              <li>{packageData.delivery_days} days Package</li>
            )}
            {packageData.photos_count && (
              <li>Up to {packageData.photos_count} Photos</li>
            )}
            {packageData.videos_count && (
              <li>Up to {packageData.videos_count} Videos</li>
            )}
          </ul>
        </div>

        {/* Button at Bottom */}
        <div className="card-btn">
          <NavLink to={"/checkout"}>
            <PMButton varient="outline">
              <span className="btn-text" style={{ fontWeight: "bold" }}>
                SELECT
              </span>
            </PMButton>
          </NavLink>
        </div>
      </div>
    );
  }

  // Static fallback data for Basic/Essential/Premium
  const packageData_static = {
    Basic: {
      icon: <DiamondIcon />,
      heading: "Basic",
      price: "$10",
      points: ["2 days Package", "Up to 8 Photos", "Up to 1 Video"],
    },
    Essential: {
      icon: <BenzeneIcon />,
      heading: "Essential",
      price: "$14",
      points: ["4 days Package", "Up to 25 Photos", "Up to 4 Videos"],
    },
    Premium: {
      icon: <ButaneIcon />,
      heading: "Premium",
      price: "$30",
      points: ["6 days Package", "Up to 40 Photos", "Up to 6 Videos"],
    },
  };

  const selectedPackage = packageData_static[type];
  if (!selectedPackage) return null;

  return (
    <div className={`card-wrapper ${className || ""}`}>
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
