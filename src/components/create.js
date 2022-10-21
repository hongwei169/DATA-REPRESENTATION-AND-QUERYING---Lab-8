import React from "react";

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

    handleSubmit(e) {
        e.preventDefaault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);

        this.setState({
            title:'',
            cover:'',
            author:''
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