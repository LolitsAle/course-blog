import React, { Component, Fragment } from "react";
import "./App.css";

// containers
import Layout from "./Layout/index";
import Example from "./Example/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout />
        <Example />
      </Fragment>
    );
  }
}

export default App;
