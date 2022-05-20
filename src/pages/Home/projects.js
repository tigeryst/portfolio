import React from "react";

const Projects = () => {
  return (
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

        <div className="project">
          <h3>Pablo App</h3>
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

        <div className="project">
          <h3>Yelp Camp</h3>
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

      <a href="/projects" className="btn btn--primary">
        see more projects
      </a>
    </section>
  );
};

export default Projects;
