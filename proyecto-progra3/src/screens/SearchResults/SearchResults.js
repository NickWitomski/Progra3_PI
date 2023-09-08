import React, {Component} from "react";
import "./SearchResults.css";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "hola"
        }
    };

    render( ){
        return(
            console.log("hola")
        )
    };
}

export default SearchResults;