import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="!#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="!#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="!#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="!#">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
          </p>

          <p>IT Shop &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
