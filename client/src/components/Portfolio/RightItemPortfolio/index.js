import React from "react";
import GitHubImg from "../../../assets/icons/nav/github-logo.svg";
import WebImg from "../../../assets/icons/web-icon.png";
import TechIcon from "../TechIcon";

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

      <div className="col-md-12 col-lg-6  link-row">
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
        <span>
          {props.technologies.map((tech, index) => {
            var techprops = {
              name: "",
              location: "",
            };
            switch (tech) {
              case "html":
                techprops.name = "HTML";
                techprops.location =
                  "https://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/256/MetroUI-Apps-HTML-5-icon.png";
                break;
              case "css":
                techprops.name = "CSS";
                techprops.location =
                  "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png";
                break;
              case "javascript":
                techprops.name = "Javscript";
                techprops.location =
                  "https://img.icons8.com/color/48/000000/javascript.png";
                break;
              case "bootstrap":
                techprops.name = "Bootstrap";
                techprops.location =
                  "https://pluspng.com/img-png/bootstrap-png-bootstrap-512.png";
                break;
              case "jquery":
                techprops.name = "jQuery";
                techprops.location =
                  "https://i.pinimg.com/originals/34/20/e5/3420e571b3d7a4a348d8fad91e3bfda4.png";
                break;
              case "api":
                techprops.name = "API";
                techprops.location =
                  "https://cdn0.iconfinder.com/data/icons/technology-business-and-industry/1000/file_light-59-512.png";
                break;
              case "nodejs":
                techprops.name = "Node.js";
                techprops.location =
                  "https://image.flaticon.com/icons/png/512/919/919825.png";
                break;
              case "mysql":
                techprops.name = "mySQL";
                techprops.location =
                  "https://cdn.worldvectorlogo.com/logos/mysql.svg";
                break;
              case "heroku":
                techprops.name = "Heroku";
                techprops.location =
                  "https://redislabs.com/wp-content/uploads/2016/11/logo-square-heroku.png";
                break;
              case "mongodb":
                techprops.name = "MongoDB";
                techprops.location =
                  "https://www.pngitem.com/pimgs/m/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png";
                break;
              case "handlebars":
                techprops.name = "Express Handlebars";
                techprops.location =
                  "https://www.logolynx.com/images/logolynx/18/18d044244c2f0215e1023fc331efb601.png";
                break;
              case "sass":
                techprops.name = "SASS";
                techprops.location =
                  "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png";
                break;
              case "react":
                techprops.name = "React";
                techprops.location =
                  "https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png";
                break;
              case "jwt":
                techprops.name = "JSON Web Tokens";
                techprops.location =
                  "https://img.stackshare.io/service/6417/jwt-icon.png";
                break;
              case "bcrypt":
                techprops.name = "BCrypt Encryption";
                techprops.location =
                  "https://cybersensor.files.wordpress.com/2018/08/bcrypt-logo.jpg?w=605";
                break;
              case "redux":
                techprops.name = "React / Redux";
                techprops.location =
                  "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png";
                break;
              case "firebase":
                techprops.name = "Google Firebase";
                techprops.location =
                  "https://keytotech.com/wp-content/uploads/2019/05/firebase.png";
                break;
              default:
                break;
            }
            return (
              <TechIcon
                key={index}
                name={techprops.name}
                location={techprops.location}
              />
            );
          })}
        </span>
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
