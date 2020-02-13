import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import RightItemPortfolio from "./RightItemPortfolio";
import LeftItemPortfolio from "./LeftItemPortfolio";
import "./style.css";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showingState, setShowingState] = useState("All");
  useEffect(() => {
    API.getAllPortfolio()
      .then(response => setPortfolioItems(response.data))
      .then(setIsLoading(false))
      .catch(err => console.log(err));
  }, []);

  function getAllTech(event) {
    event.preventDefault();
    setIsLoading(true);
    API.getAllPortfolio()
      .then(response => setPortfolioItems(response.data))
      .then(setIsLoading(false))
      .catch(err => console.log(err));
    setShowingState("All");
  }

  function getTechClick(event) {
    event.preventDefault();
    var searchTech = event.target.getAttribute("data").toString();
    var techName = event.target.getAttribute("alt").toString();
    setIsLoading(true);
    API.getByTech(searchTech)
      .then(responseTech => setPortfolioItems(responseTech.data))
      .then(setIsLoading(false))
      .catch(err => console.log(err));
    setShowingState(techName);
  }

  return (
    <div className="col-12 portfolio-z bg-light">
      <h1 id="portfolio-brand-z">Portfolio</h1>
      {/* Testing tech search feature */}
      {
        <div id="search-tech-div" className="col-12">
          <div id="search-tech-span">
            <div className="col-12">
              {" "}
              Select a Technology To Refine Results:{" "}
            </div>
            <div className="col-12 select-div">
              <img
                src="https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png"
                alt="React"
                data="react"
                className="tech-icon select-tech"
                onClick={getTechClick}
              ></img>

              <img
                src="https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg"
                alt="Node.js"
                data="nodejs"
                className="tech-icon select-tech"
                onClick={getTechClick}
              ></img>
              <img
                src="https://seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg"
                alt="mySQL"
                data="mysql"
                className="tech-icon select-tech"
                onClick={getTechClick}
              ></img>
              <img
                src="https://banner2.cleanpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg"
                alt="MongoDB"
                data="mongodb"
                className="tech-icon select-tech"
                onClick={getTechClick}
              ></img>
              <img
                src="https://seeklogo.net/wp-content/uploads/2014/10/jquery-logo-vector-download.jpg"
                alt="jQuery"
                data="jquery"
                className="tech-icon select-tech"
                onClick={getTechClick}
              ></img>
              <img
                src="https://p.kindpng.com/picc/s/485-4850258_bootstrap-logo-png-image-free-download-searchpng-logos.png"
                alt="Bootstrap"
                data="bootstrap"
                className="tech-icon select-tech"
                onClick={getTechClick}
              ></img>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg4kgCX0r-13_Okwr9BRUZLURBlsxTJpg4yUjqW80r0ASArxzW"
                alt="All"
                data="all"
                className="tech-icon select-tech"
                onClick={getAllTech}
              ></img>
            </div>
            <p>Currently showing: {showingState}</p>
          </div>
        </div>
      }
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
