import React from "react";

import Gallery from "../../components/Gallery/Gallery";

function Shots(data) {
  var drinks = [];

  if (data.data && data.data[0]) {
    drinks = data.data;
  }

  const allDrinks = drinks.map((item, index) => {
    return <Gallery drink={item} key={index} />;
  });

  return <div className="Drinks-container">{allDrinks}</div>;
}

export default Shots;
