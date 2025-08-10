import React, { useState } from "react";
import "./PMMapSearchBarStyle.css";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon";
import DirectionIcon from "../../assets/icons/DirectionIcon";
import CalendarIcon from "../../assets/icons/CalenderIcon";
import { FaSearch } from "react-icons/fa";
import { getApiWithAuth } from "../../api/api";
import { SEARCH_PHOTOGRAPHER_URL } from "../../api/apiUrls";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const formatDateForAPI = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const PMMapSearchBar = ({ onSearch }) => {
  const [photographerName, setPhotographerName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const latitude = "29.780148267560097";
  const longitude = "-95.3657162519862";

  const handleSearchClick = async () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates.");
      return;
    }

    setIsLoading(true);

    try {
      const formattedStartDate = formatDateForAPI(fromDate);
      const formattedEndDate = formatDateForAPI(toDate);

      // We ignore name in API call, search only by date + location
      const apiUrl = `${SEARCH_PHOTOGRAPHER_URL}?start_date=${formattedStartDate}&end_date=${formattedEndDate}&latitude=${latitude}&longitude=${longitude}`;

      console.log("Calling API with URL:", apiUrl);

      const response = await getApiWithAuth(apiUrl);

      console.log("API response:", response);

      if (response.success) {
        onSearch({
          photographerName: photographerName.trim(), // optional, just pass it along
          fromDate,
          toDate,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          searchType: "date-location",
          apiResponse: response.data,
          searchResults: response.data,
        });
      } else {
        alert("No photographers found for the selected dates.");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    setPhotographerName("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="map-search-bar">
      <div className="upper-map-search">
        <div className="search-row">
          <div className="icon-btn" onClick={handleBackClick}>
            <ArrowBackIcon />
          </div>
          <input
            type="text"
            placeholder="Photographer name (optional)"
            className="search-input"
            value={photographerName}
            onChange={(e) => setPhotographerName(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="icon">
          <DirectionIcon />
        </div>
      </div>

      <div className="lower-map-search">
        <div className="date-row">
          <div className="date-input">
            <span>{fromDate ? formatDate(fromDate) : "From"}</span>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              onFocus={(e) => e.target.showPicker?.()}
              className="hidden-date-input"
              min={new Date().toISOString().split("T")[0]}
              disabled={isLoading}
            />
            <CalendarIcon />
          </div>

          <div className="date-input">
            <span>{toDate ? formatDate(toDate) : "To"}</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              onFocus={(e) => e.target.showPicker?.()}
              className="hidden-date-input"
              min={fromDate || new Date().toISOString().split("T")[0]}
              disabled={isLoading}
            />
            <CalendarIcon />
          </div>

          <div
            className="icon search-icon-btn"
            onClick={isLoading ? null : handleSearchClick}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          >
            <FaSearch color={isLoading ? "#888" : "inherit"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMMapSearchBar;
