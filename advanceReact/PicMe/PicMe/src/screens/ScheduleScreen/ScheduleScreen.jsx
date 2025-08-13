import React, { useState } from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./ScheduleScreenStyle.css";
import PMDatePicker from "../../components/PMDatePicker/PMDatePicker";
import PMPackagesCard from "../../components/PMPakagesCard/PMPackagesCard";
import PMCustomerCard from "../../components/PMCustomerCard/PMCustomerCard";
import PMButton from "../../components/PMButton/PMButton";
import { NavLink } from "react-router-dom";
const ScheduleScreen = () => {
  const [bookingFrom, setBookingFrom] = useState(null);
  const [bookingTo, setBookingTo] = useState(null);

  const handleDateChange = (from, to) => {
    setBookingFrom(from);
    setBookingTo(to);
  };
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
        <div className="payment-schedule-wrapper">
          <h1 className="auth-text2">Payment Details</h1>
          <div className="payment-schedule-container">
            {/* Left side package card */}
            <PMPackagesCard type="Basic" onButtonClick={handleSelect} />

            {/* Right side payment selection */}

            <PMCustomerCard>
              <div className="schedule-screen-content">
                <h1 className="auth-text3">Choose Date</h1>
                <PMDatePicker
                  bookingFrom={bookingFrom}
                  bookingTo={bookingTo}
                  onDateChange={handleDateChange}
                />
                <NavLink to={"/card-detail"} className={"nav-link"}>
                  <PMButton
                    varient="fill"
                    onClick={() => console.log({ bookingFrom, bookingTo })}
                  >
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

export default ScheduleScreen;
