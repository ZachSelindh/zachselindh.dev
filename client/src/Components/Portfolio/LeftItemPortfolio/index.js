import React from "react";

function LeftItemPortfolio(props) {
  return (
    <div id={props.id} key={props.key} className="row portfolio-item">
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
      <p>Left</p>
    </div>
  );
}

export default LeftItemPortfolio;
