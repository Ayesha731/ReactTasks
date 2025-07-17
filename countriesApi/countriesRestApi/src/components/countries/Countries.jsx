import React, { useEffect, useState } from "react";
import "./Countries.css";
import CountryCard from "./CountryCard";
// import axios from "axios";
import axiosInstance from "../../utils/axios";
import CountriesShimmer from "../shimmerEffect/CountriesShimmer";
import NoResult from "./NoResult";
import Error from "../error/Error";

// import data from "../../data.js";

const BASE_URL = "https://restcountries.com/v3.1";
const Countries = ({ search, dropSearch }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // method----1*********************
    const fetchCountriesData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/all?fields=name,flags,population,region,capital`
        );
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.log("Error");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountriesData();

    // method----2 ************************
    // axiosInstance
    //   .get("/all?fields=name,flags,population,region,capital")
    //   .then((response) => {
    //     if (Array.isArray(response.data)) {
    //       setCountriesData(response.data);
    //     } else {
    //       setError("Unexpected data format received.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Axios fetch error:", error.message);
    //     setError("Failed to load countries.");
    //   });

    //it is used for unmount--->mean the component is remove from the page
    return () => {
      console.log("cleaning up...");
    };
  }, []);

  // const filterCountry = data.filter((country) =>
  //   country.name.toLowerCase().includes("Pakistan")
  // );
  // console.log(filterCountry);

  const filteredCountries = countriesData.filter((country) => {
    const matchName = country.name.common
      .trim()
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchRegion = dropSearch
      ? country.region.toLowerCase() === dropSearch.toLowerCase()
      : true;

    return matchName && matchRegion;
  });

  // if (isLoading) {
  //   return <div>Loading....</div>;
  // }

  if (error) {
    return <Error />;
  }
  return (
    <main>
      {!countriesData.length ? (
        <CountriesShimmer />
      ) : (
        <div className="countries-container">
          {filteredCountries.length > 0 ? (
            <div className="countries-container">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0] || "N/A"}
                />
              ))}
            </div>
          ) : (
            <NoResult
              message="No country found for your search!"
              isSearch={search}
            />
          )}
        </div>
      )}
    </main>
  );
};

export default Countries;
