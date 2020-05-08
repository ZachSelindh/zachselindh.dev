import React from "react";
import "./style.css";
import AndyGIF from "../../assets/gifs/networkconnectivity.gif";

function NotFound() {
  return (
    <div className="col-lg-6 bg-light" id="not-found">
      <h1>404 - Page Not Found</h1>

      <img
        src={AndyGIF}
        width="100%"
        alt="parks-and-wrecked"
        className="ml-center"
      />
      <p className="mt-2">Sorry, the page you're looking for doesn't exist!</p>
    </div>
  );
}

export default NotFound;
