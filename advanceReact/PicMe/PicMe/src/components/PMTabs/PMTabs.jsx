import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa"; // Photos icon
import { FaRegPlayCircle } from "react-icons/fa"; // Videos icon
import { FaRegCommentDots } from "react-icons/fa"; // Reviews icon
import "./PMTabsStyle.css";

const PMTabs = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
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
          <option value="all">CATEGORY TYPE</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="event">Event</option>
        </select>
      </div>
    </div>
  );
};

export default PMTabs;
