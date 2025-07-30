import React, { Children } from "react";
import "./PMRightSectionStyle.css";
import Images from "../../constants/Images";
const PMRightSection = ({ screen, alt }) => {
  return (
    <div className="right-section">
      {screen === "welcome" && (
        <img src={Images.cameraBlueHalfImg} alt={`${alt} image not found`} />
      )}
      {screen === "auth" && (
        <img src={Images.cameraBlueFullImg} alt={`${alt} image not found`} />
      )}
    </div>
  );
};

export default PMRightSection;
