import React from 'react'
import * as BooksAPI from './util/BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BookShelfList from './components/BookShelfList'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.setState((currentState) => ({
      books: currentState.books.map((b) => (b.id === book.id ? {...b, shelf} : b ))
    }))
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
            <BookShelfList books={this.state.books} onShelfChange={this.handleShelfChange}/>
          )}
          ></Route>
          <Route
          path='/search'
          render={() => (
            <SearchBooks books={this.state.books} onShelfChange={this.handleShelfChange}/>
          )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
