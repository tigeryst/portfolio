import React from "react";
import { Link } from "react-router-dom";

// const navToggle = document.querySelector(".nav-toggle");
// const navLinks = document.querySelectorAll(".nav__link");
// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     document.body.classList.remove("nav-open");
//   });
// });

const NavBar = () => (
  <header>
    <div className="logo">
      <img src="../images/logo.png" alt="" />
    </div>
    <button className="nav-toggle" aria-label="toggle navigation">
      <span className="hamburger"></span>
    </button>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projects" className="nav__link">
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/blogs" className="nav__link">
            Blogs
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/interests" className="nav__link">
            Interests
          </Link>
        </li>
      </ul>
    </nav>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/interests" className="nav-link">
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </nav> */}
  </header>
);

export { NavBar };
