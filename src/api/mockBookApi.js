import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  {
    bookID: 1,
    title: 'Brain Waves',
    author: 'Shuli Mensh',
    publisher: ''
  },
  {
    bookID: 2,
    title: 'Breaking Point',
    author: 'Riva Pomerantz',
    publisher: ''
  },
  {
    bookID: 3,
    title: 'Broken Mirrors',
    author: 'Peri Berger',
    publisher: ''
  },
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (book) => {
  return book.bookID + 1;
};

class BookApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
	book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTitleLength = 3;
        if (book.title.length < minTitleLength) {
          reject(`Title must be at least ${minTitleLength} characters.`);
        }

        if (book.bookID) {
          const existingBookIndex = books.findIndex(a => a.bookID === book.bookID);
          books.splice(existingBookIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.bookID = generateId(books[books.length - 1]);
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookID) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => {
          book.bookID === bookID;
        });
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;