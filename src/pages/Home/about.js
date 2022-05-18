import React from "react";

import aboutImg from "../../images/me-about.png";

const About = () => {
  return (
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
  );
};

export default About;
