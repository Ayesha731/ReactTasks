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
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
    "/images/photo5.png",
    "/images/photo6.png",
  ];

  const videos = [
    "/images/video-thumbnail1.png",
    "/images/video-thumbnail2.png",
    "/images/video-thumbnail3.png",
  ];

  const reviews = [
    { id: 1, text: "Amazing photographer! ⭐⭐⭐⭐⭐" },
    { id: 2, text: "Great experience. Highly recommend!" },
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
