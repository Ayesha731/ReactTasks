import { useState } from "react";
import Header from "./components/header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import FetchContext from "./contexts/FetchContext";

function App() {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <h1>Loading....</h1>;
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
