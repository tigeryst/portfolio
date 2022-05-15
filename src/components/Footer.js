import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/tigeryst" className="social-list__link">
            Projects
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="social-list__link"
          >
            Blogs
          </a>
        </li>
      </ul>
      <p>Bangkok, Thailand</p>
      <p>Tiger Yotsawat</p>
      <a href="../cv.pdf" className="btn btn--primary">
        Get My CV
      </a>
      <a
        href="https://www.linkedin.com/in/tigeryotsawat"
        className="btn btn--secondary"
      >
        Contact Me
      </a>
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
        <li>
          <a
            href="https://www.instagram.com/tiger.y"
            className="social-list__link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/tiger.yotsawat"
            className="social-list__link"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
      <p>
        Portfolio site made by Tiger Yotsawat using ReactJS, Styled Components
        and Icons from Font Awesome
      </p>
      <p>Copyright &copy; 2021</p>
    </footer>
  );
}

export default Footer;
