import React from "react";
import "./PMGalleryContentStyle.css";

const PMGalleryContent = ({ activeTab, photos, videos, reviews }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "photos":
        return (
          <div className="gallery-grid">
            {photos.map((src, idx) => (
              <img key={idx} src={src} alt={`photo-${idx}`} />
            ))}
          </div>
        );
      case "videos":
        return (
          <div className="gallery-grid">
            {videos.map((src, idx) => (
              <div key={idx} className="video-card">
                <img src={src} alt={`video-${idx}`} />
                <span className="play-icon">▶</span>
              </div>
            ))}
          </div>
        );
      case "reviews":
        return (
          <div className="reviews-grid ">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <h1>{review.user}</h1>
                <p>{review.text}</p>
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
