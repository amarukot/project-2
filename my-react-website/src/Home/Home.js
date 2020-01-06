import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1";
  const urlByLetter =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  const urlByName =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  const [drinks, setDrinks] = useState({ drinks: [] });
  //   Originally used the code below
  // const [foo, setDrinks] = useState({});
  // and for some reason it couldn't access the data within the object

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(res => setDrinks(res))
      .catch(err => console.log(err));
  }, []);

  console.log(drinks.drinks[0]);

  const allDrinks = drinks.drinks.map((item, index) => {
    return (
      <div className="Drink-box" key={index}>
        <img className="Drink-thumb-img" src={item.strDrinkThumb} alt="" />

        <div className="Drink-title">
          <h2>{item.strDrink}</h2>
          {/* <p>{item.strInstructions}</p> */}
        </div>
      </div>
    );
  });

  return <div className="Drinks-container">{allDrinks}</div>;
}

export default Home;
