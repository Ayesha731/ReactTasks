import { useState } from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { FetchApi } from "./contexts/FetchContext";

function App() {
  return (
    <>
      <FetchApi>
        <Header />
        <Outlet />
      </FetchApi>
    </>
  );
}

export default App;
