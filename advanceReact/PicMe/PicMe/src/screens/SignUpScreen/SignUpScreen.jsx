import React from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import PMButton from "../../components/PMButton/PMButton";
import { FaCamera, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import MessageIcon from "../../assets/icons/MessageIcon";
import PasswordIcon from "../../assets/icons/PasswordIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import { useFormik } from "formik";
import PMInput from "../../components/PMInput/PMInput";
import { SIGNUP_URL, ME } from "../../api/apiUrls";
import { postAPIWithoutAuth } from "../../api/api";
import { removeAccessToken, setAccessToken } from "../../utils/localStorage";
import { signupSchema } from "../../schemas";
import { NavLink } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  type: 0,
};

const SignUpScreen = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, action) => {
        try {
          console.log("Signup Data:", values);
          const response = await postAPIWithoutAuth(SIGNUP_URL, {
            email: values.email,
            password: values.password,
            password_confirmation: values.confirmPassword,
            name: values.name,
            type: values.type,
          });

          if (response.success) {
            console.log("Signup Success:", response.data);
            alert("Signup successful! You can now login.");
          } else {
            console.log(
              "Signup Failed:",
              response.data.errors || response.data
            );
            alert(response.data.errors || "Signup failed!");
          }
        } catch (err) {
          console.error("Signup Error:", err.response?.data || err.message);
        }
        action.resetForm();
      },
    });

  return (
    <div className="auth-screen">
      <PMLeftSection>
        <form onSubmit={handleSubmit} className="form">
          <h1 className="auth-text">Sign Up</h1>
          <PMInput
            icon={<ProfileIcon />}
            placeholder="Full name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            error={errors.name}
            touched={touched.name}
          />

          {/* Email */}
          <PMInput
            icon={<MessageIcon />}
            placeholder="abc@gmail.com"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
          />

          {/* Password */}
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

          {/* Confirm Password */}
          <PMInput
            icon={<PasswordIcon />}
            placeholder="Confirm password"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />

          {/* Button */}
          <PMButton varient="fill" type="submit">
            <span className="btn-text">Sign Up</span>
          </PMButton>

          {/* FIXED DIVIDER - Same as login */}
          <div className="divider-direct">
            <div className="line1"></div>
            <span className="text">OR</span>
            <div className="line2"></div>
          </div>

          {/* Social Login Buttons */}
          <PMButton varient="social">
            <FcGoogle className="btn-icon" />
            <span className="btn-text">Login with Google</span>
          </PMButton>
          <PMButton varient="social">
            <FaFacebook className="btn-icon" style={{ color: "#1877F2" }} />
            <span className="btn-text ">Login with Facebook</span>
          </PMButton>

          {/* Already have account */}
          <p className="para">
            Already have an account? &nbsp;
            <NavLink to={"/login"} className={"nav-link"}>
              <span className="span1">Login</span>
            </NavLink>
          </p>
        </form>
      </PMLeftSection>
      <PMRightSection screen={"auth"} alt={"SingUp"} />
    </div>
  );
};

export default SignUpScreen;
