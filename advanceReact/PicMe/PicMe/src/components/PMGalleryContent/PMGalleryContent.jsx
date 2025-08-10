import React from "react";
import "./PMGalleryContentStyle.css";
import PMPackagesCard from "../PMPakagesCard/PMPackagesCard";

const PMGalleryContent = ({
  activeTab,
  photos,
  videos,
  reviews,
  selectedCategory,
  viewMode = "portfolio", // "portfolio" or "packages"
  onPackageSelect,
}) => {
  // Dummy fallback data matching your Figma design
  const fallbackPhotos = [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-b936bb81b2a8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  ];

  const fallbackVideos = [
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-b936bb81b2a8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
  ];

  const fallbackReviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b6661ad4?w=100&h=100&fit=crop&crop=face",
      text: "Amazing photographer! Captured every moment perfectly. The quality of work exceeded my expectations and I would definitely recommend to anyone looking for professional photography services.",
      rating: 5,
      time: "2d ago",
    },
    {
      id: 2,
      user: "Mike Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Great experience working with this photographer. Very professional and the results were fantastic. Will definitely book again for future events.",
      rating: 5,
      time: "5d ago",
    },
    {
      id: 3,
      user: "Lisa Chen",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Professional and creative approach. The photographer understood exactly what I wanted and delivered beautiful photos that captured the essence of our special day.",
      rating: 5,
      time: "1w ago",
    },
    {
      id: 4,
      user: "John Davis",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Excellent work and very responsive communication throughout the entire process. The attention to detail was remarkable and the final results were outstanding.",
      rating: 4,
      time: "2w ago",
    },
    {
      id: 5,
      user: "Anna Thompson",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      text: "Beautiful photos and great value for money. The photographer was professional, punctual, and delivered exactly what was promised.",
      rating: 5,
      time: "3w ago",
    },
    {
      id: 6,
      user: "David Wilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Will definitely book again for future events! The quality of work and professionalism shown was exceptional. Highly recommend this photographer.",
      rating: 5,
      time: "1m ago",
    },
  ];

  // If view mode is packages, show packages
  if (viewMode === "packages") {
    return (
      <div className="gallery-content packages-content">
        <div className="packages-grid">
          <div onClick={() => onPackageSelect && onPackageSelect("Basic")}>
            <PMPackagesCard type="Basic" />
          </div>
          <div onClick={() => onPackageSelect && onPackageSelect("Essential")}>
            <PMPackagesCard type="Essential" />
          </div>
          <div onClick={() => onPackageSelect && onPackageSelect("Premium")}>
            <PMPackagesCard type="Premium" />
          </div>
        </div>
      </div>
    );
  }

  // Portfolio view mode
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
                <img src={src} alt={`video-${idx}`} />
                <div className="play-icon">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path d="M0 0V24L20 12L0 0Z" fill="white" />
                  </svg>
                </div>
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
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img
                    src={
                      review.avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        review.user
                      )}&background=2BAFC7&color=fff&size=40`
                    }
                    alt={review.user}
                    className="review-avatar"
                  />
                  <div className="review-user-info">
                    <h4>{review.user}</h4>
                    <div className="review-rating">
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={
                              star <= (review.rating || 5) ? "filled" : ""
                            }
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="review-time">
                        {review.time || "2d ago"}
                      </span>
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
