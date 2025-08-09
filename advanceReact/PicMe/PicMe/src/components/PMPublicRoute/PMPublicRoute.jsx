import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";
import PMLoadingSpinner from "../PMLoadingSpinner/PMLoadingSpinner";

const PMPublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log(
    "PublicRoute - isLoading:",
    isLoading,
    "isAuthenticated:",
    isAuthenticated
  );

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <PMLoadingSpinner size="medium" text="Checking authentication..." />;
  }

  // If authenticated → redirect to choose-location
  if (isAuthenticated) {
    console.log("Authenticated, redirecting to choose-location");
    return <Navigate to="/choose-location" replace />;
  }

  console.log("Not authenticated, showing public content");
  return children; // Not authenticated → show login/signup pages
};

export default PMPublicRoute;
