import React, { useEffect, useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon";
import PMButton from "../PMButton/PMButton";
import PMPhotographerProfile from "../PMPhotographerProfile/PMPhotographerProfile";
import { getApiWithAuth } from "../../api/api";
import { getAccessToken, removeAccessToken } from "../../utils/localStorage";
import "./PMSidebarStyle.css";
import PMInput from "../PMInput/PMInput";
import CheckIcon from "../../assets/icons/CheckIcon";
const photographerTypes = [
  "Wedding Photographer",
  "Street Photographer",
  "Birthday Photographer",
  "Concert Photographer",
  "Travel Photographer",
];

const PMSidebar = ({ searchData, onBack }) => {
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [selectedType, setSelectedType] = useState("Street Photographer");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch photographers when component mounts
  useEffect(() => {
    fetchPhotographers();
  }, []);

  const fetchPhotographers = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if token exists
      const token = await getAccessToken();
      if (!token) {
        setError("Token not found. Please login again.");
        setLoading(false);
        return;
      }

      // Call your backend API
      const response = await getApiWithAuth(
        `/photographers?search=${encodeURIComponent(
          searchData.photographerName
        )}&from_date=${searchData.fromDate}&to_date=${searchData.toDate}`
      );

      if (response.success) {
        // Handle successful response
        const photographersList =
          response.data.photographers || response.data || [];
        setPhotographers(photographersList);
      } else {
        // Handle API error
        if (
          response.data?.message?.includes("Token not found") ||
          response.data?.error?.includes("Unauthorized")
        ) {
          setError("Session expired. Please login again.");
          await removeAccessToken();
          // In real app, redirect to login
        } else {
          setError(response.data?.message || "Failed to fetch photographers");
        }

        // Fallback to mock data for demo
        setPhotographers([
          {
            id: 1,
            name: "Sarah Johnson",
            type: "Wedding Photographer",
            rating: 4.8,
            totalReviews: 120,
            avatar:
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
          },
          {
            id: 2,
            name: "Michael Chen",
            type: "Street Photographer",
            rating: 4.9,
            totalReviews: 85,
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          },
          {
            id: 3,
            name: "Emma Rodriguez",
            type: "Birthday Photographer",
            rating: 4.7,
            totalReviews: 95,
            avatar:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
          },
        ]);
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Network error. Please check your connection.");

      // Fallback to mock data
      setPhotographers([
        {
          id: 1,
          name: "Sarah Johnson",
          type: "Wedding Photographer",
          rating: 4.8,
          totalReviews: 120,
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchPhotographers();
  };

  const handlePhotographerClick = (photographer) => {
    setSelectedPhotographer(photographer);
  };

  // If photographer is selected, show profile
  if (selectedPhotographer) {
    return (
      <div className="photographers-container sidebar-position">
        <div className="sidebar-header">
          <button
            onClick={() => setSelectedPhotographer(null)}
            className="back-btn"
          >
            <ArrowBackIcon />
          </button>
          <h2 className="auth-text">Photographer Profile</h2>
        </div>

        <div className="profile-container">
          <PMPhotographerProfile
            image={selectedPhotographer.avatar}
            name={selectedPhotographer.name}
            type={selectedPhotographer.type}
            rating={selectedPhotographer.rating}
            totalReviews={selectedPhotographer.totalReviews}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="photographers-container sidebar-position">
      {/* Header with back button */}
      <div className="sidebar-header">
        <button onClick={onBack} className="back-btn">
          <div style={{ width: "100%" }}>
            <PMInput
              icon={<ArrowBackIcon />}
              placeholder="Northup Way"
              type="text"
            />
          </div>
        </button>

        <h1 className="auth-text">Photographers Lists</h1>
        <p className="para para2">
          Find the best photographers in your area for your next event!
        </p>
        <div className="dropdown-wrapper">
          <div style={{ width: "100%" }}>
            <PMInput
              icon={<FaSearch />}
              placeholder="Search photographers"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              onFocus={() => setDropdownOpen(true)}
              endIcon={<CheckIcon />}
            />
          </div>

          {dropdownOpen && (
            <ul className="dropdown-list">
              {photographerTypes.map((type) => (
                <li
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setDropdownOpen(false);
                  }}
                >
                  {type}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Search Info */}
      <div className="search-info">
        <p className="para para2">
          Searching for: <strong>{searchData.photographerName}</strong>
        </p>
        {searchData.fromDate && (
          <p className="para para2">
            From: {searchData.fromDate}{" "}
            {searchData.toDate && `to ${searchData.toDate}`}
          </p>
        )}
      </div>

      {/* Photographer Results Section (Fixed Height to prevent jump) */}
      <div className="photographers-section">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Searching photographers...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <div className="error-content">
              <FaSearch className="error-icon" />
              <p className="error-text">{error}</p>
              <PMButton varient="outline" onClick={handleRetry}>
                <span className="btn-text">Retry</span>
              </PMButton>
            </div>
          </div>
        ) : (
          <div className="photographers-results">
            <p className="results-count">
              Found {photographers.length} photographer
              {photographers.length !== 1 ? "s" : ""}
            </p>

            {photographers.length > 0 ? (
              <div className="photographers-list">
                {photographers.map((photographer) => (
                  <PMPhotographerProfile
                    key={photographer.id}
                    name={photographer.name}
                    type={photographer.type}
                    rating={photographer.rating}
                    totalReviews={photographer.totalReviews}
                    showButtons={false}
                    onClick={() => handlePhotographerClick(photographer)}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <FaSearch className="no-results-icon" />
                <p>No photographers found</p>
                <p className="no-results-subtitle">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PMSidebar;
