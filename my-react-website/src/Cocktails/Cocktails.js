import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./Cocktails.css";

function Cocktails(data) {
  // const urlByLetter =
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  // const urlByName =
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  // const urlCocktails =
  //   "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  // const [drinks, setDrinks] = useState({ drinks: [] });
  //   Originally used the code below
  // const [foo, setDrinks] = useState({});
  // and for some reason it couldn't access the data within the object

  // useEffect(() => {
  //   fetch(urlCocktails)
  //     .then(res => res.json())
  //     .then(res => setDrinks(res))
  //     .catch(err => console.log(err));
  // }, []);

  console.log(data);

  var cocktailDrinks = [];

  if (data.data && data.data[0]) {
    cocktailDrinks = data.data;
  }

  console.log(cocktailDrinks);

  const allDrinks = cocktailDrinks.map((item, index) => {
    return (
      <Link to="/details/" className="Drink-box" key={index}>
        <img className="Drink-thumb-img" src={item.strDrinkThumb} alt="" />
        <div className="Drink-title">
          <h4>{item.strDrink}</h4>
        </div>
      </Link>
    );
  });

  return <div className="Drinks-container">{allDrinks}</div>;
}

export default Cocktails;
