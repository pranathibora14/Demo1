import React, { Component } from "react";

export default class Action extends Component {
  callme() {
    alert("alert called");
  }
  render() {
    return (
      <div>
        <h2>Option App</h2>
        {this.props.data}
        <button disabled={!this.props.data} onClick={this.callme}>
          Click
        </button>
        {/*<Addoption />*/}
      </div>
    );
  }
}
