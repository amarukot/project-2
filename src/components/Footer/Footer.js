import React from "react";

function Footer() {
  return (
    <p style={footerStyle}>
      by Aldo Marukot |{" "}
      <a style={footerStyle} href="https://www.behance.net/runelighter">
        Behance
      </a>{" "}
      |{" "}
      <a style={footerStyle} href="https://www.linkedin.com/in/aldomarukot/">
        LinkedIn
      </a>{" "}
      | copyright &copy; 2020
    </p>
  );
}

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#543C52",
  color: "beige",
  marginTop: "-10px",
  padding: "20px",
  position: "relative",
  height: "20px",
  clear: "both",
  fontFamily: "worker, sans-serif",
  fontWeight: "200"
};
export default Footer;
