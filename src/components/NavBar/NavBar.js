import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./NavBar.css";

import Search from "../Search/Search";

function NavBar(searchFunc) {
  return (
    <nav className="Nav-bar">
      <Link className="Nav-item" to="/">
        <h4>Home</h4>
      </Link>
      <Link className="Nav-item" to="/about">
        <h4>About</h4>
      </Link>
      <Link className="Nav-item" to="/cocktails">
        <h4>Cocktails</h4>
      </Link>
      <Link className="Nav-item" to="/shots">
        <h4>Shots</h4>
      </Link>
      <Search searchFunc={searchFunc.searchFunc} />
    </nav>
  );
}

export default NavBar;
