import React from "react";
import GitHubImg from "../../../../assets/icons/nav/github-logo.svg";

function GithubLink() {
  return (
    <a
      className="nav-icon-z nav-item nav-link"
      href="https://github.com/ZachSelindh"
      target="#"
      title="GitHub Profile"
    >
      <img alt="" src={GitHubImg} height="60px" width="60px" />
      <p>GitHub</p>
    </a>
  );
}

export default GithubLink;
