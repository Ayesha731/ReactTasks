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
          <Route index element={<WelcomeScreen />} />
          <Route
            path="/login"
            element={
              // <PMPublicRoute>
              <LoginScreen />
              // </PMPublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              // <PMPublicRoute>
              <SignUpScreen />
              // </PMPublicRoute>
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
            path="chat"
            element={
              <PMProtectedRoute>
                <MessageScreen />
              </PMProtectedRoute>
            }
          />

          <Route path="verification" element={<VerificationScreen />} />
          <Route path="new-password" element={<NewPasswordScreen />} />
          <Route path="password-changed" element={<PasswordChangedScreen />} />
          <Route path="choose-location" element={<ChooseLocationScreen />} />
          <Route path="show-location" element={<ShowLocationScreen />} />
          <Route path="reviews" element={<ReviewsScreen />} />
          <Route path="photographer" element={<PhotographerProfileScreen />} />
          <Route path="checkout" element={<CheckoutScreen />} />
          <Route path="schedule" element={<ScheduleScreen />} />
          <Route path="card-details" element={<CardDetailScreen />} />
          <Route path="confirm-booking" element={<ConfirmBookingScreen />} />
          <Route path="messages" element={<MessageScreen />} />

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
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <VerificationScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      {/* <PasswordChangedScreen /> */}
      {/* <ChooseLocationScreen /> */}
    </>
  );
}

export default App;
