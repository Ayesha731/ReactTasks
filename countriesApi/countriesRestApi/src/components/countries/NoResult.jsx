import React from "react";
import image from "../../assets/downloadd.png";
import "./Countries.css";
import { NavLink } from "react-router-dom";
const NoResult = ({ message, isSearch }) => {
  return (
    <div className="no-result-container">
      <h2>
        <i class="fa-brands fa-searchengin"></i>
        &nbsp;{message}
      </h2>
      <p>
        Your search - <b>{isSearch} </b> - did not match any countries.
      </p>
      <h3>Suggestions:</h3>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li> Try different keywords. </li>
        <li>Try more general keywords.</li>
      </ul>
      <img src={image} alt="image not found" />
      {/* <NavLink to="/" className="btn-home">
        Go Back to HomePage
      </NavLink> */}
    </div>
  );
};

export default NoResult;
