import React from "react";
import Decision from "./Dicision";
import { HiH1 } from "react-icons/hi2";

const RenderProp = () => {
  return (
    <div>
      <Decision
        name="Ayesha"
        sayName={function (goingOut) {
          console.log(
            goingOut ? "Yes i am going out" : "Nope i am not going out"
          );
        }}
        takeDecision={(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      >
        {(goingOut) => {
          return (
            <h1>
              Am I going out tonight??{" "}
              {goingOut ? "Yes!wohooo😊🥳" : "Nope...😩"}
            </h1>
          );
        }}
      </Decision>
    </div>
  );
};

export default RenderProp;
