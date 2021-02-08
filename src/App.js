import React, { useState } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state.isLoading;
    return <div>{isLoading ? "Loading..." : "Loaded"}</div>;
  }
}

export default App;
