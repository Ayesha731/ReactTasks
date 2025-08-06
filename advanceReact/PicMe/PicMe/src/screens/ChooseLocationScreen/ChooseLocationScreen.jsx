import React from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import "./ChooseLocationScreenStyle.css";
import PMButton from "../../components/PMButton/PMButton";
import MapIcon from "../../assets/icons/MapIcon";
const ChooseLocationScreen = () => {
  return (
    <div className="location-wrapper">
      <PMLeftSection>
        <div className="location-screen">
          <MapIcon />
          <h1 className="auth-text2">Search Location</h1>
          <p className="para">
            Find the best photographers in your <br />
            area for your next event!
          </p>
          <PMButton varient="fill">
            <span className="btn-text">Choose Location</span>
          </PMButton>
        </div>
      </PMLeftSection>
    </div>
  );
};

export default ChooseLocationScreen;
