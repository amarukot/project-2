import React from "react";

function Footer() {
  return (
    <p style={footerStyle}>
      by Aldo Marukot |{" "}
      <a href="https://www.behance.net/runelighter">Behance</a> |{" "}
      <a href="https://www.linkedin.com/in/aldomarukot/">LinkedIn</a> |
      copyright &copy; 2020
    </p>
  );
}

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#6a8e90",
  marginTop: "-10px",
  padding: "20px",
  position: "relative",
  height: "20px",
  clear: "both",
  fontFamily: "zenon, serif"
};
export default Footer;
