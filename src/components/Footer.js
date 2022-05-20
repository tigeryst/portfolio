import React from "react";
import { Link } from "react-router-dom";

import cv from "../cv.pdf";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-nav">
        <li className="footer-nav__item">
          <Link to="/projects" className="footer-nav__link">
            Projects
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link to="/blogs" className="footer-nav__link">
            Blogs
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link to="/interests" className="footer-nav__link">
            Interests
          </Link>
        </li>
      </ul>

      <p>Bangkok, Thailand</p>
      <p>Tiger Yotsawat</p>
      <ul className="footer__actions">
        <li>
          <a href={cv} className="btn btn--primary" download>
            Get My CV
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="btn btn--secondary"
          >
            Contact Me
          </a>
        </li>
      </ul>

      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/tigeryst" className="social-list__link">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="social-list__link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.instagram.com/tiger.y"
            className="social-list__link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.facebook.com/tiger.yotsawat"
            className="social-list__link"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>

      <p>
        Portfolio site made by Tiger Yotsawat using ReactJS, icons from Font
        Awesome and images from Unsplash
      </p>
      <p>Copyright &copy; 2021</p>
    </footer>
  );
}

export default Footer;
