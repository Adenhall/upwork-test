import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
        <Route path="/" exact component={Demo}/>
    </Switch>
  </Router>,
  document.querySelector("#root")
);
