import React from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./ConfirmBookingScreenStyle.css";
import PaymentDone from "../../assets/images/PaymentDone.png";
import PMCustomerCard from "../../components/PMCustomerCard/PMCustomerCard";
import PMButton from "../../components/PMButton/PMButton";
import { NavLink } from "react-router-dom";
const ConfirmBookingScreen = () => {
  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="payment-confirm-wrapper">
          <h1 className="auth-text2">Payment Details</h1>

          <div className="payment-confirm-container">
            {/* Left Side Image */}
            <div className="payment-confirm-image">
              <img src={PaymentDone} alt="Payment detail" />
            </div>

            {/* Right Side Form */}
            <PMCustomerCard>
              <div className="payment-options">
                <h1 className="auth-text2">Booking Details</h1>
                <p className="para-main">
                  Your Order is booked with <br />{" "}
                  <span className="span1">Joy Mark.</span>Be there on July 16th
                  at <br /> 12:00 AM.
                </p>
                <PMButton varient="fill">
                  <NavLink to="/messages" className={"nav-link"}>
                    <span className="btn-text">Go To chat</span>
                  </NavLink>
                </PMButton>
                <PMButton varient="outline">
                  <NavLink to="/" className={"nav-link"}>
                    <span className="btn-text">Home</span>
                  </NavLink>
                </PMButton>
              </div>
            </PMCustomerCard>
          </div>
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default ConfirmBookingScreen;
