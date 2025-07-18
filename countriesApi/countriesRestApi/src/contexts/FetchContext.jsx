import React from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
export const FetchApi = createContext();

const FetchContext = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const BASE_URL = "https://restcountries.com/v3.1";
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

  return (
    <FetchApi.Provider value={{ countriesData, isLoading, error }}>
      {children}
    </FetchApi.Provider>
  );
};

export default FetchContext;
