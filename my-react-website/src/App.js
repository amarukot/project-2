import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Cocktails from "./Cocktails/Cocktails";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";

function App() {
  const urlCocktails =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  const [cocktailDrinks, setCocktailDrinks] = useState({ cocktailDrinks: [] });

  useEffect(() => {
    fetch(urlCocktails)
      .then(res => res.json())
      .then(res => setCocktailDrinks(res))
      .catch(err => console.log(err));
  }, []);

  console.log(cocktailDrinks);

  return (
    <BrowserRouter>
      <div className="Master-container">
        <header className="App-header">
          <h1>The Bartender's Guide</h1>
        </header>
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
              style={inputStyle}
              type="text"
              placeholder="I wanna drink..."
            ></input>
            <h4>Search</h4>
          </div>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/cocktails"
            render={props => <Cocktails data={cocktailDrinks.drinks} />}
          />
          <Route path="/details/:drink" component={Details} />
        </main>
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

const inputStyle = {
  margin: "10px 10px",
  padding: "5px 10px"
};

export default App;
