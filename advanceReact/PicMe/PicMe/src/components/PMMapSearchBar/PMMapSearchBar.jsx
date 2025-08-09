import React, { useState } from "react";
import "./PMMapSearchBarStyle.css";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon";
import DirectionIcon from "../../assets/icons/DirectionIcon";
import CalendarIcon from "../../assets/icons/CalenderIcon";

const PMMapSearchBar = ({ onSearch }) => {
  const [photographerName, setPhotographerName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearchClick = () => {
    // Validate that at least photographer name is entered
    if (!photographerName.trim()) {
      alert("Please enter photographer name or type");
      return;
    }

    // Pass search data to parent component (ShowLocationScreen)
    onSearch({
      photographerName: photographerName.trim(),
      fromDate,
      toDate,
    });
  };

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
            value={photographerName}
            onChange={(e) => setPhotographerName(e.target.value)}
          />
        </div>
        <div className="icon search-icon-btn" onClick={handleSearchClick}>
          <DirectionIcon />
        </div>
      </div>

      {/* Date Filter Row */}
      <div className="lower-map-search">
        <div className="date-row">
          <div className="date-input">
            <span>From</span>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="hidden-date-input"
            />
            <CalendarIcon />
          </div>
          <div className="date-input">
            <span>To</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="hidden-date-input"
            />
            <CalendarIcon />
          </div>
          <div className="icon search-icon-btn" onClick={handleSearchClick}>
            <DirectionIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMMapSearchBar;
