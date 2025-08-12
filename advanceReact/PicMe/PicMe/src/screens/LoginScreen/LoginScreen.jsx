import React, { useState } from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./LoginScreenStyle.css";
import MessageIcon from "../../assets/icons/MessageIcon";
import PasswordIcon from "../../assets/icons/PasswordIcon";
import PMButton from "../../components/PMButton/PMButton";
import PMInput from "../../components/PMInput/PMInput";
import PMLoadingSpinner from "../../components/PMLoadingSpinner/PMLoadingSpinner";
import { LOGIN_URL } from "../../api/apiUrls";
import { postAPIWithoutAuth } from "../../api/api";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

const initialValues = {
  email: "",
  password: "",
  type: 0,
  rememberMe: false,
};

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        setIsSubmitting(true);
        try {
          console.log("Sending login request:", values);

          const response = await postAPIWithoutAuth(LOGIN_URL, {
            email: values.email,
            password: values.password,
            type: 0,
          });

          console.log("Full Response:", response);
          console.log("Response Headers:", response.headers);
          console.log("Response Data:", response.data);

          // Check if login was successful - user data is in response.data.data
          if (response.success && response.status === 200) {
            const userData = response.data?.data || response.data;
            console.log("Login Success - User Data:", userData);

            // Get token from headers (based on your log, it's in authorization header)
            let token = null;

            if (response.headers?.authorization) {
              token = response.headers.authorization;
              console.log("Token found in authorization header:", token);
            } else if (response.headers?.Authorization) {
              token = response.headers.Authorization;
              console.log("Token found in Authorization header:", token);
            } else if (response.headers?.["access-token"]) {
              token = `Bearer ${response.headers["access-token"]}`;
              console.log("Token found in access-token header:", token);
            } else {
              // Create a token from user data as fallback
              token = `user_${userData.id || Date.now()}_token`;
              console.log("Created fallback token:", token);
            }

            // Use the login function from useAuth hook
            login(token);

            // Also store user data
            localStorage.setItem("user_data", JSON.stringify(userData));

            console.log("Navigating to choose-location...");
            // Small delay to ensure state updates
            setTimeout(() => {
              navigate("/choose-location");
            }, 100);
          } else {
            console.log("Login Failed - Response:", response);
            alert("Login failed! Please check your credentials.");
          }
        } catch (err) {
          console.error("API Error:", err);
          alert("Login failed! Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      },
    });

  if (isSubmitting) {
    return <PMLoadingSpinner size="large" text="Signing you in..." />;
  }

  return (
    <div className="auth-screen">
      <PMLeftSection>
        <form onSubmit={handleSubmit} className="form">
          <h1 className="auth-text">Sign in</h1>

          <PMInput
            icon={<MessageIcon />}
            placeholder="Enter your email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
          />

          <PMInput
            icon={<PasswordIcon />}
            placeholder="Your password"
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
          />

          <div className="remember-section">
            <div className="remember">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <span className="slider"></span>
              </label>
              <span className="para">&nbsp;Remember Me</span>
            </div>
            <NavLink to="/forgot-password" className="nav-link">
              <p className="para1 span6">Forgot Password?</p>
            </NavLink>
          </div>

          <PMButton varient="fill" type="submit" disabled={isSubmitting}>
            <span className="btn-text">Sign in</span>
          </PMButton>

          <div className="or-divider">
            <div className="left-line"></div>
            <span className="or-text">OR</span>
            <div className="right-line"></div>
          </div>

          <PMButton varient="social" disabled={isSubmitting}>
            <FcGoogle className="btn-icon" />
            <span className="btn-text">Login with Google</span>
          </PMButton>

          <PMButton varient="social" disabled={isSubmitting}>
            <FaFacebook className="btn-icon" style={{ color: "#1877F2" }} />
            <span className="btn-text">Login with Facebook</span>
          </PMButton>

          <p className="para">
            Don't have an account? &nbsp;
            <NavLink to="/signup" className="nav-link">
              <span className="span1">Sign up</span>
            </NavLink>
          </p>
        </form>
      </PMLeftSection>

      <PMRightSection screen={"auth"} alt={"Login"} />
    </div>
  );
};

export default LoginScreen;
