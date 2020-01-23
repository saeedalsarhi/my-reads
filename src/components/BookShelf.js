import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
    
    render() {
        const { books, shelf, onShelfChange } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter((book) => book.shelf === shelf).map(book => (
                        <li key={book.id}>
                            <Book book={book} onShelfChange={onShelfChange}/>
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;