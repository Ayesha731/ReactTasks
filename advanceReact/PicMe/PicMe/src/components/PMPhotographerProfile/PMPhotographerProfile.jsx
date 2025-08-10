import React from "react";
import "./PMPhotographerProfileStyle.css";
import PMButton from "../PMButton/PMButton";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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
  compact = false,
  onPackageClick, // new prop for custom package click handler
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const profileImage = image ? image : DefaultAvatar;

  const handlePackageClick = () => {
    if (onPackageClick) {
      onPackageClick();
    } else {
      // Default behavior - navigate to packages
      navigate(`/photographer/${id}/packages`);
    }
  };

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

      {/* Conditionally show buttons */}
      {showButtons && !compact && (
        <div className="profile-btn">
          <PMButton varient="fill">
            <NavLink to={`/photographer/portfolio/${id}`} className="nav-link">
              <span className="span3">
                <AvatarPorfolioIcon /> Portfolio
              </span>
            </NavLink>
          </PMButton>
          <PMButton varient="outline" onClick={handlePackageClick}>
            <span className="span4">
              <PackagesIcon /> Package
            </span>
          </PMButton>
        </div>
      )}
    </div>
  );
};

export default PMPhotographerProfile;
