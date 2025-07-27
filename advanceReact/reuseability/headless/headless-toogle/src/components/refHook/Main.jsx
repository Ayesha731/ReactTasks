import React from "react";
import ReactDOM from "react-dom/client";

export default function Main() {
  const [on, setOn] = React.useState(false);
  //   const [renderCount, setRenderCount] = React.useState(0);
  const renderCount = React.useRef(0);
  console.log(renderCount);

  function forceRender() {
    setOn((prevOn) => !prevOn);
  }

  function incrementRenderCount() {
    renderCount.current++;
  }

  React.useEffect(() => {
    //   setRenderCount((prevCount) => prevCount + 1);
    renderCount.current++;
  });

  return (
    <>
      <h3>Understanding refs</h3>

      <button onClick={forceRender}>Force re-render w/ state change</button>
      <button onClick={incrementRenderCount}>Increment Ref Count</button>
      {/* <h4>Render count: {renderCount}</h4> */}
      <h4>Render count: {renderCount.current}</h4>
    </>
  );
}
