import React from "react";
import "./style.css";

function PortfolioNavbar() {
  return (
    <nav className="navbar navbar-light bg-light navbarz">
      <div className="container">
        <div className="col-sm-12 col-lg-6 col-xl-8">
          <a id="navbar-title" href="/">
            Zach Selindh
          </a>
          <p id="navbrand-subtext">Full Stack Web Developer</p>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4">
          <div className="row" id="nav-icon-row-z">
            {/* <a
              className="nav-item nav-icon-z"
              href="https://github.com/ZachSelindh"
              target="#"
              title="GitHub Profile"
            >
              {  <div className="nav-item nav-link">
                <img
                  alt="Github"
                  src="./images/github-logo.svg"
                  height="60px"
                  width="60px"
                />
              </div>}
              <p>GitHub</p>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
