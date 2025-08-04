import React from "react";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import "./ReviewsScreenStyle.css";
import PMButton from "../../components/PMButton/PMButton";
const ReviewsScreen = () => {
  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="main-review">
          <div className="rating">
            <div className="sub-rating">
              <h1 className="auth-text2">What is Your Rating?</h1>
              <div className="stars">✨</div>
              <p className="auth-text2 auth-text3">
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
