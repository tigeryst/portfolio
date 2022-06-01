import React from "react";

import aboutImg from "../../images/me-about.jpg";

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">About Me</h2>

      <div className="about-me__body">
        <p>
          Hi, glad you're here! My name is Tiger, a data scientist based in
          Bangkok, Thailand. I have always been fascinated by technology and
          relish the joy of using a piece of tech that makes our lives easier
          and 'just works'.
        </p>
        <p>
          I love problem solving and I believe that technologies that are like
          magic are ones that has chosen to solve some kind of problem from the
          ground up; questioning what is in the realms of possibility, rather
          than what has been done before.
        </p>
        <p>
          That is why I chose to study physics. To really question how things
          around us work in a systematic way. To really scrutinise our
          assumptions. To learn to solve problems from the bottom up. That is
          also why I love coding. Not only is problem solving process highly
          logical, the same problem can be solved in so many different ways.
        </p>
        <p>
          After graduating with an MSci in physics, I decided to teach myself
          web development to give myself the tools to build and deploy solutions
          to actual business problems, starting from automating core processes
          for my family business through an ERP application that I built from
          scratch.
        </p>
        <p>
          Having tried my hand at full stack web development, I am now currently
          expanding my coding and analytical problem solving skills in a
          slightly tangential direction: searching for business insights in data
          as a data scientist.
        </p>
        <p>
          I am learning new things each day, gaining new perspectives and tools
          to solve problems in creative ways. I am always looking for
          challenging problems to solve so if you happen to have one and if I
          can be of any help, do not hesitate to contact me!
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
