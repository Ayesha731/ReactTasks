import React, { useState } from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./ReviewsScreenStyle.css";
import PMButton from "../../components/PMButton/PMButton";

const ReviewsScreen = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="main-review">
          <div className="rating">
            <div className="sub-rating">
              <h1 className="auth-text2">What is Your Rating ?</h1>

              {/* Stars Section */}
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${
                      star <= (hover || rating) ? "filled" : ""
                    }`}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="feedback-text">
                Please share your feedback <br /> about the photographer
              </p>

              <textarea
                name="comment"
                id="comment"
                placeholder="He is super good in photography........."
              ></textarea>

              <div className="review-btn">
                <PMButton varient={"fill"} width="469px">
                  <span className="btn-text">Send Review</span>
                </PMButton>
              </div>
            </div>
          </div>
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default ReviewsScreen;
