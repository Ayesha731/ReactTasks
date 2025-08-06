import React from "react";
import { Navigate } from "react-router-dom";

const PMPublicRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");

  // If token exists → redirect to dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children; // No token → show login/signup page
};

export default PMPublicRoute;
