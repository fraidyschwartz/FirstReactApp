
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

module.exports = books;