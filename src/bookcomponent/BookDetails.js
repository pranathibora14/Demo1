import React, { Component } from "react";
import { connect } from "react-redux";
class BookDetails extends Component {
  render() {
    console.log("DETAILS");
    console.log(this.props.book);
    if (!this.props.book) {
      return (
        <div>
          <h4>Select a book to get started</h4>
        </div>
      );
    }
    return (
      <div>
        <h3>Book Details</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Price: {this.props.book.price}</div>
        <div>NOP: {this.props.book.nop}</div>
      </div>
    );
  }
}

function mapStateToPtops(state) {
  return {
    book: state.activebook
  };
}
export default connect(mapStateToPtops)(BookDetails);
