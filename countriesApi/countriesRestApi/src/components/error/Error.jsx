import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";
import image from "../../assets/images.png";
import { NavLink } from "react-router-dom";
const Error = ({ message }) => {
  const error1 = useRouteError();
  return (
    <>
      <div className="error-container">
        <figure>
          <img
            src={image}
            alt="image not found"
            width={"300px"}
            height={"200px"}
          />
        </figure>
        <div className="text-conatiner1">
          <h2>
            <i class="fa-brands fa-searchengin"></i>
            Something Went Wrong
          </h2>
          <h4>Suggestions:</h4>
          <ul>
            <li> Please Try Again</li>
            <li>Check your page you were looking for</li>
          </ul>
        </div>
        <NavLink to="/" className="btn-home">
          Go Back to HomePage
        </NavLink>
      </div>
    </>
  );
};

export default Error;
