import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import "../server.js";
import Vans from "./components/Vans/Vans.jsx";
import VanDetail from "./components/VanDetail/VanDetail.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Dashboard from "./components/Host/Dashboard.jsx";
import Income from "./components/Host/Income.jsx";
import Reviews from "./components/Host/Reviews.jsx";
import HostLayout from "./components/Host/HostLayout.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 1. What is the primary reason to use a nested route?
// Whenever we have some shared UI between routes in our app.

// 2. What is a "Layout Route"?
// It's the parent route of some nested routes that contains just
// the portion of the UI that will be shared. It will use an Outlet
// component.

// 3. What does the <Outlet /> component do? When do you use it?
// We use it anytime we have a parent Route that's wrapping
// children routes. It renders the matching child route's
// `element` prop given in its route definition

// 4. What is an "Index Route"?
// It's the "default route" we want to render when the path
// of the parent route matches. It gives us a chance to render
// an element inside the parent's <Outlet /> at the same path
// as the parent route.
