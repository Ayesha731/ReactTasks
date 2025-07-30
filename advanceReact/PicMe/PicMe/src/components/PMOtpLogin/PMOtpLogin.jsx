import React, { useState } from "react";

const PMOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form onSubmit={() => {}}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Enter your phone number"
        />
      </form>
    </div>
  );
};

export default PMOtpLogin;
