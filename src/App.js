import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import logo from "./logo.svg";

import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cocktails from "./pages/Cocktails/Cocktails";
import Shots from "./pages/Shots/Shots";
import Details from "./pages/Details/Details";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const urlCocktails =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  const urlShots =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot";

  const [cocktailDrinks, setCocktailDrinks] = useState([]);
  const [shotDrinks, setShotDrinks] = useState([]);

  useEffect(() => {
    fetch(urlCocktails)
      .then(res => res.json())
      .then(res => setCocktailDrinks(res))
      .catch(err => console.log(err));

    fetch(urlShots)
      .then(res1 => res1.json())
      .then(res1 => setShotDrinks(res1))
      .catch(err1 => console.log(err1));
  }, []);

  const searchFunc = searchString => {
    // console.log("searching...", searchString)
    return <div>TEST</div>;
  };

  if (cocktailDrinks.length === 0) {
    return <div>...LOADING...</div>;
  }

  return (
    <BrowserRouter>
      <div className="Master-container">
        <header className="App-header">
          <h1>The Bartender's Guide</h1>
        </header>
        <NavBar searchFunc={searchFunc} />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/cocktails/"
            render={props => <Cocktails data={cocktailDrinks.drinks} />}
          />
          <Route
            path="/shots/"
            render={props => <Shots data={shotDrinks.drinks} />}
          />
          <Route
            path="/details/:drink"
            render={props => (
              <Details data={cocktailDrinks.drinks} {...props} />
            )}
          />
        </main>
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;

//
