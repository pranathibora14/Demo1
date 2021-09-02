import React, { Component } from "react";
import { connect } from "react-redux";

class AuthorList extends Component {
  renderList() {
    return this.props.aut.map((author) => (
      <li className="list-group-item">{author.name}</li>
    ));
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aut: state.authors
  };
}

export default connect(mapStateToProps)(AuthorList);
