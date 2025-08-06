import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const confirmPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^(){}[\]<>.,;:'"`~|\\])/,
      "Password must contain letters, numbers & a special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const cardDetailsSchema = Yup.object({
  name: Yup.string()
    .required("Card Holder Name is required")
    .min(3, "Name must be at least 3 characters"),
  number: Yup.string()
    .required("Card Number is required")
    .matches(/^[0-9]{16}$/, "Card number must be 16 digits"),
  expiry: Yup.string()
    .required("Expiry Date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),
  csv: Yup.string()
    .required("CSV is required")
    .matches(/^[0-9]{3,4}$/, "CSV must be 3 or 4 digits"),
});
