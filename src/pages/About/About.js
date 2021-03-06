import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About-box">
      <h2>About this site</h2>
      <p className="About-text">
        Need a drink? This website will help you look up cocktail drinks
        available via www.thecocktaildb.com. Feel free to browse or get a random
        drink by going to the Home Page. This website was created as a project.
        It uses ReactJS with Hooks.
        <br />
        Wanna chat? Email me at{" "}
        <a className={"Email-link"} href="mailto:aldo.marukot@gmail.com">
          aldo.marukot@gmail.com
        </a>
      </p>
      <h3 className="Cheers">Cheers!</h3>
    </div>
  );
}

export default About;
