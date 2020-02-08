import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import RightItemPortfolio from "./RightItemPortfolio";
import LeftItemPortfolio from "./LeftItemPortfolio";
import "./style.css";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    API.getAllPortfolio()
      .then(response => setPortfolioItems(response.data))
      .then(setIsLoading(false))
      .catch(err => console.log(err));
  }, []);

  /*  function getTechClick(event) {
    event.preventDefault();
    var searchTech = event.target.getAttribute("data").toString();
    setIsLoading(true);
    API.getByTech(searchTech)
      .then(responseTech => setPortfolioItems(responseTech.data))
      .then(setIsLoading(false))
      .catch(err => console.log(err));
  } */

  return (
    <div className="col-12 portfolio-z bg-light">
      <h1 id="portfolio-brand-z">Portfolio</h1>
      {/* Testing tech search feature */}
      {/* <div id="search-tech-div" className="col-12">
        <span id="search-tech-span">
          {" "}
          Select a Technology To Refine Results:{" "}
          <img
            src="https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png"
            alt="React"
            data="react"
            className="tech-icon"
            onClick={getTechClick}
          ></img>
        </span>
      </div> */}
      {portfolioItems.length ? (
        isLoading ? (
          <div>Loading Portfolio Items...</div>
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
        )
      ) : (
        <div>No items found!</div>
      )}

      <p id="portfolio-footer">Check back later for more apps!</p>
    </div>
  );
}

export default Portfolio;
