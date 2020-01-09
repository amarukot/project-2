import React, { useEffect, useState } from "react";
import DrinkDetails from "../../components/DrinkDetails/DrinkDetails";

function Details(props) {
  // console.log(props);

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
  // console.log(drink.drinks[0]);

  return <DrinkDetails drink={drink.drinks[0]} />;
}

export default Details;
