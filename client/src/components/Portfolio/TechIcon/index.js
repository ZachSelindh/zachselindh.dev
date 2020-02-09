import React from "react";

function TechIcon(props) {
  return (
    <img
      className="tech-icon"
      title={props.name}
      alt={props.name}
      src={props.location}
    />
  );
}

export default TechIcon;
