import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./styles/normalize.css";
import "./styles/index.scss";

function App() {
  // const today = new Date();
  // const target = new Date("2022-05-30");
  // const diff = target.getTime() - today.getTime();
  // const diffDays = Math.round(diff / (1000 * 3600 * 24));
  return (
    <>
      <NavBar />
      {/* <div className="alert">
        Phewwww, done with the desktop layout! Check back in {diffDays} day(s)
        for some actual content this time.
      </div> */}
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
