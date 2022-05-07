import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <Link to="mailto:hello@jane.dev" className="footer__link">
      hello@jane.dev
    </Link>
    <ul className="social-list">
      <li className="social-list__item">
        <Link to="https://codepen.io" className="social-list__link">
          <i className="fab fa-codepen"></i>
        </Link>
      </li>
      <li className="social-list__item">
        <Link to="https://dribbble.com" className="social-list__link">
          <i className="fab fa-dribbble"></i>
        </Link>
      </li>
      <li className="social-list__item">
        <Link to="https://twitter.com" className="social-list__link">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li className="social-list__item">
        <Link to="https://github.com" className="social-list__link">
          <i className="fab fa-github"></i>
        </Link>
      </li>
    </ul>
  </footer>
);

export { Footer };
