import React from "react";

function DrinkDetails(drink) {
  const thisDrink = drink.drink;

  console.log(thisDrink);

  // if (drink.length == 0) {
  //     return <div>...LOADING...</div>;
  //   }

  return (
    <div style={detailStyle}>
      <div style={infoStyle}>
        <h1>{thisDrink.strDrink}</h1>
        <h4>Ingredients</h4>
        <p style={instructionStyle}>{thisDrink.strInstructions}</p>
      </div>
      <img src={thisDrink.strDrinkThumb} alt="" />
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

export default DrinkDetails;
