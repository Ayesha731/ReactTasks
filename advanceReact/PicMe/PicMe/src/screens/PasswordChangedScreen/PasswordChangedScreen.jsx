import React from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import "./PasswordChangedScreenStyle.css";
import PMButton from "../../components/PMButton/PMButton";
import SuccessMarkIcon from "../../assets/icons/SuccessMarkIcon";
const PasswordChangedScreen = () => {
  return (
    <div className="auth-screen">
      <PMLeftSection>
        <SuccessMarkIcon />
        <h1 className="auth-text2">Password Changed!</h1>
        <p className="para">Your password has been changed successfully.</p>
        <PMButton varient="fill">
          <span className="btn-text">Back to Login</span>
        </PMButton>
      </PMLeftSection>
      <PMRightSection screen={"auth"} alt={"Password Changed"} />
    </div>
  );
};

export default PasswordChangedScreen;
