import React from "react";
import "./PMMapSearchBarStyle.css";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon";
import DirectionIcon from "../../assets/icons/DirectionIcon";
import CalendarIcon from "../../assets/icons/CalenderIcon";

const PMMapSearchBar = () => {
  return (
    <div className="map-search-bar">
      <div className="upper-map-search">
        <div className="search-row">
          <div className="icon-btn">
            <ArrowBackIcon />
          </div>
          <input
            type="text"
            placeholder="Find for Photographers"
            className="search-input"
          />
        </div>
        <div className="icon">
          <DirectionIcon />
        </div>
      </div>

      {/* Date Filter Row */}
      <div className="lower-map-search">
        <div className="date-row">
          <div className="date-input">
            <span>From</span>
            <CalendarIcon />
          </div>
          <div className="date-input">
            <span>To</span>
            <CalendarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMMapSearchBar;
