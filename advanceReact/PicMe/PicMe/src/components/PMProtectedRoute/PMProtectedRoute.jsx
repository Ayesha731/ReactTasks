import React from "react";
import { Navigate } from "react-router-dom";

const PMProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");

  // If no token → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children; // If token exists → show the page
};

export default PMProtectedRoute;
