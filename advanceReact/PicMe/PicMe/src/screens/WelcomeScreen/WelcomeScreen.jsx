import React from "react";
import "./WelcomeScreenStyle.css";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMButton from "../../components/PMButton/PMButton";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import { NavLink } from "react-router-dom";

const WelcomeScreen = () => {
  // Remove automatic redirect - let users choose their path
  // This allows both logged-in and logged-out users to see welcome screen

  return (
    <div className="auth-screen">
      <PMLeftSection>
        <div className="welcome-screen-content">
          <h1 className="welcome-text">
            Experience <span className="span2">Photography</span> In a <br />
            new Dimension!
          </h1>
          <div className="button-div">
            <PMButton varient="fill">
              <NavLink to="/login" className={"nav-link"}>
                <span className="btn-text">Continue as customer</span>
              </NavLink>
            </PMButton>
            <PMButton varient="outline">
              <NavLink to="/login" className={"nav-link"}>
                <span className="btn-text">Continue as Photographer</span>
              </NavLink>
            </PMButton>
          </div>
        </div>
      </PMLeftSection>
      <PMRightSection screen={"welcome"} alt={"Welcome"} />
    </div>
  );
};

export default WelcomeScreen;
