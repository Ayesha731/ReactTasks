import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/images/notFound.png";
import "./PMNotFoundStyle.css";
import PMButton from "../PMButton/PMButton";

const PMNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="no-result-container">
      <h2>404 Page Not Found</h2>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
      </ul>
      <img src={notFound} alt="Not Found" />
      <PMButton varient={"fill"} onClick={() => navigate("/")}>
        ⬅ Back to Home
      </PMButton>
    </div>
  );
};

export default PMNotFound;
