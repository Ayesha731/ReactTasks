import React, { useEffect, useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon";
import PMInput from "../PMInput/PMInput";
import PMButton from "../PMButton/PMButton";
import "./PMSidebarStyle.css";
const photographerTypes = [
  "Wedding Photographer",
  "Street Photographer",
  "Birthday Photographer",
  "Concert Photographer",
  "Travel Photographer",
];

const PMSidebar = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Street Photographer");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [photographers, setPhotographers] = useState([]);

  // ✅ Fetch photographers from backend when search or filter changes
  useEffect(() => {
    const fetchPhotographers = async () => {
      try {
        const response = await fetch(
          `http://your-backend-api.com/photographers?search=${search}&type=${selectedType}`
        );
        const data = await response.json();
        setPhotographers(data);
      } catch (error) {
        console.error("Error fetching photographers:", error);
      }
    };
    fetchPhotographers();
  }, [search, selectedType]);

  return (
    <div className="photographers-container">
      <PMInput
        icon={<ArrowBackIcon />}
        placeholder="Northup Ways"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Title */}
      <h2 className="auth-text">Photographers Lists</h2>
      <p className="para para2">
        Find the best photographers in your area for your next event!
      </p>

      {/* Search Input */}
      <PMInput
        icon={<FaSearch />}
        placeholder="Search photographers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Dropdown */}
      <div className="dropdown-wrapper">
        <PMButton varient="fill" onClick={() => setDropdownOpen(!dropdownOpen)}>
          {selectedType}
        </PMButton>
        {dropdownOpen && (
          <ul className="dropdown-list">
            {photographerTypes.map((type) => (
              <li
                key={type}
                className={selectedType === type ? "active" : ""}
                onClick={() => {
                  setSelectedType(type);
                  setDropdownOpen(false);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Photographer Cards */}
      <div className="photographers-grid">
        {photographers.length > 0 ? (
          photographers.map((p, index) => (
            <div className="card" key={index}>
              <img
                src={
                  p.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                }
                alt={p.name}
                className="avatar"
              />
              <h3>{p.name}</h3>
              <p>{p.type}</p>
              <div className="rating">
                <FaStar color="gold" />{" "}
                <span>
                  {p.rating} ({p.reviews} reviews)
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No photographers found</p>
        )}
      </div>
    </div>
  );
};

export default PMSidebar;
