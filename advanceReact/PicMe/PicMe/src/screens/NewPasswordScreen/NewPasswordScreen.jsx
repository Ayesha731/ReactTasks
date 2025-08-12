import React from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import "./NewPasswordScreenStyle.css";
import PMButton from "../../components/PMButton/PMButton";
import PMInput from "../../components/PMInput/PMInput";
import PasswordIcon from "../../assets/icons/PasswordIcon";
import { useFormik } from "formik";
import { postAPIWithoutAuth } from "../../api/api";
import { FORGOT_URL } from "../../api/apiUrls";
import { newPasswordSchema } from "../../schemas";
const NewPasswordScreen = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { password: "", confirmPassword: "" },
      validationSchema: newPasswordSchema,
      onSubmit: async (values, action) => {
        console.log("Submitting:", values);

        try {
          const response = await postAPIWithoutAuth(FORGOT_URL, {
            password: values.password,
            confirm_password: values.confirmPassword,
          });

          if (response.success) {
            console.log("Password updated successfully:", response.data);
            alert("Password updated successfully!");
          } else {
            console.log("Password update failed:", response.data);
            alert(`Error: ${response.data.message || "Update failed"}`);
          }
        } catch (error) {
          console.error("API Error:", error);
          alert("Something went wrong, please try again.");
        }
        action.resetForm();
      },
    });
  return (
    <div className="auth-screen">
      <PMLeftSection>
        {/* Form */}
        <form onSubmit={handleSubmit} className="form">
          <h1 className="auth-text">Create New Password</h1>
          <p className="para para2">
            Your new password must be different from previous used password
          </p>
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
            endIcon={<HiddenIcon />}
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
            endIcon={<HiddenIcon />}
          />

          {/* Hint */}
          <div className="pass-remember-section">
            <p className="para para3">Both Password Must Match</p>
          </div>

          {/* Button */}
          <PMButton varient="fill" type="submit">
            <span className="btn-text">Update Password</span>
          </PMButton>
        </form>
      </PMLeftSection>
      <PMRightSection screen={"auth"} alt={"NewPassword"} />
    </div>
  );
};

export default NewPasswordScreen;
