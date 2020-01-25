import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="col-lg-8 col-sm-12 bg-light home-z">
      <h1>Welcome to my Portfolio!</h1>
      <p>
        {" "}
        My name is Zach Selindh, and I am a full-stack developer. I'm certified
        by the Unversity of Texas at Austin in technologies like React.js,
        Node.js, mySQL, MongoDB, and more! Click one of the links above to learn
        more about me and to check out my portfolio.
        <br></br>
        <br></br>
        Thanks for your visit!{" "}
      </p>
    </div>
  );
}

export default Home;
