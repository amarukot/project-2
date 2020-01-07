import React, { useState, useEffect } from "react";
import "./Home.css";

import About from "../About/About";

function Home() {
  const randURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const [drinks, setDrinks] = useState({ drinks: [] });

  useEffect(() => {
    fetch(randURL)
      .then(res => res.json())
      .then(res => setDrinks(res))
      .catch(err => console.log(err));
  }, []);

  var randomDrinkImage;

  if (drinks.drinks && drinks.drinks[0]) {
    randomDrinkImage = drinks.drinks[0].strDrinkThumb;
  }

  console.log(randomDrinkImage);

  return (
    <section className="Home-container">
      <div className="About-box">
        <About />
      </div>
      <div className="Hero-box">
        <img src={randomDrinkImage} alt="" />
      </div>
    </section>
  );
}

export default Home;
