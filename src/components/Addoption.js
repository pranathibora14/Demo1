import React, { Component } from "react";
export default class Addoption extends Component {
  adduser = (e) => {
    e.preventDefault();

    const userdata = e.target.elements.udata.value;
    this.props.addusertomain(userdata);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.adduser}>
          Name:
          <input type="text" name="udata" />
          <button>adduser</button>
        </form>
      </div>
    );
  }
}
