import React from "react";
import { Link } from "react-router-dom";

import Gallery from "../../components/Gallery/Gallery";

function Cocktails(data) {
  var drinks = [];

  if (data.data && data.data[0]) {
    drinks = data.data;
  }

  const allDrinks = drinks.map((item, index) => {
    return <Gallery drink={item} key={index} />;
  });

  return <div className="Drinks-container">{allDrinks}</div>;
}

export default Cocktails;
