import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/selectbookaction";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.bk.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => {
            this.props.sb(book);
          }}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h5>List of books</h5>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bk: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sb: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
