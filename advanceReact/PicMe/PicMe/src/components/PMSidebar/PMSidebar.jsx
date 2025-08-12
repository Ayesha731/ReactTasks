import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon";
import PMButton from "../PMButton/PMButton";
import PMPhotographerProfile from "../PMPhotographerProfile/PMPhotographerProfile";
import { getApiWithAuth } from "../../api/api";
import { getAccessToken, removeAccessToken } from "../../utils/localStorage";
import "./PMSidebarStyle.css";
import PMInput from "../PMInput/PMInput";
import CheckIcon from "../../assets/icons/CheckIcon";
import { useNavigate } from "react-router-dom";

const photographerTypes = [
  "Wedding Photographer",
  "Street Photographer",
  "Birthday Photographer",
  "Concert Photographer",
  "Travel Photographer",
];

const PMSidebar = ({ searchData, onBack }) => {
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(false); // changed to false initially like second component
  const [error, setError] = useState(null);
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [selectedType, setSelectedType] = useState("Street Photographer");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Process API response when searchData changes
  useEffect(() => {
    if (searchData && searchData.apiResponse) {
      processPhotographersData(searchData.apiResponse);
    } else {
      // Optional: If no searchData, maybe fetch default photographers or clear list
      setPhotographers([]);
    }
  }, [searchData]);

  // Transform and set photographers based on API response shape
  const processPhotographersData = (apiResponse) => {
    try {
      let photographersList = [];

      if (Array.isArray(apiResponse)) {
        photographersList = apiResponse;
      } else if (apiResponse.data && Array.isArray(apiResponse.data)) {
        photographersList = apiResponse.data;
      } else if (
        apiResponse.photographers &&
        Array.isArray(apiResponse.photographers)
      ) {
        photographersList = apiResponse.photographers;
      } else {
        photographersList = [];
      }

      const transformedPhotographers = photographersList.map((item) => {
        if (item.photographer) {
          return {
            id: item.photographer.id,
            name: item.photographer.name,
            type: item.photographer.category || "Photographer",
            rating: parseFloat(item.photographer.average_rating || 4.5),
            totalReviews: item.photographer.total_reviews || 0,
            avatar:
              item.photographer.avatar_url || item.photographer.profile_image,
            isAvailable: item.is_available,
            location: item.photographer.address,
            experience: item.photographer.experience,
            priceRange: item.photographer.price_range,
          };
        } else {
          return {
            id: item.id,
            name: item.name,
            type: item.category || item.type || "Photographer",
            rating: parseFloat(item.average_rating || item.rating || 4.5),
            totalReviews: item.total_reviews || item.reviews_count || 0,
            avatar: item.avatar_url || item.profile_image || item.avatar,
            isAvailable: item.is_available !== false,
            location: item.address || item.location,
            experience: item.experience,
            priceRange: item.price_range,
          };
        }
      });

      setPhotographers(transformedPhotographers);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error processing photographers data:", err);
      setError("Failed to process photographers data");
      setPhotographers([]);
      setLoading(false);
    }
  };

  // You can decide to fetch photographers again or call onBack on retry.
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    if (onBack) {
      onBack(); // or you can call fetchPhotographers() if you keep that function
    }
  };

  const handlePhotographerClick = (photographer) => {
    setSelectedPhotographer(photographer);
    navigate(`/photographer-profile/${photographer.id}`, {
      state: { photographer },
    });
  };

  // If photographer selected, show profile view
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
        <div className="dropdown-wrapper1">
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
            <ul className="dropdown-list1">
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
          Searching for:{" "}
          <strong>{searchData?.photographerName || "All Photographers"}</strong>
        </p>
        {searchData?.fromDate && (
          <p className="para para2">
            From: {searchData.fromDate}{" "}
            {searchData.toDate && `to ${searchData.toDate}`}
          </p>
        )}
      </div>

      {/* Photographer Results Section */}
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
          <>
            <p className="results-count">
              Found {photographers.length} photographer
              {photographers.length !== 1 ? "s" : ""}
            </p>

            {photographers.length > 0 ? (
              <div className="photographers-list">
                {photographers.map((photographer) => (
                  <div
                    key={photographer.id}
                    className="photographer-item"
                    onClick={() => handlePhotographerClick(photographer)}
                  >
                    <PMPhotographerProfile
                      name={photographer.name}
                      type={photographer.type}
                      rating={photographer.rating}
                      totalReviews={photographer.totalReviews}
                      showButtons={false}
                      compact={true} // compact mode enabled
                      image={photographer.avatar}
                    />
                  </div>
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
          </>
        )}
      </div>
    </div>
  );
};

export default PMSidebar;
