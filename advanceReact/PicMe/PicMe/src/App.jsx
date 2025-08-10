import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your existing screens
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import ChooseLocationScreen from "./screens/ChooseLocationScreen/ChooseLocationScreen";
import ShowLocationScreen from "./screens/ShowLocationScreen/ShowLocationScreen";
// Your existing component
import PMProtectedRoute from "./components/PMProtectedRoute/PMProtectedRoute";
import PMPublicRoute from "./components/PMPublicRoute/PMPublicRoute";

// Import the new child components

// Import other existing screens
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import MessageScreen from "./screens/MessagesScreen/MessageScreen";
import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";
import PMNotFound from "./components/PMNotFound/PMNotFound";
import PhotosPage from "./pages/PhotoPage/PhotoPage";
import VideosPage from "./pages/VideoPage/VideoPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import PhotographerProfileScreen from "./screens/PhotographerProfileScreen/PhotographerProfileScreen";

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

        {/* Photographer Portfolio with nested routes */}
        <Route
          path="/photographer-profile/:id"
          element={
            <PMProtectedRoute>
              <PhotographerProfileScreen />
            </PMProtectedRoute>
          }
        >
          <Route index element={<PhotosPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route
          path="/profile"
          element={
            <PMProtectedRoute>
              <ProfileScreen />
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

        {/* 404 Route */}
        <Route path="*" element={<PMNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
