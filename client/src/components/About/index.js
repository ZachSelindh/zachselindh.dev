import React from "react";
import "./style.css";

function About() {
  return (
    <div className="col-lg-8 col-sm-12 bg-light about-z">
      <h1>About Me</h1>
      <p>
        {" "}
        I was born in 1990 in southern California, and am the oldest of four
        brothers. From a young age, I have always had an intense curiosity about
        the world at large and about any specific thing, hobby, or idea that
        could captivate my attention.
        <br />
        <br />
        As a result, I've worked in many different fields. I've managed a laser
        tag arena. Worked for a University. Played guitar in a rock band
        full-time. Worked in fine carpentry and luthiery. But I think, finally,
        I've found my passion in coding.
        <br />
        <br />
        I've recently graduated from the full stack web development boot camp at
        the University of Texas at Austin, and am currently seeking an
        opportunity to put my new skills to the test.
        <br />
        <br />
        I live in Austin, Texas, with my beautiful wife Nicole and two sweet
        cats.
        <br />
        <br />
        Please, while you're on my website, check out my{" "}
        <a className="bodyLink" href="/portfolio">
          Portfolio
        </a>{" "}
        page, and consider perusing my{" "}
        <a
          className="bodyLink"
          target="#"
          href="https://github.com/ZachSelindh"
        >
          GitHub
        </a>{" "}
        page as well.
      </p>
    </div>
  );
}

export default About;
