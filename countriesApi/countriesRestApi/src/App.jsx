import { useState } from "react";
import Header from "./components/header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import FetchContext from "./contexts/FetchContext";
import SpinnerLoader from "./components/shimmerEffect/SpinnerLoader";
function App() {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <SpinnerLoader />;
  return (
    <>
      <FetchContext>
        <Header />
        <Outlet />
      </FetchContext>
    </>
  );
}

export default App;
