import React from "react";
import "./PMLeftSectionStyle.css";
import Images from "../../constants/Images";

const PMLeftSection = ({ children }) => {
  return (
    <>
      <div className="left-section">
        <div className="logo">
          <img src={Images.logo} alt={"logo is not found"} />
        </div>
        <div className="left-section-content">{children}</div>
      </div>
    </>
  );
};

export default PMLeftSection;
