import React from "react";
import GithubLink from "./NavLinks/Github";
import PortfolioLink from "./NavLinks/Portfolio";
import "./style.css";

function PortfolioNavbar() {
  return (
    <nav
      id="navbar-z"
      className="navbar navbar-expand-md navbar-light bg-light"
    >
      <a id="navbrand-z" className="navbar-brand" href="/">
        Zach Selindh <span id="nav-span-z"> - Full Stack Developer</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav flex-row ml-md-auto d-md-flex">
          <GithubLink />
          <PortfolioLink />
          <PortfolioLink />
        </ul>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
