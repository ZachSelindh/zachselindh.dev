import React from "react";

function RightPortfolioItem(props) {
  return (
    <div id={props.id}>
      <h1>{props.title}</h1>
      <p>Right</p>
    </div>
  );
}

export default RightPortfolioItem;
