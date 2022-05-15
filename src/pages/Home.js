import React from "react";
import { Link } from "react-router-dom";

import introImg from "../images/intro.png";
import aboutImg from "../images/about.png";
const Home = () => (
  <>
    {/* Introduction */}
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">Tiger Yotsawat</h1>
      <ul className="roles">
        <li className="role">Tech Enthusiast</li>
        <li className="role">Web Developer</li>
        <li className="role">Data Scientist</li>
      </ul>
      <img
        src={introImg}
        alt="A picture of Tiger Yotsawat in a suit, smiling"
        className="intro__img"
      />
      <p className="intro__body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        incidunt praesentium sit. Voluptas reprehenderit id voluptate! Autem
        obcaecati quos ex non harum amet adipisci ab a voluptatum corrupti,
        eligendi sint illo quidem repellendus? Corporis ut ex quibusdam eos
        illum dolore laborum ipsa? At est ipsum magnam sunt ratione sint
        possimus.
      </p>
      <a href="../cv.pdf" className="btn btn--primary">
        Get My CV
      </a>
      <a
        href="https://www.linkedin.com/in/tigeryotsawat"
        className="btn btn--secondary"
      >
        Contact Me
      </a>
    </section>

    {/* My Projects */}
    <section className="my-projects" id="projects">
      <h2 className="section__title section__title--projects">Projects</h2>
      <p className="section__subtitle section__subtitle--projects">What I Do</p>

      <div className="projects">
        <div className="project">
          <h3>ERP Application</h3>
          {/* <i classsName="project__icon"></i> */}
          <i className="fab fa-react fa-lg"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h4>Learning Points</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h4>Tech Stack</h4>
          <ul className="tech-stack">
            <li className="tech-stack__item">
              <i className="fab fa-react"></i>
            </li>
            <li className="tech-stack__item">
              <i className="fab fa-react"></i>
            </li>
            <li className="tech-stack__item">
              <i className="fab fa-react"></i>
            </li>
          </ul>
          <ul className="project__links">
            <li className="project__link">
              <a href="/projects" className="btn btn--primary">
                demo
              </a>
            </li>
            <li className="project__link">
              <a href="/projects" className="btn btn--primary">
                read more
              </a>
            </li>
            <li className="project__link">
              <a href="/projects" className="btn btn--primary">
                github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="project">
        <h3>Pablo App</h3>
        {/* <i classsName="project__icon"></i> */}
        <i className="fab fa-react fa-lg"></i>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Learning Points</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Tech Stack</h4>
        <ul className="tech-stack">
          <li className="tech-stack__item">
            <i className="fab fa-react"></i>
          </li>
          <li className="tech-stack__item">
            <i className="fab fa-react"></i>
          </li>
          <li className="tech-stack__item">
            <i className="fab fa-react"></i>
          </li>
        </ul>
        <ul className="project__links">
          <li className="project__link">
            <a href="/projects" className="btn btn--primary">
              demo
            </a>
          </li>
          <li className="project__link">
            <a href="/projects" className="btn btn--primary">
              read more
            </a>
          </li>
          <li className="project__link">
            <a href="/projects" className="btn btn--primary">
              github
            </a>
          </li>
        </ul>
      </div>

      <div className="project">
        <h3>Yelp Camp</h3>
        {/* <i classsName="project__icon"></i> */}
        <i className="fab fa-react fa-lg"></i>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Learning Points</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Tech Stack</h4>
        <ul className="tech-stack">
          <li className="tech-stack__item">
            <i className="fab fa-react"></i>
          </li>
          <li className="tech-stack__item">
            <i className="fab fa-react"></i>
          </li>
          <li className="tech-stack__item">
            <i className="fab fa-react"></i>
          </li>
        </ul>
        <ul className="project__links">
          <li className="project__link">
            <a href="/projects" className="btn btn--primary">
              demo
            </a>
          </li>
          <li className="project__link">
            <a href="/projects" className="btn btn--primary">
              read more
            </a>
          </li>
          <li className="project__link">
            <a href="/projects" className="btn btn--primary">
              github
            </a>
          </li>
        </ul>
      </div>

      <a href="/projects" className="btn btn--primary">
        see more projects
      </a>
    </section>

    {/* My Interests */}
    <section className="my-interests" id="interests">
      <h2 className="section__title section__title--interests">Interests</h2>
      <p className="section__subtitle section__subtitle--interests">
        What I Love
      </p>

      <div className="portfolio">
        {/* Portfolio Item 01 */}
        <a href="portfolio-item.html" className="portfolio__item">
          {/* <img
            src="../images/portfolio-01-2x.png"
            alt=""
            className="portfolio__img"
          /> */}
        </a>

        {/* Portfolio Item 02 */}
        <a href="portfolio-item.html" className="portfolio__item">
          {/* <img
            src="../images/portfolio-02-2x.png"
            alt=""
            className="portfolio__img"
          /> */}
        </a>

        {/* Portfolio Item 03 */}
        <a href="portfolio-item.html" className="portfolio__item">
          {/* <img
            src="../images/portfolio-03-2x.png"
            alt=""
            className="portfolio__img"
          /> */}
        </a>

        {/* Portfolio Item 04 */}
        <a href="portfolio-item.html" className="portfolio__item">
          {/* <img
            src="../images/portfolio-04-2x.png"
            alt=""
            className="portfolio__img"
          /> */}
        </a>

        {/* Portfolio Item 05 */}
        <a href="portfolio-item.html" className="portfolio__item">
          {/* <img
            src="../images/portfolio-05-2x.png"
            alt=""
            className="portfolio__img"
          /> */}
        </a>
      </div>
    </section>

    {/* About Me */}
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">About Me</h2>
      {/* <p className="section__subtitle section__subtitle--about">
        Designer & developer based out of NYC
      </p> */}

      <div className="about-me__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <img
        src={aboutImg}
        alt="Tiger posing in front of a pink wall"
        className="about-me__img"
      />
    </section>
  </>
);

export default Home;
