import React from "react";
import ContactImg from "../../../../assets/icons/nav/mail.png";

function ResumeLink() {
  return (
    <a
      id="contact-icon-z"
      className="nav-icon-z nav-item nav-link"
      href="https://drive.google.com/open?id=1yjgDM4E_oaLmOZDtdoqBLl-W-PXDjY0c"
      target="#"
      title="Contact Page"
    >
      <img alt="" src={ContactImg} height="60px" width="60px" />
      <p>Resume</p>
    </a>
  );
}

export default ResumeLink;
