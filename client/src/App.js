import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/PortfolioNavbar";
import { Container } from "reactstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Container>Woking?</Container>
      </Wrapper>
    );
  }
}

export default App;
