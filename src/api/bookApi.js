

//This file is mocking a web API by hitting hard coded data.
var books = require('./bookData');
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(book) {
	return book.bookID + 1;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var BookApi = {
	getAllBooks: function() {
		return _clone(books); 
	},

	getBookById: function(bookID) {
		var book = _.find(books, {bookID: bookID});
		return _clone(book);
	},
	
	saveBook: function(book) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (book.bookID) {
			var existingBookIndex = _.indexOf(books, _.find(books, {bookID: book.bookID})); 
			books.splice(existingBookIndex, 1, book);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			book.bookID = _generateId(_.last(books));
            console.log(book.bookID)
			books.push(book);
		}

		return _clone(book);
	},

	deleteBook: function(bookID) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(books, { bookID: bookID});
	}
};

module.exports = BookApi;