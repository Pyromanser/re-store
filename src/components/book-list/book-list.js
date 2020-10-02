import React, {Component} from "react";
import {connect} from "react-redux";

import withBookstoreService from "../hoc/with-bookstore-service";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import {compose} from "../../utils";

import BookListItem from "../book-list-item";
import Spinner from "../spinner";

import "./book-list.css";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  };

  render() {
    const {books, loading, error} = this.props;

    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator/>;
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            );
          })
        }
      </ul>
    );
  };
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error};
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);