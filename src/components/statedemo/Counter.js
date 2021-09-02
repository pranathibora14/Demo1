import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };
  reset = () => {
    this.setState((prevState) => {
      return {
        count: (prevState.count = 0)
      };
    });
  };
  render() {
    return (
      <div>
        Counter is: {this.state.count}
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
