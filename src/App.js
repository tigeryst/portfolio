import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Pages from "./pages/index.js";
import { NavBar, Footer } from "./components/index.js";

import "./normalize.css";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" component={Pages.Home} exact />
          {/* <Route path="/projects" component={ProjectsIndex} />
            <Route path="/blogs" component={BlogsIndex} />
            <Route path="/interests" component={InterestsIndex} /> */}
          <Route component={Pages.NotFound} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
