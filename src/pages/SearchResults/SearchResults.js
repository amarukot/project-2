import React from "react";

import Gallery from "../../components/Gallery/Gallery";

function SearchResults(data) {
  var drinks = [];

  if (data.data && data.data[0]) {
    drinks = data.data;
  }

  const allDrinks = drinks.map((item, index) => {
    return <Gallery drink={item} key={index} />;
  });

  return (
    <div className="Drinks-container">
      {drinks.length === 0 ? (
        <div style={emptySearchStyle}>
          "Your search came up empty. Try again."
        </div>
      ) : (
        allDrinks
      )}
    </div>
  );
}

const emptySearchStyle = {
  margin: "0 auto",
  padding: "100px 0"
};
export default SearchResults;
