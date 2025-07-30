import React, { useState } from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import PMButton from "../../components/PMButton/PMButton";
import PMLoginOtp from "../../components/PMOtpLogin/PMLoginOtp";

const VerificationScreen = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    console.log("Entered OTP:", otp);
    // Call API to verify OTP here
  };
  return (
    <div className="auth-screen">
      <PMLeftSection>
        <h1 className="auth-text">Verification</h1>
        <p className="para2">
          We've send you the verification code on abc@gamil.com
        </p>

        <PMLoginOtp length={4} onChangeOTP={setOtp} />
     
      </PMLeftSection>
      <PMRightSection screen={"auth"} alt={"verification"} />
    </div>
  );
};

export default VerificationScreen;
