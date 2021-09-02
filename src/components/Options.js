import React, { Component } from "react";
import Option from "./Option";

export default class Options extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((localdata) => (
          <Option opdata={localdata} hdo={this.props.deleteOne} />
        ))}
        <button onClick={this.props.deleteRecords}>Delete All</button>
      </div>
    );
  }
}
