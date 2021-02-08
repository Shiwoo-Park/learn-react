import React, { useState } from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

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
    console.log("render");
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

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default Counter;
