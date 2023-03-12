import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <footer className="footer-distributed">
        <div className="footer-right">
          <Link to="/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fa-brands fa-github"></i>
          </Link>
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
