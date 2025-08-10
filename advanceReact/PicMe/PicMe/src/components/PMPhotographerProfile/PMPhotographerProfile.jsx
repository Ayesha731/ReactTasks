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
  showButtons = true,
  compact = false, // new prop
}) => {
  const profileImage = image ? image : DefaultAvatar;

  return (
    <div className={`profile-wrapper ${compact ? "compact" : ""}`}>
      <img
        className="profile-photo"
        src={profileImage}
        alt={`${name} not found`}
        style={compact ? { width: 45, height: 45 } : {}}
      />
      <div className="profile-info">
        <h1 className={`auth-text2 ${compact ? "compact-name" : ""}`}>
          {name}
        </h1>
        <p className={`para-main ${compact ? "compact-type" : ""}`}>{type}</p>

        <div className={`profile-reviews ${compact ? "compact-reviews" : ""}`}>
          <span className="star">⭐</span>
          <span className="rating1">{rating}</span>
          <span className="para-reviews">({totalReviews} reviews)</span>
        </div>
      </div>

      {showButtons && !compact && (
        <div className="profile-btn">{/* buttons here */}</div>
      )}
    </div>
  );
};

export default PMPhotographerProfile;
