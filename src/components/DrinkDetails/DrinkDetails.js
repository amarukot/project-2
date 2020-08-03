import React from "react";
import "./DrinkDetails.css";

function DrinkDetails(drink) {
  const thisDrink = drink.drink;
  console.log(thisDrink);

  return (
    <div className="Detail-box">
      <div className="Info-box">
        <h2>{thisDrink.strDrink}</h2>
        <hr></hr>
        <h4 className="Detail-subtitle">Ingredients</h4>
        <div className="Ingredients">
          <ul className="Ingredient-list">
            {thisDrink.strIngredient1 == null ? (
              <div></div>
            ) : (
              <li>{thisDrink.strIngredient1}</li>
            )}
            {thisDrink.strIngredient2 == null ? (
              <div></div>
            ) : (
              <li>{thisDrink.strIngredient2}</li>
            )}
            {thisDrink.strIngredient3 == null ? (
              <div></div>
            ) : (
              <li>{thisDrink.strIngredient3}</li>
            )}
            {thisDrink.strIngredient4 == null ? (
              <div></div>
            ) : (
              <li>{thisDrink.strIngredient4}</li>
            )}
            {thisDrink.strIngredient5 == null ? (
              <div></div>
            ) : (
              <li>{thisDrink.strIngredient5}</li>
            )}
          </ul>
          <ul className="Measure-list">
            {thisDrink.strMeasure1 == null ? (
              <div></div>
            ) : (
              <li>- {thisDrink.strMeasure1}</li>
            )}{" "}
            {thisDrink.strMeasure2 == null ? (
              <div></div>
            ) : (
              <li>- {thisDrink.strMeasure2}</li>
            )}
            {thisDrink.strMeasure3 == null ? (
              <div></div>
            ) : (
              <li>- {thisDrink.strMeasure3}</li>
            )}
            {thisDrink.strMeasure4 == null ? (
              <div></div>
            ) : (
              <li>- {thisDrink.strMeasure4}</li>
            )}
            {thisDrink.strMeasure5 == null ? (
              <div></div>
            ) : (
              <li>- {thisDrink.strMeasure5}</li>
            )}
          </ul>
        </div>
        <h4 className="Detail-subtitle">Instructions</h4>
        <p className="Instructions">{thisDrink.strInstructions}</p>
      </div>
      <img className="Detail-img" src={thisDrink.strDrinkThumb} alt="" />
    </div>
  );
}

export default DrinkDetails;
