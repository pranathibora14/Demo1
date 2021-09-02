import React, { Component } from "react";
import AuthorList from "./AuthorList";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
export default class bookstore extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
        <AuthorList />
      </div>
    );
  }
}
