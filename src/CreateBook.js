import React from 'react';

export default function CreateBook(props) {
    return (
        <form className="form">
            <input  className="form-control"
                    type='text' 
                    name="title" 
                    placeholder="Title" 
                    value={props.book.title} 
                    onChange={props.handler} />
            <br />
            <input  className="form-control"
                    type='text' 
                    name="author" 
                    placeholder="Author" 
                    value={props.book.author} 
                    onChange={props.handler} />
            <br />
            <input  className="form-control"
                    type='text' 
                    name="publisher" 
                    placeholder="Publisher" 
                    value={props.book.publisher} 
                    onChange={props.handler} />
            <br />
            <button className="btn" onClick={props.save}>
                {props.book.bookID === 0 ? "Create" : "Update"}
            </button>
            <button className="btn" onClick={props.cancel} disabled={props.isEmpty}>Cancel</button>
        </form>
    );
}