import React from "react";

import introImg from "../../images/me-intro.png";

const Intro = () => {
  return (
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
        "Any technology sufficiently advanced enough is indistinguishable from
        magic." And so I’m learning a little more everyday so that one day I
        might create my own little magic that would spark the creation of even
        more new magic.
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
  );
};

export default Intro;
