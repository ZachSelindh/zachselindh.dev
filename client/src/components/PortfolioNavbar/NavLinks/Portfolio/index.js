import React from "react";
import PortfolioImg from "../../../../assets/icons/nav/briefcase.png";

function PortfolioLink() {
  return (
    <a
      href="/portfolio"
      id="portfolio-icon-z"
      className="nav-icon-z nav-item nav-link"
      title="Portfolio"
    >
      <img alt="" src={PortfolioImg} height="60px" width="60px" />
      <p>Portfolio</p>
    </a>
  );
}

export default PortfolioLink;
