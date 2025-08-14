import React, { useState, useEffect } from "react";
import "./PMGalleryContentStyle.css";
import PMPackagesCard from "../PMPakagesCard/PMPackagesCard";
import PlayIcon from "../../assets/icons/PlayIcon";
import PMLoadingSpinner from "../PMLoadingSpinner/PMLoadingSpinner";

import { getApiWithAuth } from "../../api/api";
import { GET_PHOTOGRAPHER_PACKAGES_URL } from "../../api/apiUrls";

const PMGalleryContent = ({
  activeTab,
  photos,
  videos,
  reviews,
  selectedCategory,
  viewMode = "portfolio",
  onPackageSelect,
  photographerId,
}) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(false);

  const fetchPackages = async () => {
    if (!photographerId) return;

    try {
      setPackagesLoading(true);
      const response = await getApiWithAuth(
        `${GET_PHOTOGRAPHER_PACKAGES_URL}/${photographerId}`
      );

      console.log("Packagesss data:", response);

      if (response.success && response.data) {
        // If your API returns a single object, wrap it in an array, otherwise set directly
        const data = Array.isArray(response.data.data)
          ? response.data.data
          : [response.data.data];
        setPackages(data);
      } else {
        setPackages([]);
      }
    } catch (error) {
      console.error("Packages fetch error:", error);
      setPackages([]);
    } finally {
      setPackagesLoading(false);
    }
  };

  // Fetch packages whenever viewMode changes to "packages"
  useEffect(() => {
    if (viewMode === "packages" && photographerId) {
      fetchPackages();
    }
  }, [viewMode, photographerId]);

  if (viewMode === "packages") {
    return (
      <div className="gallery-content packages-content">
        {packagesLoading ? (
          <PMLoadingSpinner text="Loading packages..." />
        ) : packages.length > 0 ? (
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id || index}
                onClick={() => onPackageSelect && onPackageSelect(pkg)}
              >
                <PMPackagesCard
                  packageData={{
                    name: pkg.name,
                    price: pkg.price,
                    description: pkg.description,
                    duration: pkg.delivery_days,
                    photos_count: pkg.photos_count,
                    videos_count: pkg.videos_count,
                  }}
                  className="compact-card"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data-container">
            <div className="no-data-content">
              <h3>No Packages Available</h3>
              <p>This photographer hasn't added any packages yet.</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "photos":
        if (!photos || photos.length === 0) {
          return (
            <div className="no-data-container">
              <div className="no-data-content">
                <h3>No Photos Available</h3>
                <p>This user has no photos to display.</p>
              </div>
            </div>
          );
        }
        return (
          <div className="gallery-grid">
            {photos.slice(0, 12).map((src, idx) => (
              <img key={idx} src={src} alt={`photo-${idx}`} />
            ))}
          </div>
        );

      case "videos":
        if (!videos || videos.length === 0) {
          return (
            <div className="no-data-container">
              <div className="no-data-content">
                <h3>No Videos Available</h3>
                <p>This user has no videos to display.</p>
              </div>
            </div>
          );
        }
        return (
          <div className="gallery-grid">
            {videos.slice(0, 12).map((src, idx) => (
              <div key={idx} className="video-card">
                <video
                  src={src}
                  controls={playingIndex === idx}
                  onClick={() => setPlayingIndex(idx)}
                />
                {playingIndex !== idx && (
                  <div
                    className="play-icon"
                    onClick={() => setPlayingIndex(idx)}
                  >
                    <PlayIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case "reviews":
        if (!reviews || reviews.length === 0) {
          return (
            <div className="no-data-container">
              <div className="no-data-content">
                <h3>No Reviews Available</h3>
                <p>This user has no reviews yet.</p>
              </div>
            </div>
          );
        }
        return (
          <div className="reviews-grid">
            {reviews.slice(0, 6).map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="review-avatar"
                  />
                  <div className="review-user-info">
                    <h4>{review.user}</h4>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < review.rating ? "filled" : ""}
                        >
                          ⭐
                        </span>
                      ))}
                      <span className="review-time">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="gallery-content">{renderContent()}</div>;
};

export default PMGalleryContent;
