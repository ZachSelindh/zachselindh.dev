import React from "react";

function TechIcon(props) {
  console.log(props);
  return <img className="tech-icon" alt={props.name} src={props.location} />;
}

export default TechIcon;
