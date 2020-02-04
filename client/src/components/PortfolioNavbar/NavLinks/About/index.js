import React from "react";
import AboutImg from "../../../../assets/icons/nav/info.png";

function AboutLink() {
  return (
    <a
      id="about-icon-z"
      className="nav-icon-z nav-item nav-link"
      href="/About"
      title="About Page"
    >
      <img alt="" src={AboutImg} height="60px" width="60px" />
      <p>About</p>
    </a>
  );
}

export default AboutLink;
