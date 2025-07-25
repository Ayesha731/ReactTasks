import React from "react";

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      console.log("Timer is running...");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <h2>{seconds} seconds</h2>;
};

export default Timer;
