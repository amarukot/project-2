import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Search.css";

function Search(searchFunc) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const resetSearch = () => {
    setSearchInput("");
  };

  const handleClick = () => {
    searchFunc.searchFunc(searchInput);
    resetSearch();
  };

  return (
    <form className="Search-bar">
      <input
        onChange={handleChange}
        value={searchInput}
        className="Search-field"
        type="text"
        placeholder="I wanna drink..."
      ></input>
      <Link to="/search/">
        <button onClick={handleClick} type="submit" className="Search-btn">
          <h4>Search</h4>
        </button>
      </Link>
    </form>
  );
}

export default Search;
