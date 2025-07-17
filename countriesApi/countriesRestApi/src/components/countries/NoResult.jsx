import React from "react";
import image from "../../assets/downloadd.png";
import "./Countries.css";

const NoResult = ({ message, isSearch }) => {
  return (
    <div className="no-result-container">
      <h2>
        <i class="fa-brands fa-searchengin"></i>
        &nbsp;{message}
      </h2>
      {isSearch && (
        <p>
          No results found for "<strong>{isSearch}</strong>"
        </p>
      )}
      <h3>Suggestions:</h3>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li> Try different keywords. </li>
        <li>Try more general keywords.</li>
      </ul>
      <img src={image} alt="image not found" />
    </div>
  );
};

export default NoResult;
