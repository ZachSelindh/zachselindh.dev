import React from "react";
import "./style.css";

function PortfolioNavbar() {
  return (
    <nav
      id="navbar-z"
      className="navbar navbar-expand-md navbar-light bg-light"
    >
      <a className="navbar-brand" href="/">
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
