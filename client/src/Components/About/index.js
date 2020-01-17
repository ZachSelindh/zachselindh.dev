import React from "react";
import "./style.css";

function About() {
  return (
    <div className="container">
      <div id="display-area-z" className="col-8 login-page">
        <h1>User Login</h1>
        <p> Enter your username and password </p>
        <form
          className="todo-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input type="text" placeholder="Username" name="username" />
          <br />
          <br />
          <input type="password" placeholder="Password" name="password" />
          <br />
          <br />
          <button type="submit">Submit</button>
          <a href="/registration">
            <br />
            <br />
            <p>I don't have an account</p>
          </a>
        </form>
        <p> Password and username are case sensitive </p>
      </div>
    </div>
  );
}

export default About;
