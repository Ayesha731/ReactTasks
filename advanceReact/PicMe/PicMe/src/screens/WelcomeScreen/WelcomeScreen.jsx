import React from "react";
import "./WelcomeScreenStyle.css";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMButton from "../../components/PMButton/PMButton";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import rightImg from "../../assets/images/cameraBlueHalf.png";
const WelcomeScreen = () => {
  return (
    <>
      <div className="auth-screen">
        <PMLeftSection>
          <div className="welcome-screen-content">
            <h1 className="welcome-text">
              Experience <span className="span2">Photography</span> In a <br />
              new Dimension!
            </h1>
            <div className="button-div">
              <PMButton varient="fill">
                <span className="btn-text">Continue as customer</span>
              </PMButton>
              <PMButton varient="outline">
                <span className="btn-text">Continue as Photgrapher</span>
              </PMButton>
            </div>
          </div>
        </PMLeftSection>
        <PMRightSection screen={"welcome"} alt={"Welcome"} />
      </div>
    </>
  );
};

export default WelcomeScreen;
