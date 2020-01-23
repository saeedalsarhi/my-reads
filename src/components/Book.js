import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Menu from './Menu';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    }

    render() {
        const { book, onShelfChange } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <Menu book={book} onShelfChange={onShelfChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        );
    }
}

export default Book;