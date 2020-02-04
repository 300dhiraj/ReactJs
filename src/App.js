import React from "react";
import "./App.css";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
  };
}
