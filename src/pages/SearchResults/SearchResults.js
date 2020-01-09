import React from "react";
import { Link } from "react-router-dom";

import "./SearchResults.css";

function SearchResults(data) {
  var cocktailDrinks = [];

  if (data.data && data.data[0]) {
    cocktailDrinks = data.data;
  }

  const allDrinks = cocktailDrinks.map((item, index) => {
    return (
      <Link to={`/details/${item.idDrink}`} className="Drink-box" key={index}>
        <img className="Drink-thumb-img" src={item.strDrinkThumb} alt="" />
        <div className="Drink-title">
          <h4>{item.strDrink}</h4>
        </div>
      </Link>
    );
  });

  return <div className="Drinks-container">{allDrinks}</div>;
}

export default SearchResults;
