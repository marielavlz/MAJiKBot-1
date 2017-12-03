import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Features from "./components/Features";
import Form from "./components/Form";
import Footer from "./components/Footer"

import { Container, Row, Col } from "./components/Grid";


class App extends Component {

  render() {
    return (
      <div>
        <div className="first-div">
          <Jumbotron/>
          <div className="feat-div">
            <Features/>
          </div>
        </div>
        <div className="second-div">

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
