import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <header>
        <h1>The Bartender's Guide</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;
