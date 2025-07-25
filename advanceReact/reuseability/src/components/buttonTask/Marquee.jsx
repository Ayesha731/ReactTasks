import React from "react";

export default function Marquee(props) {
  return (
    <div className="marquee">
      <h1>{props.children}</h1>
    </div>
  );
}
