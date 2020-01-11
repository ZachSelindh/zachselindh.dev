import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/PortfolioNavbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
