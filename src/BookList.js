import React from 'react';

export default class BookList extends React.Component{
    selectBook(book) {
        event.preventDefault();
        this.props.selectBook(book);
    }
    deleteBook(bookID) {
        event.preventDefault();
        this.props.deleteBook(bookID);
    }
    createBookRow(book, index)
    {
        return(
            <tr key={index}>
                <td className="hidden">{book.bookID}</td>
                <td className="link" onClick={() => this.selectBook(book)}>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td className="link" onClick={this.deleteBook.bind(this, book.bookID)}>X</td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="hidden">BookID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.books.map((p, i) => this.createBookRow(p, i))}
                    </tbody>
                </table>
            </div>
        )
    }
}