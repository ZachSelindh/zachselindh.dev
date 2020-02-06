import React from "react";

function JavascriptIcon(props) {
  console.log(props);
  return (
    <img
      key={props.index}
      alt="Javascript"
      src="https://img.icons8.com/color/48/000000/javascript.png"
    />
  );
}

export default JavascriptIcon;
