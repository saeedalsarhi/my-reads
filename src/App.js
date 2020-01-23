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

  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
            <BookShelfList books={this.state.books}/>
          )}
          ></Route>
          <Route
          path='/search'
          render={() => (
            <SearchBooks books={this.state.books}/>
          )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
