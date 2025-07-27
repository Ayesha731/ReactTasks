import React from "react";

export default function Decision({ name, sayName, takeDecision, children }) {
  const [goingOut, setGoingOut] = React.useState(false);

  sayName(goingOut);
  console.log(takeDecision(goingOut));
  function toggleGoingOut() {
    setGoingOut((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleGoingOut}>Change mind</button>
      {/* <h1>
        Am I going out tonight,{name}?? {goingOut ? "Yes!" : "Nope..."}
      </h1> */}
      {takeDecision(goingOut)}
      {children(goingOut)}
    </div>
  );
}
