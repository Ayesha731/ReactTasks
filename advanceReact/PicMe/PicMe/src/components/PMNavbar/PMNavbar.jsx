import React from "react";
import "./PMNavbarStyle.css";
import HomeIcon from "../../assets/icons/HomeIcon";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/images/logo2.png";
import ChatIcon from "../../assets/icons/ChatIcon";
import ProfileMenuIcon from "../../assets/icons/profileMenuIcon";
const PMNavbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo2} alt="image not found" />
        </div>

        <ul className="navbar-menu">
          <li>
            <NavLink to="/" className="nav-link1">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chats" className="nav-link1">
              <ChatIcon />
              <span>Chats</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="nav-link1">
              <ProfileMenuIcon />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PMNavbar;
