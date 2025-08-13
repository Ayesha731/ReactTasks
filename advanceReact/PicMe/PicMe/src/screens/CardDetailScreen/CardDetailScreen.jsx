import React from "react";
import { useFormik } from "formik";
import { cardDetailsSchema } from "../../schemas";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./CardDetailsScreenStyle.css";
import PaymentDetail from "../../assets/images/PaymentDetail.png";
import PMInput from "../../components/PMInput/PMInput";
import PMCustomerCard from "../../components/PMCustomerCard/PMCustomerCard";
import PMButton from "../../components/PMButton/PMButton";
import Calender from "../../assets/icons/CalenderIcon"; // make sure path is correct
import { NavLink } from "react-router-dom";

const CardDetailScreen = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      expiry: "",
      csv: "",
    },
    validationSchema: cardDetailsSchema,
    onSubmit: (values) => {
      console.log("Payment Form Submitted:", values);
      alert("Payment details submitted successfully!");
    },
  });

  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="payment-detail-wrapper">
          <h1 className="auth-text2">Payment Details</h1>

          <div className="payment-detail-container">
            {/* Left Side Image */}
            <div className="payment-detail-image">
              <img src={PaymentDetail} alt="Payment detail" />
            </div>

            {/* Right Side Form */}
            <PMCustomerCard>
              <form
                className="payment-detail-content"
                onSubmit={formik.handleSubmit}
              >
                <h1 className="auth-text3">Enter Card Details</h1>

                <div className="payment-options">
                  <PMInput
                    placeholder="Card Holder Name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                  />
                  <PMInput
                    placeholder="Card Number"
                    type="text"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.number}
                    touched={formik.touched.number}
                  />
                  <PMInput
                    placeholder="Expiry Date (MM/YY)"
                    type="date"
                    name="expiry"
                    value={formik.values.expiry}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.expiry}
                    touched={formik.touched.expiry}
                    icon={<Calender />}
                  />
                  <PMInput
                    placeholder="CSV"
                    type="text"
                    name="csv"
                    value={formik.values.csv}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.csv}
                    touched={formik.touched.csv}
                  />
                </div>
                <NavLink to={"/confirm"} className={"nav-link"}>
                  <PMButton varient="fill" type="submit">
                    <span className="btn-text">Continue</span>
                  </PMButton>
                </NavLink>
              </form>
            </PMCustomerCard>
          </div>
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default CardDetailScreen;
