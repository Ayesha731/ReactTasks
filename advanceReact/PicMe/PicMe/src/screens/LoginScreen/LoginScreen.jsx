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
import { LOGIN_URL, ME } from "../../api/apiUrls";
import { getApiWithAuth, postAPIWithoutAuth } from "../../api/api";
import { removeAccessToken, setAccessToken } from "../../utils/localStorage";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { loginSchema } from "../../schemas";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginScreen = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        try {
          console.log("Sending login request:", values);
          const response = await postAPIWithoutAuth(LOGIN_URL, {
            email: values.email,
            password: values.password,
          });

          if (response.success) {
            console.log("Login Success:", response.data);
            setAccessToken(response.headers.getAuthorization());
          } else {
            console.log("Login Failed:", response.data);
          }
        } catch (err) {
          console.error(
            "API Error Response:",
            err.response?.data || err.message
          );
        }
        action.resetForm();
      },
    });

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
              <span className="para"> &nbsp;Remember Me</span>
            </div>
            <p className="para1">Forgot Password?</p>
          </div>
          <PMButton varient="fill" type="submit">
            <span className="btn-text">Sign in</span>
          </PMButton>
          <div className="divider">
            <span className="line1"></span>
            <span className="text">OR</span>
            <span className="line2"></span>
          </div>

          <PMButton varient="social">
            <FcGoogle className="btn-icon" />
            <span className="btn-text">Login with Google</span>
          </PMButton>

          <PMButton varient="social">
            <FaFacebook className="btn-icon" style={{ color: "#1877F2" }} />
            <span className="btn-text ">Login with Facebook</span>
          </PMButton>
          <p className="para">
            Don't have an account? &nbsp;
            <span className="span1">Sign up</span>
          </p>
        </form>
      </PMLeftSection>
      <PMRightSection screen={"auth"} alt={"Login"} />
    </div>
  );
};

export default LoginScreen;
