import React, { useState } from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./CheckoutScreenStyle.css";
import PMPackagesCard from "../../components/PMPakagesCard/PMPackagesCard";
import PMCustomerCard from "../../components/PMCustomerCard/PMCustomerCard";
import PMButton from "../../components/PMButton/PMButton";
import PaypalIcon from "../../assets/icons/PaypalIcon";
import MasterCardIcon from "../../assets/icons/MasterCardIcon";
import VisaIcon from "../../assets/icons/VisaIcon";
import { NavLink } from "react-router-dom";

const CheckoutScreen = () => {
  const [selected, setSelected] = useState("mastercard");

  const paymentMethods = [
    { id: "visa", label: "Visa", icon: <VisaIcon /> },
    { id: "mastercard", label: "MasterCard", icon: <MasterCardIcon /> },
    { id: "paypal", label: "Paypal", icon: <PaypalIcon /> },
  ];

  const handleSelect = (method) => {
    setSelected(method);
  };

  const handleContinue = () => {
    alert(`Selected Payment Method: ${selected}`);
  };

  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="payment-card-wrapper">
          <h1 className="auth-text2">Payment Details</h1>
          <div className="payment-card-container">
            {/* Left side package card */}
            <PMPackagesCard type="Basic" onButtonClick={handleSelect} />

            {/* Right side payment selection */}
            <PMCustomerCard>
              <div className="payment-card-content">
                <h1 className="auth-text3">
                  Select the Payment method <br /> you want to use
                </h1>

                <div className="payment-options">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`payment-option ${
                        selected === method.id ? "selected" : ""
                      }`}
                      onClick={() => handleSelect(method.id)}
                    >
                      <div className="option-left">
                        {method.icon}
                        <span>{method.label}</span>
                      </div>
                      <div className="option-right">
                        <input
                          type="radio"
                          name="payment"
                          checked={selected === method.id}
                          readOnly
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <NavLink to={"/schedule"} className={"nav-link"}>
                  <PMButton varient="fill" onClick={handleContinue}>
                    <span className="btn-text">Continue</span>
                  </PMButton>
                </NavLink>
              </div>
            </PMCustomerCard>
          </div>
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default CheckoutScreen;
