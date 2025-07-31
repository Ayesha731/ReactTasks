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
        <div className="form">
          <h1 className="auth-text">Verification</h1>
          <p className="para para2">
            We've sent you the verification code on abc@gmail.com
          </p>
          <PMLoginOtp length={4} onVerifyOTP={setOtp} />
        </div>
      </PMLeftSection>

      <PMRightSection screen={"auth"} alt={"verification"} />
    </div>
  );
};

export default VerificationScreen;
