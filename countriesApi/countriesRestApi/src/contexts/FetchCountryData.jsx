import { useEffect, useState } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";
export const FetchCountry = createContext();

const FetchCountryData = ({ children }) => {
  const { country } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [countryData, setCountryData] = useState({});

  const BASE_URL = "https://restcountries.com/v3.1";
  useEffect(() => {
    //   1st method*********************
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/name/${country}?fullText=true`
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
  }, [country]);

  return (
    <FetchCountry.Provider value={{ countryData, loading, error }}>
      {children}
    </FetchCountry.Provider>
  );
};
export default FetchCountryData;
