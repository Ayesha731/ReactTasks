import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home/Home.jsx";
import Error from "./components/error/Error.jsx";
import CountryDetail from "./components/countryDetail/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <div>Contact Us</div>,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
