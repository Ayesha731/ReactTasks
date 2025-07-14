import React, { useEffect, useState } from "react";
import "./CountryDetail.css";
import axios from "axios";
import axiosInstance from "../../utils/axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CountryDetailShimmer from "../shimmerEffect/CountryDetailShimmer";

const CountryDetail = () => {
  const params = useParams();
  console.log(params);
  const countryName = params.country;
  //   const countryName = searchParams.get("name");
  //   const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [countryData, setCountryData] = useState({});
  const BASE_URL = "https://restcountries.com/v3.1";
  console.log(countryData?.borders);
  useEffect(() => {
    //   1st method*********************
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/name/${countryName}?fullText=true`
        );
        const data = await response.json();
        console.log(data);
        const country = data[0];
        setCountryData({
          name: country.name.common,
          nativeName:
            Object.values(country.name.nativeName || {})[0]?.common || "N/A",
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital?.[0] || "N/A",
          tld: country.tld?.[0] || "N/A",
          currencies:
            Object.values(country.currencies || {})
              .map((curr) => curr.name)
              .join(", ") || "N/A",

          languages: Object.values(country.languages || {}).join(", "),
          borders: country.borders || [],
          flag: country.flags?.svg || "",
        });

        // Promise.all() is a method in JavaScript used to handle multiple promises concurrently. It takes an iterable (such as an array) of promises and returns a single promise that resolves when all of the promises in the iterable have resolved or rejects if any of the promises reject
        const borderCountryNames = await Promise.all(
          (country.borders || []).map((border) =>
            fetch(`${BASE_URL}/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountry]) => borderCountry.name.common)
          )
        );
        if (!country.borders) {
          country.borders = [];
        }
        setCountryData((prevState) => ({
          ...prevState,
          borders: borderCountryNames,
        }));
      } catch (error) {
        console.log("Error");
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryData();

    // method----2 ************************
    // axiosInstance
    //   .get(`/name/${countryName}?fullText=true`)
    //   .then((response) => {
    //     if (Array.isArray(response.data)) {
    //       const data = response.data[0]; // ✅ Get the first (and only) country
    //       setCountryData({
    //         name: country.name.common,
    //   nativeName:
    //     Object.values(country.name.nativeName || {})[0]?.common || "N/A",
    //   population: country.population,
    //   region: country.region,
    //   subregion: country.subregion,
    //   capital: country.capital?.[0] || "N/A",
    //   tld: country.tld?.[0] || "N/A",
    //   currencies: Object.values(country.currencies).map((curr)=>{curr.name}).join(',')  || "N/A",
    //   languages: Object.values(country.languages || {}).join(", "),
    //   borders: country.borders || [],
    //   flag: country.flags?.svg || "",
    //       }); // ✅ Store entire country object
    //     } else {
    //       console.log("Unexpected data format received.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Axios fetch error:", error.message);
    //   });
  }, [countryName]);

  if (error) {
    return <div>Something went wrong....please try again</div>;
  }
  if (loading) {
    return <CountryDetailShimmer />;
  }
  return countryData === null ? (
    <>console.log("Loading....")</>
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>
          &nbsp; Back
        </span>
        <div className="country-details">
          <img
            src={countryData.flag}
            alt={`${countryData.name} flag is not found`}
          />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:{countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population:{countryData.population} </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region:{countryData.region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region:{countryData.subregion} </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital:{countryData.capital} </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain:{countryData.tld} </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies:{countryData.currencies} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages:{countryData.languages} </b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries:</b>&nbsp;
              {countryData.borders?.length > 0 ? (
                countryData.borders.map((border, index) => (
                  <Link key={index} to={`/${border}`}>
                    {border}
                  </Link>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
