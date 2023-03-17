import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="Contact-Container">
      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt="">
            <img src="/contact_us.webp" alt="IMG" />
          </div>
        <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
