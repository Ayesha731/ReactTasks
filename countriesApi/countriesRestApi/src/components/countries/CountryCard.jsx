import React from "react";
import "./Countries.css";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
  console.log(name);

  return (
    <>
      <Link className="country-card" to={`/${name}`}>
        <div>
          <img src={flag} alt={name + "flag not found"} />
          <div className="card-text">
            <h3 className="card-title">{name}</h3>
            <p>
              <b>Population:</b>
              {population}
            </p>
            <p>
              <b>Region:</b>
              {region}
            </p>
            <p>
              <b>Capital:</b>
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
