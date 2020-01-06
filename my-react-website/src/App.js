import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Cocktails from "./Cocktails/Cocktails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="App-header">
          <h1>The Bartender's Guide</h1>
        </header>
        <nav className="Nav-bar">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/cocktails">
            <h4>Cocktails</h4>
          </Link>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/cocktails" component={Cocktails} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
