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
  showButtons = true,
  compact = false,
  onPackageClick,
  onPortfolioClick,
  showCustomButtons = false, // New prop for custom buttons
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const profileImage = image ? image : DefaultAvatar;

  const handlePackageClick = () => {
    if (onPackageClick) {
      onPackageClick();
    } else {
      navigate(`/photographer/${id}/packages`);
    }
  };

  const handlePortfolioClick = () => {
    if (onPortfolioClick) {
      onPortfolioClick();
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

      {/* Show custom buttons for photographer profile screen */}
      {showCustomButtons && !compact && (
        <div className="profile-btn custom-profile-buttons">
          <PMButton varient="outline" onClick={handlePortfolioClick}>
            <span className="span3">
              <AvatarPorfolioIcon /> Portfolio
            </span>
          </PMButton>
          <PMButton varient="outline" onClick={handlePackageClick}>
            <span className="span4">
              <PackagesIcon /> Package
            </span>
          </PMButton>
        </div>
      )}

      {/* Show default buttons for other screens */}
      {showButtons && !compact && !showCustomButtons && (
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
