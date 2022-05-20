import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./styles/normalize.css";
import "./styles/index.scss";

function App() {
  const today = new Date();
  const target = new Date("2022-05-24");
  const diff = target.getTime() - today.getTime();
  const diffDays = Math.round(diff / (1000 * 3600 * 24));
  console.log(today.toISOString);
  return (
    <>
      <NavBar />
      <div class="alert">
        Alright, done with the mobile layout! Check back in {diffDays} day(s)
        for the desktop layout.
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
