import React from "react";
import PMLeftSection from "../../components/PMLeftSection/PMLeftSection";
import PMRightSection from "../../components/PMRightSection/PMRightSection";
import PMButton from "../../components/PMButton/PMButton";
import PMInput from "../../components/PMInput/PMInput";
import BackArrowIcon from "../../assets/icons/BackArrowIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import { useFormik } from "formik";
import { FORGOT_URL } from "../../api/apiUrls";
import { postAPIWithoutAuth } from "../../api/api";
import { forgotPasswordSchema } from "../../schemas";

const ForgotPasswordScreen = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values, action) => {
        console.log("Form submitted", values);

        const response = await postAPIWithoutAuth(FORGOT_URL, {
          email: values.email,
        });

        if (response.success) {
          console.log("Password reset email sent successfully", response.data);
        } else {
          console.log("Error sending reset email", response.data);
        }
        action.resetForm();
      },
    });
  return (
    <div className="auth-screen">
      <PMLeftSection>
        <form onSubmit={handleSubmit} className="form">
          <h1 className="auth-text">Forgot Password?</h1>
          <p className="para para2">
            Please enter your email address to request a password reset
          </p>
          {/* Email Field */}
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

          {/* Continue Button */}
          <PMButton varient="fill" type="submit">
            <span className="btn-text">Continue</span>
          </PMButton>

          {/* Back Button */}
          <PMButton varient="outline" type="button">
            <BackArrowIcon />
            <span className="btn-text">Back to Login</span>
          </PMButton>
        </form>
      </PMLeftSection>
      <PMRightSection screen={"auth"} alt={"ForgotPassword"} />
    </div>
  );
};

export default ForgotPasswordScreen;
