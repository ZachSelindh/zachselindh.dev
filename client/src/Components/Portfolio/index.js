import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import RightItemPortfolio from "./RightItemPortfolio";
import LeftItemPortfolio from "./LeftItemPortfolio";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    API.getAllPortfolio()
      .then(response => setPortfolioItems(response.data))
      .then(setIsLoading(false))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="col-12 portfolio-z bg-light">
      <h1 id="portfolio-brand-z">Portfolio</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        portfolioItems.map((item, index) => {
          const customProps = {
            key: item._id,
            index: index,
            title: item.title,
            gif_location: item.gif_location,
            description: item.description,
            completed_date: item.completed_date,
            technologies: item.technologies,
            github_link: item.github_link,
            deployed_link: item.deployed_link
          };
          return index % 2 === 0 ? (
            <LeftItemPortfolio {...customProps} />
          ) : (
            <RightItemPortfolio {...customProps} />
          );
        })
      )}
      <p id="portfolio-footer">Check back later for more apps!</p>
    </div>
  );
}

export default Portfolio;
