import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class BookShelfList extends Component {
  
  render() {
    const { books, onShelfChange } = this.props;
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelf='currentlyReading' name='Currently Reading' books={books} onShelfChange={onShelfChange} />
                <BookShelf shelf='wantToRead' name='Want to Read' books={books} onShelfChange={onShelfChange} />
                <BookShelf shelf='read' name='Read' books={books} onShelfChange={onShelfChange} />
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