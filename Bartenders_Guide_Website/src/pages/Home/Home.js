import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./Home.css";

import About from "../About/About";

function Home() {
  const randURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const [randDrink, setRandDrink] = useState([]);

  useEffect(() => {
    fetch(randURL)
      .then(res => res.json())
      .then(res => setRandDrink(res))
      .catch(err => console.log(err));
  }, []);

  if (randDrink.length == 0) {
    return <div>...loading...</div>;
  }

  console.log(randDrink);

  return (
    <section className="Home-container">
      <div className="Side-box">
        <h2>Featured Drink</h2>
        <hr></hr>
        <h4>
          <i>{randDrink.drinks[0].strDrink}</i>
        </h4>
        <Link to={`/details/${randDrink.drinks[0].idDrink}`} style={featLink}>
          Click here to make this drink.
        </Link>
      </div>

      <div className="Hero-box">
        <img src={randDrink.drinks[0].strDrinkThumb} alt="" />
      </div>
    </section>
  );
}

const featLink = {
  textDecoration: "none",
  fontSize: "80%",
  fontStyle: "italic"
};

export default Home;
