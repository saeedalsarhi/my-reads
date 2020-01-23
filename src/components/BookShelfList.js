import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class BookShelfList extends Component {
  render() {
    const { books } = this.props;
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelf='currentlyReading' name='Currently Reading' books={books} />
                <BookShelf shelf='wantToRead' name='Want to Read' books={books} />
                <BookShelf shelf='read' name='Read' books={books} />
              </div>
            </div>
            <div className='open-search'>
              <Link to='/search'>
                <button className='open-search'>Add a Book</button>
              </Link>
            </div>
        </div>
    );
  }
}

export default BookShelfList;