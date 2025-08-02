import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import "./PMErrorStyle.css";
import PMButton from "../PMButton/PMButton";

const PMError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-container">
      <div className="error-box">
        <h2>⚠ Oops! Something Went Wrong</h2>
        <p className="error-message">
          {error?.statusText || error?.message || "Unexpected Error Occurred!"}
        </p>
        <div className="error-actions">
          <PMButton varient={"fill"} onClick={handleGoBack}>
            🔙 Go Back
          </PMButton>
          <PMButton varient={"outline"} onClick={handleGoHome}>
            🏠 Go Home
          </PMButton>
        </div>
      </div>
    </div>
  );
};

export default PMError;
