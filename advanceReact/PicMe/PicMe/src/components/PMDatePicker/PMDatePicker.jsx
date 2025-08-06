import React, { useState } from "react";
import "./PMDatePickerStyle.css";

const PMDatePicker = ({ bookingFrom, bookingTo, onDateChange }) => {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today);

  const generateDays = (monthDate) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const adjustedStartIndex = (firstDayIndex + 6) % 7;
    const prevMonthDays = Array(adjustedStartIndex).fill(null);
    const currentMonthDays = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    );
    return [...prevMonthDays, ...currentMonthDays];
  };

  const handleDateClick = (day) => {
    if (!day) return;
    const clickedDate = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth(),
      day
    );

    if (!bookingFrom || (bookingFrom && bookingTo)) {
      onDateChange(clickedDate, null);
    } else if (clickedDate >= bookingFrom) {
      onDateChange(bookingFrom, clickedDate);
    } else {
      onDateChange(clickedDate, null);
    }
  };

  const isSelected = (day) => {
    if (!day) return false;
    const date = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth(),
      day
    );
    return (
      (bookingFrom && date.getTime() === bookingFrom.getTime()) ||
      (bookingTo && date.getTime() === bookingTo.getTime())
    );
  };

  const isInRange = (day) => {
    if (!bookingFrom || !bookingTo || !day) return false;
    const date = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth(),
      day
    );
    return date > bookingFrom && date < bookingTo;
  };

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Select Date";

  const days = generateDays(selectedMonth);

  return (
    <div className="date-card-content">
      <div className="date-range">
        <div className="date-box">
          <p className="date-label">Booking From</p>
          <h3 className="date-value">{formatDate(bookingFrom)}</h3>
        </div>
        <span className="divider" />
        <div className="date-box">
          <p className="date-label">Booking To</p>
          <h3 className="date-value">{formatDate(bookingTo)}</h3>
        </div>
      </div>

      <div className="calendar-section">
        <h4 className="calendar-month">
          {selectedMonth.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>

        <div className="calendar-days">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <span key={day} className="day-header">
              {day}
            </span>
          ))}
        </div>
        <div className="calendar-dates">
          {days.map((day, idx) => (
            <span
              key={idx}
              className={`date 
                ${isSelected(day) ? "selected" : ""} 
                ${isInRange(day) ? "in-range" : ""} 
                ${!day ? "empty" : ""}
              `}
              onClick={() => handleDateClick(day)}
            >
              {day || ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PMDatePicker;
