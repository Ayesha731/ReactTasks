import React from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./PhotographerProfileScreenStyle.css";
import PMPhotographerProfile from "../../components/PMPhotographerProfile/PMPhotographerProfile";
import avatar from "../../assets/images/avatar.png";
const PhotographerProfileScreen = () => {
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
        <div className="porfile-lower-section"></div>
      </PMMainHeroSection>
    </div>
  );
};

export default PhotographerProfileScreen;
