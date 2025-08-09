import React from "react";
import "./PMNavbarStyle.css";
import HomeIcon from "../../assets/icons/HomeIcon";
import { NavLink, useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/logo2.png";
import ChatIcon from "../../assets/icons/ChatIcon";
import ProfileMenuIcon from "../../assets/icons/ProfileMenuIcon";
import { useAuth } from "../../customHooks/useAuth";

const PMNavbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo2} alt="image not found" />
        </div>

        <ul className="navbar-menu">
          <li>
            <NavLink to="/show-location" className="nav-link1">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" className="nav-link1">
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
          <li>
            <button
              onClick={handleLogout}
              className="nav-link1 logout-btn"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--secondary-color)",
                fontSize: "16px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PMNavbar;
