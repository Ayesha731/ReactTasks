import "../../App.css";
import Header from "../header/Header";
import Countries from "../countries/Countries";
import SearchBar from "../serachbar/SearchBar";
import SelectMenu from "../selectManu/SelectMenu";
import { useContext, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [dropSearch, setDropSearch] = useState("");

  return (
    <>
      <main>
        <div className={`sub-container`}>
          <SearchBar setSearch={setSearch} />
          <SelectMenu setDropSearch={setDropSearch} />
        </div>
      </main>

      <Countries search={search} dropSearch={dropSearch} />
    </>
  );
};

export default Home;
