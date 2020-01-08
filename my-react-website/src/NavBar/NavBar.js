import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="Nav-bar">
      <Link className="Nav-item" to="/">
        <h4>Home</h4>
      </Link>
      <Link className="Nav-item" to="/about">
        <h4 className="Nav-item">About</h4>
      </Link>
      <Link className="Nav-item" to="/cocktails">
        <h4>Cocktails</h4>
      </Link>
      <div className="Search-bar">
        <input
          className="Search-item"
          type="text"
          placeholder="I wanna drink..."
        ></input>
        <button type="submit" className="Search-item">
          <h4>Search</h4>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
