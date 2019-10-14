import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./views/Result";
import Home from "./views/Home";

import "./variables.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/result" component={Result}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
