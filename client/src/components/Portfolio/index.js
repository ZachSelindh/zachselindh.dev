import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import RightItemPortfolio from "./RightItemPortfolio";
import LeftItemPortfolio from "./LeftItemPortfolio";
import "./style.css";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showingState, setShowingState] = useState(null);
  const [techName, setTechName] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    API.getAllPortfolio()
      .then((response) => setPortfolioItems(response.data))
      .then(setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  function getAllTech() {
    setIsLoading(true);
    API.getAllPortfolio()
      .then(
        (response) => setPortfolioItems(response.data),
        setIsLoading(false),
        setShowFilter(false)
      )
      .catch((err) => console.log(err));
    setShowingState(null);
    setTechName(null);
  }

  function getTechClick(event) {
    event.preventDefault();
    var searchTech = event.target.getAttribute("data").toString();
    var techSource = event.target.getAttribute("src").toString();
    var techName = event.target.getAttribute("alt").toString();
    setIsLoading(true);
    API.getByTech(searchTech)
      .then(
        (responseTech) => setPortfolioItems(responseTech.data),
        setIsLoading(false),
        setShowFilter(true)
      )
      .catch((err) => console.log(err));
    setShowingState(techSource);
    setTechName(techName);
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
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                alt="React / Redux"
                data="redux"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
              <img
                src="https://image.flaticon.com/icons/png/512/919/919825.png"
                alt="Node.js"
                data="nodejs"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/mysql.svg"
                alt="mySQL"
                data="mysql"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
              <img
                src="https://www.pngitem.com/pimgs/m/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png"
                alt="MongoDB"
                data="mongodb"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
              <img
                src="https://i.pinimg.com/originals/34/20/e5/3420e571b3d7a4a348d8fad91e3bfda4.png"
                alt="jQuery"
                data="jquery"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
              <img
                src="https://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"
                alt="Bootstrap"
                data="bootstrap"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
              <img
                src="https://keytotech.com/wp-content/uploads/2019/05/firebase.png"
                alt="Google Firebase"
                data="firebase"
                className="tech-icon select-tech"
                onClick={getTechClick}
              />
            </div>
            {showFilter ? (
              <p>
                <i className="x-icon" onClick={getAllTech}>
                  <img
                    width="15px"
                    height="15px"
                    alt="Remove Search"
                    src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/133250/milker_X_icon.png"
                  />
                </i>{" "}
                Currently showing:{" "}
                <img
                  className="tech-icon select-tech"
                  alt={techName}
                  src={showingState}
                />
              </p>
            ) : null}
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
              deployed_link: item.deployed_link,
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
