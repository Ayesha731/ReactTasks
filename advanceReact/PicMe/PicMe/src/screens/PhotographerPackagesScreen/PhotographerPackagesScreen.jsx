import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMPackagesCard from "../../components/PMPakagesCard/PMPackagesCard";
import "./PhotographerPackagesScreenStyle.css";

const PhotographerPackagesScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePackageSelect = (packageType) => {
    console.log(`Selected package: ${packageType} for photographer ${id}`);
    // Navigate to checkout with photographer ID and package type
    navigate(`/checkout?photographerId=${id}&package=${packageType}`);
  };

  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="packages-screen-wrapper">
          <h1 className="auth-text2">Choose Package</h1>
          <p className="para-main">
            Select the perfect package for your photography needs
          </p>

          <div className="packages-container">
            <div onClick={() => handlePackageSelect("Basic")}>
              <PMPackagesCard type="Basic" />
            </div>
            <div onClick={() => handlePackageSelect("Essential")}>
              <PMPackagesCard type="Essential" />
            </div>
            <div onClick={() => handlePackageSelect("Premium")}>
              <PMPackagesCard type="Premium" />
            </div>
          </div>
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default PhotographerPackagesScreen;
