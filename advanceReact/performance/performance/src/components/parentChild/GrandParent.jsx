import React from "react";
import Parent from "./Parent";
import { sleep } from "../profiler/utils";
function GrandParent({ style, increment }) {
  sleep(30);
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
  return (
    <div className="grandparent" style={style}>
      <p>
        GrandParent Component <button onClick={increment}>+</button>
      </p>
      <Parent />
      <Parent />
    </div>
  );
}

export default React.memo(GrandParent);
