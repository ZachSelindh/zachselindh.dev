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
    <div className="col-lg-10 col-sm-12 portfolio-z bg-light">
      <h1>Portfolio</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        portfolioItems.map((item, index) => {
          return (
            <LeftItemPortfolio
              key={item._id}
              index={index}
              title={item.title}
              deployed_link={item.deployed_link}
              gif_location={require`${item.gif_location}`}
            />
          );
          /* return index % 2 === 0 ? (
            <LeftItemPortfolio
              id={item._id}
              index={index}
              title={item.title}
              deployed_link={item.deployed_link}
              gif_location={item.gif_location}
            />
          ) : (
            <RightItemPortfolio
              id={item._id}
              index={index}
              title={item.title}
              deployed_link={item.deployed_link}
              gif_location={item.gif_location}
            />
          ); */
        })
      )}
    </div>
  );
}

export default Portfolio;
