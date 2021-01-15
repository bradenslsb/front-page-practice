import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavContainer from "./nav-container"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Blog from "./blog"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <NavContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}
