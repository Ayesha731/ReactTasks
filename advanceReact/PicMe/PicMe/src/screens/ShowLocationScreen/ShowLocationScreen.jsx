import React from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMMapSearchBar from "../../components/PMMapSearchBar/PMMapSearchBar";

const ShowLocationScreen = () => {
  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        {/* Map or Inner Content */}
        <div className="map-container">map</div>
        <PMMapSearchBar />
      </PMMainHeroSection>
    </div>
  );
};

export default ShowLocationScreen;
