import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your existing screens
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "./screens/NewPasswordScreen/NewPasswordScreen";
import PasswordChangedScreen from "./screens/PasswordChangedScreen/PasswordChangedScreen";
import ChooseLocationScreen from "./screens/ChooseLocationScreen/ChooseLocationScreen";
import ShowLocationScreen from "./screens/ShowLocationScreen/ShowLocationScreen";
import VerificationScreen from "./screens/VerificationScreen/VerificationScreen";
// Your existing component
import PMProtectedRoute from "./components/PMProtectedRoute/PMProtectedRoute";
import PMPublicRoute from "./components/PMPublicRoute/PMPublicRoute";

// Import other existing screens
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import MessageScreen from "./screens/MessagesScreen/MessageScreen";
import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";
import PMNotFound from "./components/PMNotFound/PMNotFound";
import PhotographerProfileScreen from "./screens/PhotographerProfileScreen/PhotographerProfileScreen";
import PhotographerPackagesScreen from "./screens/PhotographerPackagesScreen/PhotographerPackagesScreen";
import ConfirmBookingScreen from "./screens/ConfirmBookingScreen/ConfirmBookingScreen";
import ScheduleScreen from "./screens/ScheduleScreen/ScheduleScreen";
import ReviewsScreen from "./screens/ReviewsScreen/ReviewsScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PMPublicRoute>
              <WelcomeScreen />
            </PMPublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PMPublicRoute>
              <LoginScreen />
            </PMPublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PMPublicRoute>
              <SignUpScreen />
            </PMPublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PMPublicRoute>
              <ForgotPasswordScreen />
            </PMPublicRoute>
          }
        />
        <Route
          path="/new-password"
          element={
            <PMPublicRoute>
              <NewPasswordScreen />
            </PMPublicRoute>
          }
        />
        <Route
          path="/password-changed"
          element={
            <PMPublicRoute>
              <PasswordChangedScreen />
            </PMPublicRoute>
          }
        />
        <Route
          path="/verification"
          element={
            <PMPublicRoute>
              <VerificationScreen />
            </PMPublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/choose-location"
          element={
            <PMProtectedRoute>
              <ChooseLocationScreen />
            </PMProtectedRoute>
          }
        />
        <Route
          path="/show-location"
          element={
            <PMProtectedRoute>
              <ShowLocationScreen />
            </PMProtectedRoute>
          }
        />

        {/* Photographer Profile Routes */}
        <Route
          path="/photographer-profile/:id"
          element={
            <PMProtectedRoute>
              <PhotographerProfileScreen />
            </PMProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PMProtectedRoute>
              <ProfileScreen />
            </PMProtectedRoute>
          }
        />

        {/* Standalone Packages Route */}
        <Route
          path="/photographer-packages/:id"
          element={
            <PMProtectedRoute>
              <PhotographerPackagesScreen />
            </PMProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <PMProtectedRoute>
              <MessageScreen />
            </PMProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PMProtectedRoute>
              <CheckoutScreen />
            </PMProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <PMProtectedRoute>
              <ScheduleScreen />
            </PMProtectedRoute>
          }
        />
        <Route
          path="/confirm"
          element={
            <PMProtectedRoute>
              <ConfirmBookingScreen />
            </PMProtectedRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PMProtectedRoute>
              <ReviewsScreen />
            </PMProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<PMNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
