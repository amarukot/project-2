import React from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";

function Gallery(props) {
  return (
    <Link to={`/details/${props.drink.idDrink}`} className="Drink-box">
      <img className="Drink-thumb-img" src={props.drink.strDrinkThumb} alt="" />
      <div className="Drink-title">
        <h4>{props.drink.strDrink}</h4>
      </div>
    </Link>
  );
}

export default Gallery;
