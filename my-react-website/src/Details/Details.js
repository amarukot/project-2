import React, { useEffect, useState } from "react";

function Details(props) {
  console.log(props);

  const [drink, setDrink] = useState({});

  console.log(drink);

  useEffect(() => {
    const { match, data } = props;
    console.log(data);
    console.log(match);
  }, []);

  return <div>DETAILS PAGE</div>;
}

export default Details;
