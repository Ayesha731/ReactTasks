import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log("Checking auth status, token:", token);

      // Check if token exists and is not null/undefined
      const isAuth = !!(token && token !== "null" && token !== "undefined");
      setIsAuthenticated(isAuth);
      console.log("Is authenticated:", isAuth);
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (token) => {
    try {
      console.log("Login called with token:", token);
      localStorage.setItem("access_token", token);
      setIsAuthenticated(true);
      console.log("Auth state updated to true");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    try {
      console.log("Logout called");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_data");
      setIsAuthenticated(false);
      console.log("Auth state updated to false");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuthStatus,
  };
}
