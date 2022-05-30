import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="my-projects" id="projects">
      <h2 className="section__title section__title--projects">Projects</h2>
      <p className="section__subtitle section__subtitle--projects">What I Do</p>

      <div className="projects">
        <div className="project">
          <p className="project__title">ERP Application</p>
          <i className="project__icon fab fa-react fa-lg"></i>

          <div className="project__description">
            <p>
              This project was the first full stack web application that I built
              from scratch. The goal was to automate the main business processes
              for my family business using the skills that I had recently
              learned from Colt Steele's 'The Web Developer Bootcamp' course on{" "}
              <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                Udemy
              </a>
              .
            </p>
          </div>
          <div className="project__lessons">
            <p>Learning Points</p>
            <p>
              I constantly learned new skills, all of which I incorporated into
              this still-evolving project so I guess this learning points
              section will be quite long. During the year I spent maturing this
              project, I have grown noticeably, both as a developer and a
              problem solver.
            </p>

            <p>
              Apart from learning to use tools like React, webpack, Express and
              MongoDB and interacting with Google (and other providers’) APIs,
              what I feel is really important in developing a robust application
              is the way you write code. I recently learned about functional
              programming and test driven development and these were game
              changers in allowing me to write more testable code that is easy
              to reason with.
            </p>
          </div>
          <div className="project__tech">
            <p>Tech Stack</p>
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
          </div>
          <ul className="btns project__links">
            <li className="project__link">
              <Link to="/projects" className="btn btn--secondary">
                demo
              </Link>
            </li>
            <li className="project__link">
              <Link to="/projects" className="btn btn--primary">
                read more
              </Link>
            </li>
            <li className="project__link">
              <a
                href="https://github.com/tigeryst"
                className="btn btn--secondary"
              >
                github
              </a>
            </li>
          </ul>
        </div>

        <div className="project">
          <p className="project__title">Pablo App</p>
          <i className="project__icon fab fa-react fa-lg"></i>
          <div className="project__description">
            <p>
              Pablo is a simple card game that my friends and I used to always
              play whenever we get together. Because the game can and does get
              really competitive, we thought it would be nice if we had a simple
              score-keeping app designed for Pablo so that we can focus on
              snatching cards from each other rather than worry about who is
              winning. This projected is what I decided to create to address
              that demand.
            </p>
            <p>
              Side note: I believe the game is actually called{" "}
              <a href="https://en.wikipedia.org/wiki/Cabo_(game)">Cabo</a>, a
              2010 memory card game by Melissa Limes and Mandy Henning but we
              learned the game during one drinking session and we must have all
              misheard the name and Pablo has stuck so I'm going with the flow.
              Another reason for sticking with the name 'Pablo' is that the
              rules of our version has diverged in odd ways from the original
              game so Pablo is now quite different from Cabo.
            </p>
          </div>
          <div className="project__lessons">
            <p>Learning Points</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="project__tech">
            <p>Tech Stack</p>
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
          </div>
          <ul className="btns project__links">
            <li className="project__link">
              <Link to="/projects" className="btn btn--secondary">
                demo
              </Link>
            </li>
            <li className="project__link">
              <Link to="/projects" className="btn btn--primary">
                read more
              </Link>
            </li>
            <li className="project__link">
              <a
                href="https://github.com/tigeryst"
                className="btn btn--secondary"
              >
                github
              </a>
            </li>
          </ul>
        </div>

        <div className="project">
          <p className="project__title">Yelp Camp</p>
          <i className="project__icon fab fa-react fa-lg"></i>
          <div className="project__description">
            <p>
              Yelp Camp, dubbed the greatest web dev project ever, is part of
              Colt Steele's famous course on{" "}
              <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                Udemy
              </a>{" "}
              titled 'The Web Developer Bootcamp'. This course kickstarted my
              web development skills and I would highly recommend it for anyone
              looking to build their own web application. Colt keeps adding new
              content and is not afraid to scrap old ones in favour of more
              up-to-date content. This is important as the tools used in web
              development can change pretty quickly.
            </p>
            <p>
              This project is built on top of the one taught in the course and I
              aim to keep adding cool gimmicks to the site as I learn new
              tricks.
            </p>
          </div>

          <div className="project__lessons">
            <p>Learning Points</p>
            <p>
              This project taught me the basics of many important aspects of web
              development. This included the MVC structure, server-side
              rendering using EJS, quickly styling a webpage using Bootstrap,
              working with external APIs, writing simple scripts and simple
              authentication and authorisation.
            </p>
          </div>
          <div className="project__tech">
            <p>Tech Stack</p>
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
          </div>
          <ul className="btns project__links">
            <li className="project__link">
              <Link to="/projects" className="btn btn--secondary">
                demo
              </Link>
            </li>
            <li className="project__link">
              <Link to="/projects" className="btn btn--primary">
                read more
              </Link>
            </li>
            <li className="project__link">
              <a
                href="https://github.com/tigeryst"
                className="btn btn--secondary"
              >
                github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/projects" className="btn btn--primary">
        see more projects
      </Link>
    </section>
  );
};

export default Projects;
