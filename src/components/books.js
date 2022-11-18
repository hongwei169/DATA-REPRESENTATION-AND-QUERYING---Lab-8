import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render() {
        return this.props.books.map(
            (book) => {
                // we changed the key into book._id from isbn
                return <BookItems book = {book} key={book._id}></BookItems>
            }
        );
    }
}