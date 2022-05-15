import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./styles/normalize.css";
import "./styles/main.scss";
import "./styles/temp-alert.scss";

function App() {
  const today = new Date();
  const launchDate = new Date("2022-05-20");
  const daysToLaunch =
    (launchDate.getTime() - today.getTime()) / (1000 * 3600 * 24);
  return (
    <>
      <NavBar />

      <div class="alert">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
        ></span>
        Hi and welcome! This site is in development. Check back in{" "}
        {Math.round(daysToLaunch)} day(s) to see the home page completed
      </div>

      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route path="/projects" component={ProjectsIndex} />
            <Route path="/blogs" component={BlogsIndex} />
            <Route path="/interests" component={InterestsIndex} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
