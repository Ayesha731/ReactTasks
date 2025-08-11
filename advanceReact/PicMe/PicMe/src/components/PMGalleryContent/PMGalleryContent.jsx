import React, { useState } from "react";
import "./PMGalleryContentStyle.css";
import PMPackagesCard from "../PMPakagesCard/PMPackagesCard";
import PlayIcon from "../../assets/icons/PlayIcon";
const PMGalleryContent = ({
  activeTab,
  photos,
  videos,
  reviews,
  selectedCategory,
  viewMode = "portfolio",
  onPackageSelect,
}) => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const fallbackPhotos = [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
  ];

  const fallbackVideos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_2mb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_5mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_10mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_20mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_50mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_70mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_100mb.mp4",
    "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_150mb.mp4",
  ];

  const fallbackReviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b6661ad4?w=100&h=100&fit=crop&crop=face",
      text: "Amazing photographer! Captured every moment perfectly.",
      rating: 5,
      date: "10 Feb",
    },
    {
      id: 2,
      user: "Mike Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Great experience working with this photographer.",
      rating: 5,
      date: "10 Jan",
    },
  ];

  if (viewMode === "packages") {
    return (
      <div className="gallery-content packages-content">
        <div className="packages-grid">
          <div onClick={() => onPackageSelect && onPackageSelect("Basic")}>
            <PMPackagesCard type="Basic" className="compact-card" />
          </div>
          <div onClick={() => onPackageSelect && onPackageSelect("Essential")}>
            <PMPackagesCard type="Essential" className="compact-card" />
          </div>
          <div onClick={() => onPackageSelect && onPackageSelect("Premium")}>
            <PMPackagesCard type="Premium" className="compact-card" />
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "photos":
        const displayPhotos =
          photos && photos.length > 0 ? photos : fallbackPhotos;
        return (
          <div className="gallery-grid">
            {displayPhotos.slice(0, 12).map((src, idx) => (
              <img key={idx} src={src} alt={`photo-${idx}`} />
            ))}
          </div>
        );

      case "videos":
        const displayVideos =
          videos && videos.length > 0 ? videos : fallbackVideos;
        return (
          <div className="gallery-grid">
            {displayVideos.slice(0, 12).map((src, idx) => (
              <div key={idx} className="video-card">
                <video
                  src={src}
                  controls={playingIndex === idx}
                  onClick={() => setPlayingIndex(idx)}
                  // poster="https://via.placeholder.com/400x300?text=Video"
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
        const displayReviews =
          reviews && reviews.length > 0 ? reviews : fallbackReviews;
        return (
          <div className="reviews-grid">
            {displayReviews.slice(0, 6).map((review) => (
              <div key={review.id || review.user} className="review-card">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="review-avatar"
                />

                <div className="review-content">
                  <div className="review-header">
                    <h4 className="review-user-name">{review.user}</h4>
                    <span className="review-time">
                      {review.date || "Aug 11, 2025"}
                    </span>
                  </div>

                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < review.rating ? "filled" : ""}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>

                  <p className="review-text">{review.text}</p>
                </div>
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
