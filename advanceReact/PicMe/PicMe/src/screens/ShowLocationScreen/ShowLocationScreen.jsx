import React from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMMapSearchBar from "../../components/PMMapSearchBar/PMMapSearchBar";
import PMCard from "../../components/PMPakagesCard/PMPackagesCard";
import DiamondIcon from "../../assets/icons/DiamondIcon";
import PMSidebar from "../../components/PMSidebar/PMSidebar";
import PMPhotographerProfile from "../../components/PMPhotographerProfile/PMPhotographerProfile";

import map from "../../assets/images/map.png";
const ShowLocationScreen = () => {
 
  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div
          className="map-container"
          style={{
            backgroundImage: `url(${map})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
        
        </div>
        <PMMapSearchBar />
      </PMMainHeroSection>
    </div>
  );
};

export default ShowLocationScreen;
