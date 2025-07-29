import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <Link to={"/"}>
          {/* <img src={logo} alt={`logo image not found`} />{" "} */}
          #VANLIFE
        </Link>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/vans"}>Vans</Link>
          <Link to={"/host"}>Host</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
