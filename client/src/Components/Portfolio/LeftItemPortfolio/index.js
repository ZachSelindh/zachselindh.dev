import React from "react";

function LeftItemPortfolio(props) {
  return (
    <div id={props.id}>
      <h1>{props.title}</h1>
      <p>Left</p>
    </div>
  );
}

export default LeftItemPortfolio;
