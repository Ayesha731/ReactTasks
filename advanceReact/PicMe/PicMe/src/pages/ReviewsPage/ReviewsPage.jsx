import React from "react";
import { useOutletContext } from "react-router-dom";

const ReviewsPage = () => {
  const { photographerData, selectedCategory } = useOutletContext();

  function getAllReviews() {
    if (!photographerData?.reviews) return [];
    return photographerData.reviews;
  }

  function getFilteredReviews() {
    const allReviews = getAllReviews();

    if (selectedCategory === "all") {
      return allReviews;
    }

    // If reviews have categories, filter by them
    return allReviews.filter(
      (review) =>
        review.category === selectedCategory || selectedCategory === "all"
    );
  }

  const filteredReviews = getFilteredReviews();

  const reviewElements = filteredReviews.map((review, index) => (
    <div key={index} className="review-card">
      <div className="review-header">
        <h4>{review.reviewer_name || "Anonymous"}</h4>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= (review.rating || 0) ? "filled" : ""}`}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
      <p className="review-text">{review.comment || review.text}</p>
      {review.date && (
        <small className="review-date">
          {new Date(review.date).toLocaleDateString()}
        </small>
      )}
    </div>
  ));

  return filteredReviews.length === 0 ? (
    <div className="no-data-div">
      <p>No reviews available</p>
    </div>
  ) : (
    <div className="reviews-container">{reviewElements}</div>
  );
};

export default ReviewsPage;
