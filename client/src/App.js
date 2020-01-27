import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/PortfolioNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
