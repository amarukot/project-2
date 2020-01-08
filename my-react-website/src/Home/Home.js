import React, { useState, useEffect } from "react";
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
      <div className="About-box">
        <About />
        <hr></hr>
        <h2>Featured Drink</h2>
        <h4>
          <i>{randDrink.drinks[0].strDrink}</i>
        </h4>
        <p>Ingredients & Instructions</p>
      </div>

      <div className="Hero-box">
        <img src={randDrink.drinks[0].strDrinkThumb} alt="" />
      </div>
    </section>
  );
}

export default Home;
