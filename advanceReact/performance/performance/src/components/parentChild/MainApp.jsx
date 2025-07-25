import React from "react";
import "../../components/parentChild/GrandParent.css";
import GrandParent from "./GrandParent";
const MainApp = () => {
  const [count, setCount] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);
  
  // function increment() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  const increment = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  // const style = {
  //   backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
  //   color: darkMode ? "#e9e3ff" : "#2b283a",
  // };
  const style = React.useMemo(() => {
    return {
      backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
      color: darkMode ? "#e9e3ff" : "#2b283a",
    };
  }, [darkMode]);

  // console.log(
  //   {
  //     backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
  //     color: darkMode ? "#e9e3ff" : "#2b283a",
  //   } ===
  //     {
  //       backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
  //       color: darkMode ? "#e9e3ff" : "#2b283a",
  //     }
  // );
  React.useEffect(() => {
    console.log("style changed");
  }, [style]);

  console.log("[GP] [P] [C] [GC] APP just rendered");
  return (
    <>
      <h1>count : {count}</h1>
      <div>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <h2>{count}</h2>
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
        <p>App component</p>
        {/* <GrandParent count={count} /> */}
        <GrandParent style={style} increment={increment} />
        <GrandParent />
      </div>
    </>
  );
};

export default MainApp;
