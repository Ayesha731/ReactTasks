import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      <h3>Welcome to my page!</h3>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about" className="my-link">
          About
        </NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <h2>About Me</h2>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  );
}

function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyApp;
