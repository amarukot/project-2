import React from "react";

function Footer() {
  return (
    <p style={footerStyle}>
      by Aldo Marukot |{" "}
      <a style={footerLinkStyle} href="https://www.behance.net/runelighter">
        Behance
      </a>{" "}
      |{" "}
      <a
        style={footerLinkStyle}
        href="https://www.linkedin.com/in/aldomarukot/"
      >
        LinkedIn
      </a>{" "}
      | copyright &copy; 2020 |
      <a href="https://www.vexels.com/vectors/preview/78674/cocktails-neon-sign">
        {" "}
        (Cocktails neon sign - designed by Vexels)
      </a>
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
  bottom: 0,
  height: "20px",
  clear: "both",
  fontFamily: "worker, sans-serif",
  fontWeight: "200",
  fontSize: "10px",
};

const footerLinkStyle = {
  color: "beige",
};
export default Footer;
