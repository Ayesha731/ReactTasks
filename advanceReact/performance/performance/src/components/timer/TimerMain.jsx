import React from "react";
import { faker } from "@faker-js/faker";
import Timer from "./Timer";
const TimerMain = () => {
  const [showTimer, setShowTimer] = React.useState(false);

  function toggleTimer() {
    setShowTimer((prev) => !prev);
  }

  return (
    <div>
      <button className="button" onClick={toggleTimer}>
        {showTimer ? "Hide" : "Show"} Timer
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default TimerMain;
