import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then(
            //call arrow function
            (response)=>{
                this.setState({
                    books:response.data
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