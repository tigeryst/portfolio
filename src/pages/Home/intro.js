import React from "react";

import introImg from "../../images/me-intro.png";
import cv from "../../cv.pdf";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">Tiger Yotsawat</h1>
      <ul className="intro__roles">
        <li className="intro__role">Tech Enthusiast</li>
        <li className="intro__role">Web Developer</li>
        <li className="intro__role">Data Scientist</li>
      </ul>
      <img
        src={introImg}
        alt="A picture of Tiger Yotsawat in a suit, smiling"
        className="intro__img"
      />
      <p className="intro__body">
        "Any technology sufficiently advanced enough is indistinguishable from
        magic." I'm learning a little more everyday so that one day I
        might create my own little magic that would spark the creation of even
        more new magic.
      </p>
      <ul className="intro__actions btns">
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
    </section>
  );
};

export default Intro;
