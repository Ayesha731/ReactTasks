import React from "react";
import "./PMGalleryContentStyle.css";

const PMGalleryContent = ({
  activeTab,
  photos,
  videos,
  reviews,
  selectedCategory,
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
      user: "Rocks Valentinen",
      text: "Lorem ipsum dolor sit amet consectetur. Lectus cursus suscipit ultrices elementum tellus hac mauris nulla lorem cras mauris neque porttitor.",
    },
    {
      id: 2,
      user: "Rocks Valentinen",
      text: "Lorem ipsum dolor sit amet consectetur. Lectus cursus suscipit ultrices elementum tellus hac mauris nulla lorem cras mauris neque porttitor.",
    },
    {
      id: 3,
      user: "Rocks Valentinen",
      text: "Lorem ipsum dolor sit amet consectetur. Lectus cursus suscipit ultrices elementum tellus hac mauris nulla lorem cras mauris neque porttitor.",
    },
    {
      id: 4,
      user: "Rocks Valentinen",
      text: "Lorem ipsum dolor sit amet consectetur. Lectus cursus suscipit ultrices elementum tellus hac mauris nulla lorem cras mauris neque porttitor.",
    },
    {
      id: 5,
      user: "Rocks Valentinen",
      text: "Lorem ipsum dolor sit amet consectetur. Lectus cursus suscipit ultrices elementum tellus hac mauris nulla lorem cras mauris neque porttitor.",
    },
    {
      id: 6,
      user: "Rocks Valentinen",
      text: "Lorem ipsum dolor sit amet consectetur. Lectus cursus suscipit ultrices elementum tellus hac mauris nulla lorem cras mauris neque porttitor.",
    },
  ];

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
                <span className="play-icon">▶</span>
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
                  <h4>{review.user}</h4>
                  <div className="review-rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="review-time">2d ago</span>
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
