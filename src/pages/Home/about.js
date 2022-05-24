import React from "react";

import aboutImg from "../../images/me-about.jpg";

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">About Me</h2>

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
        className="about-me__img"
        src={aboutImg}
        alt="Tiger chilling on a picnic mat on a nice sunny day"
      />
    </section>
  );
};

export default About;
