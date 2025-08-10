import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./PMTabsStyle.css";

const PMTabs = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  categories = ["all"], // Default categories array
}) => {
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
          <FaChevronDown className="chevron" />
        </button>
      </div>

      <div className="tabs-right">
        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category === "all" ? "CATEGORY TYPE" : category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PMTabs;
