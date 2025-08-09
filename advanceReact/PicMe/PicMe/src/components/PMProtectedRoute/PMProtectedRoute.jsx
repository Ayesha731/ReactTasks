import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";
import PMLoadingSpinner from "../PMLoadingSpinner/PMLoadingSpinner";

const PMProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log(
    "ProtectedRoute - isLoading:",
    isLoading,
    "isAuthenticated:",
    isAuthenticated
  );

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <PMLoadingSpinner size="medium" text="Verifying your access..." />;
  }

  // If not authenticated → redirect to login
  if (!isAuthenticated) {
    console.log("Not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Authenticated, showing protected content");
  return children; // If authenticated → show the page
};

export default PMProtectedRoute;
