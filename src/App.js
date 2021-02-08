import React, { useState } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // contain data that will change
  state = {
    count: 0,
    memo: "wow",
  };
  onClickAdd = () => {
    this.setState((currentState) => ({ count: currentState.count + 1 }));
  };
  onClickMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // class component automatically calls this function when called in browser
  render() {
    return (
      <React.Fragment>
        <h1>I'm a class Component {this.state.memo}</h1>
        <h2>Count: {this.state.count}</h2>
        <div>
          <button onClick={this.onClickAdd}>Add</button>
          <button onClick={this.onClickMinus}>Minus</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
