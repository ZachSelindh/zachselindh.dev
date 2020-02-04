import React from "react";
import ContactImg from "../../../../assets/icons/nav/mail.png";

function ResumeLink() {
  return (
    <a
      id="contact-icon-z"
      className="nav-icon-z nav-item nav-link"
      href="https://drive.google.com/file/d/1sddq0YXslgMKOzY22F-KjTjbgP3UXobG/view?usp=sharing"
      target="#"
      title="Contact Page"
    >
      <img alt="" src={ContactImg} height="60px" width="60px" />
      <p>Resume</p>
    </a>
  );
}

export default ResumeLink;
