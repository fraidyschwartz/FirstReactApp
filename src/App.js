import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateBook from './CreateBook';
import BookList from './BookList';
import BookApi from './api/mockBookApi';
import bootstrap from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      book: {
        bookID: 0,
        title: '',
        author: '',
        publisher: ''
      },
      books: [],
      bookSelected: false,
      isEmpty: true
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.selectBook = this.selectBook.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  async getData() {
    let books = await BookApi.getAllBooks();
    this.setState({books})
  }

  clearForm() {
    this.setState({book: {
      bookID: 0,
      title: '',
      author: '',
      publisher: ''
    }});
    this.setState({isEmpty: true});
  }
  changeHandler(e) {
    let book = this.state.book;
    book[e.target.name] = e.target.value;
    this.setState({book})
    this.checkIfEmptyForm()
  }
  checkIfEmptyForm()
  {
    let book = this.state.book;
    for(var i in book){
      if(book[i] !== '' && i !== 'bookID')
      {
        return this.setState({isEmpty: false});
      }
    }
    this.setState({isEmpty: true});
  }
  async saveBook(){
    let currentBook = this.state.book;
    await BookApi.saveBook(currentBook);
    this.setState({books : await BookApi.getAllBooks()});
    this.clearForm();
  }
  async deleteBook(bookID) {
    await BookApi.deleteBook(bookID);
    this.setState({books : await BookApi.getAllBooks()});
  }

  selectBook(book) {
    let selectedBook = Object.assign({}, book);
    this.setState({book: selectedBook}, () => {
      this.setState({bookSelected: true})
    });
    this.setState({isEmpty: false});
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App-header'>My Library</h1>
        <CreateBook book={this.state.book}
                    isEmpty={this.state.isEmpty}
                    handler={this.changeHandler}
                    save={this.saveBook}
                    cancel={this.clearForm} />
        <hr />
        <BookList books={this.state.books}
                   selectBook={this.selectBook}
                   deleteBook={this.deleteBook}/>
      </div>
    );
  }
}

export default App;