import React, { useEffect, useState } from "react";
import DrinkDetails from "../DrinkDetails/DrinkDetails";

function Details(props) {
  console.log(props);

  const drinkDetailURL =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch(`${drinkDetailURL}${props.match.params.drink}`)
      .then(res => res.json())
      .then(res => setDrink(res))
      .catch(err => console.log(err));
  }, []);

  if (drink.length == 0) {
    return <div>...LOADING...</div>;
  }
  console.log(drink.drinks[0]);

  return (
    <DrinkDetails drink={drink.drinks[0]} />
    // <div style={detailStyle}>
    //   <div style={infoStyle}>
    //     <h1>{drink.drinks[0].strDrink}</h1>
    //     <h4>Ingredients</h4>
    //     <p style={instructionStyle}>{drink.drinks[0].strInstructions}</p>
    //   </div>
    //   <img src={drink.drinks[0].strDrinkThumb} alt="" />
    // </div>
  );
}

export default Details;
