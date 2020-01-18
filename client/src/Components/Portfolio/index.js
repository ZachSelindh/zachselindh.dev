import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    API.getAllPortfolio()
      .then(response => setPortfolioItems(response.data), setIsLoading(false))
      .catch(err => console.log(err));
  });

  return (
    <div className="col-lg-10 col-sm-12 portfolio-z bg-light">
      <h1>Portfolio</h1>

      {portfolioItems.map((item, index) => {
        return <div id={index}>{item.title}</div>;
      })}
    </div>
  );
}

export default Portfolio;
