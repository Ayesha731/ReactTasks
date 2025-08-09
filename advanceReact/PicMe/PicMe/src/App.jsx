import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import PMButton from "./components/PMButton/PMButton";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import VerificationScreen from "./screens/VerificationScreen/VerificationScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "./screens/NewPasswordScreen/NewPasswordScreen";
import PasswordChangedScreen from "./screens/PasswordChangedScreen/PasswordChangedScreen";
import ChooseLocationScreen from "./screens/ChooseLocationScreen/ChooseLocationScreen";
import PMInput from "./components/PMInput/PMInput";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import PMProtectedRoute from "./components/PMProtectedRoute/PMProtectedRoute";
import PMNotFound from "./components/PMNotFound/PMNotFound";
import PMError from "./components/PMError/PMError";
import ShowLocationScreen from "./screens/ShowLocationScreen/ShowLocationScreen";
import ReviewsScreen from "./screens/ReviewsScreen/ReviewsScreen";
import PMPublicRoute from "./components/PMPublicRoute/PMPublicRoute";
import MessageScreen from "./screens/MessagesScreen/MessageScreen";
import PhotographerProfileScreen from "./screens/PhotographerProfileScreen/PhotographerProfileScreen";
import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";
import ScheduleScreen from "./screens/ScheduleScreen/ScheduleScreen";
import CardDetailScreen from "./screens/CardDetailScreen/CardDetailScreen";
import ConfirmBookingScreen from "./screens/ConfirmBookingScreen/ConfirmBookingScreen";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />} errorElement={<PMError />}>
          {/* Welcome Screen - Always accessible */}
          <Route index element={<WelcomeScreen />} />

          {/* Public Routes - Only accessible when NOT logged in */}
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
            path="/verification"
            element={
              <PMPublicRoute>
                <VerificationScreen />
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

          {/* Protected Routes - Only accessible when logged in */}
          <Route
            path="/choose-location"
            element={
              <PMProtectedRoute>
                <ChooseLocationScreen />
              </PMProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PMProtectedRoute>
                <DashboardScreen />
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
          <Route
            path="/reviews"
            element={
              <PMProtectedRoute>
                <ReviewsScreen />
              </PMProtectedRoute>
            }
          />
          <Route
            path="/photographer"
            element={
              <PMProtectedRoute>
                <PhotographerProfileScreen />
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
            path="/card-details"
            element={
              <PMProtectedRoute>
                <CardDetailScreen />
              </PMProtectedRoute>
            }
          />
          <Route
            path="/confirm-booking"
            element={
              <PMProtectedRoute>
                <ConfirmBookingScreen />
              </PMProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <PMProtectedRoute>
                <MessageScreen />
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

          {/* 404 Page */}
          <Route path="*" element={<PMNotFound />} />
        </Route>
        {/* 404 PAGE OUTSIDE ROOT */}
        <Route path="*" element={<PMNotFound />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
