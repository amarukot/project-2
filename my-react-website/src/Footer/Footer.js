import React from "react";

function Footer() {
  return (
    <p style={footerStyle}>
      by Aldo Marukot |{" "}
      <a href="https://www.behance.net/runelighter">Behance</a> |{" "}
      <a href="https://www.linkedin.com/in/aldomarukot/">LinkedIn</a> | 2020
    </p>
  );
}

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#6a8e90",
  margin: "0 auto",
  padding: "10px"
};
export default Footer;
