import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/PortfolioNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
