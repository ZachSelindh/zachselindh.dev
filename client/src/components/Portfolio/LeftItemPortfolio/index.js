import React from "react";
import GitHubImg from "../../../assets/icons/nav/github-logo.svg";
import WebImg from "../../../assets/icons/web-icon.png";
import TechIcon from "../TechIcon";

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
      <div className=" col-md-12 col-lg-6 link-row">
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
                  "https://p.kindpng.com/picc/s/485-4850258_bootstrap-logo-png-image-free-download-searchpng-logos.png";
                break;
              case "jquery":
                techprops.name = "jQuery";
                techprops.location =
                  "https://seeklogo.net/wp-content/uploads/2014/10/jquery-logo-vector-download.jpg";
                break;
              case "api":
                techprops.name = "API";
                techprops.location =
                  "https://cdn0.iconfinder.com/data/icons/technology-business-and-industry/1000/file_light-59-512.png";
                break;
              case "nodejs":
                techprops.name = "Node.js";
                techprops.location =
                  "https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg";
                break;
              case "mysql":
                techprops.name = "mySQL";
                techprops.location =
                  "https://seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg";
                break;
              case "heroku":
                techprops.name = "Heroku";
                techprops.location =
                  "https://redislabs.com/wp-content/uploads/2016/11/logo-square-heroku.png";
                break;
              case "mongodb":
                techprops.name = "MongoDB";
                techprops.location =
                  "https://banner2.cleanpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg";
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
                  "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png";
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

export default LeftItemPortfolio;
