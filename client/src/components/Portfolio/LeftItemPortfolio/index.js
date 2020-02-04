import React from "react";
import GitHubImg from "../../../assets/icons/nav/github-logo.svg";
import WebImg from "../../../assets/icons/web-icon.png";

function LeftItemPortfolio(props) {
  return (
    <div id={props.index} className="row portfolio-item">
      <div className="row col-12">
        <h1 className="portfolio-title">{props.title}</h1>
      </div>
      <div className="portfolio-img-div col-lg-6 col-md-12">
        <a href={props.deployed_link} target="#">
          <img
            alt=""
            className="portfolio-button"
            src={props.gif_location}
            width="450px"
            height="250px"
            align="center"
            valign="center"
          />
        </a>
      </div>
      <div className="col-md-12 col-lg-6">
        <p className="portfolio-body">{props.description}</p>
      </div>
      {/* Change this to col-md-12 col-lg-6 */}
      <div className="col-12 link-row">
        <span className="tech-title"> Links: </span>
        <a
          className="deploy-link"
          href={props.github_link}
          title="GitHub Repo"
          target="#"
        >
          <img alt="" className="tech-icon" src={GitHubImg} />
        </a>
        <a
          className="deploy-link"
          href={props.deployed_link}
          title="Deployed App"
          target="#"
        >
          <img alt="" className="tech-icon" src={WebImg} />
        </a>
      </div>
      {/* <div className="col-md-12 col-lg-6 link-row">
        <span className="tech-title"> Technologies: </span>
        <a href={props.github_link} title="GitHub Repo" target="#">
          <img alt="" className="tech-icon tech-link" src={GitHubImg} />
        </a>
        <a href={props.deployed_link} title="Deployed App" target="#">
          <img alt="" className="tech-icon tech-link" src={WebImg} />
        </a>
      </div> */}
    </div>
  );
}

export default LeftItemPortfolio;
