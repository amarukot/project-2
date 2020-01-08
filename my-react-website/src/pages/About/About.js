import React from "react";

function About() {
  return (
    <div style={aboutStyle}>
      <h2>about this site</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

const aboutStyle = {
  padding: "10px",
  maxWidth: "800px"
  // minHeight: "70vh"
};

export default About;
