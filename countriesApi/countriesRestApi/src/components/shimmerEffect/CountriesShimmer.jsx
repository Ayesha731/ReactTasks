import React from "react";
import "./CountriesShimmer.css";
const CountriesShimmer = () => {
  //1st method
  //   const array = new Array(10).fill(undefined);
  //   array.map((ele) => {
  //     console.log(ele);
  //   });
  //   console.log(array);

  //2nd method
  const mapped = Array.from({
    length: 12,
  }).map((ele, i) => {
    return (
      <div
        key={i}
        className="country-card shimmer-card
        
      "
      ></div>
    );
  });
  return <div className="countries-container">{mapped}</div>;
};

export default CountriesShimmer;
