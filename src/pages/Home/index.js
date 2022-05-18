import React from "react";

import Intro from "./intro";
import Projects from "./projects";
import Blogs from "./blogs";
import Interests from "./interests";
import About from "./about";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
      <Blogs />
      <Interests />
      <About />
      <Contact />
      <p>Hello World</p>
    </>
  );
};

export default Home;
