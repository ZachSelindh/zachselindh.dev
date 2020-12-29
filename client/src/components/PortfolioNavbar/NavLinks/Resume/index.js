import React from "react";
import ResumeImg from "../../../../assets/icons/nav/mail.png";

function ResumeLink() {
  return (
    <a
      id="contact-icon-z"
      className="nav-icon-z nav-item nav-link"
      href="https://zachselindh.github.io/resume/"
      target="#"
      title="Resume"
    >
      <img alt="" src={ResumeImg} height="60px" width="60px" />
      <p>Resume</p>
    </a>
  );
}

export default ResumeLink;
