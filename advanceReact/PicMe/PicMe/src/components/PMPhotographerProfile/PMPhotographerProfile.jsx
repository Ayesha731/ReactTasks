import React from "react";
import "./PMPhotographerProfileStyle.css";
import PMButton from "../PMButton/PMButton";
import { NavLink } from "react-router-dom";
import PackagesIcon from "../../assets/icons/PackagesIcon";
import AvatarPorfolioIcon from "../../assets/icons/AvatarPortfolioIcon";
import DefaultAvatar from "../../assets/images/avatar.png"; // fallback image

const PMPhotographerProfile = ({
  image,
  name,
  type,
  rating,
  totalReviews,
  showButtons = true, // default true
}) => {
  const profileImage = image ? image : DefaultAvatar;

  return (
    <div className="profile-wrapper">
      <img
        className="profile-photo"
        src={profileImage}
        alt={`${name} not found`}
      />
      <div className="profile-info">
        <h1 className="auth-text2">{name}</h1>
        <p className="para-main">{type}</p>

        <div className="profile-reviews">
          <span className="star">⭐</span>
          <span className="rating1">{rating}</span>
          <span className="para-reviews">({totalReviews} reviews)</span>
        </div>
      </div>

      {/* Conditionally show buttons */}
      {showButtons && (
        <div className="profile-btn">
          <PMButton varient="fill">
            <NavLink to="/" className="nav-link">
              <span className="span3">
                <AvatarPorfolioIcon /> Portfolio
              </span>
            </NavLink>
          </PMButton>
          <PMButton varient="outline">
            <NavLink to="/checkout" className="nav-link">
              <span className="span4 ">
                <PackagesIcon /> Package
              </span>
            </NavLink>
          </PMButton>
        </div>
      )}
    </div>
  );
};

export default PMPhotographerProfile;
