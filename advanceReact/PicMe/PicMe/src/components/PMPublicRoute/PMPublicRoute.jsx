import React from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken, removeAccessToken } from "../../utils/localStorage";

const PMPublicRoute = ({ children }) => {
  const token = getAccessToken();

  if (token) {
    removeAccessToken();
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PMPublicRoute;
