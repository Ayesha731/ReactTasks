import React, { useState } from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMMapSearchBar from "../../components/PMMapSearchBar/PMMapSearchBar";
import PMSidebar from "../../components/PMSidebar/PMSidebar";
import map from "../../assets/images/map.png";

const ShowLocationScreen = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchData, setSearchData] = useState({
    photographerName: "",
    fromDate: null,
    toDate: null,
  });

  const handleSearch = (searchParams) => {
    setSearchData(searchParams);
    setShowSidebar(true);
  };

  const handleBackToSearch = () => {
    setShowSidebar(false);
  };

  // Show all photographers
  const handleShowAllPhotographers = () => {
    setSearchData({
      photographerName: "",
      fromDate: null,
      toDate: null,
    });
    setShowSidebar(true);
  };

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
            position: "relative",
          }}
        >
          {!showSidebar ? (
            <PMMapSearchBar
              onSearch={handleSearch}
              onShowAll={handleShowAllPhotographers}
            />
          ) : (
            <PMSidebar searchData={searchData} onBack={handleBackToSearch} />
          )}
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default ShowLocationScreen;
