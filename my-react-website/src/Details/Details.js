import React, { useEffect, useState } from "react";

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

  console.log(drink);

  if (drink.length == 0) {
    return <div>...LOADING...</div>;
  }
  console.log(drink.drinks[0].strDrink);

  return (
    <div style={detailStyle}>
      <div style={infoStyle}>
        <h1>{drink.drinks[0].strDrink}</h1>
        <h4>Ingredients</h4>
        <p style={instructionStyle}>{drink.drinks[0].strInstructions}</p>
      </div>
      <img src={drink.drinks[0].strDrinkThumb} alt="" />
    </div>
  );
}

const detailStyle = {
  display: "flex"
};

const infoStyle = {
  padding: "10px",
  minWidth: "200px"
};

const instructionStyle = {
  fontSize: "80%",
  fontStyle: "italic"
};

export default Details;
