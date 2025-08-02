import React from "react";
import { Navigate } from "react-router-dom";
const PMProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token"); // Check token in localStorage

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children; // If token exists, render the child component;
};

export default PMProtectedRoute;
