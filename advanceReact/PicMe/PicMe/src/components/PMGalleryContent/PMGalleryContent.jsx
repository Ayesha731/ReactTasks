import React, { useState, useEffect } from "react";
import "./PMGalleryContentStyle.css";
import PMPackagesCard from "../PMPakagesCard/PMPackagesCard";
import PlayIcon from "../../assets/icons/PlayIcon";
import PMLoadingSpinner from "../PMLoadingSpinner/PMLoadingSpinner";
import { getApiWithAuth } from "../../api/api";

const PMGalleryContent = ({
  activeTab,
  photos,
  videos,
  reviews,
  selectedCategory,
  viewMode = "portfolio",
  onPackageSelect,
  photographerId, // Add photographer ID prop
}) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(false);

  // Fetch packages when viewMode is packages and photographer ID is available
  useEffect(() => {
    const fetchPackages = async () => {
      if (viewMode === "packages" && photographerId) {
        setPackagesLoading(true);
        try {
          const response = await getApiWithAuth(
            `https://api-dev.thepicmeapp.com/api/v1/packages/${photographerId}`
          );

          if (response.success && response.data?.data) {
            setPackages(response.data.data);
          } else {
            setPackages([]);
          }
        } catch (error) {
          console.error("Error fetching packages:", error);
          setPackages([]);
        } finally {
          setPackagesLoading(false);
        }
      }
    };

    fetchPackages();
  }, [viewMode, photographerId]);

  // If packages view, show dynamic packages
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
                <PMPackagesCard packageData={pkg} className="compact-card" />
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
