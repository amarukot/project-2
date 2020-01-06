import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <header>
      <h1>The Bartender's Guide</h1>
      <Home />
    </header>
  );
}

export default App;
