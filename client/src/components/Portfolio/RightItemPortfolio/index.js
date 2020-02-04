import React from "react";
import GitHubImg from "../../../assets/icons/nav/github-logo.svg";
import WebImg from "../../../assets/icons/web-icon.png";

function RightPortfolioItem(props) {
  return (
    <div id={props.index} className="row portfolio-item">
      <div className="row col-12">
        <h1 className="portfolio-title">{props.title}</h1>
      </div>
      <div className="portfolio-img-div col-md-12 d-xs-block d-sm-block d-md-block d-lg-none">
        <a href={props.deployed_link} target="#">
          <img
            className="portfolio-button"
            alt=""
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
      <div className="portfolio-img-div col-lg-6 d-none d-lg-block">
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
      <div className="col-md-12 col-lg-6 link-row">
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
      <div className="col-md-12 col-lg-6 link-row">
        <span className="tech-title"> Technologies: </span>
        <a href={props.github_link} title="GitHub Repo" target="#">
          <img alt="" className="tech-icon tech-link" src={GitHubImg} />
        </a>
        <a href={props.deployed_link} title="Deployed App" target="#">
          <img alt="" className="tech-icon tech-link" src={WebImg} />
        </a>
      </div>
    </div>
  );
}
/* 

                <div class="col-md-12 col-lg-6">
                    <h1 class="portfolio-title">MERN todo</h1>
                    <p class="portfolio-body">
                        A full-stack MERN application that features validation and authentication.
                        Users can log their todos, view other users' todos, and update, mark complete, or delete
                        only their own todos.
                        <br><br>
                        I used a bare-bones approach to authentication, which used JWT and bcrypt.
                    </p>
                </div>
                <div class="col-md-12 col-lg-6 tech-row">
                    <span class="tech-title"> Technologies: </span>
                    <img class="tech-icon" title="React.js" src="./images/react-logo.png">
                    <img class="tech-icon" title="MongoDB" src="./images/mongodb-logo.png">
                    <img class="tech-icon" title="Node.js" src="./images/nodejs-logo.png">
                    <img class="tech-icon" title="Bootstrap" src="./images/bootstrap-icon.png">
                    <img class="tech-icon" title="Bcrypt" src="./images/bcrypt-logo.jpg">
                    <img class="tech-icon" title="JSON Web Tokens" src="./images/jwt-logo.png">
                    <img class="tech-icon" title="Heroku" src="./images/heroku.png">
                </div>
                  */

export default RightPortfolioItem;