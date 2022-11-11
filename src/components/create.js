import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this); //has to bind to all constructor
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }

    //method that gets invoke when hits add button
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);

        const book = {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author
        }

        //makes a post request to the server (sending a ”book” object to the server)
        axios.post('http://localhost:4000/api/books', book)
        .then()
        .catch();

        this.setState({
            title: '',
            cover: '',
            author: ''
        })
    }

    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Hello from my Create component</h3>
                <form onSubmit={this.handleSubmit}>

                    {/** create a form and let user to input */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Front Page Url: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <input type="submit" value="Add Book" />
                </form>


            </div>
        );
    }
}