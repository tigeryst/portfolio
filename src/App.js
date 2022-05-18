import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./styles/normalize.css";
import "./styles/index.scss";

function App() {
  return (
    <>
      <NavBar />

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
