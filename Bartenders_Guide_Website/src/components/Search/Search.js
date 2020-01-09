import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

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
    console.log(searchInput, " search submitted");

    resetSearch();
  };

  return (
    <div className="Search-bar">
      <input
        onChange={handleChange}
        value={searchInput}
        className="Search-field"
        type="text"
        placeholder="I wanna drink..."
      ></input>
      <button onClick={handleClick} type="button" className="Search-btn">
        <h4>Search</h4>
      </button>
    </div>
  );
}

export default Search;
