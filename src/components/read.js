import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {

    // The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM
    componentDidMount() {
        //https request to the localhost server
        axios.get('http://localhost:4000/api/books') 
        .then(
            // call setState() immediately in componentDidMount() and update the state from the response and we use myBooks from the server.js
            (response)=>{
                this.setState({
                    books:response.data.myBooks
                })
            }
        )
        //parse the argurment
        .catch((error)=>{
            console.log.apply(error)
        });
    }
  
    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component</h3>
                <Books books={this.state.books}></Books>
            </div >
        );
    }
}