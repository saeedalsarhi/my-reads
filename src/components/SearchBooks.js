import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends Component {
  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState(() => ({
        query: query
    }))
  }

  clearQuery = () => {
      this.updateQuery('');
  }

  render() {
    const { query } = this.state;
    const { books } = this.props;

    const showingBooks = query === '' 
    ? books 
    : books.filter((b) => (b.title.toLowerCase().includes(query.toLocaleLowerCase())));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        {showingBooks.length !== books.length && (
          <div className='search-books-results'>
            <span>Now showing {showingBooks.length} of {books.length}</span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}><Book book={book}/></li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;