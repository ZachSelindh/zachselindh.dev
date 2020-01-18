import React from "react";

function RightPortfolioItem(props) {
  return (
    <div id={props.index} className="row portfolio-item">
      <div className="col-md-12 col-lg-6">
        <a href={props.deployed_link} target="#">
          <img
            alt=""
            className="img-responsive portfolio-button"
            src={props.gif_location}
            width="450px"
            height="250px"
          />
        </a>
      </div>
      <h1>{props.title}</h1>
      <p>Right</p>
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
                <div class="col-md-12 col-lg-6 link-row">
                    <span class="tech-title"> Links: </span>
                    <a href="https://github.com/ZachSelindh/react-todo-mern" title="GitHub Repo" target="_blank">
                        <img class="tech-icon tech-link" src="./images/github-logo.svg">
                    </a>
                    <a href="https://mern-stack-todo-app-zach.herokuapp.com/" title="Deployed App" target="_blank">
                        <img class="tech-icon tech-link" src="./images/web-icon.png">
                    </a>
                </div>
            </div>  */

export default RightPortfolioItem;
