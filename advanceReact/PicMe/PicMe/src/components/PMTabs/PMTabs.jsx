import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./PMTabsStyle.css";
import DropdownIcon from "../../assets/icons/DropdownIcon";

const PMTabs = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  categories = ["all"],
  viewMode = "portfolio", // "portfolio" or "packages"
}) => {
  // If in packages mode, only show Choose Package button
  if (viewMode === "packages") {
    return (
      <div className="tabs-wrapper packages-only">
        <div className="tabs-center">
          <button className="tab-btn packages-tab active">
            CHOOSE PACKAGE
          </button>
        </div>
      </div>
    );
  }

  // If in portfolio mode, show all tabs + category dropdown
  return (
    <div className="tabs-wrapper">
      <div className="tabs-left">
        <button
          className={`tab-btn ${activeTab === "photos" ? "active" : ""}`}
          onClick={() => setActiveTab("photos")}
        >
          PHOTOS
          <FaChevronDown className="chevron" />
        </button>
        <button
          className={`tab-btn ${activeTab === "videos" ? "active" : ""}`}
          onClick={() => setActiveTab("videos")}
        >
          VIDEOS
          <FaChevronDown className="chevron" />
        </button>
        <button
          className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          REVIEWS
        </button>
      </div>

      <div className="tabs-right">
        <div className="dropdown-wrapper">
          <select
            className={`category-dropdown ${
              selectedCategory !== "all" ? "selected" : ""
            }`}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category === "all" ? "CATEGORY TYPE" : category.toUpperCase()}
              </option>
            ))}
          </select>

          <DropdownIcon className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default PMTabs;
