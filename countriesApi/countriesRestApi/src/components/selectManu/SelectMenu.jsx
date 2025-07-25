import React from "react";
import "./SelectMenu.css";
const SelectMenu = ({ setDropSearch }) => {
  return (
    <div>
      <select
        name=""
        id=""
        className="filter-by-region"
        onChange={(e) => setDropSearch(e.target.value.toLowerCase())}
      >
        <option hidden="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectMenu;
