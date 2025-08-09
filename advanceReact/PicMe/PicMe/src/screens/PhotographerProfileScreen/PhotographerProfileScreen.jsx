import React, { useState } from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./PhotographerProfileScreenStyle.css";
import PMPhotographerProfile from "../../components/PMPhotographerProfile/PMPhotographerProfile";
import avatar from "../../assets/images/avatar.png";
import PMTabs from "../../components/PMTabs/PMTabs";
import PMGalleryContent from "../../components/PMGalleryContent/PMGalleryContent";
const PhotographerProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Dummy data (replace later with backend API)
  const photos = [
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
    "/images/gallery-img1.png",
  ];

  const videos = [
    "/images/video-thumbnail1.png",
    "/images/video-thumbnail2.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
    "/images/video-thumbnail3.png",
  ];

  const reviews = [
    { id: 1, text: "Amazing photographer! ⭐⭐⭐⭐⭐" },
    { id: 2, text: "Great experience. Highly recommend!" },
    { id: 3, text: "Great experience. Highly recommend!" },
    { id: 4, text: "Great experience. Highly recommend!" },
    { id: 5, text: "Great experience. Highly recommend!" },
    { id: 6, text: "Great experience. Highly recommend!" },
  ];

  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="porfile-upper-section">
          <PMPhotographerProfile
            image={avatar}
            name="John Doe"
            type="Wedding Photographer"
            rating={4.8}
            totalReviews={120}
          />
        </div>
        <div className="porfile-lower-section">
          <PMTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <PMGalleryContent
            activeTab={activeTab}
            photos={photos}
            videos={videos}
            reviews={reviews}
          />
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default PhotographerProfileScreen;
