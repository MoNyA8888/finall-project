import React from "react";

import "./App.css";
import About from "./About";
import Box1 from "./Box1";

import Req from "./Req";
import Whatwe from "./Whatwe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/box1" component={Box1} />
          <Route path="/req" component={Req} />
          <Route path="/about" component={About} />
          <Route path="/whatwe" component={Whatwe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
