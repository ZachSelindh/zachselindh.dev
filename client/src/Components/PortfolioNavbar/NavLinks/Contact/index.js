import React from "react";
import ContactImg from "../../../../assets/icons/nav/mail.png";

function ContactLink() {
  return (
    <a
      id="contact-icon-z"
      className="nav-icon-z nav-item nav-link"
      href="/contact"
      title="Contact Page"
    >
      <img alt="" src={ContactImg} height="60px" width="60px" />
      <p>Contact</p>
    </a>
  );
}

export default ContactLink;
