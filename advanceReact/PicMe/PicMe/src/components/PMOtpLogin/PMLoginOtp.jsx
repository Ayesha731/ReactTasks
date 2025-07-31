import React, { useState, useEffect, useRef } from "react";
import "./PMLoginOtpStyle.css";
import PMButton from "../PMButton/PMButton";

const PMLoginOtp = ({ length = 4, onVerifyOTP }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);
  const intervalRef = useRef(null);

  // ✅ Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // ✅ Handle OTP input
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if digit entered
      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // ✅ Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // ✅ Timer logic
  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [timer]);

  // ✅ Reset timer & OTP
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(30); // Reset timer
    setOtp(new Array(length).fill("")); // Clear OTP fields
    inputRefs.current[0]?.focus(); // Focus first input
  };

  // ✅ Verify OTP
  const handleVerify = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length === length) {
      onVerifyOTP(finalOtp);
    } else {
      alert("Please enter complete OTP");
    }
  };

  return (
    <div className="otp-container">
      {/* OTP Input Fields */}
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="otp-box"
          />
        ))}
      </div>
      {/* Verify Button */}
      <PMButton varient="fill" onClick={handleVerify}>
        <span className="btn-text">Verify</span>
      </PMButton>
      {/* Timer Section */}
      {timer > 0 ? (
        <p className="para1">
          Resend OTP in <strong className="span1">{formatTime(timer)}</strong>
        </p>
      ) : (
        <p className="para1">
          Didn’t get the code?
          <button onClick={resetTimer} className="resend-btn">
            Resend OTP
          </button>
        </p>
      )}
    </div>
  );
};

export default PMLoginOtp;
